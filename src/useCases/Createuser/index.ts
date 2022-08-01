import { MailtrapProvider } from '../../providers/implementations/MailtrapMailProvider';
import { PostgressUserRepository } from '../../repositories/implementations/PostgressUserRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const postgressUserRepository = new PostgressUserRepository();
const mailtrapMailProvider = new MailtrapProvider();

const createUserUseCase = new CreateUserUseCase(
  postgressUserRepository,
  mailtrapMailProvider,
);

const createUserController = new CreateUserController(
  createUserUseCase,
);

export { createUserController, createUserUseCase };
