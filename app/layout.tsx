import './globals.css';
import { Inter, Oswald, Rye } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

const rye = Rye({
  subsets: ['latin'],
  weight: "400",
  variable: '--font-rye',
  display: 'swap',
});


export const metadata = {
  title: 'Web3Warriors',
  description: 'Epic onchain survival game. Brought to you by thirdweb.',
};

export default function RootLayout({
  children,
}: {
    children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} ${rye.variable}`}>{children}</body>
    </html>
  );
}
