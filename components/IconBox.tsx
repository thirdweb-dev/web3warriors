import Image from 'next/image';

interface IconBoxProps {
  src: string;
  alt: string;
}

export const IconBox: React.FC<IconBoxProps> = ({ src, alt }) => {
  return (
    <div>
      <div className="text-center">
        <h3 className="mb-2 text-xl uppercase lg:text-xl font-oswald">{alt}</h3>
      </div>
      <div className="p-4 mx-auto flex justify-center items-center border-4 rounded-xl border-[#3DB8A5] w-24 h-24">
      <Image
        src={src}
        alt={alt}
        width={45}
        height={45}
        priority
        />
    </div>
    </div>
  );
};