export interface Todo {
  _id: number | null;
  title: string;
  isCompleted?: boolean;
}

export type Locales = 'en' | 'fr' | 'ro' | 'zh' | 'es';
