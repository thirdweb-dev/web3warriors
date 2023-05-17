import { FeatureCard } from "@/components/FeatureCard";
import { HeroTitle } from "@/components/HeroTitle";
import { IconBox } from "@/components/IconBox";
import { ImageCarousel } from "@/components/ImageCarousel";
import { YoutubeEmbed } from "@/components/YoutubeEmbed";
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/assets/hero-mobile.png')] lg:bg-[url('/assets/hero.png')] bg-cover pt-20 pb-16">
        <div className="container gap-12 px-4 mx-auto text-center sm:px-6 lg:px-8">
          <div className="lg:mx-auto lg:max-w-lg">
            <HeroTitle />
            <YoutubeEmbed youtubeId="dQw4w9WgXcQ" />
            <div className="grid grid-cols-3 gap-4 px-12 mt-12">
              <IconBox src="/assets/platforms/apple.svg" alt="Apple" href="https://developer.cloud.unity3d.com/share/share.html?shareId=b1nHUsd4Ut" />
              <IconBox src="/assets/platforms/windows.png" alt="Windows" href="https://developer.cloud.unity3d.com/share/share.html?shareId=ZkhdIiONIK" />
              <IconBox src="/assets/platforms/linux.png" alt="Linux" href="https://developer.cloud.unity3d.com/share/share.html?shareId=byCiRqu48K" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/onchain-survival-mobile.png')] lg:bg-[url('/assets/onchain-survival.png')] bg-cover py-16">
        <div className="container gap-12 px-4 mx-auto sm:px-6 lg:px-8">
          <div className="lg:mx-auto lg:max-w-5xl">
            <div className="flex flex-col gap-12 lg:flex-row">
              <div className="flex flex-col flex-1 text-center lg:justify-center lg:text-left">
                <h3 className="uppercase text-md lg:text-lg font-oswald">Escape the dungeon</h3>
                <h3 className="mt-3 mb-6 text-3xl uppercase font-oswald lg:text-7xl">Epic Onchain <br /> Survival Game</h3>
                <span>Escape the dungeon by battling elemental lords, endless waves of undead enemies and terrifying bosses.</span>
              </div>
              <ImageCarousel />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container gap-12 px-4 py-16 mx-auto sm:px-6 lg:px-8 ">
          <div className="lg:mx-auto lg:max-w-5xl">
            <div className="pb-4 text-center lg:pb-12">
              <h3 className="uppercase text-md lg:text-lg font-oswald">Built with thirdweb</h3>
              <h3 className="mt-3 mb-6 text-3xl uppercase font-oswald lg:text-7xl">Web3 under the hood</h3>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
              <FeatureCard title="Invisible Wallet" description="Generate wallets on the fly for players. No need for players to connect with wallet to start playing. No need to sign transactions as players collect assets." image="/assets/features/wallet.png" />
              <FeatureCard title="Gasless" description="No need for players to pay gas fees. All transactions go through a gasless relayer." image="/assets/features/gasless.png" />
              <FeatureCard title="Gaming Contracts" description="1-click deploy contracts from Explore. Popular gaming contracts: edition drops for game assets & token contract for game currencies." image="/assets/features/gaming.png" />
              <FeatureCard title="Unity SDK" description="Simple to use and robust SDK that works cross-platform (native, mobile, console, browser, and VR). Quickly integrate contracts into games." image="/assets/features/unity.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('/assets/learn-mobile.png')] lg:bg-[url('')] lg: bg-cover py-16">
        <div className="container gap-12 px-4 mx-auto sm:px-6 lg:px-8">
          <div className="lg:mx-auto lg:max-w-5xl">
            <div className="flex flex-col gap-12 lg:flex-row">
              <div className="hidden mx-auto lg:block">
                <Image
                  src="/assets/learn.png"
                  alt=""
                  width={500}
                  height={400}
                />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="mt-3 mb-12 text-3xl uppercase font-oswald lg:text-7xl">Learn how to build web3 games</h3>
                <a
                  href="https://thirdweb.com/solutions/gaming"
                  target="_blank"
                  className="rounded-md bg-[#3DB8A5] px-12 py-4 text-sm font-semibold text-black shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3DB8A5]"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container gap-12 px-4 py-16 mx-auto sm:px-6 lg:px-8 ">
          <div className="lg:mx-auto lg:max-w-5xl">
            <div className="pb-4 text-center lg:pb-12">
              <h3 className="mt-3 mb-6 text-3xl uppercase font-oswald lg:text-7xl">Why build web3 games</h3>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <FeatureCard title="Build faster" description="Speed up your game development. No need to setup databases and servers for your game. Simply use the power of blockchain to load user data and assets." image="/assets/features/rocket.png" />
              <FeatureCard title="New revenue streams" description="Monetize on player engagement. Collect royalty fees for every in-game assets traded within your in-game marketplace." image="/assets/features/coins.png" />
              <FeatureCard title="Interoperability" description="Player's game assets are not only useful within a specific game. Enable players to carry digital assets outside of your game and into other gaming universes." image="/assets/features/atom.png" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container gap-12 px-4 pt-8 pb-16 mx-auto sm:px-6 lg:px-8 ">
          <div className="lg:mx-auto lg:max-w-5xl">
            <div className="flex justify-between mx-auto mb-4 lg:w-[430px]">
              <Image
                src="/assets/staff-1.png"
                alt=""
                width={150}
                height={150}
              />
              <Image
                src="/assets/staff-2.png"
                alt=""
                width={150}
                height={150}
              />

            </div>
            <div className="pb-4 text-center lg:pb-12">
              <h3 className="uppercase text-md lg:text-lg font-oswald">Build web3 games</h3>
              <h3 className="mt-3 mb-6 text-3xl uppercase font-oswald lg:text-7xl">Check out <span className="text-[#3DB8A5]">thirdweb</span></h3>
            </div>
            <IconBox src="/assets/platforms/twitter.png" alt="Share" href="" />
          </div>
        </div>
      </div>
    </main>
  );
}

