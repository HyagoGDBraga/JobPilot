import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToOne,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { User } from "./user";
import { Profession } from "../../profession/entity/profession-entity";
import { Skill } from "../../skills/entity/skill-entity";
@Entity("user-profile")
export class UserProfile {
  @PrimaryGeneratedColumn("uuid")
  public id!: string;
  @OneToOne(() => User, (user_id) => user_id.id)
  @JoinColumn()
  public userId!: User;

  @Column({ type: "text" })
  public bio?: string;
  @Column({ type: "text" })
  public title?: string;
  @ManyToMany(() => Profession, (profession_id) => profession_id.id)
  public profession?: Profession;
  @Column({ type: "array" })
  public skills?: Skill[];
  @Column({ type: "int", default: 0 })
  public experienceYears?: number;

  @ManyToOne(()=> Location)
  @JoinColumn({name: "location_id"})
  public location?: Location;

}

/* 
  




  locationId String?
  location Location? @relation(fields: [locationId], references: [id])
*/
