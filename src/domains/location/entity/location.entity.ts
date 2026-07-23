import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity("locations")
export class Location {
  @PrimaryGeneratedColumn("uuid")
  public id!: string;

  @Column({ type: "varchar" })
  public city!: string;

  @Column({ type: "varchar" })
  public state!: string;

  @Column({ type: "varchar" })
  public country!: string;
}