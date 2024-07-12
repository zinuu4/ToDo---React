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
    path: '/app/todos',
  },
  profile: {
    title: 'Profile',
    path: '/app/profile',
  },
  login: {
    title: 'Login',
    path: '/auth/login',
  },
  registration: {
    title: 'Registration',
    path: '/auth/registration',
  },
};
