import clsx from 'clsx';
import React from 'react';

import { MainMenu } from './MainMenu';
import { ProfileButton } from './ProfileButton';
import { LanguageSwitcher } from './LanguageSwitcher';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx('container', styles.container)}>
        <MainMenu />
        <div className={styles.row}>
          <LanguageSwitcher />
          <ProfileButton />
        </div>
      </div>
    </header>
  );
};
