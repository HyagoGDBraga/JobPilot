import { User } from "../entity/user";
import { Repository } from "typeorm";
import dataSource from "../../infra/database/dbsource";
import { pagination } from "../../../helpers/pagination.helper";
import { Null_Object_Error } from "../../../errors/null-object-error";
export class UserRepository {
  private readonly userRepository: Repository<User>;
  constructor() {
    this.userRepository = dataSource.getRepository(User);
  }
  getUser = async (page: number, limit: number): Promise<User[] | null> => {
    const object = await this.userRepository.find(pagination(page, limit));
    return object;
  };

  getUserById = async (id: string): Promise<User | null> => {
    const object = await this.userRepository.findOne({ where: { id } });
    if (object == null) throw new Null_Object_Error();
    return object;
  };

  createUser = async (data: User): Promise<User> => {
    const object = await this.userRepository.create(data);
    return this.userRepository.save(object);
  };

  updateUser = async (id: string, data: User): Promise<void> => {
    const user = await this.getUserById(id);
    if (user == null) throw new Null_Object_Error();
    await this.userRepository.update(id, data);
  };

  patchUser = async (id: string, data?: User): Promise<void> => {};
}
