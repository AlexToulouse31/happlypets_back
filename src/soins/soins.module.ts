import { Module } from '@nestjs/common';
import { SoinService } from './soins.service';
import { SoinController } from './soins.controller';

@Module({
  controllers: [SoinController],
  providers: [SoinService],
})
export class SoinsModule {}
