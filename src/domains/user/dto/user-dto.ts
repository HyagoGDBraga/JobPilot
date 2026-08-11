import {
  IsEmail,
  IsDate,
  IsString,
  IsStrongPassword,
  IsBoolean,
  IsUUID,
  IsEnum,
} from 'class-validator';

import type { Role } from '../../../helpers/role-helper';
import { ROLE } from '../../../helpers/role-helper';

export class UserDTO {
  @IsUUID()
  id!: string;

  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  profile_id?: string;

  @IsStrongPassword()
  password!: string;

  @IsDate()
  lastLogin!: Date;

  @IsBoolean()
  isOnline!: boolean;

  @IsEnum(ROLE)
  role!: Role;
}

export class CreateUserDTO {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsStrongPassword()
  password!: string;

  @IsEnum(ROLE)
  role!: Role;
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

export class UserResponse {
  @IsUUID()
  id!: string;

  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  profile_id?: string;

  @IsEnum(ROLE)
  role!: Role;
}
