import { Injectable } from '@nestjs/common';
import { CreateFrequenceDto } from './dto/create-frequence.dto';
import { UpdateFrequenceDto } from './dto/update-frequence.dto';
import { Frequence } from './entities/frequence.entity';

@Injectable()
export class FrequencesService {
  async createFrequence(createFrequenceDto: CreateFrequenceDto) {
    const frequence = new Frequence();
    frequence.periodicite = createFrequenceDto.periodicite;
    await Frequence.save(frequence);
  }

  async findAllFrequence() {
    const frequenceAll = await Frequence.find();
    if (frequenceAll[0]) {
      return frequenceAll;
    }
  }

  async findOneFrequence(id: number) {
    const frequenceId = await Frequence.findOneBy({ id: id });
    return frequenceId;
  }
  async findOnePeriodicite(periodicite: string) {
    const periodiciteId = await Frequence.findOneBy({
      periodicite: periodicite,
    });
    return periodiciteId;
  }

  async updateFrequence(id: number, updateFrequenceDto: UpdateFrequenceDto) {
    await Frequence.update(id, updateFrequenceDto);
    const updateFrequence = Frequence.findOneBy({ id: id });
    return updateFrequence;
  }

  async removeFrequence(id: number) {
    const deleteFrequence = await Frequence.findOneBy({ id: id });
    Frequence.remove(deleteFrequence);
    return deleteFrequence;
  }
}
