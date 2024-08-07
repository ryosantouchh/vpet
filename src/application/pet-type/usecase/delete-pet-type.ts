import { Injectable } from '@nestjs/common';
import { PetTypeService } from '../pet-type.service';

@Injectable()
export class DeletePetTypeUseCase {
  constructor(private _petTypeService: PetTypeService) {}

  async execute(id: number) {
    return await this._petTypeService.remove(id);
  }
}
