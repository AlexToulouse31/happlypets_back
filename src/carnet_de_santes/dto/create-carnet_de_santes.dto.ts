import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Animal } from 'src/animal/entities/animal.entity';

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

  @ApiProperty()
  @IsNotEmpty()
  animal: Animal;
}
