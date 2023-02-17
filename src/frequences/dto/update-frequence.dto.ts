import { PartialType } from '@nestjs/swagger';
import { CreateFrequenceDto } from './create-frequence.dto';

export class UpdateFrequenceDto extends PartialType(CreateFrequenceDto) {}
