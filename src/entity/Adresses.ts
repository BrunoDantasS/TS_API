import { Column, Entity } from 'typeorm';

@Entity()
export class Adresses {

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