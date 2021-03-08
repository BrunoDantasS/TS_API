import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Adresses {

  @PrimaryGeneratedColumn()
    id: number;

  @Column()
  adress: string;

  @Column()
  number: number;

  @Column()
  complement: string;

  @Column()
  zipcode: number;

  @Column()
  city: string;

  @Column()
  estate: string;


}