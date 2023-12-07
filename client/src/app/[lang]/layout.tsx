import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Locales } from '@/shared/types';
import { defaultLocale } from '@/middleware';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
