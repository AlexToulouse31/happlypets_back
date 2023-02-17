import { Animal } from 'src/animal/entities/animal.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
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
}
