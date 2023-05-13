import { IconBox } from "@/components/IconBox";
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/assets/hero-mobile.png')] md:bg-[url('/assets/hero.png')] bg-cover py-16">
        <div className="container gap-12 px-4 mx-auto text-center sm:px-6 lg:px-8">
          <div className="lg:mx-auto lg:max-w-lg">
            <div>
              <h3 className="text-sm lg:text-xl font-oswald">thirdweb presents</h3>
              <h1 className="mt-2 text-4xl uppercase lg:text-5xl font-rye">Web3 Warriors</h1>
              <h2 className="mt-3 text-xl font-oswald">Built on BASE</h2>
            </div>
            <div className="w-full h-48 mt-8 bg-gray-900 rounded-lg lg:h-64" />
            <div className="grid grid-cols-3 gap-4 px-12 mt-12">
              <IconBox src="/assets/platforms/apple.svg" alt="Apple" />
              <IconBox src="/assets/platforms/apple.svg" alt="Apple" />
              <IconBox src="/assets/platforms/apple.svg" alt="Apple" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/onchain-survival-mobile.png')] md:bg-[url('/assets/onchain-survival.jpg')] bg-cover py-16">
        <div className="container gap-12 px-4 pt-16 mx-auto text-center sm:px-6 lg:px-8">
          <div className="lg:mx-auto lg:max-w-5xl">
            <div className="flex flex-col gap-12 lg:flex-row">
              <div className="flex-1 lg:text-left">
                <h3 className="text-sm uppercase lg:text-lg font-oswald">Escape the dungeon</h3>
                <h3 className="mt-3 mb-6 text-3xl uppercase font-oswald lg:text-7xl">Epic Onchain Survival Game</h3>
                <span>Escape the dungeon by battling elemental lords, endless waves of undead enemies and terrifying bosses.</span>
              </div>
              <div className="mx-auto">
                <Image
                  src="/assets/carousel.png"
                  alt=""
                  width={300}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

