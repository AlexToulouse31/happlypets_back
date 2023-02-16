import { PartialType } from '@nestjs/swagger';
import { CreatePhotoDto } from './create-photos.dto';

export class UpdatePhotoDto extends PartialType(CreatePhotoDto) {}
