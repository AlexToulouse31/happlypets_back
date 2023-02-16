import { Injectable } from '@nestjs/common';
import { CreateSoinDto } from './dto/create-soin.dto';
import { UpdateSoinDto } from './dto/update-soin.dto';
import { Soin } from './entities/soin.entity';

@Injectable()
export class SoinService {
  async createSoin(createSoinDto: CreateSoinDto) {
    const soin = new Soin();
    soin.activite = createSoinDto.activite;
    await Soin.save(soin);
    return soin;
  }

  async findAllSoin(): Promise<Soin[] | undefined> {
    const soinAll = await Soin.find();

    if (soinAll[0]) {
      return soinAll;
    }
  }

  async findOneSoin(id: number) {
    const soinId = await Soin.findOneBy({ id: id });
    return soinId;
  }
  async findOneActivite(activite: string) {
    const activiteId = await Soin.findOneBy({ activite: activite });
    return activiteId;
  }

  async updateActivite(id: number, updateSoinDto: UpdateSoinDto) {
    await Soin.update(id, updateSoinDto);
    const updateSoin = Soin.findOneBy({ id: id });
    return updateSoin;
  }

  async removeSoin(id: number) {
    const deleteSoin = await Soin.findOneBy({ id: id });
    Soin.remove(deleteSoin);
    return deleteSoin;
  }
}
