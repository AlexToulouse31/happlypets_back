import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFournisseurDto {
  @IsString()
  @IsNotEmpty()
  nom: string;
  @IsString()
  @IsNotEmpty()
  url: string;
}
