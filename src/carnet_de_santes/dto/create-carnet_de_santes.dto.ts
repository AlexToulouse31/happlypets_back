import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCarnetDeSanteDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  poids: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  vaccin: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  date_vaccin: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  steriliser: boolean;
}
