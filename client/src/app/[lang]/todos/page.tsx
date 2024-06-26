import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { getDictionary } from '@/shared/localization/dictionaries';
import { Locales } from '@/shared/types';
import { TodoList } from '@/components/TodoList';
import { routes } from '@/shared/routes';

export default async function Todos({ params }: { params: { lang: Locales } }) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token) {
    redirect(routes.login.path);
  }

  const dictionary = await getDictionary(params.lang);
  return (
    <main>
      <TodoList dictionary={dictionary} />
    </main>
  );
}
