import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Habitat } from './habitats/entities/habitat.entity';
import { HabitatsModule } from './habitats/habitats.module';
import { AlimentationsModule } from './alimentations/alimentations.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { CarnetDeSante } from './carnet_de_santes/entities/carnet_de_santes.entity';
import { Soin } from './soins/entities/soins.entity';
import { Photo } from './photos/entities/photos.entity';
import { SoinModule } from './soins/soins.module';
import { PhotoModule } from './photos/photos.module';
import { CarnetDeSanteModule } from './carnet_de_santes/carnet_de_santes.module';
import { UsersModule } from './users/users.module';
import { Alimentation } from './alimentations/entities/alimentation.entity';

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
      entities: [Habitat, Photo, Soin, CarnetDeSante, User, Alimentation],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    HabitatsModule,
    AlimentationsModule,
    SoinModule,
    PhotoModule,
    CarnetDeSanteModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
