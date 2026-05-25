'use client'

import React, {
  useEffect,
  useState,
} from 'react'

import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

interface ImageCarouselProps {
  images: string[]
}

const ImageCarousel = ({
  images,
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] =
    useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1
        ? 0
        : prev + 1,
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? images.length - 1
        : prev - 1,
    )
  }

  // OPTIONAL AUTO SLIDE
  useEffect(() => {
    const interval =
      setInterval(() => {
        nextSlide()
      }, 5000)

    return () =>
      clearInterval(interval)
  }, [])

  return (
    <div className="relative h-full min-h-[320px] overflow-hidden lg:min-h-[700px]">
      {/* IMAGES */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map(
          (image, index) => (
            <div
              key={index}
              className="relative h-full min-h-[320px] w-full shrink-0 lg:min-h-[700px]"
            >
              <img
                src={image}
                alt={`carousel-image-${index}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ),
        )}
      </div>

      {/* OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-black/10" />

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition hover:bg-black/50"
      >
        <ChevronLeft size={24} />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition hover:bg-black/50"
      >
        <ChevronRight size={24} />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() =>
              setCurrentIndex(index)
            }
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'w-8 bg-white'
                : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel