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
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@app/domain/user.entity';
import { GetUserUseCase } from './usecase/get-user';
import { GetUserByIdUseCase } from './usecase/get-user-by-id';
import { CreateUserUseCase } from './usecase/create-user';
import { UpdateUserUseCase } from './usecase/update-user';
import { DeleteUserUseCase } from './usecase/delete-user';
import { BaseHttpResponse, HttpResponse } from '@app/shared/dto/http-response';

@Controller('user')
export class UserController {
  constructor(
    private readonly _createUserUseCase: CreateUserUseCase,
    private readonly _getUserUseCase: GetUserUseCase,
    private readonly _getUserByIdUseCase: GetUserByIdUseCase,
    private readonly _updateUserUseCase: UpdateUserUseCase,
    private readonly _deleteUserUseCase: DeleteUserUseCase,
  ) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<BaseHttpResponse> {
    await this._createUserUseCase.execute(createUserDto);

    return new BaseHttpResponse({
      statusCode: HttpStatus.CREATED,
      message: 'create user successz!',
    });
  }

  @Get()
  async findAll(): Promise<HttpResponse<User[]>> {
    const users = await this._getUserUseCase.execute();

    return new HttpResponse({
      statusCode: HttpStatus.OK,
      message: 'get users successz!',
      data: users,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<HttpResponse<User>> {
    const user = await this._getUserByIdUseCase.execute(+id);

    return new HttpResponse({
      statusCode: HttpStatus.OK,
      message: 'get user by id successz!',
      data: user,
    });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    await this._updateUserUseCase.execute(+id, updateUserDto);

    return new BaseHttpResponse({
      statusCode: HttpStatus.OK,
      message: 'update user by id successz!',
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this._deleteUserUseCase.execute(+id);

    return new BaseHttpResponse({
      statusCode: HttpStatus.OK,
      message: 'delete user by id successz!',
    });
  }
}
