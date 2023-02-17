import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
  NotFoundException,
  UseInterceptors,
} from '@nestjs/common';
import { PhotoService } from './photos.service';
import { CreatePhotoDto } from './dto/create-photos.dto';
import { UpdatePhotoDto } from './dto/update-photos.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { EStatus } from 'src/constants/enum';
import { ExcludeNullInterceptor } from 'src/Interceptor/interceptor';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@ApiTags('photo')
@Controller('photo')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @UseInterceptors(ExcludeNullInterceptor)
  @Post()
  async createPhoto(@Body() createPhotoDto: CreatePhotoDto) {
    const verifPhoto = await this.photoService.findOneUrl(createPhotoDto.url);

    if (verifPhoto) {
      return {
        status: EStatus.ERROR,
        message: 'La photo existe déjà',
      };
    }
    return await this.photoService.createPhoto(createPhotoDto);
  }
  /*  @ApiBearerAuth()
  @UseGuards() */
  @Get()
  async findAllPhoto() {
    const photoAllFind = await this.photoService.findAllPhoto();
    return {
      status: EStatus.OK,
      message: `Voici tous les photos enregistrées`,
      data: photoAllFind,
    };
  }
  /*  @ApiBearerAuth()
  @UseGuards() */
  @Get(':id')
  async photofindOne(@Param('id', ParseIntPipe) id: number) {
    const findOnePhoto = await this.photoService.findOnePhoto(id);
    return {
      status: EStatus.OK,
      message: `Voici la photo selectionnée`,
      data: findOnePhoto,
    };
  }
  /* @ApiBearerAuth()
  @UseGuards() */
  @Patch(':id')
  async updatePhoto(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePhotoDto: UpdatePhotoDto,
  ) {
    const photoUpdated = await this.photoService.updatePhoto(
      id,
      updatePhotoDto,
    );
    return {
      status: EStatus.OK,
      message: 'La photo ont été mise à jour',
      data: photoUpdated,
    };
  }
  /* @ApiBearerAuth()
  @UseGuards() */
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const data = await this.photoService.findOnePhoto(id);
    if (!data) {
      throw new NotFoundException('La photo a déjà était supprimé');
    }
    const photoRemoved = await this.photoService.removePhoto(id);
    return {
      status: EStatus.OK,
      message: `Des données de l'identifiant ${data.id} ont été supprimées`,
      data: photoRemoved,
    };
  }
}
