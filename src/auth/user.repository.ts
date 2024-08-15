import { Repository, DataSource } from 'typeorm';
import { User } from './user.entity';
import { CustomRepository } from 'src/global/decorator/typeorm-ex.decorator';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
}
