import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { HabitatsService } from './habitats.service';
import { CreateHabitatDto } from './dto/create-habitat.dto';
import { UpdateHabitatDto } from './dto/update-habitat.dto';
import { Habitat } from './entities/habitat.entity';
import { EMessageStatus, EStatus } from 'src/constants/enum';
import { NotFoundException } from '@nestjs/common';

@Controller('habitats')
export class HabitatsController {
  constructor(private readonly habitatsService: HabitatsService) {}

  @Post()
  async create(@Body() createHabitatDto: CreateHabitatDto) {
    const habitatCheck = await Habitat.findOneBy(createHabitatDto);
    console.log(habitatCheck);

    if (habitatCheck) {
      return {
        status: EStatus.FAIL,
        message: EMessageStatus.x2,
      };
    }
    const dataCreated = await this.habitatsService.create(createHabitatDto);

    return {
      status: EStatus.OK,
      message: EMessageStatus.dataOK,
      data: dataCreated,
    };
  }

  @Get()
  async findAll() {
    const data = await this.habitatsService.findAll();

    if (!data[0]) {
      return {
        status: EStatus.FAIL,
        message: EMessageStatus.NoData,
      };
    }
    return {
      status: EStatus.OK,
      message: EMessageStatus.dataOK,
      data: data,
    };
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const data = await this.habitatsService.findOne(id);
    if (!data) {
      throw new NotFoundException(EMessageStatus.Unknown);
    }
    return {
      status: EStatus.OK,
      message: EMessageStatus.dataOK,
      data: data,
    };
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateHabitatDto: UpdateHabitatDto,
  ) {
    const dataIdCheck = await this.habitatsService.findOne(+id);

    if (!dataIdCheck) {
      throw new NotFoundException(EMessageStatus.Unknown);
    }
    0.0;
    const dataToUpdated = await this.habitatsService.update(
      +id,
      updateHabitatDto,
    );

    if (!dataToUpdated) {
      return {
        status: EStatus.FAIL,
        message: EMessageStatus.updateKO,
      };
    }
    return {
      status: EStatus.OK,
      message: EMessageStatus.updateOK,
      data: dataToUpdated,
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const dataToDelete = await this.habitatsService.findOne(+id);

    if (!dataToDelete) {
      throw new NotFoundException(EMessageStatus.Unknown);
    }
    const dataDeleted = await this.habitatsService.remove(dataToDelete);

    if (!dataDeleted) {
      return {
        status: EStatus.FAIL,
        message: 'Erreur lors de la suppression !!',
      };
    }
    return {
      status: EStatus.OK,
      message: EMessageStatus.DeletedOK,
      data: dataDeleted,
    };
  }
}
