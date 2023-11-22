import { getDictionary } from '@/shared/localization/dictionaries';
import { Locales } from '@/shared/types';

import { TodoList } from '../../components/TodoList';

export default async function Home({ params }: { params: { lang: Locales } }) {
  const dictionary = await getDictionary(params.lang);
  return (
    <main className="todo-app">
      <TodoList dictionary={dictionary} />
    </main>
  );
}
