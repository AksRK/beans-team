import 'normalize.css';
import '@/core/styles/global.scss';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ReactNode } from 'react';
import Layout from '@/app/components/Layout/layout';

const roboto = Roboto({ weight: '400', subsets: ['cyrillic'] });
export const metadata: Metadata = {
  title: 'Beans Team',
  description: 'Команда дизайнеров, исследователей и разработчиков',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
