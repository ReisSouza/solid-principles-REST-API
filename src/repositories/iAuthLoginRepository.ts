import { User } from '../entities/User';

export interface IAuthLoginRepository {
  findyByEmail(email: string): Promise<number>;
  findByPassword(email: string, password: string): Promise<boolean>;
  getUserLogin(email: string): Promise<User>;
}
