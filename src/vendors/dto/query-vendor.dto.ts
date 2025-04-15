import { IsEmpty, IsInt, IsNotEmpty, IsNumber, IsOptional, Max } from "class-validator"

export class VendorQueryParameter{
    @IsOptional()
    @IsInt()
    limit:number = 10

    @IsOptional()  
    page:number =1 

    @IsEmpty()
    @IsOptional()
    name:string

    // constructor(limit=10, page = 1){
    //     this.limit=limit,
    //     this.page =page
    // }
}