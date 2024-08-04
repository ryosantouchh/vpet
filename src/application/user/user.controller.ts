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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseHttpResponse, HttpResponse } from '@app/domain/http-response';
import { User } from '@app/domain/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<BaseHttpResponse> {
    await this.userService.create(createUserDto);

    return new BaseHttpResponse({
      statusCode: HttpStatus.CREATED,
      message: 'create user successz!',
    });
  }

  @Get()
  async findAll(): Promise<HttpResponse<User[]>> {
    const users = await this.userService.findAll();

    return new HttpResponse({
      statusCode: HttpStatus.OK,
      message: 'get users successz!',
      data: users,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<HttpResponse<User>> {
    const user = await this.userService.findOne(+id);

    return new HttpResponse({
      statusCode: HttpStatus.OK,
      message: 'get user by id successz!',
      data: user,
    });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    await this.userService.update(+id, updateUserDto);

    return new BaseHttpResponse({
      statusCode: HttpStatus.OK,
      message: 'update user by id successz!',
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
