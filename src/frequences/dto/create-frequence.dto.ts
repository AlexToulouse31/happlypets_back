import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFrequenceDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  periodicite: string;
}
