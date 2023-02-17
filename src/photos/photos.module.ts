import { Module } from '@nestjs/common';
import { PhotoService } from './photos.service';
import { PhotoController } from './photos.controller';

@Module({
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotosModule {}
