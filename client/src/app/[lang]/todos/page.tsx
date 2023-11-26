import { getDictionary } from '@/shared/localization/dictionaries';
import { Locales } from '@/shared/types';
import { TodoList } from '@/components/TodoList';

export default async function Todos({ params }: { params: { lang: Locales } }) {
  const dictionary = await getDictionary(params.lang);
  return (
    <main>
      <TodoList dictionary={dictionary} />
    </main>
  );
}
