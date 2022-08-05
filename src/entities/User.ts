import { uuid } from 'uuidv4';

export class User {
  public user_uuid : string;

  public name : string;

  public email : string;

  public password : string;

  public created_on: Date;

  public last_login: Date;

  constructor(props:Omit<User, 'user_uuid'>, userUuid?:string) {
    Object.assign(this, props);
    if (!userUuid) {
      this.user_uuid = uuid();
    }
  }
}
