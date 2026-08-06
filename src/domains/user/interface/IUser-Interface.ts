import { OperationResult } from './../../../types/index';
import { CreateUserDTO, PatchUserDTO, UpdateUserDTO, UserResponse} from "../dto/user-dto";

export interface IUserInterface {
    create(data: CreateUserDTO):Promise<UserResponse>;
    get(): Promise<UserResponse[] | null>;
    getById(id: string): Promise<UserResponse | null>;
    update(id: string, data: UpdateUserDTO): Promise<UserResponse>
    patch(id: string, data: PatchUserDTO): Promise<UserResponse>
    del(): Promise<OperationResult>
}