import { IsArray, IsOptional, IsString, IsUUID } from "class-validator";
export class UserSkillDTO {
  @IsUUID()
  id!: string;
  @IsArray()
  @IsOptional()
  public skills?: string[];
  @IsString()
  public userProfile!: string;
}

export class CreateUserSkillDTO {
  @IsArray()
  @IsOptional()
  public skills?: string[];
  @IsString()
  public userProfile!: string;
}

export class UpdateUserSkillDTO {
  @IsArray()
  @IsOptional()
  public skills?: string[];
  @IsString()
  @IsOptional()
  public userProfile?: string;
}

export class CreateUserSkillDTO_RESPONSE {
  create_user_skill!: CreateUserSkillDTO;
}

export class UpdateUserSkillDTO_RESPONSE {
  update_user_skill!: UpdateUserSkillDTO;
}
;

export class UserSkillResponseDTO {
 @IsUUID()
  id!: string;
  @IsArray()
  @IsOptional()
  public skills?: string[];
  @IsString()
  public userProfile!: string;
}