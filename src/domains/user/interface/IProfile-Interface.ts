import {
  CreateUserProfileDTO,
  ProfileResponse,
  UpdateUserProfileDTO,
  PatchProfileDTO,
} from "../dto/profile-dto";
import { OperationResult } from "../../../types";
import { ContentType } from "../../../infra/storage/types";
export interface IProfileInterface {
  createProfile(
    data: CreateUserProfileDTO,
    bucket: string,
    path: string,
    file: Buffer,
    contentType: ContentType,
  ): Promise<ProfileResponse | null>;
  updateProfile(
    id: string,
    data: Partial<UpdateUserProfileDTO>,
    bucket: string,
    path: string,
    file: Buffer,
    contentType: ContentType,
  ): Promise<ProfileResponse | null>;
  patchProfile(
    id: string,
    data: Partial<PatchProfileDTO>,
    bucket: string,
    path: string,
    file: Buffer,
    contentType: ContentType,
  ): Promise<ProfileResponse | null>;
  getProfile(page: number, limit: number): Promise<ProfileResponse[] | null>;
  getProfileById(id: string): Promise<ProfileResponse | null>;
  deleteProfile(id: string): Promise<OperationResult>;
}
