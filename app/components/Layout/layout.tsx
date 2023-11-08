'use client';
import './layout.scss';
import { ReactNode, useContext, useEffect, useRef } from 'react';
import Home from '@/app/page';
import AboutTeamPage from '@/app/about-team/page';
import Header from '@/components/Header';
import { m, motion, AnimatePresence, useInView, LazyMotion, domAnimation, useWillChange } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';
import SolutionsPage from '@/app/solutions/page';
import PageNav from '@/components/PageNav';
import ModalContainer from '@/components/UI/ModalContainer';
import DiscussFormModal from '@/components/DiscussFormModal';
import { PageTransitionContext } from '@/components/Contexts/PageTransition';

export default function RootClientLayout({ children }: { children: ReactNode }) {
  const footerRef = useRef<HTMLDivElement>(null);
  const pageWrpRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const markInView = useInView(markRef);
  const pathName = usePathname();
  const { isAnimationPlay, setIsAnimationPlay } = useContext(PageTransitionContext);
  const willChange = useWillChange();

  const routes = [
    { path: '/', component: <Home /> },
    { path: '/about-team', component: <AboutTeamPage /> },
    { path: '/solutions', component: <SolutionsPage /> },
  ];

  const animatedRoutes = routes.map(route => route.path);

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathName]);

  useEffect(() => {
    const body = document.querySelector('body');

    if (body && isAnimationPlay) {
      body.style.overflow = 'hidden';
      body.style.height = '100vh';
    }
    if (body && !isAnimationPlay) {
      body.style.overflow = 'visible';
      body.style.height = 'auto';
    }
  }, [isAnimationPlay]);

  const variants = {
    initial: {
      y: '100vh',
      borderRadius: '30px',
    },
    animate: {
      y: 0,
      borderRadius: 0,
      transition: {
        borderRadius: {
          duration: 0.2,
          delay: 0.7,
        },
        y: { duration: 0.3, delay: 0.4 },
      },
    },
    exit: {
      origin: '-50%',
      opacity: 0.5,
      scale: 0.9,
      maxHeight: '50vh',
      overflow: 'hidden',
      borderRadius: '30px',
      transition: {
        duration: 0.8,
        scale: {
          duration: 0.3,
        },
        borderRadius: { duration: 0.1 },
        opacity: {
          duration: 0.5,
        },
      },
    },
  };

  return (
    <>
      <div
        id={'page'}
        ref={pageWrpRef}
        className={`page-wrp ${markInView && !isAnimationPlay ? 'page-wrp--view-footer' : ''}`}
      >
        <LazyMotion features={domAnimation}>
          <AnimatePresence initial={false} mode={'popLayout'}>
            {animatedRoutes.includes(pathName) ? (
              <m.main
                key={pathName}
                variants={variants}
                initial={'initial'}
                animate={'animate'}
                exit={'exit'}
                style={{ willChange }}
                className={`main`}
                onAnimationStart={() => setIsAnimationPlay(true)}
                onAnimationComplete={() => {
                  setTimeout(() => {
                    setIsAnimationPlay(false);
                  }, 100);
                }}
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
        <AnimatePresence>
          {markInView && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={'page-blackout'}
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
      <div ref={markRef} className={'page-wrp__mark'}></div>
      <Footer ref={footerRef} isVisible={markInView} />
      <PageNav isVisible={!markInView} disabled={isAnimationPlay} />
      <DiscussFormModal />
      <ModalContainer />
    </>
  );
}
