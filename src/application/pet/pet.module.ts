import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from '@app/domain/pet.entity';
import { PetUseCaseModule } from './usecase/pet-usecase.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), PetUseCaseModule],
  controllers: [PetController],
  providers: [PetService],
})
export class PetModule {}
