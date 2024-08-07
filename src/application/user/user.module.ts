import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { User } from '@app/domain/user.entity';
import { UserService } from './user.service';
import { UserUseCaseModule } from './usecase/user-usecase.module';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User]), UserUseCaseModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
