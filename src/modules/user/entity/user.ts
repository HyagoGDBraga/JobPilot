import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToOne,
} from "typeorm";
import { UserProfile } from "./user-profile";
export class User {
  @PrimaryGeneratedColumn("uuid")
  public id!: string;
  public name!: string;
  @OneToOne(() => UserProfile, (user_profile_id) => user_profile_id.userId)
  public profile_id!: UserProfile;
}
