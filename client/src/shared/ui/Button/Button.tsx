import React, { ElementType, FC } from 'react';
import clsx from 'clsx';

import { ReactTagProps } from '@/shared/types';

import styles from './Button.module.scss';

interface ButtonProps extends ReactTagProps<'button'> {
  text: string;
  className?: string;
  as?: ElementType;
  href?: string;
  size?: 'small' | 'medium';
  backgroundColor?: 'primary' | 'secondary';
}

const DEFAULT_ELEMENT: ElementType = 'button';

export const Button: FC<ButtonProps> = ({
  text,
  className,
  as = DEFAULT_ELEMENT,
  href,
  size = 'small',
  backgroundColor = 'primary',
  ...props
}) => {
  const Element = as || DEFAULT_ELEMENT;

  return (
    <Element
      className={clsx(
        styles.button,
        className,
        'btn-reset',
        styles[backgroundColor],
        styles[size],
      )}
      href={href}
      {...props}
    >
      {text}
    </Element>
  );
};
