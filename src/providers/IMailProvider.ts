export interface IAdress {
  name: string;
  email: string;
}

export interface IMensagem {
  to:IAdress;
  from:IAdress;
  subject:string;
  body:string;
}
export interface IMailProvider{
  sendEmail(message:IMensagem): Promise<void>
}
