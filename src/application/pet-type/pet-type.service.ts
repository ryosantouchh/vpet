import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePetTypeDto } from './dto/create-pet-type.dto';
import { UpdatePetTypeDto } from './dto/update-pet-type.dto';
import { PetType } from '@app/domain/pet-type.entity';

@Injectable()
export class PetTypeService {
  constructor(
    @InjectRepository(PetType)
    private _petTypeRepository: Repository<PetType>,
  ) {}

  async create(createPetTypeDto: CreatePetTypeDto) {
    try {
      const { typeName } = createPetTypeDto;
      await this._checkDuplicatedPetType(typeName);

      const newPetType = this._petTypeRepository.create(createPetTypeDto);
      await this._petTypeRepository.save(newPetType);

      return;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const petTypeList = await this._petTypeRepository.find();

      return petTypeList;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const petTypeById = await this._petTypeRepository.findOneBy({ id });

      if (!petTypeById) {
        throw new NotFoundException('pet type by id is not found');
      }

      return petTypeById;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updatePetTypeDto: UpdatePetTypeDto) {
    try {
      const updatePetType = this._petTypeRepository.create(updatePetTypeDto);
      await this._petTypeRepository.update({ id }, updatePetType);

      return;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this._petTypeRepository.update({ id }, { deleted: true });

      return;
    } catch (error) {
      throw error;
    }
  }

  private async _checkDuplicatedPetType(typeName: string) {
    try {
      const existPetType = await this._petTypeRepository.findOneBy({
        typeName,
      });

      if (existPetType.typeName === typeName) {
        throw new BadRequestException('duplicatad pet type name!');
      }

      return;
    } catch (error) {
      throw error;
    }
  }
}
