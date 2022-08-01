import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(
    private createUserController: CreateUserUseCase,
  ) {}

  async handle(request:Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    try {
      await this.createUserController.execute({
        name,
        email,
        password,
      });
      return response.status(201).send();
    } catch (errors) {
      return response.status(400).json({
        message: errors.message || 'Unexpected error',
      });
    }
  }
}
