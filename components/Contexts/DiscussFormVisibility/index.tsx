'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

interface DiscussFormVisibilityContextType {
  isVisibleDiscussForm: boolean;
  setIsVisibleDiscussForm: (isVisible: boolean) => void;
}

export const DiscussFormVisibilityContext = createContext<DiscussFormVisibilityContextType>({
  isVisibleDiscussForm: false,
  setIsVisibleDiscussForm: (isVisible: boolean) => isVisible,
});

export const useDiscussFormVisibility = () => {
  const context = useContext(DiscussFormVisibilityContext);
  if (!context) {
    throw new Error('useDiscussFormVisibility must be used within a DiscussFormVisibilityProvider');
  }
  return context;
};

export const DiscussFormVisibilityProvider = ({ children }: { children: ReactNode }) => {
  const [isVisibleDiscussForm, setIsVisibleDiscussForm] = useState(false);
  return (
    <DiscussFormVisibilityContext.Provider value={{ isVisibleDiscussForm, setIsVisibleDiscussForm }}>
      {children}
    </DiscussFormVisibilityContext.Provider>
  );
};
