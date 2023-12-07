import { routes } from '@/shared/routes';

export type MainMenuItem = {
  label: string;
  path: string;
};

export const MainMenuItems: MainMenuItem[] = [
  {
    label: 'Todos',
    path: routes.todos.path,
  },
];
