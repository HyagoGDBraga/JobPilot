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
  userId!: string;
  bio?: string;
  @IsOptional()
  @IsString()
  title?: string;
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

export class CreateUserDTO_RESPONSE {
  @IsObject()
  create_user!: CreateUserProfileDTO;
}

export class UpdateUserDTO_RESPONSE {
  @IsObject()
  update_user_profile!: UpdateUserProfileDTO;
}
