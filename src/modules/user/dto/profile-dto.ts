import { IsArray, IsInt, IsOptional, IsString, IsUUID } from "class-validator";
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
  location?: string;
}
