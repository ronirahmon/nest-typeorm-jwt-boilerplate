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

    // @PrimaryColumn({name:"user_id"})
    // id: string;
    
    // @Column()
    // user_name: string;

    // @Column({name:"user_password"})
    // @Exclude()
    // password:string;

    // @Column({})
    // user_comp:string;

    // @OneToOne(type=>Company )
    // company: Company

}
