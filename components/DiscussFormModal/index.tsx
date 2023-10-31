import './discuss-form.scss';
import Modal from '@/components/UI/Modal';
import { useContext, useEffect, useState } from 'react';
import { DiscussFormVisibilityContext } from '@/components/Contexts/DiscussFormVisibility';
import { motion } from 'framer-motion';
import Title from '@/components/UI/Title';
import { useForm } from 'react-hook-form';
import Button from '@/components/UI/Button';
import { Input, TextArea } from '@/components/UI/Input';
import FormItem from '../UI/FormItem';
import Radio from '@/components/UI/Radio';
import Switch from '@/components/UI/Switch';
import RadioPaymentsTermList, { IPaymentTerm } from '@/components/UI/RadioPaymentsTermList';
import CloseSvg from '@/components/UI/svg/close';

const DiscussFormModal = () => {
  const { isVisibleDiscussForm, setIsVisibleDiscussForm } = useContext(DiscussFormVisibilityContext);
  const {
    reset,
    getValues,
    setValue,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const paymentTermLater = watch('paymentTermLater');
  const paymentTerm = watch('paymentTerm');
  const budget = watch('budget');
  const [isThanksWindowOpen, setIsThanksWindowOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const budgetItems = ['Менее 100 тыс', '500 тыс', '1млн', 'Более 1млн'];
  const paymentsTermsItems: IPaymentTerm[] = [
    {
      name: 'Time & Material',
      price: 'От 50 $/ час ',
      description: [
        'Начинаем, когда полностью понимаем задачу и имеем все исходные материалы.',
        'Подходит, если объем загрузки подвижен в течение месяца. Команда формируется в зависимости от задачи.',
      ],
    },
    {
      name: 'Retainer',
      price: 'От 3000 $/ месяц',
      description: [
        'Оплата за команду.',
        'Команда, которая выделяется под проект и не загружается другими задачами. Подходит при стабильной загрузке. Регулярный платеж раз в месяц.',
      ],
    },
    {
      name: 'Быстрый запуск',
      price: '100 $ ',
      description: [
        'Используем webflow, tilda, readymag, чтобы быстро запустить ваш первый продукт — сайт.',
        'Это решение дает возможность быстро тестировать различные гипотезы и обладать высокой скоростью изменений.',
      ],
    },
  ];

  const setDefaultValues = () => {
    setValue('paymentTerm', paymentsTermsItems[0].name);
    setValue('paymentTermLater', false);
    setValue('budget', budgetItems[0]);
  };

  useEffect(() => {
    setDefaultValues();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsThanksWindowOpen(false);
        setIsVisibleDiscussForm(false);
        reset();
        setDefaultValues();
        setIsSuccess(false);
      }, 2500);
    }
    if (isError) {
      setTimeout(() => {
        setIsThanksWindowOpen(false);
        setIsError(false);
      }, 2500);
    }
  }, [isSuccess, isError]);
  const onSubmit = async () => {
    const data = getValues();
    setIsThanksWindowOpen(true);
    try {
      const response = await fetch('/api/mailer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        console.log('Данные успешно отправлены');
      } else {
        setIsError(true);
        console.error('Ошибка при отправке данных');
      }
    } catch (error) {
      setIsError(true);
      console.error('Произошла ошибка:', error);
    }
  };

  const variants = {
    initial: {
      y: '100vh',
    },
    animate: {
      y: 0,
      transition: {
        y: {
          type: 'spring',
          bounce: 0.4,
          duration: 0.8,
        },
      },
    },
    exit: {
      y: '100vh',
      transition: {
        duration: 0.4,
      },
    },
  };

  const thanksVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <Modal open={isVisibleDiscussForm} setClose={() => setIsVisibleDiscussForm(false)} childrenAlign={'end'}>
      <div className={'large-container large-container-discuss-form'}>
        <motion.div
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          variants={variants}
          className={'discuss-form-modal'}
        >
          <div className={'discuss-form-modal__head'}>
            <h3>Обсуждение проекта</h3>
            <button onClick={() => setIsVisibleDiscussForm(false)}>
              <CloseSvg />
            </button>
          </div>
          <div className={'discuss-form-modal__body'}>
            <Title>Наша команда готова стартовать ваш проект в ближайший понедельник</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormItem
                name={'projectDescription'}
                label={'Опишите свой проект:'}
                register={register}
                errors={errors}
                rules={{ required: 'Поле обязательно для заполнения' }}
                className={'discuss-form-modal__form-item-small-wrp'}
              >
                <TextArea
                  placeholder={'Например, что за проект, почему вы хотите его запустить, каким вы его видите...'}
                  rows={5}
                  error={!!errors['projectDescription']}
                />
              </FormItem>
              <FormItem
                name={'projectExpectations'}
                label={'Что будет являться успехом'}
                register={register}
                errors={errors}
                rules={{ required: 'Поле обязательно для заполнения' }}
                className={'discuss-form-modal__form-item-small-wrp'}
              >
                <TextArea
                  placeholder={
                    'Обозначьте в цифрах, фактах или ощущениях, что будет являться успехом после запуска проекта'
                  }
                  rows={5}
                  error={!!errors['projectExpectations']}
                />
              </FormItem>
              <div>
                <FormItem name={'paymentTerm'} register={register} label={'Выберите удобное условие оплаты:'}>
                  <RadioPaymentsTermList
                    items={paymentsTermsItems}
                    checkedItem={paymentTerm}
                    onClick={() => setValue('paymentTermLater', false)}
                  />
                </FormItem>
                <div className={'discuss-form-modal__paymentTermLater-wrp'}>
                  <span>Обсудить условия оплаты позже:</span>
                  <FormItem name={'paymentTermLater'} register={register}>
                    <Switch
                      checked={watch('paymentTermLater')}
                      onClick={() => setValue('paymentTerm', paymentTermLater ? paymentsTermsItems[0].name : null)}
                    />
                  </FormItem>
                </div>
              </div>
              <FormItem
                name={'fullName'}
                label={'Как вас зовут'}
                register={register}
                errors={errors}
                rules={{ required: 'Поле обязательно для заполнения' }}
                className={'discuss-form-modal__form-item-small-wrp'}
              >
                <Input placeholder={'Введите свое имя...'} error={!!errors['fullName']} />
              </FormItem>
              <FormItem
                name={'phoneNumber'}
                label={'Ваш номер'}
                register={register}
                errors={errors}
                rules={{
                  required: 'Поле обязательно для заполнения',
                  pattern: {
                    value: /^(\+\d{1,2}\s?)?(\d{10})?$/,
                    message: 'Введите корректный номер телефона, пример +12345678901',
                  },
                }}
                className={'discuss-form-modal__form-item-small-wrp'}
              >
                <Input placeholder={'Введите свой номер...'} error={!!errors['phoneNumber']} />
              </FormItem>
              <FormItem name={'budget'} label={'Бюджет'} register={register}>
                <Radio items={budgetItems} checkedItem={budget} />
              </FormItem>
              <Button type={'submit'} fullWidth color={'dark'}>
                Отправить заявку
              </Button>
              <p>В течение часа мы позвоним вам, чтобы обсудить детали</p>
            </form>
          </div>
        </motion.div>
      </div>
      {isThanksWindowOpen && (
        <motion.div
          variants={thanksVariants}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          className={'discuss-form-modal-thanks'}
        >
          {!isSuccess && !isError && (
            <motion.h3 variants={thanksVariants} initial={'initial'} animate={'animate'} exit={'exit'}>
              Идет отправка...
            </motion.h3>
          )}
          {isSuccess && (
            <motion.h3 variants={thanksVariants} initial={'initial'} animate={'animate'} exit={'exit'}>
              Спасибо за обращение!
              <br /> В ближайшее время мы с вами свяжемся
            </motion.h3>
          )}
          {isError && (
            <motion.h3 variants={thanksVariants} initial={'initial'} animate={'animate'} exit={'exit'}>
              Упс.. Произошла ошибка
              <br /> Попробуйте позже
            </motion.h3>
          )}
        </motion.div>
      )}
    </Modal>
  );
};

export default DiscussFormModal;
