import { Module } from '@nestjs/common';
import { CarnetDeSanteService } from './carnet_de_santes.service';
import { CarnetDeSanteController } from './carnet_de_santes.controller';

@Module({
  controllers: [CarnetDeSanteController],
  providers: [CarnetDeSanteService],
})
export class CarnetDeSantesModule {}
