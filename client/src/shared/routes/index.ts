export type Pages = 'todos' | 'profile' | 'login' | 'registration';

type Page = {
  title: string;
  path: string;
};

type Routes = Record<Pages, Page>;

export const routes: Routes = {
  todos: {
    title: 'Todos',
    path: '/todos',
  },
  profile: {
    title: 'Profile',
    path: '/profile',
  },
  login: {
    title: 'Login',
    path: '/login',
  },
  registration: {
    title: 'Registration',
    path: '/registration',
  },
};
