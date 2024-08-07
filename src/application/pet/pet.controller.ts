import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { BaseHttpResponse, HttpResponse } from '@app/shared/dto/http-response';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { CreatePetUseCase } from './usecase/create-pet';
import { GetPetUseCase } from './usecase/get-pet';
import { GetPetByIdUseCase } from './usecase/get-pet-by-id';
import { UpdatePetUseCase } from './usecase/update-pet';
import { DeletePetUseCase } from './usecase/delete-pet';

@Controller('pet')
export class PetController {
  constructor(
    private readonly _createPetUseCase: CreatePetUseCase,
    private readonly _getPetUseCase: GetPetUseCase,
    private readonly _getPetByIdUseCase: GetPetByIdUseCase,
    private readonly _updatePetUseCase: UpdatePetUseCase,
    private readonly _deletePetUseCase: DeletePetUseCase,
  ) {}

  @Post()
  async create(@Body() createPetDto: CreatePetDto) {
    await this._createPetUseCase.execute(createPetDto);

    return new BaseHttpResponse({
      statusCode: HttpStatus.CREATED,
      message: 'create new pet successz!',
    });
  }

  @Get()
  async findAll() {
    const pets = await this._getPetUseCase.execute();

    return new HttpResponse({
      statusCode: HttpStatus.OK,
      message: 'get all pets successz!',
      data: pets,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const pet = await this._getPetByIdUseCase.execute(+id);

    return new HttpResponse({
      statusCode: HttpStatus.OK,
      message: 'get pet by id successz!',
      data: pet,
    });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    await this._updatePetUseCase.execute(+id, updatePetDto);

    return new BaseHttpResponse({
      statusCode: HttpStatus.OK,
      message: 'update pet by id successz!',
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this._deletePetUseCase.execute(+id);

    return new BaseHttpResponse({
      statusCode: HttpStatus.OK,
      message: 'delete pet by id successz!',
    });
  }
}
