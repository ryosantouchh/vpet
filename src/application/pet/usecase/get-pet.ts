import { Injectable } from '@nestjs/common';
import { PetService } from '../pet.service';

@Injectable()
export class GetPetUseCase {
  constructor(private _petService: PetService) {}

  async execute() {
    return await this._petService.findAll();
  }
}
