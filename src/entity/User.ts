import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

enum Ethnicity {
  Option1,
  Option2,
  Option3,
}

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: number;

  @Column()
  email: string;

  @Column()
  idade: number;

  @Column()
  peso: number;

  @Column({
    type: "enum",
    enum: Ethnicity,
  })
  ethnicity: number;

}