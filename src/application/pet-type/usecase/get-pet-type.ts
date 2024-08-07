import { Injectable } from '@nestjs/common';
import { PetTypeService } from '../pet-type.service';

@Injectable()
export class GetPetTypeUseCase {
  constructor(private _petTypeService: PetTypeService) {}

  async execute() {
    return await this._petTypeService.findAll();
  }
}
