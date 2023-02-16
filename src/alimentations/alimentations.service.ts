import { Injectable } from '@nestjs/common';
import { CreateAlimentationDto } from './dto/create-alimentation.dto';
import { UpdateAlimentationDto } from './dto/update-alimentation.dto';
import { Alimentation } from './entities/alimentation.entity';

@Injectable()
export class AlimentationsService {
  async create(
    createAlimentationDto: CreateAlimentationDto,
  ): Promise<Alimentation | undefined> {
    const data = new Alimentation();
    data.type_aliment = createAlimentationDto.type_aliment;
    data.quantite = createAlimentationDto.quantite;
    data.stock = createAlimentationDto.stock;

    const dataCreated = await Alimentation.save(data);

    if (dataCreated) {
      return dataCreated;
    }
    return undefined;
  }

  async findAll(): Promise<Alimentation[] | undefined> {
    const listAlimentation = await Alimentation.find();

    if (listAlimentation[0]) {
      return listAlimentation;
    }
    return undefined;
  }

  async findOne(id: number): Promise<Alimentation | undefined> {
    const data = await Alimentation.findOneBy({ id });
    if (data) {
      return data;
    }
    return undefined;
  }

  async update(
    id: number,
    updateAlimentationDto: UpdateAlimentationDto,
  ): Promise<Alimentation | undefined> {
    const dataToUpdate = await Alimentation.update(id, updateAlimentationDto);

    const dataUpdated = await Alimentation.findOneBy({ id });
    if (dataUpdated) {
      return dataUpdated;
    }
    return undefined;
  }

  async remove(data: Alimentation) {
    const dataDeleted = await Alimentation.remove(data);

    if (dataDeleted) {
      return dataDeleted;
    }
    return undefined;
  }
}
