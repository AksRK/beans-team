'use client';
import './page-nav.scss';
import Segmented from '@/components/Segmented';
import Button from '@/components/UI/Button';
import { FC, useContext, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { DiscussFormVisibilityContext } from '@/components/Contexts/DiscussFormVisibility';

interface IPageNav {
  isVisible: boolean;
  disabled: boolean;
}

const PageNav: FC<IPageNav> = ({ isVisible, disabled }) => {
  const { isVisibleDiscussForm, setIsVisibleDiscussForm } = useContext(DiscussFormVisibilityContext);
  const pathName = usePathname();
  const router = useRouter();
  const routes = [
    { name: 'Бинс', path: '/about-team' },
    { name: 'Наши решения', path: '/solutions' },
  ];

  const [selectedOption, setSelectedOption] = useState<string>('Бинс');

  const followLink = (option: string) => {
    if (!disabled) {
      setSelectedOption(option);
      const selectedRoute = routes.find(route => route.name === option);
      if (selectedRoute) {
        router.push(selectedRoute.path);
      }
    }
  };

  useEffect(() => {
    const selectedRoute = routes.find(route => route.path === pathName);
    if (selectedRoute) {
      setSelectedOption(selectedRoute.name);
    }
  }, [pathName, isVisible]);

  const animationVariants = {
    initial: {
      bottom: -100,
    },
    animate: {
      bottom: 20,
      transition: {
        bottom: { duration: 0.6, delay: isVisible ? 0.3 : 0.2 },
      },
    },
    exit: {
      bottom: -100,
    },
  };

  return (
    <AnimatePresence>
      {isVisible && routes.map(route => route.path).includes(pathName) && (
        <motion.div
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          variants={animationVariants}
          className={'page-nav-wrp'}
        >
          <Segmented
            disabled={disabled}
            rootClassName={'page-nav--backdrop-blur'}
            options={routes.map(route => route.name)}
            defaultSelected={selectedOption}
            onChange={followLink}
          >
            <Button onClick={() => setIsVisibleDiscussForm(!isVisibleDiscussForm)}>Обсудить проект</Button>
          </Segmented>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageNav;
