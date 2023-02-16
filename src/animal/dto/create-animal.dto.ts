import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsDate,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateAnimalDto {
  @IsNotEmpty()
  @IsString()
  nom: string;

  @IsOptional()
  @IsString()
  photo_profil_url: string;

  @IsNotEmpty()
  @IsString()
  espece: string;

  @IsOptional()
  @IsString()
  race: string;

  @IsNotEmpty()
  @IsBoolean()
  genre: boolean;

  @IsOptional()
  @IsDateString()
  date_de_naissance: Date;

  @IsBoolean()
  lof: boolean;
}
