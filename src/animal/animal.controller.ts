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
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@ApiBearerAuth()
@ApiTags('animal')
@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  //@UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createAnimalDto: CreateAnimalDto) {
    const newPet = await this.animalService.create(createAnimalDto);
    return { status: 'ok', message: 'Animal créé', data: newPet };
  }

  @Get()
  findAll() {
    return this.animalService.findAll();
  }

  @Get('nom')
  async findOne(@Body('nom') nom: string) {
    return await this.animalService.findOne(nom);
  }

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    return await this.animalService.findOneById(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAnimalDto: UpdateAnimalDto,
  ) {
    return await this.animalService.update(+id, updateAnimalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalService.remove(+id);
  }
}
