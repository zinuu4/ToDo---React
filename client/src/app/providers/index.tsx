import React, { ReactNode } from 'react';

import { StoreProvider } from './store';
import { AuthProvider } from './auth';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider>
      <AuthProvider>{children}</AuthProvider>
    </StoreProvider>
  );
};
