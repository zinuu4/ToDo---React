'use client';

import React, { FC } from 'react';

import { Button } from '@/shared/ui';
import { useStore } from '@/app/providers/store';

interface SignOutButtonProps {
  dictionary: any;
}

export const SignOutButton: FC<SignOutButtonProps> = ({ dictionary }) => {
  const { userStore } = useStore();

  return (
    <Button text={dictionary.buttons.signOut} onClick={userStore.logout} />
  );
};
