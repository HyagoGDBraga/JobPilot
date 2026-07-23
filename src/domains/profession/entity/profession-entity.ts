import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("profession")
export class Profession {
    @PrimaryGeneratedColumn('uuid')
    public id!: string
}