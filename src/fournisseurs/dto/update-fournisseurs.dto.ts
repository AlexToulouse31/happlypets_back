import { PartialType } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';
import { CreateFournisseurDto } from './create-fournisseurs.dto';

export class UpdateFournisseurDto extends PartialType(CreateFournisseurDto) {
  @IsString()
  @IsOptional()
  nom: string;
  @IsString()
  @IsOptional()
  url: string;
}
