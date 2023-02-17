import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAlimentationDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  type_aliment: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  quantite: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  stock: number;
}
