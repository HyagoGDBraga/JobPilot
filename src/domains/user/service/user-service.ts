import { RabbitMQService } from "./../../../infra/queue/rabbitmq/service/rabbit-mq.service";
import { OperationResult, ServiceCache } from "../../../types";
import {
  CreateUserDTO,
  PatchUserDTO,
  UpdateUserDTO,
  UserResponse,
} from "../dto/user-dto";
import { IUserInterface } from "../interface/IUser-Interface";
import { UserRepository } from "../repository/user-repository";
import { RedisService } from "../../../infra/cache/redis/service/redis.service";
import { userKeys } from "../../../infra/cache/redis/keys/user-key";
import { User } from "../entity/user";
import { BCryptService } from "../../../infra/bcrypt/service/bcrypt.service";
import { hashIfPresent } from "../../../helpers/hashIfPresent";

export class UserService implements IUserInterface {
  private readonly userRepository: UserRepository;
  private readonly redis: RedisService;
  private readonly rabbitMq: RabbitMQService;
  private readonly bcryipt: BCryptService;

  constructor(
    userRepository: UserRepository,
    redis: RedisService,
    rabbitMq: RabbitMQService,
    bcryipt: BCryptService,
  ) {
    this.userRepository = userRepository;
    this.redis = redis;
    this.rabbitMq = rabbitMq;
    this.bcryipt = bcryipt;
  }

  private toResponse(user: User): UserResponse {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
  }

  create = async (data: CreateUserDTO): Promise<UserResponse> => {
    try {
      const hashP = await this.bcryipt.hash256(data.password, 10);
      const userData: Omit<CreateUserDTO, "id"> = {
        email: data.email,
        name: data.name,
        password: (data.password = hashP),
        role: data.role,
      } as const;
      
      const user = await this.userRepository.createUser(userData);
      const response = this.toResponse(user);

      await this.redis.setKey(
        userKeys.create(data.email),
        JSON.stringify(response),
        60,
      );

      await this.rabbitMq.publish(JSON.stringify(response), {
        message: `User created: ${user.email}`,
      });

      return response;
    } catch (err) {
      throw err;
    }
  };

  get = async (page: number, limit: number): Promise<ServiceCache | null> => {
    try {
      const users = await this.userRepository.getUser(page, limit);

      if (!users || users == null) {
        return null;
      }
      const userCache = await this.redis.getKey(userKeys.all(page, limit));
      const userResponse = users.map((user) => this.toResponse(user));
      return {
        userService: userResponse,
        userCache: userCache,
      };
    } catch (err) {
      throw err;
    }
  };

  getById = async (id: string): Promise<UserResponse | null> => {
    try {
      const user = await this.userRepository.getUserById(id);
      

      if (!user) {
        return null;
      }

      return this.toResponse(user);
    } catch (err) {
      throw err;
    }
  };

 update = async (id: string, data: UpdateUserDTO): Promise<UserResponse> => {
  const fields = await hashIfPresent(data);

  const user = await this.userRepository.updateUser(id, fields);
  if (!user) throw new Error("User not found");

  const response = this.toResponse(user);
  await this.redis.setKey(userKeys.byId(id), JSON.stringify(response), 60);

  return response;
};

patch = async (id: string, data: PatchUserDTO): Promise<UserResponse> => {
  const { id: _bodyId, profile_id, ...rest } = data;
  const fields = await hashIfPresent(rest);

  const user = await this.userRepository.patchUser(id, fields);
  if (!user) throw new Error("User not found");

  const response = this.toResponse(user);
  await this.redis.setKey(userKeys.byId(id), JSON.stringify(response), 60);

  return response;
};

  del = async (id: string): Promise<OperationResult> => {
    try {
      const deleted = await this.userRepository.deleteUser(id);

      if (!deleted) {
        throw new Error("User not found");
      }
      await this.redis.removeKey(userKeys.remove(id));

      return {
        success: true,
        message: "User deleted successfully",
      };
    } catch (err) {
      throw err;
    }
  };
}
