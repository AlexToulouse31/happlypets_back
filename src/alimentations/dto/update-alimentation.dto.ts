import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateAlimentationDto } from './create-alimentation.dto';
import { IsOptional } from 'class-validator';

export class UpdateAlimentationDto extends PartialType(CreateAlimentationDto) {
  @ApiPropertyOptional()
  @IsOptional()
  type_aliment: string;

  @ApiPropertyOptional()
  @IsOptional()
  quantite: number;

  @ApiPropertyOptional()
  @IsOptional()
  stock: number;
}
