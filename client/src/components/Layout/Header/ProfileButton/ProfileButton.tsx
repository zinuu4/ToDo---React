'use client';

import React from 'react';
import { CgProfile } from 'react-icons/cg';
// import { CiLogin } from 'react-icons/ci';
import Link from 'next/link';
// import Cookies from 'js-cookie';

import { Pages, routes } from '@/shared/routes';
import { useGetCurrentLocale } from '@/shared/utils';

import styles from './ProfileButton.module.scss';

export const ProfileButton = () => {
  const currentLocal = useGetCurrentLocale();
  // const token = Cookies.get('token');

  const desiredRoute: Pages = 'profile';

  // const desiredRoute: Pages = token ? 'profile' : 'login';

  // {token ? (
  //   <CgProfile style={{ color: 'white' }} />
  // ) : (
  //   <CiLogin style={{ color: 'white' }} />
  // )}

  return (
    <Link
      href={`/${currentLocal}${routes[desiredRoute].path}`}
      className={styles.wrapper}
    >
      <CgProfile style={{ color: 'white' }} />
      <p className={styles.title}>{routes[desiredRoute].title}</p>
    </Link>
  );
};
