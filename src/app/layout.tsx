import type { Metadata } from 'next';
import '@/styles/globals.css';
import Providers from '@/app/providers';
import Header from '@/widgets/header/Header';

export const metadata: Metadata = {
  title: 'Do it',
  description: 'do it - 할 일 관리를 위한 투두 리스트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <head>
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css'
        />
      </head>
      <body>
        <Providers>
          <Header />
          <main className='mt-[24px] px-[16px]'>
            <div className='container'>{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
