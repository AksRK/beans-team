import { ReactNode } from 'react';
import { DiscussFormVisibilityProvider } from '@/components/Contexts/DiscussFormVisibility';

const AppContexts = ({ children }: { children: ReactNode }) => {
  return <DiscussFormVisibilityProvider>{children}</DiscussFormVisibilityProvider>;
};

export default AppContexts;
