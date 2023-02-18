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
  UseGuards,
} from '@nestjs/common';
import { SoinService } from './soins.service';
import { CreateSoinDto } from './dto/create-soins.dto';
import { UpdateSoinDto } from './dto/update-soins.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { EStatus } from 'src/constants/enum';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('soin')
@Controller('soin')
@ApiBearerAuth()
export class SoinController {
  constructor(private readonly soinService: SoinService) {}

  /*   @UseInterceptors(ExcludeNullInterceptor) */
  @Post()
  async createSoin(@Body() createSoinDto: CreateSoinDto) {
    const verifSoin = await this.soinService.findOneActivite(
      createSoinDto.activite,
    );
    if (verifSoin) {
      return {
        status: EStatus.ERROR,
        message: 'L activité existe déjà',
      };
    }
    const create = await this.soinService.createSoin(createSoinDto);
    return create;
  }

  @Get()
  async findAllSoin() {
    const soinAllFind = await this.soinService.findAllSoin();

    return {
      status: EStatus.OK,
      message: `Voici tous les activitées enregistrées`,
      data: soinAllFind,
    };
  }

  @Get(':id')
  async soinfindOne(@Param('id', ParseIntPipe) id: number) {
    const findOneSoin = await this.soinService.findOneSoin(id);
    if (!findOneSoin) {
      throw new NotFoundException('Pas de soin existant');
    }
    return {
      status: EStatus.OK,
      message: `Voici l activité selectionnée`,
      data: findOneSoin,
    };
  }

  @Patch(':id')
  async updateSoin(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSoinDto: UpdateSoinDto,
  ) {
    const soinUpdated = await this.soinService.updateActivite(
      id,
      updateSoinDto,
    );
    return {
      status: EStatus.OK,
      message: 'L activité a été mise à jour',
      data: soinUpdated,
    };
  }

  @Delete(':id')
  async removeSoin(@Param('id', ParseIntPipe) id: number) {
    const data = await this.soinService.findOneSoin(id);
    if (!data) {
      throw new NotFoundException('L activité a déjà était supprimée');
    }
    const soinRemoved = await this.soinService.removeSoin(id);
    return {
      status: EStatus.OK,
      message: `L'activité avec l'identifiant ${data.id} a été supprimées`,
      data: soinRemoved,
    };
  }
}
