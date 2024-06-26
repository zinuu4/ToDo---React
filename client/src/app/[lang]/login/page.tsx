import React from 'react';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { AuthForm } from '@/components/AuthForm';
import { getDictionary } from '@/shared/localization/dictionaries';
import { Locales } from '@/shared/types';
import { routes } from '@/shared/routes';

export default async function Login({ params }: { params: { lang: Locales } }) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (token) {
    redirect(routes.todos.path);
  }

  const dictionary = await getDictionary(params.lang);

  return (
    <main>
      <AuthForm type="login" dictionary={dictionary} />
    </main>
  );
}
