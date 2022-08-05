/* eslint-disable camelcase */
/* eslint-disable no-undef */

import { Request, Response } from 'express';
import { uuid } from 'uuidv4';
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
        created_on: new Date(),
        last_login: new Date(),
        user_id: uuid(),
      });
      return response.status(201).send();
    } catch (errors) {
      return response.status(400).json({
        message: errors.message || 'Unexpected error',
      });
    }
  }
}
