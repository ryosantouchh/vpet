import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UpdateUserUseCase {
  constructor(private _userService: UserService) {}

  async execute(id: number, updateUserDto: UpdateUserDto) {
    return await this._userService.update(id, updateUserDto);
  }
}
