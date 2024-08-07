import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';

@Injectable()
export class GetUserByIdUseCase {
  constructor(private _userService: UserService) {}

  async execute(id: number) {
    return await this._userService.findOne(id);
  }
}
