'use client';
import './page-nav.scss';
import Segmented from '@/components/Segmented';
import Button from '@/components/UI/Button';
import { FC, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface IPageNav {
  isVisible: boolean;
}

const PageNav: FC<IPageNav> = ({ isVisible }) => {
  const pathName = usePathname();
  const router = useRouter();
  const routes = [
    { name: 'Бинс', path: '/' },
    { name: 'Наши решения', path: '/solutions' },
  ];

  const [selectedOption, setSelectedOption] = useState<string>('Бинс');

  const followLink = (option: string) => {
    setSelectedOption(option);
    const selectedRoute = routes.find(route => route.name === option);
    if (selectedRoute) {
      router.push(selectedRoute.path);
    }
  };

  useEffect(() => {
    const selectedRoute = routes.find(route => route.path === pathName);
    if (selectedRoute) {
      setSelectedOption(selectedRoute.name);
    }
  }, [pathName]);

  const animationVariants = {
    animate: {
      bottom: !isVisible ? 20 : -100,
      transition: {
        bottom: { duration: 0.6, delay: !isVisible ? 0.5 : 0.1 },
      },
    },
  };

  return (
    <motion.div animate={'animate'} variants={animationVariants} className={'page-nav-wrp'}>
      <Segmented
        rootClassName={'page-nav--backdrop-blur'}
        options={routes.map(route => route.name)}
        defaultSelected={selectedOption}
        onChange={followLink}
      >
        <Button>Обсудить проект</Button>
      </Segmented>
    </motion.div>
  );
};

export default PageNav;
