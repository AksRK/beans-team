'use client';
import './footer.scss';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import { forwardRef } from 'react';
const roboto = Roboto({ weight: '300', subsets: ['cyrillic'] });
import { motion } from 'framer-motion';

interface IFooterProps {
  isVisible: boolean;
}

const Footer = forwardRef<HTMLDivElement, IFooterProps>(({ isVisible }, forwardedRef) => {
  return (
    <>
      <div className={'footer-wrp'}>
        <div className={'large-container ' + roboto.className}>
          <motion.footer
            ref={forwardedRef}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: isVisible ? 2 : 0 }}
            className={'footer'}
          >
            <div className={'founders-help'}>
              <div className={'founders-help__image'}>
                <Image
                  src={'/founders/founder_1.jpeg'}
                  alt={'123'}
                  fill={true}
                  sizes={'(max-width: 576px) 100vw,'}
                  quality={100}
                />
              </div>
              <div className={'founders-help__text'}>
                <span>Нужна помощь в принятии решения?</span>
                <a target={'_blank'} rel={'noreferrer'} href={'https://t.me/German_Bobnev'}>
                  Написать в Telegram
                </a>
              </div>
            </div>
            <div style={{ flex: '0 0 1' }}>2018 → н.в.</div>
          </motion.footer>
        </div>
      </div>
    </>
  );
});

export default Footer;
