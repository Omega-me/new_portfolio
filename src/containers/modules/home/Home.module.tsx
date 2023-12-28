'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { Home } from '@/containers/components';

export interface HomeModuleInjectedProps {
  className?: string;
}

const HomeModuleContext = createContext<HomeModuleInjectedProps>({});

export const useHomeModuleContext = () => {
  const ctx = useContext<HomeModuleInjectedProps>(HomeModuleContext);
  return ctx;
};

const HomeModule = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const className = scroll > 100 ? 'fixed-navbar active' : 'fixed-navbar';

  return (
    <HomeModuleContext.Provider value={{ className }}>
      <Home />
    </HomeModuleContext.Provider>
  );
};

export default HomeModule;
