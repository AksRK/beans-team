import './solutions.scss';
import Title from '@/components/UI/Title';
import ProjectCard, { IProjectCard } from '@/app/solutions/components/ProjectCard';
import SmetLabLogoSvg from '@/app/solutions/components/svg/smetLabLogoSvg';
import HandSvg from '@/app/solutions/components/svg/handSvg';
import { MyHubLogoSvg, MyHubLogoSvg2 } from '@/app/solutions/components/svg/myHubLogoSvg';
import RocketSvg from '@/app/solutions/components/svg/rocketSvg';
import Link from 'next/link';
import WorkersSvg from '@/app/solutions/components/svg/workersSvg';
const SolutionsPage = () => {
  const projectCardsList: IProjectCard[] = [
    {
      logo: <SmetLabLogoSvg />,
      title: 'Сметная лаборатория',
      description: 'Онлайн-школа по сметному делу. Нас позвали создать бизнес с нуля.',
      imagesBlock: (
        <div>
          <HandSvg />
        </div>
      ),
    },
    {
      logo: <MyHubLogoSvg />,
      title: 'MyHub',
      description:
        'MyHub — это новый формат поиска специалистов под любую задачу, которых сервис подбирает для вас на основе проверки, отзывов и рейтинга.',
      imagesBlock: (
        <div>
          <WorkersSvg />
        </div>
      ),
    },
    {
      logo: <MyHubLogoSvg2 />,
      title: 'MyHub',
      description:
        'MyHub — это новый формат поиска специалистов под любую задачу, которых сервис подбирает для вас на основе проверки, отзывов и рейтинга.',
      imagesBlock: <RocketSvg />,
    },
  ];

  return (
    <section className={'small-container'}>
      <Title>Наши решения</Title>
      <p>
        Мы обязательно превратим любой проект в работающую «первую версию» — оставим главное, выкинем все, что не нужно,
        и попробуем запустить это как можно скорее.
      </p>
      <p>Здесь проекты, которые мы делали:</p>
      <ul className={'project-cards-list'}>
        {projectCardsList.map((project, index) => (
          <li key={'project-card' + index}>
            <Link href={'#'}>
              <ProjectCard {...project} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SolutionsPage;
