import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@app/domain/user.entity';
import { UserService } from '../user.service';
import { CreateUserUseCase } from './create-user';
import { GetUserUseCase } from './get-user';
import { GetUserByIdUseCase } from './get-user-by-id';
import { UpdateUserUseCase } from './update-user';
import { DeleteUserUseCase } from './delete-user';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserService,
    GetUserUseCase,
    GetUserByIdUseCase,
    CreateUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
  ],
  exports: [
    UserService,
    GetUserUseCase,
    GetUserByIdUseCase,
    CreateUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
  ],
})
export class UserUseCaseModule {}
