import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { Controller, Get } from '@nestjs/common';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }
}
