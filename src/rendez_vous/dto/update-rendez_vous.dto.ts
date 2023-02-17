import { PartialType } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';
import { CreateRendezVousDto } from './create-rendez_vous.dto';

export class UpdateRendezVousDto extends PartialType(CreateRendezVousDto) {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsDateString()
  start: Date;

  @IsOptional()
  @IsDateString()
  end: Date;

  @IsOptional()
  @IsBoolean()
  done: boolean;
}
