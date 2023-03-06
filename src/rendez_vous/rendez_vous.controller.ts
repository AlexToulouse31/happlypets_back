import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  Request,
} from '@nestjs/common';
import { RendezVousService } from './rendez_vous.service';
import { CreateRendezVousDto } from './dto/create-rendez_vous.dto';
import { UpdateRendezVousDto } from './dto/update-rendez_vous.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ExcludeNullInterceptor } from 'src/Interceptor/interceptor';
import { EMessageStatus, EStatus } from 'src/constants/enum';

@UseInterceptors(ExcludeNullInterceptor)
@ApiBearerAuth()
@ApiTags('rendez-vous')
@UseGuards(JwtAuthGuard)
@Controller('rendez-vous')
export class RendezVousController {
  constructor(private readonly rendezVousService: RendezVousService) {}

  @Post()
  async create(
    @Body() createRendezVousDto: CreateRendezVousDto,
    @Request() req,
  ) {
    const user_id = req.user.user_id;
    const verifRdv = await this.rendezVousService.findOneByTitle(
      createRendezVousDto.titles,
    );
    console.log(verifRdv);

    if (verifRdv.length !== 0) {
      return {
        status: EStatus.ERROR,
        message: 'Ce Rendez-vous existe déja !!',
      };
    }
    const newRdv = await this.rendezVousService.create(
      createRendezVousDto,
      user_id,
    );
    return {
      status: EStatus.OK,
      message: 'Votre Rendez-vous a bien été enregistré',
      data: newRdv,
    };
  }

  @Get()
  async findAll() {
    const allRdv = await this.rendezVousService.findAll();
    return {
      status: EStatus.OK,
      message: 'Voici tous vos rendez-vous enregistrés :',
      data: allRdv,
    };
  }

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    const findRdvById = await this.rendezVousService.findOneById(+id);
    if (!findRdvById) {
      return {
        status: EStatus.ERROR,
        message: `Le rendez-vous demandé n'existe pas !!`,
      };
    } else {
      return {
        status: EStatus.OK,
        message: `Voici votre rendez-vous :`,
        data: this.findOneById,
      };
    }
  }

  @Get('title')
  async findOne(@Body('title') title: string) {
    const findRdvByTitle = await this.rendezVousService.findOneByTitle(title);
    if (!findRdvByTitle) {
      return {
        status: EStatus.ERROR,
        message: `Le Rendez-vous demandé n'existe pas !!`,
      };
    } else {
      return {
        status: EStatus.OK,
        message: `Voici votre rendez-vous :`,
        data: findRdvByTitle,
      };
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRendezVousDto: UpdateRendezVousDto,
  ) {
    const rdvUpdate = await this.rendezVousService.update(
      +id,
      updateRendezVousDto,
    );
    return {
      status: EStatus.OK,
      message: `Votre rendez-vous a été mise à jour !!`,
      data: rdvUpdate,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.rendezVousService.findOneById(+id);
    if (!data) {
      return {
        status: EStatus.ERROR,
        message: EMessageStatus.NoData,
      };
    }
    const suppRdv = await this.rendezVousService.remove(+id);
    return {
      status: EStatus.OK,
      message: `Votre rendez-vous à été supprimé`,
      data: suppRdv,
    };
  }
}
