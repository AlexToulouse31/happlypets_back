import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateRendezVousDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  titles: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  start: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  end: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  @IsOptional()
  done: boolean;
}
