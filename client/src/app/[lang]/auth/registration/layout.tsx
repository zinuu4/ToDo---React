import { ReactElement } from 'react';

import { Layout } from '@/components/Layout';

export default function RegistrationLayout({
  children,
}: {
  children: ReactElement;
}) {
  return <Layout variant="auth">{children}</Layout>;
}
