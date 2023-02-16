import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CarnetDeSante extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar' })
  poids: string;
  @Column({ type: 'varchar' })
  vaccin: string;
  @Column({ type: 'varchar' })
  date_vaccin: string;
  @Column({ select: false })
  steriliser: boolean;
}
