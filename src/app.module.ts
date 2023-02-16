import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Habitat } from './habitats/entities/habitat.entity';
import { HabitatsModule } from './habitats/habitats.module';
import { AlimentationsModule } from './alimentations/alimentations.module';
import { AuthModule } from './auth/auth.module';
<<<<<<< HEAD
import { UsersModule } from './users/users.module';
=======
import { SoinModule } from './soin/soin.module';
import { PhotoModule } from './photo/photo.module';
import { Photo } from './photo/entities/photo.entity';
import { Soin } from './soin/entities/soin.entity';
import { CarnetDeSanteModule } from './carnet_de_sante/carnet_de_sante.module';
import { CarnetDeSante } from './carnet_de_sante/entities/carnet_de_sante.entity';
>>>>>>> 1a03053b762c3bae7594aa4577c06951126a8da0

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Habitat, Photo, Soin, CarnetDeSante],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
<<<<<<< HEAD
    UsersModule,
=======
    HabitatsModule,
    AlimentationsModule,
    SoinModule,
    PhotoModule,
    CarnetDeSanteModule,
>>>>>>> 1a03053b762c3bae7594aa4577c06951126a8da0
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
