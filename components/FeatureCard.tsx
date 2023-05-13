import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-[#171717] p-8 rounded-lg">
      <Image
        src={image}
        alt=""
        width={45}
        height={45}
      />
      <h3 className="my-4 text-xl uppercase lg:text-xl font-oswald">{title}</h3>
      <span>{description}</span>
    </div>
  );
};