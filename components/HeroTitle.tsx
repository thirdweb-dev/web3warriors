import Image from 'next/image';

export const HeroTitle = () => {
  return (
    <div>
      <h3 className="text-sm lg:text-xl font-oswald">thirdweb presents</h3>
      <h1 className="mt-2 text-4xl uppercase lg:text-5xl font-rye">Web3 Warriors</h1>
      <span className="flex items-center justify-center w-full gap-2.5 mt-3">
        <h2 className="text-xl leading-7 font-oswald">Built on</h2>
        <div className="flex items-center justify-center">
          <Image
            src="/assets/base.svg"
            alt="Base"
            className="invert"
            width={80}
            height={45}
          />
        </div>
      </span>
    </div>
  );
};