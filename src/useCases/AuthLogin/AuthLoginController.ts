import { Request, Response } from 'express';
import { AuthLoginUseCase } from './AuthLoginUseCase';

export class AuthLoginController {
  constructor(private authLoginController: AuthLoginUseCase) {}

  async handle(request:Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const result = await this.authLoginController.execute({
      email, password,
    });

    return response.status(200).json(result);
  }
}
