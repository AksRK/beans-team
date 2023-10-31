import './projcet-card.scss';
import { FC, ReactNode } from 'react';

export interface IProjectCard {
  logo: ReactNode;
  title: string;
  description: string;
  imagesBlock: ReactNode;
}

const ProjectCard: FC<IProjectCard> = ({ logo, title, description, imagesBlock }) => {
  return (
    <div className={'project-card'}>
      <div className={'project-card__info'}>
        <div className={'project-card__head'}>
          {logo}
          <h4 className={'project-card__title'}>{title}</h4>
        </div>
        <p>{description}</p>
      </div>
      <div className={'project-card__images-block'}>{imagesBlock}</div>
    </div>
  );
};

export default ProjectCard;
