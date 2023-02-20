import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsBoolean, IsDate, IsOptional } from 'class-validator';
import { CreateAnimalDto } from './create-animal.dto';

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {
  @ApiProperty()
  @IsOptional()
  @IsString()
  nom: string;

  /*   @IsOptional()
  @IsString()
  photo_profil_url: string; */

  @ApiProperty()
  @IsOptional()
  @IsString()
  espece: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  race: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  genre: boolean;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  date_de_naissance: Date;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  lof: boolean;
}
