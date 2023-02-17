import { Module } from '@nestjs/common';
import { FrequencesService } from './frequences.service';
import { FrequencesController } from './frequences.controller';

@Module({
  controllers: [FrequencesController],
  providers: [FrequencesService]
})
export class FrequencesModule {}
