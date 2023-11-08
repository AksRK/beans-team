'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

interface PageTransitionContextType {
  isAnimationPlay: boolean;
  setIsAnimationPlay: (isVisible: boolean) => void;
}

export const PageTransitionContext = createContext<PageTransitionContextType>({
  isAnimationPlay: false,
  setIsAnimationPlay: (isAnimationPlay: boolean) => isAnimationPlay,
});

export const useDiscussFormVisibility = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error('PageTransitionContext error');
  }
  return context;
};

export const PageTransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isAnimationPlay, setIsAnimationPlay] = useState(false);
  return (
    <PageTransitionContext.Provider value={{ isAnimationPlay, setIsAnimationPlay }}>
      {children}
    </PageTransitionContext.Provider>
  );
};
