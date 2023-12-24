/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { QueryProvider } from '@/state';
import '../common/styles/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Title - Creative Portfolio Next Template',
  description: 'Creative Portfolio Next Template',
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head> */}
      <body className={inter.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
