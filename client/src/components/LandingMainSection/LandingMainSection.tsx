import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';

import { routes } from '@/shared/routes';
import { Button } from '@/shared/ui';

import styles from './LandingMainSection.module.scss';

export const LandingMainSection = () => {
  return (
    <section className={clsx('container', styles.container)}>
      <h1 className={styles.title}>
        Organize your daily activities, set priorities, and track progress
        effortlessly
      </h1>
      <p className={styles.text}>
        Stay organized and boost productivity with <span>AchievoMate!</span>
      </p>
      <Button
        as={Link}
        size="medium"
        href={routes.registration.path}
        className={styles.signUpButton}
        text="Get AchievoMate free &rarr;"
      />
    </section>
  );
};
