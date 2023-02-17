import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RendezVous extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'timestamp' })
  start: Date;

  @Column({ type: 'timestamp' })
  end: Date;

  @Column({ type: 'boolean', default: false })
  done: boolean;
}
