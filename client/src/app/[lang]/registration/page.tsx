import React from 'react';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { AuthForm } from '@/components/AuthForm';
import { getDictionary } from '@/shared/localization/dictionaries';
import { Locales } from '@/shared/types';
import { routes } from '@/shared/routes';
import { verifyToken } from '@/shared/utils';

export default async function Registration({
  params,
}: {
  params: { lang: Locales };
}) {
  const cookieStore = cookies();
  const tokenCookie = cookieStore.get('token');
  const token = tokenCookie?.value;

  const user = verifyToken(token);

  if (user) {
    redirect(routes.todos.path);
  }

  const dictionary = await getDictionary(params.lang);

  return (
    <main>
      <AuthForm type="registration" dictionary={dictionary} />
    </main>
  );
}
