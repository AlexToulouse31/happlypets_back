import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateAnimalDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nom: string;

  /* @IsOptional()
  @IsString()
  photo_profil_url: string; */

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  espece: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  race: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  genre: string;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  date_de_naissance: Date;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  lof: boolean;
}
