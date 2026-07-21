import dataSource from "../../infra/database/dbsource";
import { UserProfile } from "../entity/user-profile";
import { Repository } from "typeorm";
export class ProfileRepository {
    private readonly profileRepository: Repository<UserProfile>;
    constructor() {
        this.profileRepository = dataSource.getRepository(UserProfile);
    }
}
