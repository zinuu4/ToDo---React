import React from 'react';

import { AuthForm } from '@/components/AuthForm';
import { getDictionary } from '@/shared/localization/dictionaries';
import { Locales } from '@/shared/types';

export default async function Registration({
  params,
}: {
  params: { lang: Locales };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <main>
      <AuthForm type="registration" dictionary={dictionary} />
    </main>
  );
}
