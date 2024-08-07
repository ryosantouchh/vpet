import { Injectable } from '@nestjs/common';
import { PetTypeService } from '../pet-type.service';
import { CreatePetTypeDto } from '../dto/create-pet-type.dto';

@Injectable()
export class CreatePetTypeUseCase {
  constructor(private _petTypeService: PetTypeService) {}

  async execute(createPetTypeDto: CreatePetTypeDto) {
    return await this._petTypeService.create(createPetTypeDto);
  }
}
