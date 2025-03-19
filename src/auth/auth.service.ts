import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, compareSync } from 'bcryptjs';
import { access } from 'fs';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {


    constructor(private usersService: UsersService, private jwtService: JwtService){}

    async login(user: User) {
        const payload =  {id: user.id, username: user.username, name:user.name}
      
        return {
            token: await this.jwtService.signAsync(payload, {expiresIn:"7d"} )
        }
    }

    async validateUser(username: string, password: string):Promise<any>{
        const user  = await this.usersService.findByUserName(username)
        console.log("validate user", username, password)
        if(user && compareSync(password, user.password)){
            const {password, ...result} = user;
            return result;
        }
        return null;
    }
}
