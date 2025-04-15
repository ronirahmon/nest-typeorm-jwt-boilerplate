import { Module } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { VendorsController } from './vendors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from './entities/vendor.entity';

@Module({
  controllers: [VendorsController],
  providers: [VendorsService],
  imports:[TypeOrmModule.forFeature([Vendor])],
  exports:[TypeOrmModule]
})
export class VendorsModule {}
