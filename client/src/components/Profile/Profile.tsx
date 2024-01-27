import clsx from 'clsx';
import React, { FC } from 'react';

import { UserData } from './UserData';
import { SignOutButton } from './SignOutButton';

import styles from './Profile.module.scss';

interface ProfileProps {
  dictionary: any;
}

export const Profile: FC<ProfileProps> = ({ dictionary }) => {
  return (
    <section className={clsx('container', styles.section)}>
      <div className={styles.row}>
        <UserData />
        <SignOutButton dictionary={dictionary} />
      </div>
    </section>
  );
};
