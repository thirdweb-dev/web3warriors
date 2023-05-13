import Image from 'next/image';

interface IconBoxProps {
  src: string;
  alt: string;
}

export const IconBox: React.FC<IconBoxProps> = ({ src, alt }) => {
  return (
    <div className="p-4 mx-auto border-4 rounded-xl border-cyan-700 w-fit">
      <Image
        src={src}
        alt={alt}
        width={45}
        height={45}
        priority
      />
    </div>
  );
};