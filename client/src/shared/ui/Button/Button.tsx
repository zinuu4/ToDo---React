import React, { FC } from 'react';
import clsx from 'clsx';

import { ReactTagProps } from '@/shared/types';

import styles from './Button.module.scss';

interface ButtonProps extends ReactTagProps<'button'> {
  text: string;
  className?: string;
  size?: 'small' | 'medium';
  backgroundColor?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({
  text,
  className,
  size = 'small',
  backgroundColor = 'primary',
  ...props
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        className,
        'btn-reset',
        styles[backgroundColor],
        styles[size],
      )}
      {...props}
    >
      {text}
    </button>
  );
};
