import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Habitat } from './habitats/entities/habitat.entity';
import { HabitatsModule } from './habitats/habitats.module';
import { AlimentationsModule } from './alimentations/alimentations.module';

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
      entities: [Habitat],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    HabitatsModule,
    AlimentationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
