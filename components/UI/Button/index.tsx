'use client';
import { FC, ReactNode } from 'react';
import './button.scss';
import { motion } from 'framer-motion';

interface IButton {
  children: ReactNode;
  fullWidth?: boolean;
  color?: 'primary' | 'dark';
}

const Button: FC<IButton> = ({ children, fullWidth = false, color = 'primary' }) => {
  const buttonColor = {
    primary: ' button--color-primary',
    dark: ' button--color-dark',
  };
  const buttonClassNames = ['button', buttonColor[color], fullWidth ? ' button--full-width' : ''].join('');
  return (
    <motion.button whileTap={{ scale: fullWidth ? 0.97 : 0.9 }} className={buttonClassNames}>
      {children}
    </motion.button>
  );
};

export default Button;
