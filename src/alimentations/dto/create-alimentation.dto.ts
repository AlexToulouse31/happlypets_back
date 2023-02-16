import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAlimentationDto {
  @IsString()
  @IsNotEmpty()
  type_aliment: string;

  @IsNumber()
  @IsNotEmpty()
  quantite: number;

  @IsNumber()
  @IsNotEmpty()
  stock: number;
}
