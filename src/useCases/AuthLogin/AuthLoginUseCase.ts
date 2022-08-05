import { IAuthLoginRepository } from '../../repositories/iAuthLoginRepository';
import { IAuthLoginRequestDTO } from './AuthLoginDTO';

export class AuthLoginUseCase {
  constructor(private authLoginRepository: IAuthLoginRepository) {}

  async execute(data:IAuthLoginRequestDTO) {
    const userAlreadyExists = await this.authLoginRepository.findyByEmail(data.email);
    if (!userAlreadyExists) { throw new Error(`User ${data.email} does not exists`); }

    const confere = await this.authLoginRepository.findByPassword(data.email, data.password);
    if (!confere) throw new Error(`User ${data.email} does not exists`);

    const resultUser = await this.authLoginRepository.getUserLogin(data.email);
    return resultUser;
  }
}
