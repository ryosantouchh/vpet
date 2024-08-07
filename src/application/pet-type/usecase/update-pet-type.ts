import { Injectable } from '@nestjs/common';
import { PetTypeService } from '../pet-type.service';
import { UpdatePetTypeDto } from '../dto/update-pet-type.dto';

@Injectable()
export class UpdatePetTypeUseCase {
  constructor(private _petTypeService: PetTypeService) {}

  async execute(id: number, updatePetTypeDto: UpdatePetTypeDto) {
    return await this._petTypeService.update(id, updatePetTypeDto);
  }
}
