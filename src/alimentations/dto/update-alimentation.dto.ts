import { PartialType } from '@nestjs/swagger';
import { CreateAlimentationDto } from './create-alimentation.dto';
import { IsOptional } from 'class-validator';

export class UpdateAlimentationDto extends PartialType(CreateAlimentationDto) {
  @IsOptional()
  type_aliment: string;

  @IsOptional()
  quantite: number;

  @IsOptional()
  stock: number;
}
