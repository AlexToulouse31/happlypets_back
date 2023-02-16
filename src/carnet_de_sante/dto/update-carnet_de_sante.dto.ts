import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { CreateCarnetDeSanteDto } from './create-carnet_de_sante.dto';

export class UpdateCarnetDeSanteDto extends PartialType(
  CreateCarnetDeSanteDto,
) {
  @ApiProperty()
  @IsOptional()
  @IsString()
  poids: string;
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
