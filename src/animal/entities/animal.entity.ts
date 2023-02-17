import { Alimentation } from 'src/alimentations/entities/alimentation.entity';
import { Habitat } from 'src/habitats/entities/habitat.entity';
import { Photo } from 'src/photos/entities/photos.entity';
import { Soin } from 'src/soins/entities/soins.entity';
import { User } from 'src/users/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Animal extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nom: string;

  // est ce utile d'y stocker l id de la photo utilisé comme avatar de cet animal !!?????
  /* @Column({ type: 'varchar', default: 'ressources/img/logo.png' })
  photo_profil_url: string; */

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

  @ManyToMany(() => Alimentation)
  @JoinTable()
  alimentation: Alimentation[];

  @OneToMany(() => Soin, (soin) => soin.id)
  soins: number[];

  @ManyToOne(() => User, (user) => user.id, { eager: true })
  user: number;

  @ManyToOne(() => Habitat, (habitat) => habitat.id)
  habitat: number;

  @OneToMany(() => Photo, (photo) => photo.id)
  photos: number[];
}
