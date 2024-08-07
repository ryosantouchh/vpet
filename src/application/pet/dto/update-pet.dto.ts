import { IsOptional } from 'class-validator';

export class UpdatePetDto {
  @IsOptional()
  petName?: string;

  @IsOptional()
  petTypeId?: number;
}
