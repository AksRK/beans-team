'use client';
import './styles/_home.scss';
import Link from 'next/link';
import Title from '@/components/UI/Title';
import desktop_1_Animation from './components/animations/desktop-1.json';
import desktop_2_Animation from './components/animations/desktop-2.json';
import { useLottie } from 'lottie-react';

export default function Home() {
  const optionsBox_1 = {
    animationData: desktop_1_Animation,
  };

  const optionsBox_2 = {
    animationData: desktop_2_Animation,
  };
  const box_1_animation = useLottie(optionsBox_1);
  const box_2_animation = useLottie(optionsBox_2);

  return (
    <>
      <section className={'small-container home-page'}>
        <Title>Команда дизайнеров, исследователей и разработчиков</Title>
        <p>
          Наша страсть — находить новые и смелые решения, доносить их до вашей аудитории и превращать это в продукт. Это
          когда вы приходите к нам за дизайном, а получаете еще и исследования, блоксхемы, си-джей-эм, подтвержденные
          гипотезы, и вдумчивый выпуск.
        </p>
      </section>
      <section className={'large-container'}>
        <div className={'links-box-wrp'}>
          <Link href={'/about-team'} className={'link-box-wrp'}>
            <div className={'link-box link-box--bg-dark'}>{box_1_animation.View}</div>
          </Link>
          <Link href={'/solutions'} className={'link-box-wrp'}>
            <div className={'link-box link-box--bg-primary'}>{box_2_animation.View}</div>
          </Link>
        </div>
      </section>
    </>
  );
}
