import { pool } from '../../config/configDataBase/database';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUserRepository';

export class PostgressUserRepository implements IUsersRepository {
  async findyByEmail(email:string): Promise<number> {
    const { rowCount } = await pool.query(
      `SELECT email FROM accounts WHERE email = '${email}'`,

    );

    return rowCount;
  }

  async save(user:User): Promise<void> {
    const query = {
      text: ` 
    INSERT INTO accounts("password", created_on, email, last_login,  username, uuid)
    VALUES ($1, $2, $3, $4, $5, $6);
    `,
      values:
      [user.password, user.created_on, user.email, user.last_login, user.name, user.user_uuid],
    };
    await pool.query(query);
  }
}
