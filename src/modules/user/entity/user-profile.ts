import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToOne, JoinColumn } from "typeorm";
import { User } from "./user";
import { Profession } from "../../profession/entity/profession-entity";
@Entity("user-profile")
export class UserProfile {
    @PrimaryGeneratedColumn('uuid')
    public id!: string;
    @OneToOne(()=> User, (user_id) => user_id.id)
    @JoinColumn()
    public userId!: User

    @Column({type: 'text'})
    public bio?: string;
    @Column({type: 'text'})
    public title?: string;
    @OneToOne(()=> Profession, profession_id => profession_id.id )
    public profession?: Profession;


}


/* 
title String?
  

  professionId String?
  profession Profession? @relation(fields: [professionId], references: [id])

  skills Skill[]

  experienceYears Int?

  locationId String?
  location Location? @relation(fields: [locationId], references: [id])
*/