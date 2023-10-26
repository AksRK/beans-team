import { IFormBodyDto } from '@/app/api/mailer/dto';
import nodemailer from 'nodemailer';
import EmailBodyRender from '@/app/api/mailer/utils/emailBodyRender';
export class MailerServices {
  async sendMail(data: IFormBodyDto) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env['MAIL_USER'],
        pass: process.env['MAIL_PASS'],
      },
    });

    try {
      await transporter.sendMail({
        from: `"Робот Beans team" <${process.env['MAIL_USER']}>`,
        to: process.env['RECIPIENTS'],
        subject: 'Новая заявка от ' + data?.fullName,
        html: EmailBodyRender(data),
      });
      return new Response(null, {
        status: 200,
      });
    } catch (err) {
      console.error(err);
      return new Response('Bad Request', {
        status: 400,
      });
    }
  }
}
