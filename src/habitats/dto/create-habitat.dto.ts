import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHabitatDto {
  @IsNotEmpty()
  @IsString()
  type_Habitat: string;

  @IsNotEmpty()
  @IsNumber()
  geocode_lat: number;

  @IsNotEmpty()
  @IsNumber()
  geocode_lon: number;
}
