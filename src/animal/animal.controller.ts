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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('animal')
@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createAnimalDto: CreateAnimalDto, @Request() req) {
    const user_id = req.user.userId;

    const newPet = await this.animalService.create(createAnimalDto, user_id);
    return { status: 'ok', message: 'Animal créé', data: newPet };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.animalService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('nom')
  async findOne(@Body('nom') nom: string) {
    return await this.animalService.findOne(nom);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOneById(@Param('id') id: string) {
    return await this.animalService.findOneById(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAnimalDto: UpdateAnimalDto,
  ) {
    return await this.animalService.update(+id, updateAnimalDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalService.remove(+id);
  }
}
