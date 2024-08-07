import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetType } from '@app/domain/pet-type.entity';
import { PetTypeService } from '../pet-type.service';
import { GetPetTypeUseCase } from './get-pet-type';
import { GetPetTypeByIdUseCase } from './get-pet-type-by-id';
import { CreatePetTypeUseCase } from './create-pet-type';
import { UpdatePetTypeUseCase } from './update-pet-type';
import { DeletePetTypeUseCase } from './delete-pet-type';

@Module({
  imports: [TypeOrmModule.forFeature([PetType])],
  providers: [
    PetTypeService,
    GetPetTypeUseCase,
    GetPetTypeByIdUseCase,
    CreatePetTypeUseCase,
    UpdatePetTypeUseCase,
    DeletePetTypeUseCase,
  ],
  exports: [
    PetTypeService,
    GetPetTypeUseCase,
    GetPetTypeByIdUseCase,
    CreatePetTypeUseCase,
    UpdatePetTypeUseCase,
    DeletePetTypeUseCase,
  ],
})
export class PetTypeUseCaseModule {}
