import React, { ElementType, FC } from 'react';
import clsx from 'clsx';

import { ReactTagProps } from '@/shared/types';

import styles from './Title.module.scss';

interface TitleProps extends ReactTagProps<'h1'> {
  text: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  as?: ElementType;
}

const DEFAULT_ELEMENT: ElementType = 'h1';

export const Title: FC<TitleProps> = ({
  text,
  size = 'medium',
  className,
  as,
}) => {
  const Element = as || DEFAULT_ELEMENT;

  return (
    <Element className={clsx(styles.title, className, styles[size])}>
      {text}
    </Element>
  );
};
