import { NotFoundException, ParseIntPipe } from '@nestjs/common';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EMessageStatus, EStatus } from 'src/constants/enum';
import { AlimentationsService } from './alimentations.service';
import { CreateAlimentationDto } from './dto/create-alimentation.dto';
import { UpdateAlimentationDto } from './dto/update-alimentation.dto';
import { Alimentation } from './entities/alimentation.entity';

@Controller('alimentations')
export class AlimentationsController {
  constructor(private readonly alimentationsService: AlimentationsService) {}

  @Post()
  async create(@Body() createAlimentationDto: CreateAlimentationDto) {
    const dataCheck = await Alimentation.findOneBy(createAlimentationDto);

    if (dataCheck) {
      throw new NotFoundException(EMessageStatus.x2);
    }

    const dataCreated = await this.alimentationsService.create(
      createAlimentationDto,
    );

    return {
      status: EStatus.OK,
      message: EMessageStatus.dataOK,
      data: dataCreated,
    };
  }

  @Get()
  async findAll() {
    const data = await this.alimentationsService.findAll();

    if (!data[0]) {
      throw new NotFoundException(EMessageStatus.NoData);
    }
    return {
      status: EStatus.OK,
      message: EMessageStatus.dataOK,
      data: data,
    };
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const data = await this.alimentationsService.findOne(id);

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
    @Body() updateAlimentationDto: UpdateAlimentationDto,
  ) {
    const dataIdCheck = await this.alimentationsService.findOne(+id);

    if (!dataIdCheck) {
      throw new NotFoundException(EMessageStatus.Unknown);
    }

    const dataToUpdated = await this.alimentationsService.update(
      +id,
      updateAlimentationDto,
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
    const dataToDelete = await this.alimentationsService.findOne(id);

    if (!dataToDelete) {
      throw new NotFoundException(EMessageStatus.Unknown);
    }
    const dataDeleted = await this.alimentationsService.remove(dataToDelete);

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
