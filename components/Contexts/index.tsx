import { ReactNode } from 'react';
import { DiscussFormVisibilityProvider } from '@/components/Contexts/DiscussFormVisibility';
import { PageTransitionProvider } from '@/components/Contexts/PageTransition';

const AppContexts = ({ children }: { children: ReactNode }) => {
  return (
    <DiscussFormVisibilityProvider>
      <PageTransitionProvider>{children}</PageTransitionProvider>
    </DiscussFormVisibilityProvider>
  );
};

export default AppContexts;
