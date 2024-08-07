import { IsNotEmpty } from 'class-validator';

export class CreatePetDto {
  @IsNotEmpty()
  petName: string;

  @IsNotEmpty()
  petTypeId: number;
}
