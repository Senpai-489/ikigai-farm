'use client'

import React, {
  useEffect,
  useState,
} from 'react'

import Image from 'next/image'

import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

interface Props {
  images: string[]
}

const ImageCarousel = ({
  images,
}: Props) => {
  const [currentIndex, setCurrentIndex] =
    useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1
        ? 0
        : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? images.length - 1
        : prev - 1
    )
  }

  useEffect(() => {
    const interval =
      setInterval(() => {
        if (!document.hidden) {
          nextSlide()
        }
      }, 5000)

    return () =>
      clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] lg:min-h-[700px]">

      <div
        className="flex h-full will-change-transform transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(-${currentIndex * 100}%,0,0)`,
        }}
      >
        {images.map(
          (image, index) => (
            <div
              key={index}
              className="relative min-h-[320px] w-full shrink-0 lg:min-h-[700px]"
            >
              <Image
                src={image}
                alt={`slide-${index}`}
                fill
                quality={70}
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          )
        )}
      </div>

      <div className="absolute inset-0 bg-black/10" />


      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:scale-105"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:scale-105"
      >
        <ChevronRight />
      </button>

      <div className="absolute bg-green-950 bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() =>
              setCurrentIndex(index)
            }
            className={`h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'w-8 bg-white'
                : 'w-3 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel