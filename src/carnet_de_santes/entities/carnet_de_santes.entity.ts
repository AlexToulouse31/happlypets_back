import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
