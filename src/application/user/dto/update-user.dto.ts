import { IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  displayName: string;
}
