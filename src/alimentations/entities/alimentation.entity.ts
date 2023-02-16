import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
