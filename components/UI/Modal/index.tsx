'use client';
import './modal.scss';
import { FC, useEffect, useState, ReactNode, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  open: boolean;
  setClose: () => void;
  children: ReactNode;
  childrenAlign?: 'center' | 'end';
}
let openModalCount = 0;
const Modal: FC<ModalProps> = ({ open, setClose, children, childrenAlign = 'center' }) => {
  const [rootElement, setRootElement] = useState<Element | null>(null);

  useEffect(() => {
    const body = document.querySelector('body');
    if (!rootElement) {
      const modalRoot = document.querySelector('#modal-container');
      setRootElement(modalRoot);
    }

    if (open) {
      openModalCount++;
    }
    if (!open && openModalCount > 0) {
      openModalCount--;
    }

    if (body && openModalCount > 0) {
      body?.classList.add('overflow-hidden');
    } else {
      body?.classList.remove('overflow-hidden');
    }
  }, [open]);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setClose();
    }
  };

  if (rootElement) {
    return createPortal(
      <AnimatePresence mode={'wait'}>
        {open && (
          <motion.div
            className={`modal-backdrop ${
              childrenAlign === 'center'
                ? 'modal-backdrop--children-align-center'
                : 'modal-backdrop--children-align-end'
            }`}
            key={'modal-overlay'}
            onClick={handleBackdropClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>,
      rootElement
    );
  }
};

export default Modal;
