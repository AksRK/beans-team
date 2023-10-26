'use client';
import './pop-up.scss';
import { FC, ReactNode } from 'react';
import Modal from '@/components/UI/Modal';
import Button from '@/components/UI/Button';
import CloseSvg from '@/components/UI/svg/close';
import { motion } from 'framer-motion';

interface IPopUp {
  open: boolean;
  setClose: () => void;
  children: ReactNode;
  title?: string;
}
const PopUp: FC<IPopUp> = ({ open, setClose, children, title }) => {
  const variants = {
    initial: {
      y: '100vh',
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        y: {
          type: 'spring',
          bounce: 0.4,
          duration: 0.8,
        },
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <Modal open={open} setClose={setClose}>
      <motion.div initial={'initial'} animate={'animate'} exit={'exit'} variants={variants} className={'pop-up'}>
        <div className={'pop-up__head '}>
          {title && <h3>{title}</h3>}
          <Button onClick={setClose} whileTapAnimation={false}>
            <CloseSvg />
          </Button>
        </div>
        <div className={'pop-up__body'}>{children}</div>
      </motion.div>
    </Modal>
  );
};

export default PopUp;
