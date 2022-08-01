import { Router } from 'express';
import { createUserController } from './useCases/Createuser';

const router = Router();

router.post('/user', (req, res) => createUserController.handle(req, res));

export { router };
