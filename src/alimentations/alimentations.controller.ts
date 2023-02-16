import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlimentationsService } from './alimentations.service';
import { CreateAlimentationDto } from './dto/create-alimentation.dto';
import { UpdateAlimentationDto } from './dto/update-alimentation.dto';

@Controller('alimentations')
export class AlimentationsController {
  constructor(private readonly alimentationsService: AlimentationsService) {}

  @Post()
  create(@Body() createAlimentationDto: CreateAlimentationDto) {
    return this.alimentationsService.create(createAlimentationDto);
  }

  @Get()
  findAll() {
    return this.alimentationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alimentationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlimentationDto: UpdateAlimentationDto) {
    return this.alimentationsService.update(+id, updateAlimentationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alimentationsService.remove(+id);
  }
}
