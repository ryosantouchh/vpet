import * as bcrypt from 'bcryptjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@app/domain/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private _userRepository: Repository<User>,
  ) { }

  // TODO : need to extract the hashing function and all of auth stuff to auth module later
  async create(createUserDto: CreateUserDto) {
    try {
      const { username, password } = createUserDto;
      const hashedPassword = await this._hashPassword(password);

      await this._userRepository.save({ username, hashedPassword });

      return;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const users = await this._userRepository.find();

      return users;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const userById = await this._userRepository.findOneBy({ id });

      if (!userById) {
        throw new NotFoundException('user is not found!');
      }

      return userById;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      await this.findOne(id);

      const { displayName } = updateUserDto;

      await this._userRepository.update({ id }, { displayName });

      return;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.findOne(id);

      await this._userRepository.update({ id }, { deleted: true });

      return;
    } catch (error) {
      throw error;
    }
  }

  private async _hashPassword(password: string): Promise<string> {
    // TODO : just for sharing knowledge session , you guys need to move salt number to your env
    const salt = await bcrypt.genSalt(7);

    return bcrypt.hashSync(password, salt);
  }

  // private _checkPassword(username: string, password: string) {
  //   // hit database once to get hashed and using compareSync
  //   // return bcrypt.compareSync(password, hashedPassword)
  //   try {
  //     const hashedPassword = await this.findOne();
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  async findOneByUsername(username: string): Promise<User> {
    try {
      const userByUsername = await this._userRepository.findOneBy({ username });

      if (!userByUsername) {
        throw new NotFoundException('user is not found!');
      }

      return userByUsername;
    } catch (error) {
      throw error;
    }
  }
}
