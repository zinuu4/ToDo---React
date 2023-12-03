import clsx from 'clsx';
import React from 'react';

import { UserData } from './UserData';
import { SignOutButton } from './SignOutButton';

import styles from './Profile.module.scss';

export const Profile = () => {
  return (
    <section className={clsx('container', styles.section)}>
      <div className={styles.row}>
        <UserData />
        <SignOutButton />
      </div>
    </section>
  );
};
