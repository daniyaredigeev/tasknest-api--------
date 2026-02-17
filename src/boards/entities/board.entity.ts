import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'; 
import { BoardStatus } from '../board-status.enum';


@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;


  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: BoardStatus,
    default: BoardStatus.OPEN,
  })
  status: BoardStatus;
  
} 