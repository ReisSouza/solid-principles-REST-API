export interface ICreateUserRequestDTO{
  name: string;
  email: string;
  password: string;
  user_id: string;
  created_on:Date;
  last_login:Date;
}
