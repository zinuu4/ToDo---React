import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { getDictionary } from '@/shared/localization/dictionaries';
import { Locales } from '@/shared/types';
import { TodoList } from '@/components/TodoList';
import { routes } from '@/shared/routes';
import { verifyToken } from '@/shared/utils';

export default async function Todos({ params }: { params: { lang: Locales } }) {
  const cookieStore = cookies();
  const tokenCookie = cookieStore.get('token');
  const token = tokenCookie?.value;

  const user = verifyToken(token);

  if (!user) {
    redirect(routes.login.path);
  }

  const dictionary = await getDictionary(params.lang);
  return (
    <main>
      <TodoList dictionary={dictionary} />
    </main>
  );
}
