import clsx from 'clsx';
import React, { FC } from 'react';
import Link from 'next/link';

import { LayoutVariant } from '@/shared/types';

import { MainMenu } from './MainMenu';
import { ProfileButton } from './ProfileButton';
import { LanguageSwitcher } from './LanguageSwitcher';

import styles from './Header.module.scss';

interface HeaderProps {
  layout: LayoutVariant;
}

export const Header: FC<HeaderProps> = ({ layout }) => {
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx('container', styles.container)}>
        {layout === 'app' && <MainMenu />}
        <div className={clsx(styles.row, layout === 'auth' && styles.auth)}>
          {layout === 'auth' && (
            <Link href="/" className={styles.homeLink}>
              AchievoMate
            </Link>
          )}
          <LanguageSwitcher />
          {layout === 'app' && <ProfileButton />}
        </div>
      </div>
    </header>
  );
};
