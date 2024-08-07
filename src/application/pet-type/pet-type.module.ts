import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetTypeService } from './pet-type.service';
import { PetTypeController } from './pet-type.controller';
import { PetType } from '@app/domain/pet-type.entity';
import { PetTypeUseCaseModule } from './usecase/pet-type-usecase.module';

@Module({
  imports: [TypeOrmModule.forFeature([PetType]), PetTypeUseCaseModule],
  controllers: [PetTypeController],
  providers: [PetTypeService],
})
export class PetTypeModule {}
