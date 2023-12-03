'use client';

import { usePathname } from 'next/navigation';

export const useGetCurrentLocale = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  return segments[1];
};
