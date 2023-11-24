'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

import { languageOptions } from './config';

import styles from './LanguageSwitcher.module.scss';

// TODO: refactor

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  const [selectedLocale, setSelectedLocale] = useState('');
  const [isLanguageOptionsOpened, setIsLanguageOptionsOpened] = useState(false);

  useEffect(() => {
    if (!pathname) return;
    const segments = pathname.split('/');
    setSelectedLocale(segments[1]);
  }, [pathname]);

  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const selectedLocaleFullInfo = languageOptions.find(
    (lang) => lang.value === selectedLocale,
  );

  return (
    <div className={styles.wrapper}>
      <button
        className={clsx('btn-reset', styles.triggerButton)}
        onClick={() => setIsLanguageOptionsOpened((prev) => !prev)}
      >
        {selectedLocaleFullInfo?.nativeLanguageTitle}
      </button>
      {isLanguageOptionsOpened && (
        <div className={styles.languages}>
          {languageOptions.map(
            ({ nativeLanguageTitle, englishLanguageTitle, value }) => (
              <Link
                key={value}
                className={clsx(
                  styles.language,
                  selectedLocale === value && styles.selected,
                )}
                href={redirectedPathName(value)}
                onClick={() => setIsLanguageOptionsOpened(false)}
              >
                {nativeLanguageTitle} | {englishLanguageTitle}
              </Link>
            ),
          )}
        </div>
      )}
    </div>
  );
};
