import { Alimentation } from 'src/alimentations/entities/alimentation.entity';
import { Animal } from 'src/animal/entities/animal.entity';
import { CarnetDeSante } from 'src/carnet_de_santes/entities/carnet_de_santes.entity';
import { Frequence } from 'src/frequences/entities/frequence.entity';
import { Soin } from 'src/soins/entities/soins.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class RendezVous extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  titles: string;

  @Column({ type: 'timestamp' })
  start: Date;

  @Column({ type: 'timestamp' })
  end: Date;

  @Column({ type: 'boolean', default: false })
  done: boolean;

  /* @ManyToOne(() => Alimentation, (alimentation) => alimentation.rendezVous, {
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  alimentation: Alimentation; */

  @ManyToOne(() => CarnetDeSante, (carnetDeSante) => carnetDeSante.rendezVous, {
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  carnetDeSante: CarnetDeSante;

  @ManyToOne(() => Frequence, (frequence) => frequence.rendezVous, {
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  frequence: Frequence;

  @OneToOne(() => Soin)
  soin: Soin;

  @ManyToOne(() => Animal, (animal) => animal.id)
  animal: number;
}
