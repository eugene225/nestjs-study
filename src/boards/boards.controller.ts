import { BoardsService } from './boards.service';
import { Controller, Get } from '@nestjs/common';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoard() {
    return this.boardsService.getAllBoards();
  }
}
