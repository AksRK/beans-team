'use client';
import { FC, ReactNode } from 'react';
import './button.scss';
import { motion } from 'framer-motion';

interface IButton {
  children: ReactNode;
  fullWidth?: boolean;
  color?: 'primary' | 'dark';
  onClick?: () => void;
  whileTapAnimation?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<IButton> = ({
  children,
  fullWidth = false,
  color = 'primary',
  onClick,
  whileTapAnimation = true,
  type = 'button',
}) => {
  const buttonColor = {
    primary: ' button--color-primary',
    dark: ' button--color-dark',
  };
  const buttonClassNames = ['button', buttonColor[color], fullWidth ? ' button--full-width' : ''].join('');
  const whileTap = whileTapAnimation ? { scale: fullWidth ? 0.97 : 0.9 } : undefined;
  return (
    <motion.button type={type} onClick={onClick} whileTap={whileTap} className={buttonClassNames}>
      {children}
    </motion.button>
  );
};

export default Button;
