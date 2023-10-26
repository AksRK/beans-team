'use client';
import './questions-pop-up.scss';
import PopUp from '@/components/UI/PopUp';
import { FC, useContext } from 'react';
import Button from '@/components/UI/Button';
import { DiscussFormVisibilityContext } from '@/components/Contexts/DiscussFormVisibility';

interface IQuestionsPopUp {
  open: boolean;
  setClose: () => void;
}
const QuestionsPopUp: FC<IQuestionsPopUp> = ({ open, setClose }) => {
  const { isVisibleDiscussForm, setIsVisibleDiscussForm } = useContext(DiscussFormVisibilityContext);
  return (
    <PopUp title={'Вопросы:'} open={open} setClose={setClose}>
      <ul className={'question-pop-up-list'}>
        {[
          '1. Чем занимается ваша компания?',
          '2. Какие сейчас перед вами проблемы, задачи, вызовы? ',
          '2. Какие сейчас перед вами проблемы, задачи, вызовы? ',
          '4. Какой могла бы быть первая версия вашего продукта / онлайн-сми / бренда?',
          '5. Что нам нужно изучить перед работой?',
          '6. Какова ваша личная роль?',
          '7. Кто также принимает решения о дизайне?',
        ].map((text, index) => (
          <li key={'question_' + index}>{text}</li>
        ))}
      </ul>
      <div className={'question-pop-up-btn-wrp'}>
        <Button onClick={() => setIsVisibleDiscussForm(!isVisibleDiscussForm)}>Написать</Button>
      </div>
    </PopUp>
  );
};

export default QuestionsPopUp;
