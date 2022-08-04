import { User } from '../../entities/User';
import { IMailProvider } from '../../providers/IMailProvider';
import { IUsersRepository } from '../../repositories/IUserRepository';
import { bcriptCreateHash } from '../../util/configBcript/configBcript';
import { ICreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private mailProvider: IMailProvider,
  ) {}

  async execute(data:ICreateUserRequestDTO) {
    const userAlreadyExists = await this.userRepository.findyByEmail(data.email);
    if (userAlreadyExists) {
      throw new Error(`User ${data.email} already exists`);
    }
    const hashPassword = bcriptCreateHash({ value: data.password });
    const newUser = {
      ...data,
      password: hashPassword,
    };
    const user = new User(newUser);
    await this.userRepository.save(user);

    this.mailProvider.sendEmail({
      to: {
        email: data.email,
        name: data.name,
      },
      from: {
        email: 'equipemeuapp@gmail.com',
        name: 'E-mail',
      },
      body: '<p> você já pode fazer login em nossa plataforma </p>',
      subject: 'Seja bem vindo a plataforma',
    });
  }
}
