import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photo.entity';

@Injectable()
export class PhotoService {
  async createPhoto(createPhotoDto: CreatePhotoDto) {
    const photo = new Photo();
    photo.url = createPhotoDto.url;
    await Photo.save(photo);
    return photo;
  }

  async findAllPhoto(): Promise<Photo[] | undefined> {
    const photoAll = await Photo.find();
    if (photoAll[0]) {
      return photoAll;
    }
  }

  async findOnePhoto(id: number) {
    const photoId = await Photo.findOneBy({ id: id });
    return photoId;
  }
  async findOneUrl(url: string) {
    const photoId = await Photo.findOneBy({ url: url });
    return photoId;
  }

  async updatePhoto(id: number, updatePhotoDto: UpdatePhotoDto) {
    await Photo.update(id, updatePhotoDto);
    const updatePhoto = Photo.findOneBy({ id: id });
    return updatePhoto;
  }

  async removePhoto(id: number) {
    const deletePhoto = await Photo.findOneBy({ id: id });
    Photo.remove(deletePhoto);
    return deletePhoto;
  }
}
