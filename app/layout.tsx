import { Footer } from '@/components/Footer';
import './globals.css';
import { Inter, Oswald } from 'next/font/google';
import localFont from 'next/font/local';
import PlausibleProvider from "next-plausible";

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

const wildBreath = localFont({
  src: './wild-breath.otf',
  variable: '--font-wild-breath',
  display: 'swap'
});


const title = 'Web3 Warriors: An Onchain Survival Game';
const description = 'Web3 Warriors is the ultimate onchain survival game. Kill the undead, level up your character, and escape the dungeon. Play now.';


export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://web3warriors.thirdweb.com',
    siteName: 'Web3 Warriors',
    images: [
      {
        url: 'https://web3warriors.thirdweb.com/og.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
    children: React.ReactNode;
}) {
  return (
    <PlausibleProvider
      domain="web3warriors.thirdweb.com"
      customDomain="https://pl.thirdweb.com"
      selfHosted
    >
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} ${wildBreath.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
    </PlausibleProvider>
  );
}
