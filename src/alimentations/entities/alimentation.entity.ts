import { Fournisseur } from 'src/fournisseurs/entities/fournisseurs.entity';
import { Frequence } from 'src/frequences/entities/frequence.entity';
import { RendezVous } from 'src/rendez_vous/entities/rendez_vous.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
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

  /* @OneToMany(() => RendezVous, (rendezVous) => rendezVous.alimentation)
  rendezVous: RendezVous[]; */

  @OneToOne(() => Frequence)
  @JoinColumn()
  frequence: Frequence;
}
