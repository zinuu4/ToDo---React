import { Layout } from '@/components/Layout';
import { LandingMainSection } from '@/components/LandingMainSection';
import { getDictionary } from '@/shared/localization/dictionaries';
import { Locales } from '@/shared/types';

export default async function LandingPage({
  params,
}: {
  params: { lang: Locales };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <Layout variant="landing">
      <LandingMainSection dictionary={dictionary} />
    </Layout>
  );
}
