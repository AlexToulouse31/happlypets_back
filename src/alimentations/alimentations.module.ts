import { Module } from '@nestjs/common';
import { AlimentationsService } from './alimentations.service';
import { AlimentationsController } from './alimentations.controller';

@Module({
  controllers: [AlimentationsController],
  providers: [AlimentationsService]
})
export class AlimentationsModule {}
