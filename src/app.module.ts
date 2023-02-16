import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Habitat } from './habitats/entities/habitat.entity';
import { HabitatsModule } from './habitats/habitats.module';
import { AlimentationsModule } from './alimentations/alimentations.module';
import { AnimalModule } from './animal/animal.module';
import { UsersModule } from './users/users.module';
import { SoinModule } from './soin/soin.module';
import { PhotoModule } from './photo/photo.module';
import { Photo } from './photo/entities/photo.entity';
import { Soin } from './soin/entities/soin.entity';
import { CarnetDeSanteModule } from './carnet_de_sante/carnet_de_sante.module';
import { CarnetDeSante } from './carnet_de_sante/entities/carnet_de_sante.entity';
import { Animal } from './animal/entities/animal.entity';
import { User } from './users/entities/user.entity';

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
      entities: [Habitat, Photo, Soin, CarnetDeSante, User, Animal],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    HabitatsModule,
    AlimentationsModule,
    SoinModule,
    PhotoModule,
    CarnetDeSanteModule,
    AnimalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
