import { NullObjectError } from '../../../errors/null-object-error';
import { OperationFailed } from '../../../errors/operationFailed-error';
import { UndefinedError } from '../../../errors/undefined-error';
import {
  OperationResult,
  ServiceSkillCache,
} from '../../../types';

import {
  CreateUserSkillDTO,
  UpdateUserSkillDTO,
  UserSkillResponseDTO,
} from '../dto/skill-dto';

import { UserProfile } from '../entity/user-profile';
import { UserSkill } from '../entity/user-skill-entity';
import { ISkillInterface } from '../interface/ISkill-Interface';
import { SkillRepository } from '../repository/skill-respository';

export class UserSkillsService implements ISkillInterface {
  private readonly skillRepo: SkillRepository;

  constructor(skillRepo: SkillRepository) {
    this.skillRepo = skillRepo;
  }

  responseTo = (data: UserSkill): UserSkillResponseDTO => {
    return {
      id: data.id ?? '',
      userProfile: data.userProfile?.id ?? '',
      skills: data.skills ?? [],
    };
  };

  create = async (
    data: Partial<CreateUserSkillDTO>,
  ): Promise<UserSkillResponseDTO> => {
    try {
      if (!data) {
        throw new UndefinedError();
      }

      const skillUser: Omit<UserSkill, 'id'> = {
        skills: data.skills,
        userProfile: {
          id: data.userProfile,
        } as UserProfile,
      };

      const skill = await this.skillRepo.createUser(skillUser);

      return this.responseTo(skill);
    } catch (err) {
      throw err;
    }
  };

  del = async (id: string): Promise<OperationResult> => {
    try {
      if (!id) {
        throw new UndefinedError();
      }

      const skillFind = await this.getById(id);

      if (skillFind === null) {
        throw new NullObjectError();
      }

      await this.skillRepo.deleteUser(id);

      return {
        success: true,
        message: `Skill deleted: ${id}`,
      };
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }

      throw new OperationFailed();
    }
  };

  get = async (
    page: number,
    limit: number,
  ): Promise<ServiceSkillCache | null> => {
    try {
      if (!page || !limit) {
        throw new UndefinedError();
      }
      const skills = await this.skillRepo.getUser(page, limit);
        if(skills === null){
        throw new NullObjectError();
     };
      const skillsRes = skills.map((skill) => { return {
        id: skill.id,
        skills: skill.skills,
        userProfile: skill.userProfile.id ?? "",
      };});
      if(skillsRes === null){
        throw new NullObjectError();
     };
    
     return {
        userService: skillsRes
     }
    } catch (err) {
      throw err;
    }
  };

  getById = async (
    id: string,
  ): Promise<UserSkillResponseDTO | null> => {
    try {
      if (!id) {
        throw new UndefinedError();
      }

      const skill = await this.skillRepo.getUserById(id);

      if (skill == null) {
        throw new NullObjectError();
      }

      return this.responseTo(skill);
    } catch (err) {
      throw err;
    }
  };

  update = async (
    id: string,
    data: UpdateUserSkillDTO,
  ): Promise<UserSkillResponseDTO> => {
    try {
      if (!id || !data) {
        throw new UndefinedError();
      }

      const skill = await this.skillRepo.getUserById(id);

      if (skill == null) {
        throw new NullObjectError();
      }

      const updatedSkill: UserSkill = {
        ...skill,
        skills: data.skills,
        userProfile: data.userProfile
          ? ({ id: data.userProfile } as UserProfile)
          : skill.userProfile,
      };

      const result = await this.skillRepo.updateUser(
        id,
        updatedSkill,
      );
if(result === null){
        throw new NullObjectError();
      }
      return this.responseTo(result);
    } catch (err) {
      throw err;
    }
  };

  patch = async (
    id: string,
    data: UpdateUserSkillDTO,
  ): Promise<UserSkillResponseDTO> => {
    try {
      if (!id || !data) {
        throw new UndefinedError();
      }

      const skill = await this.skillRepo.getUserById(id);

      if (skill == null) {
        throw new NullObjectError();
      }

      const patchedSkill: Partial<UserSkill> = {
        ...(data.skills !== undefined && {
          skills: data.skills,
        }),

        ...(data.userProfile !== undefined && {
          userProfile: {
            id: data.userProfile,
          } as UserProfile,
        }),
      };

      const result = await this.skillRepo.patchUser(
        id,
        patchedSkill,
      );
      if(result === null){
        throw new NullObjectError();
      }

      return this.responseTo(result);
    } catch (err) {
      throw err;
    }
  };
}
