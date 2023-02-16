import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePhotoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  url: string;
}
