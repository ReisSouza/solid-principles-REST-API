import { User } from '../entities/User';

export interface IUsersRepository {
  findyByEmail(email: string): Promise<number>;
  save(user:User): Promise<void>;
}
