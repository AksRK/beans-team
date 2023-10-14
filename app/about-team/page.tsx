'use client';
import './styles/_about-team-page.scss';
import Title from '@/components/UI/Title';
import Link from 'next/link';
import Image from 'next/image';
import { founder_1, founder_2 } from '@/core/constants/founders';
import { AnimatePresence, m, useInView } from 'framer-motion';
import HowWeWork from '@/app/about-team/components/HowWeWork';
import { reviews } from '@/app/about-team/mock/reviews.mock';
import { useEffect, useRef, useState } from 'react';
import ScrollableSegmentedControl from '@/components/ScrollableSegmented';
import { ourApproachItems, ourApproachThemes } from '@/app/about-team/mock/our-approach.mock';

const AboutTeamPage = () => {
  const [reviewsList, setReviewsList] = useState<typeof reviews>([]);
  const reviewsRef = useRef<HTMLDivElement | null>(null);
  const reviewsInView = useInView(reviewsRef, { margin: '0px 0px -400px 0px', once: true });
  const [isReviewAnimated, setIsReviewAnimated] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [selectedOurApproachTheme, setSelectedOurApproachTheme] = useState(ourApproachThemes[0]);

  useEffect(() => {
    if (reviewsInView && !isReviewAnimated && reviewsList.length + 1 <= reviews.length) {
      const reviewTimer = setTimeout(
        () => {
          setReviewsList(prevState => [...prevState, reviews[currentReviewIndex]]);
          setCurrentReviewIndex(prevState => prevState + 1);
        },
        currentReviewIndex === 0 ? 300 : 2000
      );

      return () => clearTimeout(reviewTimer);
    }
  }, [reviewsInView, isReviewAnimated]);

  const navLinks = [
    { path: '#about-team', text: 'Кто руководит' },
    { path: '#how-we-work', text: 'Наш метод' },
    { path: '#our-approach', text: 'Наш подход' },
    { path: '#reviews', text: 'Отзывы' },
  ];

  const handleScrollToSection = (sectionId: string) => {
    const page = document.querySelector('#page');
    const section = page?.querySelector(sectionId);
    if (section && page) {
      const sectionRect = section.getBoundingClientRect();
      const marginTop = 80;
      const options: ScrollToOptions = {
        top: sectionRect.top - marginTop,
        behavior: 'smooth',
      };
      page.scrollTo(options);
    }
  };

  const handleChangeOurApproachTheme = (theme: string) => {
    setSelectedOurApproachTheme(theme);
  };

  const ourApproachAnimationVariants = {
    initial: {
      opacity: 0,
      x: -300,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
    exit: {
      x: 300,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <section className={'small-container'}>
        <Title>О команде</Title>
        <nav className={'about-team-nav'}>
          {navLinks.map(link => (
            <Link
              onClick={() => handleScrollToSection(link.path)}
              key={link.path}
              href={link.path}
              className={'about-team-nav__item'}
            >
              {link.text}
            </Link>
          ))}
        </nav>
        <p>Мы работаем с клиентами, которые хорошо знают свой бизнес и которым не все равно.</p>
        <p>
          Превращаем проекты в работающую «первую версию» — оставялем главное, выкидываем все, что не нужно, и пробуем
          запустить это как можно скорее.
        </p>
        <p>
          Обычно наши проекты работают на next.js, что позволяет расширить их функциональность и увеличить скорость
          загрузки. А для более быстрого старта мы используем традиционный стек.
        </p>
      </section>
      <m.section
        animate={{ y: 0, opacity: [0, 1] }}
        transition={{ y: { from: 400, duration: 0.7 }, duration: 0.6, delay: 0.2 }}
        className={'about-team-founders-wrp'}
      >
        <div id={'about-team'} className={'small-container'}>
          <Title className={'about-team-founders-title'} color={'white'}>
            Кто руководит командой
          </Title>
          <div className={'about-team-founders'}>
            {[founder_1, founder_2].map((founder, index) => (
              <div className={'about-team-founder'} key={'founder_' + index}>
                <div className={'about-team-founder__img'}>
                  <Image src={founder.imagePath} alt={founder.imagePath} fill={true} />
                </div>
                <div className={'about-team-founder__info'}>
                  <Link className={'about-team-founder__name-link'} href={founder.telegram}>
                    {founder.fullName}
                  </Link>
                  <p>{founder.responsible}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={'about-team-founders-task-definition'}>
            <p>Бывает, к нам обращаются не за ответами на вопросы, а чтобы сформулировать сами вопросы.</p>
            <p>
              Обычно пишут: «я не знаю, какие задачи вам поставить, чтоб выпустить проект»; «что нужно включить в тз, а
              что выкинуть»; «нужно ли это, что сейчас важно для меня».
            </p>
            <p>
              <span>
                <Link href={founder_1.telegram}>Пишите</Link>
              </span>
              , постараемся помочь.
            </p>
          </div>
        </div>
      </m.section>
      <section>
        <div id={'how-we-work'} className={'small-container'}>
          <Title>Как мы работаем</Title>
          <HowWeWork />
        </div>
      </section>
      <section>
        <div id={'our-approach'} className={'small-container'}>
          <Title className={'about-team-our-approach-title'}>Наш подход к вашей задаче</Title>
          <ScrollableSegmentedControl
            onChange={handleChangeOurApproachTheme}
            defaultSelected={selectedOurApproachTheme}
            items={ourApproachThemes}
          />
          <AnimatePresence mode={'wait'}>
            {ourApproachItems[selectedOurApproachTheme] && (
              <m.ul
                className={'about-team-our-approach-list'}
                variants={ourApproachAnimationVariants}
                initial={'initial'}
                animate={'animate'}
                exit={'exit'}
                key={selectedOurApproachTheme}
              >
                {ourApproachItems[selectedOurApproachTheme].map((item, index) => (
                  <li key={'ourApproachItem_' + index}>{item}</li>
                ))}
              </m.ul>
            )}
          </AnimatePresence>
        </div>
      </section>
      <section>
        <div id={'reviews'} className={'small-container'} ref={reviewsRef}>
          <Title className={'about-team-reviews-title'}>Отзывы, которые люди написали сами</Title>
          <ul className={'about-team-reviews-wrp'}>
            <AnimatePresence>
              {reviewsList.map((review, index) => (
                <m.li key={'review_' + index} className={'about-team-review'}>
                  <m.div
                    initial={{ opacity: 0, x: 330 }}
                    animate={
                      reviewsInView && {
                        opacity: 1,
                        x: 0,
                        transition: { ease: 'easeOut', duration: 0.6 },
                      }
                    }
                    onAnimationStart={() => setIsReviewAnimated(true)}
                    onAnimationComplete={() => setIsReviewAnimated(false)}
                    className={'about-team-reviewer'}
                  >
                    <div className={'about-team-reviewer__img'}>
                      <Image src={review.user.image} alt={review.user.image} fill={true} />
                    </div>
                    <div className={'about-team-reviewer__info'}>
                      {`${review.user.fullName}, `}
                      <a href={review.company.link} target={'_blank'} rel={'nofollow noopener noreferrer'}>
                        {review.company.name}
                      </a>
                    </div>
                  </m.div>
                  <m.div
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { ease: 'easeInOut', duration: 1, delay: 0.5 },
                    }}
                    className={'about-team-review__details'}
                  >
                    {review.review}
                  </m.div>
                </m.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AboutTeamPage;
