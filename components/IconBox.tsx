import Image from 'next/image';
import Link from 'next/link';

interface IconBoxProps {
  href: string;
  src: string;
  alt: string;
}

export const IconBox: React.FC<IconBoxProps> = ({ src, alt, href }) => {
  return (
    <div>
      <div className="text-center">
        <h3 className="mb-2 text-xl uppercase lg:text-xl font-oswald">{alt}</h3>
      </div>
      <Link href={href} className="p-4 mx-auto flex justify-center items-center border-4 rounded-xl border-[#3DB8A5] w-16 h-16 lg:w-24 lg:h-24" target="_blank" >
        <Image
          src={src}
          alt={alt}
          width={45}
          height={45}
          priority
        />
      </Link>
    </div>
  );
};