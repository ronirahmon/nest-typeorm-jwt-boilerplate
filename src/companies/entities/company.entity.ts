import { Exclude } from "class-transformer";
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({name:"m_company"})
export class Company {
    @PrimaryColumn()
    company_code: string;
    
    @Column()
    company_name: string;
}
