import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    ethnicity: string;

}