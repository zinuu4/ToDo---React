import { ReactElement } from 'react';

import { Layout } from '@/components/Layout';

export default function TodosLayout({ children }: { children: ReactElement }) {
  return <Layout variant="app">{children}</Layout>;
}
