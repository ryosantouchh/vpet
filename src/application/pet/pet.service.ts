import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from '@app/domain/pet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private _petRepository: Repository<Pet>,

    // private _petTypeService: PetTypeService,
  ) { }

  async create(createPetDto: CreatePetDto) {
    try {
      const { petTypeId } = createPetDto;

      // const petTypeById = await this._petTypeService.findOne(petTypeId);

      const newPet = this._petRepository.create(createPetDto);
      // newPet.petType = petTypeId

      await this._petRepository.save(newPet);

      return;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const pets = await this._petRepository.find();

      return pets;
    } catch (error) {
      throw error;
    }
    return `This action returns all pet`;
  }

  async findOne(id: number) {
    try {
      const pet = await this._petRepository.findOneBy({ id });

      return pet;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updatePetDto: UpdatePetDto) {
    try {
      const { petTypeId } = updatePetDto;

      // const petTypeById = await this._petTypeService.findOne(petTypeId);

      const updatePet = this._petRepository.create(updatePetDto);
      // newPet.petType = petTypeId

      await this._petRepository.update({ id }, updatePet);

      return;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this._petRepository.update(id, { deleted: true });

      return;
    } catch (error) {
      throw error;
    }
  }
}
