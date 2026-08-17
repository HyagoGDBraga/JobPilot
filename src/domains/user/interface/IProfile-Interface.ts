import { CreateUserProfileDTO, ProfileResponse, UpdateUserProfileDTO, PatchProfileDTO } from "../dto/profile-dto";
import { OperationResult } from "../../../types";
import { UserResponse } from "../dto/user-dto";
export interface IProfileInterface {
    createProfile(data: CreateUserProfileDTO): Promise<ProfileResponse | null>;
    updateProfile(id: string, data: Partial<UpdateUserProfileDTO>): Promise<ProfileResponse | null>;
    patchProfile(id: string, data: Partial<PatchProfileDTO>): Promise<ProfileResponse | null>
    getProfile(page: number, limit: number): Promise<ProfileResponse[] | null>;
    getProfileById(id: string): Promise<ProfileResponse | null>;
    deleteProfile(id: string): Promise<OperationResult>;
}
