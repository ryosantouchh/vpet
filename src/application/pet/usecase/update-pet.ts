import { Injectable } from '@nestjs/common';
import { PetService } from '../pet.service';
import { UpdatePetDto } from '../dto/update-pet.dto';

@Injectable()
export class UpdatePetUseCase {
  constructor(private _petService: PetService) {}

  async execute(id: number, updatePetDto: UpdatePetDto) {
    return await this._petService.update(id, updatePetDto);
  }
}
