import dataSource from "../../infra/database/dbsource";
import { UserSkill } from "../entity/user-skill-entity";
import { Repository } from "typeorm";
export class SkillRepository {
    private readonly skillRepository: Repository<UserSkill>;
  constructor() {
    this.skillRepository = dataSource.getRepository(UserSkill);
  }
}
