import React, { FC } from 'react';

import { Button } from '@/shared/ui';

interface SignOutButtonProps {
  dictionary: any;
}

export const SignOutButton: FC<SignOutButtonProps> = ({ dictionary }) => {
  return <Button text={dictionary.buttons.signOut} />;
};
