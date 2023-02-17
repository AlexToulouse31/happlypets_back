import { Fournisseur } from 'src/fournisseurs/entities/fournisseurs.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Alimentation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  type_aliment: string;

  @Column('numeric')
  quantite: number;

  @Column('int')
  stock: number;

  @ManyToMany(() => Fournisseur)
  @JoinTable()
  fournisseur: Fournisseur[];
}
