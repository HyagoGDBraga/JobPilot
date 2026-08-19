import { OperationResult, ServiceSkillCache } from '../../../types';

import {
  CreateUserSkillDTO,
  UpdateUserSkillDTO,
  UserSkillResponseDTO,
} from '../dto/skill-dto';

export interface ISkillInterface {
  create(
    data: CreateUserSkillDTO,
  ): Promise<UserSkillResponseDTO>;

  get(
    page: number,
    limit: number,
  ): Promise<ServiceSkillCache | null>;

  getById(
    id: string,
  ): Promise<UserSkillResponseDTO | null>;

  update(
    id: string,
    data: UpdateUserSkillDTO,
  ): Promise<UserSkillResponseDTO>;

  patch(
    id: string,
    data: UpdateUserSkillDTO,
  ): Promise<UserSkillResponseDTO>;

  del(
    id: string,
  ): Promise<OperationResult>;
}