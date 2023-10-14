import './title.scss';
import { FC, ReactNode } from 'react';
import { geometriaMedium } from '@/core/fonts/Geometria';

interface ITitle {
  children: ReactNode;
  className?: string;
  color?: 'white';
}

const Title: FC<ITitle> = ({ children, className, color }) => {
  const colors = {
    white: 'title--white',
  };
  return (
    <h2 className={`title ${color ? colors[color] : ''} ${geometriaMedium.className} ${className ? className : ''}`}>
      {children}
    </h2>
  );
};

export default Title;
