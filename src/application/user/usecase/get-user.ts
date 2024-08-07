import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';

@Injectable()
export class GetUserUseCase {
  constructor(private _userService: UserService) {}

  async execute() {
    return await this._userService.findAll();
  }
}
