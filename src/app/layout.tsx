import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mujeres Emprendedoras',
  description: 'Tu lugar en el mundo emprendedor.',
  icons:
    'https://www.emprendedoralac.org/wp-content/uploads/2018/10/logo-mujeremprendedoralac.png',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
