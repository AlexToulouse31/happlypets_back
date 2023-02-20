import { Injectable } from '@nestjs/common';
import { CreateCarnetDeSanteDto } from './dto/create-carnet_de_santes.dto';
import { UpdateCarnetDeSanteDto } from './dto/update-carnet_de_santes.dto';
import { CarnetDeSante } from './entities/carnet_de_santes.entity';

@Injectable()
export class CarnetDeSanteService {
  async createCarnet(createCarnetDeSanteDto: CreateCarnetDeSanteDto) {
    const carnet = new CarnetDeSante();
    carnet.poids = createCarnetDeSanteDto.poids;
    carnet.vaccin = createCarnetDeSanteDto.vaccin;
    carnet.date_vaccin = createCarnetDeSanteDto.date_vaccin;
    carnet.steriliser = createCarnetDeSanteDto.steriliser;
    await CarnetDeSante.save(carnet);
    return carnet;
  }

  async findAllCarnet(): Promise<CarnetDeSante[] | undefined> {
    const carnetAll = await CarnetDeSante.find({
      relations: { animal: true },
    });

    if (carnetAll[0]) {
      return carnetAll;
    }
  }

  async findOneCarnet(id: number) {
    const carnetId = await CarnetDeSante.findOneBy({ id: id });
    return carnetId;
  }
  async findOneVaccin(vaccin: string) {
    const carnetVaccin = await CarnetDeSante.findOneBy({ vaccin: vaccin });
    return carnetVaccin;
  }

  async updateCarnet(
    id: number,
    updateCarnetDeSanteDto: UpdateCarnetDeSanteDto,
  ) {
    await CarnetDeSante.update(id, updateCarnetDeSanteDto);
    const updateCarnet = CarnetDeSante.findOneBy({ id: id });
    return updateCarnet;
  }

  async removeCarnet(id: number) {
    const deleteCarnet = await CarnetDeSante.findOneBy({ id: id });
    CarnetDeSante.remove(deleteCarnet);
    return deleteCarnet;
  }
}
