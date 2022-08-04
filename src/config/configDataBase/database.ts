import { Pool } from 'pg';

import logger from '../configLogger';
import 'dotenv/config';

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
});

pool
  .connect()
  .then(() => {
    logger.info(`Successfully connected databases ${process.env.DB_DATABASE}`);
  })
  .catch(() => {
    logger.fatal(`Error connecting to database ${process.env.DB_DATABASE}`);
  });
