import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { CiLogin } from 'react-icons/ci';
import Link from 'next/link';

import { Pages, routes } from '@/shared/routes';

import styles from './ProfileButton.module.scss';

export const ProfileButton = () => {
  const isAuthed = true;
  const desiredRoute: Pages = isAuthed ? 'profile' : 'login';
  return (
    <Link href={routes[desiredRoute].path} className={styles.wrapper}>
      {isAuthed ? (
        <CgProfile style={{ color: 'white' }} />
      ) : (
        <CiLogin style={{ color: 'white' }} />
      )}
      <p className={styles.title}>{routes[desiredRoute].title}</p>
    </Link>
  );
};
