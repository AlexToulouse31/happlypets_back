import { PartialType } from '@nestjs/swagger';
import { CreateSoinDto } from './create-soins.dto';

export class UpdateSoinDto extends PartialType(CreateSoinDto) {}
