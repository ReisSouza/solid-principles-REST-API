import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import { pool } from './config/configDataBase/database';
import { router } from './routes';

const app = express();
pool.connect();
app.use(express.json());
app.use(morgan('dev'));
app.use(router);
export { app };
