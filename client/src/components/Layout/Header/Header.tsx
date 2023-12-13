import clsx from 'clsx';
import React, { FC } from 'react';
import Link from 'next/link';

import { LayoutVariant } from '@/shared/types';
import { routes } from '@/shared/routes';

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
        <div
          className={clsx(
            styles.row,
            (layout === 'auth' || layout === 'landing') && styles.spaceBetween,
          )}
        >
          {(layout === 'auth' || layout === 'landing') && (
            <Link href={routes.landing.path} className={styles.homeLink}>
              {routes.landing.title}
            </Link>
          )}
          <LanguageSwitcher />
          {layout === 'app' && <ProfileButton />}
        </div>
      </div>
    </header>
  );
};
