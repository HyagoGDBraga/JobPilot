import dataSource from "../../../infra/database/dbsource";
import { UserSkill } from "../entity/user-skill-entity";
import { Repository } from "typeorm";
import { pagination } from "../../../helpers/pagination.helper";
export class SkillRepository {
    private readonly skillRepository: Repository<UserSkill>;
  constructor() {
    this.skillRepository = dataSource.getRepository(UserSkill);
  };

  getUser = async (page: number, limit: number): Promise<UserSkill[] | null> => {
      const object = await this.skillRepository.find(pagination(page, limit));
      return object;
    };
  
    getUserById = async (id: string): Promise<UserSkill | null> => {
      const object = await this.skillRepository.findOne({ where: { id } });
      return object;
    };
  
    createUser = async (data: Omit<UserSkill, "id">): Promise<UserSkill> => {
      const object = await this.skillRepository.create(data);
      return this.skillRepository.save(object);
    };
  
    updateUser = async (id: string, data: UserSkill): Promise<UserSkill | null> => {
      const user = await this.getUserById(id);
      await this.skillRepository.update(id, data);
      return user;
    };
  
    deleteUser = async(id: string): Promise<boolean> =>{
      await this.skillRepository.delete(id);
      return true;
    };
  
    patchUser = async (id: string, data: Partial<UserSkill>): Promise<UserSkill | null> => {
      const user = await this.getUserById(id);
      await this.skillRepository.update(id, data);
      return user;
    };
  }

