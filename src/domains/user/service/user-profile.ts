import { UserSkill } from "./../entity/user-skill-entity";
import { ProfileRepository } from "../repository/profile-repository";
import { IProfileInterface } from "../interface/IProfile-Interface";
import { UserProfile } from "../entity/user-profile";
import { User } from "../entity/user";
import { Profession } from "../../profession/entity/profession-entity";
import { Location } from "../../location/entity/location.entity";
import {
  CreateUserProfileDTO,
  PatchProfileDTO,
  ProfileDTO,
  ProfileResponse,
  SimpleProfile,
  UpdateUserProfileDTO,
} from "../dto/profile-dto";
import { OperationResult } from "../../../types";
import { UserResponse } from "../dto/user-dto";
import { UndefinedError } from "../../../errors/undefined-error";
import { NullObjectError } from "../../../errors/null-object-error";
export class UserProfileService implements IProfileInterface {
  private readonly profileRepo: ProfileRepository;
  constructor(profileRepo: ProfileRepository) {
    this.profileRepo = profileRepo;
  }

  responseTo = (data: UserProfile): ProfileResponse => {
    if (data === undefined) {
      throw new UndefinedError();
    }
    return {
      id: data.id,
      bio: data.bio,
      avatarUrl: data.avatarUrl,
      experienceYears: data.experienceYears,
      location: data.location?.id,
      profession_id: data.profession_id?.id,
      title: data.title,
      userId: data.userId.id,
      user_skills: data.user_skills?.flatMap((skill) => skill.skills ?? []),
    };
  };

  createProfile = async (
    data: CreateUserProfileDTO,
  ): Promise<ProfileResponse | null> => {
    try {
      if (data === undefined) {
        throw new UndefinedError();
      }

      const profileData: Omit<UserProfile, "id"> = {
        bio: data.bio,
        avatarUrl: data.avatarUrl ?? "",
        experienceYears: data.experienceYears,
        location: data.location
          ? ({ id: data.location } as Location)
          : undefined,
        profession_id: data.profession_id
          ? ({ id: data.profession_id } as Profession)
          : undefined,
        title: data.title,
        userId: { id: data.userId } as User,
        user_skills: data.user_skills?.map(
          (skill) => ({ skills: [skill] }) as UserSkill,
        ),
      };

      const create = await this.profileRepo.createUser(profileData);
      const response = this.responseTo(create);
      return response;
    } catch (err) {
      throw err;
    }
  };

  getProfile = async (
    page: number,
    limit: number,
  ): Promise<ProfileResponse[] | null> => {
    try {
      const user = await this.profileRepo.getUser(page, limit);
      if (user === undefined) {
        throw new UndefinedError();
      }
      const response = user?.map((users) => {
        return {
          id: users.id,
          bio: users.bio,
          avatarUrl: users.avatarUrl,
          experienceYears: users.experienceYears,
          location: users.location?.id,
          profession_id: users.profession_id?.id,
          title: users.title,
          userId: users.userId.id,
          user_skills: users.user_skills?.flatMap(
            (skills) => skills.skills ?? [],
          ),
        };
      });
      if (response == undefined) {
        throw new UndefinedError();
      }

      return response;
    } catch (err) {
      throw err;
    }
  };

  deleteProfile = async (id: string): Promise<OperationResult> => {
    try {
      if (!id) {
        throw new NullObjectError();
      }
      const userProfile = await this.getProfileById(id);
      const mapuser: SimpleProfile = {
        id: userProfile?.id ?? "",
        profession_id: userProfile?.profession_id,
        userId: userProfile?.userId ?? "",
      };

      await this.profileRepo.deleteUser(id);
      return {
        success: true,
        message: `User deleted: \n ${mapuser}`,
      };
    } catch (err) {
      throw err;
    }
  };

  getProfileById = async (id: string): Promise<ProfileResponse | null> => {
    try {
      if (!id) {
        throw new NullObjectError();
      }
      const profile = await this.profileRepo.getUserById(id);
      if (profile === null) {
        throw new NullObjectError();
      }
      return this.responseTo(profile);
    } catch (err) {
      throw err;
    }
  };
  patchProfile = async (
    id: string,
    data: Partial<PatchProfileDTO>,
  ): Promise<ProfileResponse | null> => {
    try {
      if (!id || !data) {
        throw new UndefinedError();
      };
      const userPatch: Partial<UserProfile> = {
        id: data.id ?? "",
        avatarUrl: data.avatarUrl ?? "",
        bio: data.bio,
        location: data.location ? ({id: data.location} as Location) : undefined,
        title: data.title,
        profession_id: data.profession_id ? ({id: data.profession_id} as Profession) : undefined,
        experienceYears: data.experienceYears,
         user_skills: data.user_skills?.map(
          (skill) => ({ skills: [skill] }) as UserSkill,
        ),
      }
      const profileUser = await this.profileRepo.patchUser(id, userPatch);
      if (profileUser === null) {
        throw new NullObjectError();
      }
      return this.responseTo(profileUser);
    } catch (err) {
      throw err;
    }
  };
  updateProfile = async (
    id: string,
    data: UpdateUserProfileDTO,
  ): Promise<ProfileResponse | null> => {
    try {
      if (!id || !data) {
        throw new UndefinedError();
      }
      const OmitUserId = {
        id: data.id ?? "",
        userId: { id: data.userId } as User,
        bio: data.bio,
        avatarUrl: data.avatarUrl,
        title: data.title,
        location: data.location
          ? ({ id: data.location } as Location)
          : undefined,
        user_skills: data.user_skills?.map(
          (skill) => ({ skills: [skill] }) as UserSkill,
        ),
        profession_id: data.profession_id
          ? ({ id: data.profession_id } as Profession)
          : undefined,
        experienceYears: data.experienceYears,
      };
      const updated = await this.profileRepo.updateUser(id, OmitUserId);
      if(updated === null){
        throw new NullObjectError();
      }
      return this.responseTo(updated);
    } catch (err) {
      throw err;
    }
  };
}
