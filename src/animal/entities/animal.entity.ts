import { ApiProperty } from '@nestjs/swagger';
import { Alimentation } from 'src/alimentations/entities/alimentation.entity';
import { CarnetDeSante } from 'src/carnet_de_santes/entities/carnet_de_santes.entity';
import { Habitat } from 'src/habitats/entities/habitat.entity';
import { Photo } from 'src/photos/entities/photos.entity';
import { RendezVous } from 'src/rendez_vous/entities/rendez_vous.entity';
import { Soin } from 'src/soins/entities/soins.entity';
import { User } from 'src/users/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Animal extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: 'varchar' })
  nom: string;

  // est ce utile d'y stocker l id de la photo utilisé comme avatar de cet animal !!?????
  /* @Column({ type: 'varchar', default: 'ressources/img/logo.png' })
  photo_profil_url: string; */

  @ApiProperty()
  @Column({ type: 'varchar' })
  espece: string;

  @ApiProperty()
  @Column({ type: 'varchar', default: 'Pas de race connue' })
  race: string;

  @ApiProperty()
  @Column({ type: 'boolean' })
  genre: boolean;

  @ApiProperty()
  @Column({ type: 'date', default: null })
  date_de_naissance: Date;

  @ApiProperty()
  @Column({ type: 'boolean', default: false })
  lof: boolean;

  @ApiProperty()
  @ManyToMany(() => Alimentation)
  @JoinTable()
  alimentation: Alimentation[];

  @ApiProperty()
  @OneToMany(() => Soin, (soin) => soin.id)
  soins: number[];

  @ApiProperty()
  @ManyToOne(() => User, (user) => user.id, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  user: number;

  @ApiProperty()
  @ManyToOne(() => Habitat, (habitat) => habitat.id, {
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  habitat: number;

  @ApiProperty()
  @OneToMany(() => Photo, (photo) => photo.animal, {
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  photos: Photo[];

  @ApiProperty()
  @OneToMany(() => RendezVous, (rendezVous) => rendezVous.animal, {
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  rendezVous: RendezVous[];

  @ApiProperty()
  @OneToMany(() => CarnetDeSante, (carnetdeSante) => carnetdeSante.animal, {
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  carnetdesante: CarnetDeSante[];
}
