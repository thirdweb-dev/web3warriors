"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { GlowBox } from './GlowBox';

export const ImageCarousel: React.FC = () => {
  const images = [
    "/assets/slider-1.png",
    "/assets/slider-2.png",
    "/assets/slider-3.png",
    "/assets/slider-4.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const goNext = useCallback(() => {
    setCurrentImage((currentImage + 1) % images.length);
  }, [currentImage, images.length]);

  const goPrevious = useCallback(() => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  }, [currentImage, images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [currentImage, goNext]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center">
        <button onClick={goPrevious} className="px-4 py-2 text-4xl text-white rounded-lg">&#8249;</button>
        <div className="relative mx-4 my-4 w-80 h-96 xl:w-[400px] xl:h-[500px]">
          {images.map((img, index) => (
            <div key={img} className='absolute inset-0 object-cover w-full h-full'>
              <GlowBox >
                <Image
                  src={img}
                  alt="carousel"
                  className={`absolute inset-0 object-cover w-full h-full rounded-lg transition-opacity duration-1000 ${currentImage === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  width={300}
                  height={500}
                />
              </GlowBox>
            </div>
          ))}
        </div>
        <button onClick={goNext} className="px-4 py-2 text-4xl text-white rounded-lg">&#8250;</button>
      </div>
      <div className="flex mt-3 mb-4 space-x-4">
        {images.map((img, index) => (
          <span
            key={img}
            className={`inline-block w-3 h-3 rounded-full ${currentImage === index ? 'bg-gray-300' : 'bg-inherit border'}`}
          />
        ))}
      </div>
    </div>
  );
};