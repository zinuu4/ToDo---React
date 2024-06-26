import React from 'react';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { Profile } from '@/components/Profile';
import { getDictionary } from '@/shared/localization/dictionaries';
import { Locales } from '@/shared/types';
import { routes } from '@/shared/routes';

export default async function ProfilePage({
  params,
}: {
  params: { lang: Locales };
}) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token) {
    redirect(routes.login.path);
  }

  const dictionary = await getDictionary(params.lang);

  return <Profile dictionary={dictionary} />;
}
