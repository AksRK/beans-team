import { MailerServices } from '@/app/api/mailer/services';
import { IFormBodyDto } from '@/app/api/mailer/dto';

const mailerService = new MailerServices();

export async function POST(request: Request) {
  const formBody: IFormBodyDto = await request.json();
  return mailerService.sendMail(formBody);
}
