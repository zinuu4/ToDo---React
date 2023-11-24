import clsx from 'clsx';
import React from 'react';

import { MainMenu } from './MainMenu';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={clsx(styles.header, 'container')}>
      <MainMenu />
    </header>
  );
};
