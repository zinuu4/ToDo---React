'use client';

import React, { useEffect, useState } from 'react';

import { Title } from '@/shared/ui';
import { getUser } from '@/shared/api';
import { useLocalStorage } from '@/shared/hooks';
import { User } from '@/shared/types';

import styles from './UserData.module.scss';

export const UserData = () => {
  const userId = useLocalStorage.getItem('userId');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (userId) {
      getUser(userId).then((data) => {
        setUser(data.user);
      });
    }
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Title text={user.email} className={styles.name} />
      <span className={styles.email}>{user.email}</span>
    </div>
  );
};
