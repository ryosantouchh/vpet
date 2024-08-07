import { Injectable } from '@nestjs/common';
import { PetTypeService } from '../pet-type.service';

@Injectable()
export class GetPetTypeByIdUseCase {
  constructor(private _petTypeService: PetTypeService) {}

  async execute(id: number) {
    return await this._petTypeService.findOne(id);
  }
}
