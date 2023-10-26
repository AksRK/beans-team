import { IFormBodyDto } from '@/app/api/mailer/dto';

const EmailBodyRender = (data: IFormBodyDto) => {
  return `
        <div style="box-sizing: border-box; width: 100%; padding: 20px 20px 0 20px; background-color: #000000;">
            <div style="box-sizing: border-box; width: 100%; height: 100%; padding: 20px 20px 70px 20px; border-radius: 23px 23px 0 0; background-color: #ffffff; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                <h1 style="box-sizing: border-box; margin: 20px auto; width: fit-content;">У вас новая заявка </h1>
                <div style="box-sizing: border-box; margin-top: 40px;">
                    <span style="font-weight: bold;">
                        Имя:
                    </span>
                    <span style="margin-left: 10px;">
                        ${data.fullName}
                    </span>
                    <br>
                    <span style="font-weight: bold;">
                        Номер телефона:
                    </span>
                    <span style="margin-left: 10px;">
                        ${data.phoneNumber}
                    </span>
                    <br>
                    <span style="font-weight: bold;">
                        Описание проекта:
                    </span>
                    <span style="margin-left: 10px;">
                        ${data.projectDescription}
                    </span>
                    <br>
                    <span style="font-weight: bold;">
                        Что будет являться успехом:
                    </span>
                    <span style="margin-left: 10px;">
                        ${data.projectExpectations}
                    </span>
                    <br>
                    <span style="font-weight: bold;">
                        Условие оплаты:
                    </span>
                    <span style="margin-left: 10px;">
                        ${!data.paymentTermLater ? data.paymentTerm : 'Обсудить позже'}
                    </span>
                    <br>
                    <span style="font-weight: bold;">
                        Бюджет:
                    </span>
                    <span style="margin-left: 10px;">
                        ${data.budget}
                    </span>
                </div>
            </div>
        </div>
        `;
};

export default EmailBodyRender;
