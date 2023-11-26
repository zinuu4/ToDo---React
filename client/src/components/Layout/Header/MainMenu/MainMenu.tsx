'use client';

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import { Pages, routes } from '@/shared/routes';
import { useGetCurrentLocale } from '@/shared/utils/useGetCurrentLocale';

import styles from './MainMenu.module.scss';

export const MainMenu = () => {
  const pathname = usePathname();
  const currentLocal = useGetCurrentLocale();
  return (
    <div>
      {Object.entries(routes).map(([key, { title, path }]) => {
        const isActive = `/${currentLocal}${path}` === pathname;
        return (
          <Link
            href={`/${currentLocal}${path}`}
            className={clsx(styles.link, isActive && styles.active)}
            key={key as Pages}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};
