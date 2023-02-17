import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHabitatDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type_Habitat: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  geocode_lat: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  geocode_lon: number;
}
