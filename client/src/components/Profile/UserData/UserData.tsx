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
    const fetchUser = async () => {
      if (userId) {
        const data = await getUser({ id: userId });
        setUser(data.user);
      }
    };
    fetchUser();
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
