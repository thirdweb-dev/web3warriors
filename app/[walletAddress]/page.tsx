import { HeroTitle } from "@/components/HeroTitle";
import { IconBox } from "@/components/IconBox";
import Image from 'next/image';

interface ProfilePageProps {
  params: {
    walletAddress: string;
  };
  searchParams: {
    ipfs: string;
  };
}

export default function ProfilePage({ params, searchParams }: ProfilePageProps) {
  return (
    <div className="container gap-12 px-4 mx-auto mt-16 text-center sm:px-6 lg:px-8">
      <div className="lg:mx-auto lg:max-w-lg">
        <HeroTitle />
      </div>
      <div className="flex justify-center mt-12">
        <Image src={`https://ipfs.thirdwebcdn.com/ipfs/${searchParams.ipfs}`} alt="" width={800} height={200} />
      </div>
      <div className="mt-12">
        <IconBox src="/assets/platforms/twitter.png" alt="Share" />
      </div>
    </div>);
}