import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from '@app/domain/pet.entity';
import { PetService } from '../pet.service';
import { GetPetUseCase } from './get-pet';
import { GetPetByIdUseCase } from './get-pet-by-id';
import { CreatePetUseCase } from './create-pet';
import { UpdatePetUseCase } from './update-pet';
import { DeletePetUseCase } from './delete-pet';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  providers: [
    PetService,
    GetPetUseCase,
    GetPetByIdUseCase,
    CreatePetUseCase,
    UpdatePetUseCase,
    DeletePetUseCase,
  ],
  exports: [
    PetService,
    GetPetUseCase,
    GetPetByIdUseCase,
    CreatePetUseCase,
    UpdatePetUseCase,
    DeletePetUseCase,
  ],
})
export class PetUseCaseModule {}
