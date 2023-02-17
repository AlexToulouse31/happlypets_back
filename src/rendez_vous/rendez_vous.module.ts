import { Module } from '@nestjs/common';
import { RendezVousService } from './rendez_vous.service';
import { RendezVousController } from './rendez_vous.controller';

@Module({
  controllers: [RendezVousController],
  providers: [RendezVousService]
})
export class RendezVousModule {}
