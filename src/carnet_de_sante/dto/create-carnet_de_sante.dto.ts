import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateCarnetDeSanteDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  poids: string;
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
