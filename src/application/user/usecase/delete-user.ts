import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';

@Injectable()
export class DeleteUserUseCase {
  constructor(private _userService: UserService) {}

  async execute(id: number) {
    return await this._userService.remove(id);
  }
}
