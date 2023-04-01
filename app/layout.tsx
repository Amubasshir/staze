import { Nunito } from 'next/font/google';

import './globals.css';

export const metadata = {
  title: 'Staze',
  description: 'A website for room booking across the world.',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
