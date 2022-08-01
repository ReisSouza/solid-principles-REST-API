import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { IMailProvider, IMensagem } from '../IMailProvider';

export class MailtrapProvider implements IMailProvider {
  private transporter:Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'ca29c0df2034ee',
        pass: '8fd5895a9048d2',
      },
    });
  }

  async sendEmail(message: IMensagem): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
