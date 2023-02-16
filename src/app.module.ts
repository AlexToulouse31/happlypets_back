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
import { SoinModule } from './soin/soin.module';
import { PhotoModule } from './photo/photo.module';
import { Photo } from './photo/entities/photo.entity';
import { Soin } from './soin/entities/soin.entity';
import { CarnetDeSanteModule } from './carnet_de_sante/carnet_de_sante.module';
import { CarnetDeSante } from './carnet_de_sante/entities/carnet_de_sante.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
=======
import { User } from './users/entities/user.entity';
import { CarnetDeSante } from './carnet_de_santes/entities/carnet_de_santes.entity';
import { Soin } from './soins/entities/soins.entity';
import { Photo } from './photos/entities/photos.entity';
import { SoinModule } from './soins/soins.module';
import { PhotoModule } from './photos/photos.module';
import { CarnetDeSanteModule } from './carnet_de_santes/carnet_de_santes.module';
import { UsersModule } from './users/users.module';
import { Alimentation } from './alimentations/entities/alimentation.entity';
>>>>>>> 5105a9c2356b018ed1b5e23e1746f53b9cf9aff5

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
<<<<<<< HEAD
      entities: [User, Habitat, Photo, Soin, CarnetDeSante],
=======
      entities: [Habitat, Photo, Soin, CarnetDeSante, User, Alimentation],
>>>>>>> 5105a9c2356b018ed1b5e23e1746f53b9cf9aff5
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
<<<<<<< HEAD
    UsersModule,
=======
>>>>>>> 5105a9c2356b018ed1b5e23e1746f53b9cf9aff5
    HabitatsModule,
    AlimentationsModule,
    SoinModule,
    PhotoModule,
    CarnetDeSanteModule,
<<<<<<< HEAD
=======
    AnimalModule,
    UsersModule,
>>>>>>> 5105a9c2356b018ed1b5e23e1746f53b9cf9aff5
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
