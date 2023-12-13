export type Pages = 'landing' | 'todos' | 'profile' | 'login' | 'registration';

type Page = {
  title: string;
  path: string;
};

type Routes = Record<Pages, Page>;

export const routes: Routes = {
  landing: {
    title: 'AchievoMate',
    path: '/',
  },
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
