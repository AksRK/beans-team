'use client';
import './layout.scss';
import { ReactNode, useEffect, useRef, useState } from 'react';
import Home from '@/app/page';
import AboutTeamPage from '@/app/about-team/page';
import Header from '@/components/Header';
import { m, AnimatePresence, useInView, LazyMotion, domAnimation } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';
import SolutionsPage from '@/app/solutions/page';
import PageNav from '@/components/PageNav';
import ModalContainer from '@/components/UI/ModalContainer';
import DiscussFormModal from '@/components/DiscussFormModal';

export default function RootClientLayout({ children }: { children: ReactNode }) {
  const footerRef = useRef<HTMLDivElement>(null);
  const pageWrpRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const markInView = useInView(markRef);
  const pathName = usePathname();
  const [isStartAnimation, setIsStartAnimation] = useState(false);

  const routes = [
    { path: '/', component: <Home /> },
    { path: '/about-team', component: <AboutTeamPage /> },
    { path: '/solutions', component: <SolutionsPage /> },
  ];

  const animatedRoutes = routes.map(route => route.path);

  useEffect(() => {
    if (pageWrpRef.current) {
      pageWrpRef.current.scroll(0, 0);
    }
    window.scroll(0, 0);
  }, [pathName]);

  const variants = {
    initial: {
      y: '100vh',
      borderRadius: '40px',
      transition: {
        duration: 0,
      },
    },
    animate: {
      borderRadius: 0,
      y: 0,
      transition: {
        y: { duration: 0.7 },
        borderRadius: { duration: 0.5, delay: 0.3 },
      },
    },
    exit: {
      opacity: 0.1,
      borderRadius: '30px',
      y: '170px',
      transition: {
        duration: 0.7,
        borderRadius: {
          duration: 0.3,
        },
        ease: 'easeInOut',
      },
    },
  };

  return (
    <>
      <div
        id={'page'}
        ref={pageWrpRef}
        className={`page-wrp ${isStartAnimation ? 'page-wrp--hidden' : ''} ${
          markInView ? 'page-wrp--view-footer' : ''
        }`}
      >
        <LazyMotion features={domAnimation}>
          <AnimatePresence initial={false} mode={'popLayout'}>
            {animatedRoutes.includes(pathName) ? (
              <m.main
                key={pathName}
                variants={variants}
                initial="initial"
                animate={'animate'}
                exit={'exit'}
                className={'main'}
                onAnimationStart={() => setIsStartAnimation(true)}
                onAnimationComplete={() => setIsStartAnimation(false)}
              >
                <Header />
                {routes.find(route => route.path === pathName)?.component}
              </m.main>
            ) : (
              <main className={'main'}>
                <Header />
                {children}
              </main>
            )}
          </AnimatePresence>
        </LazyMotion>
        <div ref={markRef} className={'page-wrp__mark'}></div>
      </div>
      <Footer ref={footerRef} isVisible={markInView} />
      <PageNav isVisible={!markInView} disabled={isStartAnimation} />
      <DiscussFormModal />
      <ModalContainer />
    </>
  );
}
