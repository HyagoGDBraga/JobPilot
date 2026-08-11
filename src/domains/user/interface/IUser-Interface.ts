import { OperationResult, ServiceCache } from '../../../types';

import {
  CreateUserDTO,
  PatchUserDTO,
  UpdateUserDTO,
  UserResponse,
} from '../dto/user-dto';

export interface IUserInterface {
  create(
    data: CreateUserDTO,
  ): Promise<UserResponse>;

  get(
    page: number,
    limit: number,
  ): Promise<ServiceCache | null>;

  getById(
    id: string,
  ): Promise<UserResponse | null>;

  update(
    id: string,
    data: UpdateUserDTO,
  ): Promise<UserResponse>;

  patch(
    id: string,
    data: PatchUserDTO,
  ): Promise<UserResponse>;

  del(
    id: string,
  ): Promise<OperationResult>;
}
