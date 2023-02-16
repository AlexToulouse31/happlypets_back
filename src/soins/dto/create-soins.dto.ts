import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSoinDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  activite: string;
}
