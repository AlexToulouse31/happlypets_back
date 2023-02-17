import { RendezVous } from 'src/rendez_vous/entities/rendez_vous.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CarnetDeSante extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('numeric')
  poids: number;
  @Column({ type: 'varchar' })
  vaccin: string;
  @Column({ type: 'varchar' })
  date_vaccin: string;
  @Column({ select: false })
  steriliser: boolean;

  @OneToMany(() => RendezVous, (rendezVous) => rendezVous.carnetDeSante)
  rendezVous: RendezVous[];
}
