import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(private _userService: UserService) {}

  async execute(createUserDto: CreateUserDto) {
    return await this._userService.create(createUserDto);
  }
}
