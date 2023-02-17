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
  UseInterceptors,
} from '@nestjs/common';
import { FournisseursService } from './fournisseurs.service';
import { CreateFournisseurDto } from './dto/create-fournisseurs.dto';
import { UpdateFournisseurDto } from './dto/update-fournisseurs.dto';
import { EStatus } from 'src/constants/enum';
import { ExcludeNullInterceptor } from 'src/Interceptor/interceptor';
import { ApiBearerAuth } from '@nestjs/swagger';
@UseInterceptors(ExcludeNullInterceptor)
@ApiBearerAuth()
@Controller('fournisseurs')
export class FournisseursController {
  constructor(private readonly fournisseursService: FournisseursService) {}
  /* @ApiBearerAuth()
  @UseGuards() */
  @Post()
  async createFournisseur(@Body() createFournisseurDto: CreateFournisseurDto) {
    const verifFournisseur = await this.fournisseursService.findOneNom(
      createFournisseurDto.nom,
    );
    if (verifFournisseur) {
      return {
        status: EStatus.ERROR,
        message: 'Le fournisseur existe déjà',
      };
    }
    const create = await this.fournisseursService.createFournisseur(
      createFournisseurDto,
    );
    return create;
  }
  /* @ApiBearerAuth()
  @UseGuards() */
  @Get()
  async findAllFournisseur() {
    const fournisseurAllFind =
      await this.fournisseursService.findAllFournisseur();
    return {
      status: EStatus.OK,
      message: `Voici tous les fournisseurs enregistrés`,
      data: fournisseurAllFind,
    };
  }
  /* @ApiBearerAuth()
  @UseGuards() */
  @Get(':id')
  async fournisseurfindOne(@Param('id', ParseIntPipe) id: number) {
    const findOneFournisseur =
      await this.fournisseursService.findOneFournisseur(id);
    if (!findOneFournisseur) {
      throw new NotFoundException('Pas de fournisseur existant');
    }
    return {
      status: EStatus.OK,
      message: `Voici le fournisseur selectionnée`,
      data: findOneFournisseur,
    };
  }
  /* @ApiBearerAuth()
  @UseGuards() */
  @Patch(':id')
  async updateFournisseur(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFournisseurDto: UpdateFournisseurDto,
  ) {
    const fournisseurUpdated = await this.fournisseursService.updateFournisseur(
      id,
      updateFournisseurDto,
    );
    return {
      status: EStatus.OK,
      message: 'Le fournisseur a été mise à jour',
      data: fournisseurUpdated,
    };
  }
  /* @ApiBearerAuth()
  @UseGuards() */
  @Delete(':id')
  async removeFournisseur(@Param('id', ParseIntPipe) id: number) {
    const data = await this.fournisseursService.findOneFournisseur(id);
    if (!data) {
      throw new NotFoundException('Le fournisseur est déjà était supprimée');
    }
    const fournisseurRemoved = await this.fournisseursService.removeFournisseur(
      id,
    );
    return {
      status: EStatus.OK,
      message: `L'activité avec l'identifiant ${data.id} a été supprimées`,
      data: fournisseurRemoved,
    };
  }
}
