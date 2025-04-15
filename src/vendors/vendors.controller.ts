import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { VendorQueryParameter } from './dto/query-vendor.dto';
import { Pagination, PaginationResponse } from 'src/helpers/dto/pagination.dto';
import { Vendor } from './entities/vendor.entity';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  @Post()
  create(@Body() createVendorDto: CreateVendorDto) {
    return this.vendorsService.create(createVendorDto);
  }

  
  @Get()
  @Public()
  async findAll(@Query() query: VendorQueryParameter) {
    
    console.log(query)
    const [vendors, count] = await this.vendorsService.findAll(query!);
    
    return new PaginationResponse(vendors, new Pagination(query!.limit, query!.page, count));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendorDto: UpdateVendorDto) {
    return this.vendorsService.update(+id, updateVendorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendorsService.remove(+id);
  }
}
