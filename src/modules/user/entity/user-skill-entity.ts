import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";
import { UserProfile } from "./user-profile";
@Entity("skill")
export class UserSkill {
  @PrimaryGeneratedColumn("uuid")
  public id!: string;

  @Column({type: 'array'})
  public skills?: string[] = [];

  @ManyToOne(()=> UserProfile, (user_profile)=> user_profile.user_skills)
  @JoinColumn({name: 'user_profile_id'})
  public userProfile!: UserProfile;

}
