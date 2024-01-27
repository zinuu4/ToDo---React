import React from 'react';

import { Profile } from '@/components/Profile';
import { getDictionary } from '@/shared/localization/dictionaries';
import { Locales } from '@/shared/types';

export default async function ProfilePage({
  params,
}: {
  params: { lang: Locales };
}) {
  const dictionary = await getDictionary(params.lang);

  return <Profile dictionary={dictionary} />;
}
