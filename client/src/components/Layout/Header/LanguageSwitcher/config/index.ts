import { Locales } from '@/shared/types';

interface Lang {
  nativeLanguageTitle: string;
  englishLanguageTitle: string;
  value: Locales;
}

export const languageOptions: Lang[] = [
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
