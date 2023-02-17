import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Animal extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nom: string;

  @Column({ type: 'varchar', default: 'ressources/img/logo.png' })
  photo_profil_url: string;

  @Column({ type: 'varchar' })
  espece: string;

  @Column({ type: 'varchar', default: 'Pas de race connue' })
  race: string;

  @Column({ type: 'boolean' })
  genre: boolean;

  @Column({ type: 'timestamp', default: null })
  date_de_naissance: Date;

  @Column({ type: 'boolean', default: false })
  lof: boolean;
}
