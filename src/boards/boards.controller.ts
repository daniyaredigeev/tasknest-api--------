import { Body, Controller, Delete, Get, Param, Patch, Post, ParseIntPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-boards.dto';


@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

@Get()
findAll() {
  return this.boardsService.findAll();
}

@Get(':id')//изменяема часть пути, динамичкеская , берем айди
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.boardsService.findById(id);
  }


@Post('create') //берем тело запроса, добавляеется айди
create(@Body() dto: CreateBoardDto) {
  return this.boardsService.create(dto);
}

@Patch(':id') //и тело, и айди
update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateBoardDto) {
  return this.boardsService.update(id, dto);
}


@Delete(':id')
delete (@Param('id', ParseIntPipe) id: number) {
  return this.boardsService.delete (id); 
}

}



