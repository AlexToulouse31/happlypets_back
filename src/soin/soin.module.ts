import { Module } from '@nestjs/common';
import { SoinService } from './soin.service';
import { SoinController } from './soin.controller';

@Module({
  controllers: [SoinController],
  providers: [SoinService]
})
export class SoinModule {}
