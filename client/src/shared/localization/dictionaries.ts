import 'server-only';
import { Locales } from '@/shared/types';

const dictionaries = {
  en: () => import('./lang/en.json').then((module) => module.default),
  fr: () => import('./lang/fr.json').then((module) => module.default),
  ro: () => import('./lang/ro.json').then((module) => module.default),
  zh: () => import('./lang/zh.json').then((module) => module.default),
  es: () => import('./lang/es.json').then((module) => module.default),
};

// @ts-ignore
export const getDictionary = async (locale: Locales) =>
  (dictionaries as Record<Locales, () => Promise<any>>)[locale]();
