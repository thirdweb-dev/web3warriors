import Image from 'next/image';
import Link from 'next/link';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  learnMore?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image, learnMore }) => {
  return (
    <div className="bg-[#171717] p-8 rounded-lg flex flex-col justify-between">
      <div>
        <Image
          src={image}
          alt=""
          width={45}
          height={45}
        />
        <h3 className="my-4 text-xl uppercase lg:text-xl font-oswald">{title}</h3>
        <span className="text-gray-300">{description}</span>
      </div>
      {learnMore && (
        <Link href={learnMore} className="flex gap-2 mt-6 text-sm hover:underline" target="_blank" >
          Learn More <span className="w-5 h-5 -rotate-45"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" data-theme="dark" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
        </Link>
      )}
    </div>
  );
};