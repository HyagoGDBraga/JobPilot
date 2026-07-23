import {
  IsEmail,
  IsDate,
  IsString,
  IsStrongPassword,
  IsBoolean,
  IsUUID,
} from "class-validator";
export class UserDTO {
  @IsUUID()
  id!: string;
  @IsString()
  name!: string;
  @IsEmail()
  email!: string;
  @IsString()
  profile_id!: string;
  @IsStrongPassword()
  password!: string;
  @IsDate()
  lastLogin!: Date;
  @IsBoolean()
  isOnline!: boolean;
}

export class CreateUserDTO {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsStrongPassword()
  password!: string;
}

export class UpdateUserDTO {
  @IsString()
  name?: string;

  @IsEmail()
  email?: string;

  @IsStrongPassword()
  password?: string;
}

export class PatchUserDTO {
  @IsUUID()
  id!: string;
  @IsString()
  name?: string;
  @IsEmail()
  email?: string;
  @IsString()
  profile_id?: string;
  @IsStrongPassword()
  password?: string;
  @IsDate()
  lastLogin?: Date;
  @IsBoolean()
  isOnline?: boolean;
}
