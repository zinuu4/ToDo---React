'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { Locales } from '@/shared/types';

interface Lang {
  nativeLanguageTitle: string;
  englishLanguageTitle: string;
  value: Locales;
}

const languageOptions: Lang[] = [
  { nativeLanguageTitle: 'English', englishLanguageTitle: 'USA', value: 'en' },
  {
    nativeLanguageTitle: 'français',
    englishLanguageTitle: 'French',
    value: 'fr',
  },
  {
    nativeLanguageTitle: 'Română',
    englishLanguageTitle: 'Romanian',
    value: 'ro',
  },
  {
    nativeLanguageTitle: '中国人',
    englishLanguageTitle: 'Chinese',
    value: 'zh',
  },
  {
    nativeLanguageTitle: 'Español',
    englishLanguageTitle: 'Spanish',
    value: 'es',
  },
];

export const LanguageSwitcher = () => {
  const pathname = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <ul>
      {languageOptions.map(
        ({ nativeLanguageTitle, englishLanguageTitle, value }) => (
          <li key={value}>
            <Link href={redirectedPathName(value)}>
              {nativeLanguageTitle} | {englishLanguageTitle}
            </Link>
          </li>
        ),
      )}
    </ul>
  );
};
