import { Module } from '@nestjs/common';
import { CarnetDeSanteService } from './carnet_de_sante.service';
import { CarnetDeSanteController } from './carnet_de_sante.controller';

@Module({
  controllers: [CarnetDeSanteController],
  providers: [CarnetDeSanteService]
})
export class CarnetDeSanteModule {}
