import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';
import { CreateRendezVousDto } from './create-rendez_vous.dto';

export class UpdateRendezVousDto extends PartialType(CreateRendezVousDto) {
  @ApiProperty()
  @IsOptional()
  @IsString()
  titles: string;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  start: Date;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  end: Date;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  done: boolean;
}
