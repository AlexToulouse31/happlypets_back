import { Injectable } from '@nestjs/common';
import { CreateRendezVousDto } from './dto/create-rendez_vous.dto';
import { UpdateRendezVousDto } from './dto/update-rendez_vous.dto';
import { RendezVous } from './entities/rendez_vous.entity';

@Injectable()
export class RendezVousService {
  async create(createRendezVousDto: CreateRendezVousDto) {
    const newRendezVous = new RendezVous();
    newRendezVous.title = createRendezVousDto.title;
    newRendezVous.start = createRendezVousDto.start;
    newRendezVous.end = createRendezVousDto.end;
    newRendezVous.done = createRendezVousDto.done;
    await newRendezVous.save();
    return newRendezVous;
  }

  findAll() {
    return `This action returns all rendezVous`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rendezVous`;
  }

  update(id: number, updateRendezVousDto: UpdateRendezVousDto) {
    return `This action updates a #${id} rendezVous`;
  }

  remove(id: number) {
    return `This action removes a #${id} rendezVous`;
  }
}
