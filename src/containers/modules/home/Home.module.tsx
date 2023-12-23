'use client';
import { createContext, useContext } from 'react';
import { Home } from '@/containers/components';
  
export interface HomeModuleInjectedProps {}

const HomeModuleContext = createContext<HomeModuleInjectedProps>({});

export const useHomeModuleContext = () => {
  const ctx = useContext<HomeModuleInjectedProps>(HomeModuleContext);
  return ctx;
};

const HomeModule = () => {
  return (
    <HomeModuleContext.Provider value={{}}>
      <Home />
    </HomeModuleContext.Provider>
  );
};

export default HomeModule;