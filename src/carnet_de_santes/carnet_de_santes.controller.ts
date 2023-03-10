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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { EStatus } from 'src/constants/enum';
import { CarnetDeSanteService } from './carnet_de_santes.service';
import { CreateCarnetDeSanteDto } from './dto/create-carnet_de_santes.dto';
import { UpdateCarnetDeSanteDto } from './dto/update-carnet_de_santes.dto';

//@UseInterceptors(ExcludeNullInterceptor)
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('carnet')
@Controller('carnet')
export class CarnetDeSanteController {
  constructor(private readonly carnetDeSanteService: CarnetDeSanteService) {}

  @Post()
  async createCarnet(@Body() createCarnetDeSanteDto: CreateCarnetDeSanteDto) {
    const verifCarnet = await this.carnetDeSanteService.findOneVaccin(
      createCarnetDeSanteDto.vaccin,
    );
    if (verifCarnet) {
      return {
        status: EStatus.ERROR,
        message: 'Le vaccin existe déjà',
      };
    }
    const create = await this.carnetDeSanteService.createCarnet(
      createCarnetDeSanteDto,
    );
    return {
      status: EStatus.OK,
      message: 'Le vaccin a été ajouté',
      data: create,
    };
  }

  @Get()
  async findAllCarnet() {
    const findAllCarnet = await this.carnetDeSanteService.findAllCarnet();

    if (findAllCarnet == undefined) {
      throw new NotFoundException('Pas de données dans le carnet de santé');
    }
    return {
      status: EStatus.OK,
      message: `Voici tous les vaccins enregistrés`,
      data: findAllCarnet,
    };
  }

  @Get(':id')
  async findOneCarnet(@Param('id', ParseIntPipe) id: number) {
    const findOneCarnet = await this.carnetDeSanteService.findOneCarnet(id);
    return {
      status: EStatus.OK,
      message: `Voici l activitée selectionnée`,
      data: findOneCarnet,
    };
  }

  @Patch(':id')
  async updateCarnet(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCarnetDeSanteDto: UpdateCarnetDeSanteDto,
  ) {
    const carnetUpdated = await this.carnetDeSanteService.updateCarnet(
      id,
      updateCarnetDeSanteDto,
    );
    return {
      status: EStatus.OK,
      message: 'Le vaccin a été mise à jour',
      data: carnetUpdated,
    };
  }

  @Delete(':id')
  async removeCarnet(@Param('id', ParseIntPipe) id: number) {
    const data = await this.carnetDeSanteService.findOneCarnet(id);
    if (!data) {
      throw new NotFoundException(`le vaccin à déjà était supprimé`);
    }
    const carnetRemoved = await this.carnetDeSanteService.removeCarnet(id);
    return {
      status: EStatus.OK,
      message: `Le vaccin avec l'identifiant ${data.id} a été supprimés`,
      data: carnetRemoved,
    };
  }
}
