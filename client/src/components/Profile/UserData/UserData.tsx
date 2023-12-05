import React from 'react';

import { Title } from '@/shared/ui';

import styles from './UserData.module.scss';

export const UserData = () => {
  return (
    <div>
      <Title text="Zinoviy" className={styles.name} />
      <span className={styles.email}>lebedzinovij4@gmail.com</span>
    </div>
  );
};
