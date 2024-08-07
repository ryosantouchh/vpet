import { IsNotEmpty } from 'class-validator';

export class CreatePetTypeDto {
  @IsNotEmpty()
  typeName: string;
}
