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

const title = 'Web3 Warriors';
const description = 'Epic onchain survival game. Brought to you by thirdweb.';


export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://web3warriors.thirdweb.com',
    siteName: 'Next.js',
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
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} ${rye.variable}`}>
        {children}
        <div>
          <div className="container gap-12 px-4 pt-8 pb-16 mx-auto sm:px-6 lg:px-8 ">
            <div className="lg:mx-auto lg:max-w-5xl">
              <h4 className="text-lg text-center uppercase lg:text-xl font-rye">Web3 Warriors</h4>
              <div className="w-full h-0.5 bg-gray-900 my-4" />
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <span className="text-sm text-center text-gray-600 lg:text-left">All Rights Reserved @thirdweb</span>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
