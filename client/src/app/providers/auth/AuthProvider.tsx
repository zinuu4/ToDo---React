'use client';

import { ReactNode, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '../store';

// Fix AbortController problem
// Find a way to check for an accessToken existence, so checkAuth req will not be called when a user opens page first time

export const AuthProvider = observer(
  ({ children }: { children: ReactNode }) => {
    const { userStore } = useStore();

    useEffect(() => {
      // const controller = new AbortController();
      // const { signal } = controller;

      userStore.checkAuth();

      // return () => controller.abort();
    }, [userStore]);

    return <>{children}</>;
  },
);
