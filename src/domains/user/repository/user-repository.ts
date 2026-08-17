import { User } from "../entity/user";
import { DeepPartial, Repository } from "typeorm";
import dataSource from "../../../infra/database/dbsource";
import { pagination } from "../../../helpers/pagination.helper";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

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
    return object;
  };

  createUser = async (data: DeepPartial<User>): Promise<User> => {
    const object = await this.userRepository.create(data);
    return this.userRepository.save(object);
  };

 
updateUser = async (
  id: string,
  data: QueryDeepPartialEntity<User>,
): Promise<User | null> => {
  const result = await this.userRepository.update(id, data);
  if (!result.affected) return null;
  return this.getUserById(id);
};

patchUser = async (
  id: string,
  data: QueryDeepPartialEntity<User>,
): Promise<User | null> => {
  const result = await this.userRepository.update(id, data);
  if (!result.affected) return null;
  return this.getUserById(id);
};

deleteUser = async (id: string): Promise<boolean> => {
  const result = await this.userRepository.delete(id);
  return !!result.affected;   // hoje retorna true mesmo sem deletar nada, oq é um pouco rsrs
};
}
