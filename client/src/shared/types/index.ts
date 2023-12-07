import React from 'react';

export type ReactTagProps<
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<any>,
> = React.ComponentProps<T>;

export * from './todo';
export * from './intl';
export * from './layout';
