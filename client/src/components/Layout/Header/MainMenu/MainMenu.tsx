import React from 'react';
import Link from 'next/link';

import { Pages, routes } from '@/shared/routes';

import styles from './MainMenu.module.scss';

export const MainMenu = () => {
  return (
    <div>
      {Object.entries(routes).map(([key, { title, path }]) => (
        <Link href={path} className={styles.link} key={key as Pages}>
          {title}
        </Link>
      ))}
    </div>
  );
};
