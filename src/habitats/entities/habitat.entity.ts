import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Habitat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  type_Habitat: string;

  @Column('double precision')
  geocode_lat: number;

  @Column('double precision')
  geocode_lon: number;
}
