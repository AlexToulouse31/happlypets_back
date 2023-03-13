import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Res,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { EMessageStatus, EStatus } from 'src/constants/enum';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('animal')
@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post()
  async create(@Body() createAnimalDto: CreateAnimalDto, @Request() req) {
    const user_id = req.user.userId;
    const verifPet = await this.animalService.findOne(createAnimalDto.nom);
    if (verifPet.length !== 0) {
      return {
        status: EStatus.ERROR,
        message: 'Cet animal existe déja !!',
      };
    }
    const newPet = await this.animalService.create(createAnimalDto, user_id);
    return {
      status: EStatus.OK,
      message: 'Votre Animal a bien été enregistré',
      data: newPet,
    };
  }

  @Get()
  async findAll() {
    const allAnimals = await this.animalService.findAll();
    return {
      status: EStatus.OK,
      message: 'Voici tous les animaux enregistrés :',
      data: allAnimals,
    };
  }

  @Get('nom')
  async findOne(@Body('nom') nom: string) {
    const findAnimalByName = await this.animalService.findOne(nom);
    if (!findAnimalByName) {
      return {
        status: EStatus.ERROR,
        message: `L'animal demandé n'existe pas !!`,
      };
    } else {
      return {
        status: EStatus.OK,
        message: `Voici l'animal demandé :`,
        data: findAnimalByName,
      };
    }
  }

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    const findAnimalById = await this.animalService.findOneById(+id);
    if (!findAnimalById) {
      return {
        status: EStatus.ERROR,
        message: `L'animal demandé n'existe pas !!`,
      };
    } else {
      return {
        status: EStatus.OK,
        message: `Voici l'animal demandé :`,
        data: findAnimalById,
      };
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAnimalDto: UpdateAnimalDto,
  ) {
    const animalUpdate = await this.animalService.update(+id, updateAnimalDto);
    return {
      status: EStatus.OK,
      message: `L'animal a été mise à jour !!`,
      data: animalUpdate,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.animalService.findOneById(+id);
    if (!data) {
      return {
        status: EStatus.ERROR,
        message: EMessageStatus.NoData,
      };
    }
    const suppAnimal = await this.animalService.remove(+id);
    return {
      status: EStatus.OK,
      message: `L'animal à été supprimé`,
      data: suppAnimal,
    };
  }
}
