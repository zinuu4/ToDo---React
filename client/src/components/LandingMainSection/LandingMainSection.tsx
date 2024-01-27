'use client';

import clsx from 'clsx';
import React, { FC } from 'react';
import Link from 'next/link';

import { routes } from '@/shared/routes';
import { Button } from '@/shared/ui';
import { useGetCurrentLocale } from '@/shared/utils';

import styles from './LandingMainSection.module.scss';

interface LandingMainSectionProps {
  dictionary: any;
}

export const LandingMainSection: FC<LandingMainSectionProps> = ({
  dictionary,
}) => {
  const currentLocal = useGetCurrentLocale();

  return (
    <section className={clsx('container', styles.container)}>
      <h1 className={styles.title}>{dictionary.landing.mainTitle}</h1>
      <p className={styles.text}>
        {dictionary.landing.mainSubtitle} <span>AchievoMate!</span>
      </p>
      <Button
        as={Link}
        size="medium"
        href={`/${currentLocal}${routes.registration.path}`}
        className={styles.signUpButton}
        text={`${dictionary.landing.getAchievoMate} \u2192`}
      />
    </section>
  );
};
