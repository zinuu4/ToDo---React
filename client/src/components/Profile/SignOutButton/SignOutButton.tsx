'use client';

import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

import { Button } from '@/shared/ui';

interface SignOutButtonProps {
  dictionary: any;
}

export const SignOutButton: FC<SignOutButtonProps> = ({ dictionary }) => {
  const router = useRouter();

  const logout = () => {
    Cookies.remove('token');

    router.refresh();
  };

  return <Button text={dictionary.buttons.signOut} onClick={logout} />;
};
