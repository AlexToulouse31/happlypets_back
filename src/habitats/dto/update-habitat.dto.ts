import { PartialType } from '@nestjs/swagger';
import { CreateHabitatDto } from './create-habitat.dto';
import { IsOptional } from 'class-validator';

export class UpdateHabitatDto extends PartialType(CreateHabitatDto) {
  @IsOptional()
  type_Habitat: string;

  @IsOptional()
  geocode_lat: number;

  @IsOptional()
  geocode_lon: number;
}
