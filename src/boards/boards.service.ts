import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-boards.dto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardsRepository: Repository<Board>,
  ) {}

  async findAll(): Promise<Board[]> {
    return this.boardsRepository.find();
  }

  async findById(id: number): Promise<Board> {
    const board = await this.boardsRepository.findOneBy({ id });
    if (!board) {
      throw new NotFoundException(`Board with ID ${id} not found`);
    }
    return board;
  }

  async create(dto: CreateBoardDto): Promise<Board> {
    const newBoard = this.boardsRepository.create({
      title: dto.title,
      description: dto.description,
      status: dto.status || BoardStatus.OPEN,
    });
    await this.boardsRepository.save(newBoard);
    return newBoard;
  }

  async update(id: number, dto: UpdateBoardDto) {
    const board = await this.findById(id);
    Object.assign(board, dto);
    await this.boardsRepository.save(board);
    return board;
  }

  async delete(id: number): Promise<Board> {
    const board = await this.findById(id);
    await this.boardsRepository.remove(board);
    return board;
  }
}
