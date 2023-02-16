import { Injectable } from '@nestjs/common';
import { CreateAlimentationDto } from './dto/create-alimentation.dto';
import { UpdateAlimentationDto } from './dto/update-alimentation.dto';

@Injectable()
export class AlimentationsService {
  create(createAlimentationDto: CreateAlimentationDto) {
    return 'This action adds a new alimentation';
  }

  findAll() {
    return `This action returns all alimentations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alimentation`;
  }

  update(id: number, updateAlimentationDto: UpdateAlimentationDto) {
    return `This action updates a #${id} alimentation`;
  }

  remove(id: number) {
    return `This action removes a #${id} alimentation`;
  }
}
