'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const ImageCarousel = ({
  images,
}: {
  images: string[]
}) => {
  const [currentImage, setCurrentImage] =
    useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1
          ? 0
          : prev + 1
      )
    }, 4000)

    return () =>
      clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative h-full w-full overflow-hidden">

      {/* IMAGES */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImage === index
              ? 'opacity-100'
              : 'opacity-0'
          }`}
        >

          <Image
            src={image}
            alt={`slide-${index}`}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />

        </div>
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      {/* DOTS */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2 px-4">

        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentImage === index
                ? 'w-7 bg-[#fff4b8]'
                : 'w-2 bg-white/50'
            }`}
          />
        ))}

      </div>

    </div>
  )
}

export default ImageCarousel