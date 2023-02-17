import { IsBoolean, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateRendezVousDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsDateString()
  start: Date;

  @IsNotEmpty()
  @IsDateString()
  end: Date;

  @IsNotEmpty()
  @IsBoolean()
  done: boolean;
}
