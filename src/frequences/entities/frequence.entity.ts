import { RendezVous } from 'src/rendez_vous/entities/rendez_vous.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Frequence extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar' })
  periodicite: string;
  @OneToMany(() => RendezVous, (rendezVous) => rendezVous.frequence)
  rendezVous: RendezVous[];
}
