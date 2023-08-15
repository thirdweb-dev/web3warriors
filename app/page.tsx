import { FeatureCard } from "@/components/FeatureCard";
import { HeroTitle } from "@/components/HeroTitle";
import { IconBox } from "@/components/IconBox";
import { ImageCarousel } from "@/components/ImageCarousel";
import { YoutubeEmbed } from "@/components/YoutubeEmbed";
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/assets/hero-mobile.png')] lg:bg-[url('/assets/hero.png')] bg-cover pt-28 pb-16">
        <div className="container gap-12 px-4 mx-auto text-center sm:px-6 lg:px-8">
          <div className="lg:mx-auto lg:max-w-xl">
            <HeroTitle />
            <YoutubeEmbed youtubeId="kjWtVDCVfg0" />
            <div className="px-12 mt-12 lg:px-36" >
              <h3 className="mb-6 text-3xl uppercase lg:text-4xl">Download now</h3>
              <div className="grid grid-cols-2 gap-4 ">
                <IconBox src="/assets/platforms/apple.svg" alt="Mac" href="/assets/downloads/web3-warriors-launcher-mac.zip" />
                <IconBox src="/assets/platforms/windows.png" alt="Windows" href="/assets/downloads/web3-warriors-launcher-windows.zip" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/onchain-survival-mobile.png')] lg:bg-[url('/assets/onchain-survival.png')] bg-cover py-16">
        <div className="container gap-12 px-4 mx-auto sm:px-6 lg:px-8">
          <div className="lg:mx-auto lg:max-w-5xl">
            <div className="flex flex-col gap-12 lg:flex-row">
              <div className="flex flex-col flex-1 text-center lg:justify-center lg:text-left">
                <h3 className="uppercase text-md lg:text-lg">Escape the dungeon</h3>
                <h3 className="mt-3 mb-6 text-3xl uppercase lg:text-7xl">Epic Onchain <br /> Survival Game</h3>
                <span>Escape the dungeon by battling elemental lords, endless waves of undead enemies and terrifying bosses. Earn $BATTLE tokens and upgrade your characters by buying NFTs in the in-game shop.</span>
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
              <h3 className="uppercase text-md lg:text-lg">Built with thirdweb</h3>
              <h3 className="mt-3 mb-6 text-3xl uppercase lg:text-7xl">Web3 under the hood</h3>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
              <FeatureCard title="Invisible Wallet" description="Automatically generate personal wallets for all players. No need to connect your wallet or sign transactions. Simply login with email." image="/assets/features/wallet.png" learnMore="https://portal.thirdweb.com/wallet/paper" />
              <FeatureCard title="Gasless" description="Take care of the blockchain gas cost for your users to provide a seamless experience with the power of Account Abstraction. Your account and data persist, cross-platform and cross-device." image="/assets/features/gasless.png" learnMore="https://portal.thirdweb.com/wallet/smart-wallet" />
              <FeatureCard title="Gaming Contracts" description="1-click deploy contracts from Explore. Every contract you need to create your web3 game." image="/assets/features/gaming.png" learnMore="https://thirdweb.com/explore/gaming" />
              <FeatureCard title="Unity SDK" description="Simple to use and robust SDK that works cross-platform (native, mobile, console, browser, and VR). Quickly integrate web3 into games." image="/assets/features/unity.png" learnMore="https://portal.thirdweb.com/unity" />
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
                <h3 className="mt-3 mb-12 text-3xl uppercase lg:text-7xl">How we built Web3 Warriors</h3>
                <a
                  href="https://blog.thirdweb.com/how-we-built-web3-warriors/"
                  target="_blank"
                  className="rounded-md bg-[#3DB8A5] px-12 py-4 text-sm font-semibold text-black shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3DB8A5]"
                >
                  Read the technical blog
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
              <h3 className="mt-3 mb-6 text-3xl uppercase lg:text-7xl">Why build web3 games</h3>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <FeatureCard title="Build faster" description="No need to setup databases and servers for your game. Simply use the power of blockchain to load user data and assets." image="/assets/features/rocket.png" />
              <FeatureCard title="New revenue streams" description="Monetize on player engagement. Collect royalty fees for every in-game assets traded within your in-game marketplace." image="/assets/features/coins.png" />
              <FeatureCard title="Interoperability" description="Player's game assets are not only useful within a specific game. Enable players to carry digital assets outside of your game and into other gaming universes." image="/assets/features/atom.png" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container gap-12 px-4 py-8 mx-auto sm:px-6 lg:px-8 ">
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
            <div className="pb-4 text-center">
              <h3 className="uppercase text-md lg:text-lg">Build web3 games fast</h3>
              <Link href="https://thirdweb.com/solutions/gaming" target="_blank" className="underline text-[#3DB8A5] ">
                <h3 className="mt-3 mb-6 text-3xl uppercase lg:text-7xl"><span className="text-white">Build with</span> GamingKit</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

