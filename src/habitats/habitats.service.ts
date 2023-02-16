import { Body } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { CreateHabitatDto } from './dto/create-habitat.dto';
import { UpdateHabitatDto } from './dto/update-habitat.dto';
import { Habitat } from './entities/habitat.entity';

@Injectable()
export class HabitatsService {
  async create(@Body() createHabitatDto: CreateHabitatDto) {
    const data = new Habitat();
    data.type_Habitat = createHabitatDto.type_Habitat;
    data.geocode_lat = createHabitatDto.geocode_lat;
    data.geocode_lon = createHabitatDto.geocode_lon;

    const newHabitat = await Habitat.save(data);
    console.log(newHabitat);

    return newHabitat;
  }

  async findAll(): Promise<Habitat[] | undefined> {
    const listHabitat = await Habitat.find();
    if (listHabitat[0]) {
      return listHabitat;
    }
    return undefined;
  }

  async findOne(id: number): Promise<Habitat | undefined> {
    const dataHabitat = await Habitat.findOneBy({ id });
    if (dataHabitat) {
      return dataHabitat;
    }
    return undefined;
  }

  async update(
    id: number,
    updateHabitatDto: UpdateHabitatDto,
  ): Promise<Habitat | undefined> {
    await Habitat.update(id, updateHabitatDto);

    const dataUpdated = await Habitat.findOneBy({ id });

    if (dataUpdated) {
      return dataUpdated;
    }
    return undefined;
  }

  async remove(data: Habitat): Promise<Habitat | undefined> {
    const dataDeleted = await Habitat.remove(data);

    if (dataDeleted) {
      return dataDeleted;
    }
    return undefined;
  }
}
