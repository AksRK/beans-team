import './title.scss';
import { FC, ReactNode } from 'react';
import { geometriaMedium } from '@/core/fonts/Geometria';

interface ITitle {
  children: ReactNode;
  className?: string;
}

const Title: FC<ITitle> = ({ children, className }) => {
  return <h2 className={`title ${geometriaMedium.className} ${className}`}>{children}</h2>;
};

export default Title;
