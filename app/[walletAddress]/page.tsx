import { HeroTitle } from "@/components/HeroTitle";
import { IconBox } from "@/components/IconBox";
import Image from 'next/image';
import { useMemo } from "react";

interface ProfilePageProps {
  params: {
    walletAddress: string;
  };
  searchParams: {
    ipfs: string;
  };
}

export default function ProfilePage({ params: { walletAddress }, searchParams }: ProfilePageProps) {
  const twitterIntentUrl = useMemo(() => {
    const url = new URL("https://twitter.com/intent/tweet");
    url.searchParams.append(
      "text",
      `Proud to be an early adopter of Web3 gaming.

Check out my character on Web3 Warriors, by @thirdweb`,
    );
    url.searchParams.append("url", `https://web3warriors.thirdweb.com/${walletAddress}?ipfs=${searchParams.ipfs}`);
    return url.href;
  }, [searchParams.ipfs, walletAddress]);

  return (
    <div className="container gap-12 px-4 mx-auto mt-16 text-center sm:px-6 lg:px-8">
      <div className="lg:mx-auto lg:max-w-lg">
        <HeroTitle />
      </div>
      <div className="flex justify-center mt-12">
        {searchParams.ipfs ? (
          <Image src={`https://ipfs.io/ipfs/${searchParams.ipfs}`} alt="" width={800} height={200} />
        ) : <div className="italic">No image found</div>}
      </div>
      <div className="mt-12">
        <IconBox src="/assets/platforms/twitter.png" alt="Share" href={twitterIntentUrl} />
      </div>
    </div>);
}