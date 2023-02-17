import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateHabitatDto } from './create-habitat.dto';
import { IsOptional } from 'class-validator';

export class UpdateHabitatDto extends PartialType(CreateHabitatDto) {
  @ApiPropertyOptional()
  @IsOptional()
  type_Habitat: string;

  @ApiPropertyOptional()
  @IsOptional()
  geocode_lat: number;

  @ApiPropertyOptional()
  @IsOptional()
  geocode_lon: number;
}
