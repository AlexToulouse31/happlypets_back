import { PartialType } from '@nestjs/swagger';
import { CreateAlimentationDto } from './create-alimentation.dto';

export class UpdateAlimentationDto extends PartialType(CreateAlimentationDto) {}
