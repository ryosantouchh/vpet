import { IsOptional } from 'class-validator';

export class UpdatePetTypeDto {
  @IsOptional()
  typeName: string;
}
