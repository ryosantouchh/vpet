import { Injectable } from '@nestjs/common';
import { PetService } from '../pet.service';
import { CreatePetDto } from '../dto/create-pet.dto';

@Injectable()
export class CreatePetUseCase {
  constructor(private _petService: PetService) {}

  async execute(createPetDto: CreatePetDto) {
    return await this._petService.create(createPetDto);
  }
}
