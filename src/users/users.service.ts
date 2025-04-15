import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UsersService {
constructor(
  @InjectRepository(User) private userRepository: Repository<User>,
  private dataSource:DataSource
){}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll():Promise<User[]>{
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User|null> {
    return this.userRepository.findOneBy({});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) :Promise<void> {
    await this.userRepository.delete(id)
  }

  async findByUserName(username:string):Promise<User|null>{
    let user = await this.userRepository.findOne({
      where:{
        username : username,
      }, 
    })
    console.log(user)
    return user
  }
}
