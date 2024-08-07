import { Injectable } from '@nestjs/common';
import { PetService } from '../pet.service';

@Injectable()
export class GetPetByIdUseCase {
  constructor(private _petService: PetService) {}

  async execute(id: number) {
    return await this._petService.findOne(id);
  }
}
