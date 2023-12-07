'use client';

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import { useGetCurrentLocale } from '@/shared/utils';
import { MainMenuItems } from '@/shared/consts';

import styles from './MainMenu.module.scss';

export const MainMenu = () => {
  const pathname = usePathname();
  const currentLocal = useGetCurrentLocale();
  return (
    <div>
      {MainMenuItems.map(({ label, path }) => {
        const isActive = `/${currentLocal}${path}` === pathname;
        return (
          <Link
            href={`/${currentLocal}${path}`}
            className={clsx(styles.link, isActive && styles.active)}
            key={path}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
};
