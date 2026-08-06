import { UserRepository } from "../repository/user-repository";
export class UserService {
    private readonly UserRepository: UserRepository;
    constructor(userRepository: UserRepository){
        this.UserRepository = userRepository;
    };
    

    
    

};