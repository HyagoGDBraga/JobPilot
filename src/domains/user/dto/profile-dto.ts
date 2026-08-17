import {
  IsArray,
  IsInt,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";
export class ProfileDTO {
  @IsUUID()
  id!: string;
  @IsUUID()
  userId!: string;
  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsString()
  title?: string;
  @IsOptional()
  @IsString()
  avatarUrl?: string;
  @IsOptional()
  @IsUUID()
  profession_id?: string;

  @IsOptional()
  @IsArray()
  user_skills?: string[];

  @IsOptional()
  @IsInt()
  experienceYears?: number;
  @IsOptional()
  @IsString()
  location?: string;
}

export class CreateUserProfileDTO {
  @IsUUID()
  userId!: string;
  bio?: string;
  @IsOptional()
  @IsString()
  title?: string;
  @IsUUID()
  profession_id?: string;
  @IsString()
  avatarUrl?: string;
  @IsOptional()
  @IsOptional()
  @IsArray()
  user_skills?: string[];
  @IsOptional()
  @IsInt()
  experienceYears?: number;
  @IsOptional()
  @IsString()
  location?: string;
}

export class UpdateUserProfileDTO {
  @IsUUID()
  id!: string;
  @IsUUID()
  userId!: string;
  @IsString()
  avatarUrl!: string;
  @IsString()
  bio!: string;
  @IsString()
  title!: string;
  @IsUUID()
  profession_id?: string;
  @IsArray()
  user_skills!: string[];
  @IsInt()
  experienceYears!: number;
  @IsString()
  location!: string;
}

export class PatchProfileDTO {
  @IsUUID()
  id!: string;
  @IsUUID()
  @IsString()
  bio?: string;
  @IsOptional()
  @IsString()
  title?: string;
  @IsUUID()
  profession_id?: string;
  @IsOptional()
  @IsString()
  avatarUrl?: string;
  @IsOptional()
  @IsArray()
  user_skills?: string[];
  @IsOptional()
  @IsInt()
  experienceYears?: number;
  @IsOptional()
  @IsString()
  location?: string;
}

export class ProfileResponse {
  @IsUUID()
  id!: string;
  @IsUUID()
  userId!: string;
  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsUUID()
  profession_id?: string;

  @IsOptional()
  @IsArray()
  user_skills?: string[];

  @IsOptional()
  @IsInt()
  experienceYears?: number;

  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @IsOptional()
  @IsString()
  location?: string;
};


export class SimpleProfile {
  @IsUUID()
  id!: string;
  @IsUUID()
  @IsOptional()
  profession_id?: string;
   @IsUUID()
   @IsOptional()
  userId?: string;
}
