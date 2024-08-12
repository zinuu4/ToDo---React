'use client';

import React from 'react';

import { Title } from '@/shared/ui';
import { useStore } from '@/app/providers/store';

import styles from './UserData.module.scss';

export const UserData = () => {
  const { userStore } = useStore();
  const { user } = userStore;

  return (
    <div>
      <Title text={user.email} className={styles.name} />
      <span className={styles.email}>{user.email}</span>
    </div>
  );
};
