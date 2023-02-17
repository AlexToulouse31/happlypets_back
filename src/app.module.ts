import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlimentationsModule } from './alimentations/alimentations.module';
import { Alimentation } from './alimentations/entities/alimentation.entity';
import { AnimalModule } from './animal/animal.module';
import { Animal } from './animal/entities/animal.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CarnetDeSantesModule } from './carnet_de_santes/carnet_de_santes.module';
import { CarnetDeSante } from './carnet_de_santes/entities/carnet_de_santes.entity';
import { Fournisseur } from './fournisseurs/entities/fournisseurs.entity';
import { FournisseursModule } from './fournisseurs/fournisseurs.module';
import { Habitat } from './habitats/entities/habitat.entity';
import { HabitatsModule } from './habitats/habitats.module';
import { Photo } from './photos/entities/photos.entity';
import { PhotosModule } from './photos/photos.module';
import { Soin } from './soins/entities/soins.entity';
import { SoinsModule } from './soins/soins.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { RappelsModule } from './rappels/rappels.module';
import { RendezVousModule } from './rendez_vous/rendez_vous.module';

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
      entities: [
        Habitat,
        Photo,
        Soin,
        CarnetDeSante,
        User,
        Alimentation,
        Animal,
        Fournisseur,
      ],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),

    UsersModule,
    HabitatsModule,
    AlimentationsModule,
    SoinsModule,
    PhotosModule,
    CarnetDeSantesModule,
    AnimalModule,
    FournisseursModule,
    AuthModule,
    RappelsModule,
    RendezVousModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
