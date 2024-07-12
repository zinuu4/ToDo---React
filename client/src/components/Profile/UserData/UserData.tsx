'use client';

import React from 'react';

import { Title } from '@/shared/ui';
import { useStore } from '@/app/providers/store';

import styles from './UserData.module.scss';

export const UserData = () => {
  const { userStore } = useStore();

  return (
    <div>
      <Title text={userStore.user.email} className={styles.name} />
      <span className={styles.email}>{userStore.user.email}</span>
    </div>
  );
};
