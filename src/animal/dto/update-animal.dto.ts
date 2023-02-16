import { PartialType } from '@nestjs/swagger';
import { IsString, IsBoolean, IsDate, IsOptional } from 'class-validator';
import { CreateAnimalDto } from './create-animal.dto';

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {
  @IsOptional()
  @IsString()
  nom: string;

  @IsOptional()
  @IsString()
  photo_profil_url: string;

  @IsOptional()
  @IsString()
  espece: string;

  @IsOptional()
  @IsString()
  race: string;

  @IsOptional()
  @IsBoolean()
  genre: boolean;

  @IsOptional()
  @IsDate()
  date_de_naissance: Date;

  @IsOptional()
  @IsBoolean()
  lof: boolean;
}
