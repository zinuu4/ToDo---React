import React, { FC, PropsWithChildren } from 'react';

import { LayoutVariant } from '@/shared/types';

import { Header } from './Header';

interface LayoutProps extends PropsWithChildren {
  variant: LayoutVariant;
}

export const Layout: FC<LayoutProps> = ({ children, variant }) => {
  return (
    <>
      <Header layout={variant} />
      {children}
      <footer></footer>
    </>
  );
};
