import { Exclude } from "class-transformer";
import { Company } from "src/companies/entities/company.entity";
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToOne } from "typeorm";

@Entity({name:"m_vendor"})
export class Vendor {
    
    @PrimaryColumn({name:"vendor_code"})
    code: string;

    @Column({name:"vendor_name"})
    name:string;

    // @OneToOne(type=>Company )
    // company: Company
}
