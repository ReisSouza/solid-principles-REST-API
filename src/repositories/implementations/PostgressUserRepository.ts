import { User } from '../../entities/User';
import { IUsersRepository } from '../IUserRepository';

export class PostgressUserRepository implements IUsersRepository {
  private users: User[] = [];

  async findyByEmail(email:string): Promise<User> {
    const user = await this.users.find((item) => item.email === email);

    return user;
  }

  async save(user:User): Promise<void> {
    this.users.push(user);
  }
}
