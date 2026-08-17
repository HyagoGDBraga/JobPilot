import dataSource from "../../../infra/database/dbsource";
import { UserProfile } from "../entity/user-profile";
import { Repository } from "typeorm";
import { pagination } from "../../../helpers/pagination.helper";

type UserProfileWithoutId = Omit<UserProfile, 'id'>;
export class ProfileRepository {

    private readonly profile_repo: Repository<UserProfile>;
    constructor(){
        this.profile_repo = dataSource.getRepository(UserProfile);
    };
    
     getUser = async (page: number, limit: number): Promise<UserProfile[] | null> => {
          const object = await this.profile_repo.find(pagination(page, limit));
          return object;
        };
      
        getUserById = async (id: string): Promise<UserProfile | null> => {
          const object = await this.profile_repo.findOne({ where: { id } });
          return object;
        };
      
        createUser = async (data: UserProfileWithoutId): Promise<UserProfile> => {
          const object = await this.profile_repo.create(data);
          return this.profile_repo.save(object);
        };
      
        updateUser = async (id: string, data: UserProfile): Promise<UserProfile | null> => {
          const user = await this.getUserById(id);
          await this.profile_repo.update(id, data);
          return user;
        };
      
        deleteUser = async(id: string): Promise<boolean> =>{
          await this.profile_repo.delete(id);
          return true;
        };
      
        patchUser = async (id: string, data: Partial<UserProfile>): Promise<UserProfile | null> => {
          const user = await this.getUserById(id);
          await this.profile_repo.update(id, data);
          return user;
        };
}
