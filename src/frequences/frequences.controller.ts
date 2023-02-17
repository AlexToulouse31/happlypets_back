import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { FrequencesService } from './frequences.service';
import { CreateFrequenceDto } from './dto/create-frequence.dto';
import { UpdateFrequenceDto } from './dto/update-frequence.dto';
import { EStatus } from 'src/constants/enum';

@Controller('frequences')
export class FrequencesController {
  constructor(private readonly frequencesService: FrequencesService) {}

  @Post()
  async createFrequence(@Body() createFrequence: CreateFrequenceDto) {
    const verifFrequence = await this.frequencesService.findOnePeriodicite(
      createFrequence.periodicite,
    );

    if (verifFrequence) {
      return {
        status: EStatus.ERROR,
        message: 'La fréquence existe déjà',
      };
    }
    return await this.frequencesService.createFrequence(createFrequence);
  }
  @Get()
  async findAllFrequence() {
    const frequenceAllFind = await this.frequencesService.findAllFrequence();
    return {
      status: EStatus.OK,
      message: `Voici tous les fréquences enregistrées`,
      data: frequenceAllFind,
    };
  }

  @Get(':id')
  async frequencefindOne(@Param('id', ParseIntPipe) id: number) {
    const findOneFrequence = await this.frequencesService.findOneFrequence(id);
    return {
      status: EStatus.OK,
      message: `Voici la fréquence selectionnée`,
      data: findOneFrequence,
    };
  }

  @Patch(':id')
  async updatePhoto(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFrequenceDto: UpdateFrequenceDto,
  ) {
    const frequenceUpdated = await this.frequencesService.updateFrequence(
      id,
      updateFrequenceDto,
    );
    return {
      status: EStatus.OK,
      message: 'La fréquence ont été mise à jour',
      data: frequenceUpdated,
    };
  }

  @Delete(':id') async remove(@Param('id', ParseIntPipe) id: number) {
    const data = await this.frequencesService.findOneFrequence(id);
    if (!data) {
      throw new NotFoundException('La fréquence a déjà était supprimée');
    }
    const frequenceRemoved = await this.frequencesService.removeFrequence(id);
    return {
      status: EStatus.OK,
      message: `La fréquence de l'identifiant ${data.id} a été supprimée`,
      data: frequenceRemoved,
    };
  }
}
