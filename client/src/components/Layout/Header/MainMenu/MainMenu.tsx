'use client';

import React from 'react';
import Link from 'next/link';

import { Pages, routes } from '@/shared/routes';
import { useGetCurrentLocale } from '@/shared/utils/useGetCurrentLocale';

import styles from './MainMenu.module.scss';

export const MainMenu = () => {
  const currentLocal = useGetCurrentLocale();
  return (
    <div>
      {Object.entries(routes).map(([key, { title, path }]) => (
        <Link
          href={`/${currentLocal}${path}`}
          className={styles.link}
          key={key as Pages}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};
