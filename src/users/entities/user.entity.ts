import { Exclude } from "class-transformer";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"m_user"})
export class User {
    @PrimaryGeneratedColumn({name:"user_id"})
    id: number;
    
    @Column()
    name: string;

    @Column()
    @Exclude()
    password:string;

    @Column({})
    username:string;
}
