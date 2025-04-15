import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vendor } from './entities/vendor.entity';
import { DataSource, Repository } from 'typeorm';
import { VendorQueryParameter } from './dto/query-vendor.dto';

@Injectable()
export class VendorsService {
  constructor(
    @InjectRepository(Vendor) private repo: Repository<Vendor>,
    private dataSource:DataSource
  ){}

  create(createVendorDto: CreateVendorDto) {
    return 'This action adds a new vendor';
  }

  async findAll(query: VendorQueryParameter):Promise<[Vendor[], number]>{
    const skip = (query.page -1 ) * query.limit
    
    return this.repo.findAndCount({take:query.limit,skip:skip});
  }

  findOne(id: number) {
    return `This action returns a #${id} vendor`;
  }

  update(id: number, updateVendorDto: UpdateVendorDto) {
    return `This action updates a #${id} vendor`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendor`;
  }
}
