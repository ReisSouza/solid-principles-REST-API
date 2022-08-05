import bcrypt from 'bcrypt';
import { pool } from '../../config/configDataBase/database';
import { User } from '../../entities/User';
import { IAuthLoginRepository } from '../iAuthLoginRepository';

export class PostgressAuthLoginRepository implements IAuthLoginRepository {
  async findyByEmail(email:string): Promise<number> {
    const { rowCount } = await pool.query(
      `SELECT email FROM accounts WHERE email = '${email}'`,
    );
    return rowCount;
  }

  async findByPassword(email:string, password:string): Promise<boolean> {
    const SQL = 'SELECT password FROM accounts WHERE email = $1';
    const value = [email];

    const { rows } = await pool.query(SQL, value);

    const [{ password: passwordDB }] = rows;
    const confere = await bcrypt.compare(password, passwordDB);

    return confere;
  }

  async getUserLogin(email: string): Promise<User> {
    const SQL = 'SELECT * FROM accounts WHERE email = $1';
    const value = [email];

    const { rows } = await pool.query(SQL, value);

    const result = rows[0] as User;

    return result;
  }
}
