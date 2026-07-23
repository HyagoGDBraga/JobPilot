import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
} from "typeorm";
import { UserProfile } from "./user-profile";
@Entity('users')
export class User {
  @PrimaryGeneratedColumn("uuid")
  public id!: string;
  public name!: string;
  @OneToOne(() => UserProfile, (user_profile_id) => user_profile_id.userId)
  public profile_id!: UserProfile;
  @Column({ type: "varchar", unique: true })
  public email!: string;
  @Column({ type: "varchar" })
  public password!: string;
  @Column({type: 'timestamp', default: ()=> "CURRENT_TIMESTAMP"})
  public lastLogin!: Date;
  @Column({type: "boolean", default: false})
  public isOnline!: boolean;
}
