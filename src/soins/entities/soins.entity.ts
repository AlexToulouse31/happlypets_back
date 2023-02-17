import { Animal } from 'src/animal/entities/animal.entity';
import { RendezVous } from 'src/rendez_vous/entities/rendez_vous.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Soin extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar' })
  activite: string;

  @ManyToOne(() => Animal, (animal) => animal.soins)
  animal: Animal;

  @OneToMany(() => RendezVous, (rendezVous) => rendezVous.soin)
  rendezVous: RendezVous[];
}
