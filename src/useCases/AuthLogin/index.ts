import { PostgressAuthLoginRepository } from '../../repositories/implementations/PostgressAuthLoginRepository';
import { AuthLoginController } from './AuthLoginController';
import { AuthLoginUseCase } from './AuthLoginUseCase';

const postgressUserRepository = new PostgressAuthLoginRepository();
const authLoginUseCase = new AuthLoginUseCase(postgressUserRepository);
const authLoginController = new AuthLoginController(authLoginUseCase);

export { authLoginUseCase, authLoginController };
