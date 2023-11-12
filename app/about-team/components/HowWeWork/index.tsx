'use client';
import './how-we-work.scss';
import Segmented from '@/components/Segmented';
import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
const HowWeWork = () => {
  const segmentedOptions = ['Наш метод', 'У других'];
  const [selectedOption, setSelectedOption] = useState<string>(segmentedOptions[0]);
  const isTheirMethod = selectedOption === segmentedOptions[1];
  const handleChangeOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className={'how-we-work'}>
      <Segmented onChange={handleChangeOption} options={segmentedOptions} defaultSelected={selectedOption} />
      <AnimatePresence>
        <ul className={`how-we-work-list ${isTheirMethod ? 'how-we-work-list--their-method' : ''}`}>
          <li>
            <div>
              <span>Знакомимся,</span>
              <span className={isTheirMethod ? 'how-we-work-list__through-text' : ''}>
                погружаемся в вашу задачу, определяем «главное» и составляем бэклог для запуска, поделим проект на
                спринты.
              </span>
              <br />
              <AnimatePresence>
                {isTheirMethod && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className={'how-we-work-list__red-text'}>Получаем тз и начинаем оценивать стоимость.</div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </li>
          <m.li
            animate={{
              width: isTheirMethod ? '96%' : '100%',
              y: isTheirMethod ? -30 : 0,
              x: isTheirMethod ? '6%' : 0,
              transition: {
                delay: 0.15,
              },
            }}
          >
            <div>
              <span>Предоставим</span> минимальную команду и поставим ей задачу
              {isTheirMethod ? <span className={'how-we-work-list__red-text'}>?</span> : '.'}
            </div>
            <div>
              <span>Определим</span> минимальный бюджет
              {isTheirMethod ? <span className={'how-we-work-list__red-text'}>?</span> : '.'}
              <AnimatePresence>
                {isTheirMethod && (
                  <m.div
                    initial={{ height: 0, opacity: 0, marginTop: '0px' }}
                    animate={{ height: 'auto', opacity: 1, marginTop: '20px' }}
                    exit={{ height: 0, opacity: 0, marginTop: '0px' }}
                  >
                    <div className={'how-we-work-list__red-text'}>
                      Нет, мы составим план максимум, чтоб заработать как можно больше. ¯\_(ツ)_/¯
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </m.li>
          <m.li
            animate={{
              y: isTheirMethod ? -35 : 0,
            }}
          >
            <div>
              <span className={isTheirMethod ? 'how-we-work-list__through-text' : ''}>Превратим </span>
              <span className={isTheirMethod ? 'how-we-work-list__through-text' : ''}>
                ваш проект в «первую версию» продукта.
              </span>
              <br />
              <AnimatePresence>
                {isTheirMethod && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className={'how-we-work-list__red-text'}>Проект раздувается и становится неуправляемым.</div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </m.li>
          <m.li
            animate={{
              width: isTheirMethod ? '96%' : '100%',
              y: isTheirMethod ? -65 : 0,
              x: isTheirMethod ? '6%' : 0,
              transition: {
                delay: 0.15,
              },
            }}
          >
            <div>
              <span>Проверяем</span> гипотезы, после чего улучшаем и развиваем работающую систему.
              <br />
              <AnimatePresence>
                {isTheirMethod && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className={'how-we-work-list__red-text'}>КАК?? Хаааааааоооооооос!!!</div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </m.li>
        </ul>
      </AnimatePresence>
    </div>
  );
};

export default HowWeWork;
