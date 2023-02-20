import { Injectable } from '@nestjs/common';
import { EMessageStatus, EStatus } from 'src/constants/enum';
import { CreateRendezVousDto } from './dto/create-rendez_vous.dto';
import { UpdateRendezVousDto } from './dto/update-rendez_vous.dto';
import { RendezVous } from './entities/rendez_vous.entity';

@Injectable()
export class RendezVousService {
  async create(createRendezVousDto: CreateRendezVousDto, user_id: number) {
    const newRendezVous = new RendezVous();
    newRendezVous.titles = createRendezVousDto.titles;
    newRendezVous.start = createRendezVousDto.start;
    newRendezVous.end = createRendezVousDto.end;
    newRendezVous.done = createRendezVousDto.done;
    await newRendezVous.save();
    return newRendezVous;
  }

  async findAll() {
    const allRdv = await RendezVous.find();
    return allRdv;
  }

  async findOneById(id: number) {
    const findRdv = await RendezVous.findBy({ id });
    return findRdv;
  }

  async findOneByTitle(titles: string) {
    const findByTitle = await RendezVous.findBy({
      titles,
    });
    return findByTitle;
  }

  async update(id: number, updateRendezVousDto: UpdateRendezVousDto) {
    const data = await RendezVous.findOneBy({ id });
    await RendezVous.update(data.id, updateRendezVousDto);
    const dataUpdate = await RendezVous.findOneBy({ id });
    return dataUpdate;
  }

  async remove(id: number) {
    const idRdv = await RendezVous.findOneBy({ id });
    await RendezVous.remove(idRdv);
    return {
      status: EStatus.OK,
      message: EMessageStatus.DeletedOK,
      data: idRdv,
    };
  }
}
