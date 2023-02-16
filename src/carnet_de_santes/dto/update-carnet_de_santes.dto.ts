import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateCarnetDeSanteDto } from './create-carnet_de_santes.dto';

export class UpdateCarnetDeSanteDto extends PartialType(
  CreateCarnetDeSanteDto,
) {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  poids: number;
  @ApiProperty()
  @IsOptional()
  @IsString()
  vaccin: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  date_vaccin: string;
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  steriliser: boolean;
}
