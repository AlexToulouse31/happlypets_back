import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SoinModule } from './soin/soin.module';
import { PhotoModule } from './photo/photo.module';
import { Photo } from './photo/entities/photo.entity';
import { Soin } from './soin/entities/soin.entity';
import { CarnetDeSanteModule } from './carnet_de_sante/carnet_de_sante.module';
import { CarnetDeSante } from './carnet_de_sante/entities/carnet_de_sante.entity';

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
      entities: [Photo, Soin, CarnetDeSante],
      synchronize: true,
      logging: false,
      autoLoadEntities: true,
    }),
    SoinModule,
    PhotoModule,
    CarnetDeSanteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
