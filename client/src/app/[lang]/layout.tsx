import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Locales } from '@/shared/types';
import { defaultLocale } from '@/middleware';
import { Providers } from '../providers';

import '../styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AchievoMate',
  description: 'Stay organized and boost productivity 📈 with AchievoMate!',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locales };
}) {
  return (
    <html lang={params?.lang ?? defaultLocale}>
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
