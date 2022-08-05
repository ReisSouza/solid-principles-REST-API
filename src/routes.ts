import { Router } from 'express';
import { authLoginController } from './useCases/AuthLogin';
import { createUserController } from './useCases/Createuser';

const router = Router();

router.post('/auth/login', (req, res) => { authLoginController.handle(req, res); });

router.post('/account/created', (req, res) => { createUserController.handle(req, res); });

export { router };
