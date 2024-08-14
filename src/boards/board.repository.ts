import { DataSource, Repository } from 'typeorm';
import { Board } from './board.entity';
import { CustomRepository } from 'src/global/decorator/typeorm-ex.decorator';

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {
  constructor(dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }
}
