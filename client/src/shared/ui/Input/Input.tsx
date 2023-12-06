/* eslint-disable react/display-name */
import React, { FC, forwardRef, ForwardedRef } from 'react';
import clsx from 'clsx';

import { ReactTagProps } from '@/shared/types';

import styles from './Input.module.scss';

interface InputProps extends ReactTagProps<'input'> {
  className?: string;
  borderColor?: 'primary' | 'secondary';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, borderColor = 'primary', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          styles.input,
          className,
          styles[borderColor],
          'input-reset',
        )}
        {...props}
      />
    );
  },
);
