'use client';

import React, { ReactNode } from 'react';
import { createContext, useContext } from 'react';

import { UserStore } from './user';

const userStore = new UserStore();

const StoreContext = createContext({ userStore });

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={{ userStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
