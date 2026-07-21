import { User } from "../entity/user";
import { Repository } from "typeorm";
import dataSource from "../../infra/database/dbsource";
export class UserRepository {
  private readonly userRepository: Repository<User>;
  constructor() {
    this.userRepository = dataSource.getRepository(User);
  }
  createUser = async () => {};
}
