'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { MedievalSharp } from 'next/font/google'

const medievalSharp = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
})

const ExperienceComponent = (props: {
  imageSrc: string[]
  title: string
  description: string
}) => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === props.imageSrc.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? props.imageSrc.length - 1 : prev - 1
    )
  }

  return (
    <article className="group flex w-[90vw] max-w-[1700px] flex-col overflow-hidden rounded-[2rem] border border-[#d6e3af] bg-white shadow-[0_16px_40px_rgba(18,42,2,0.12)] transition-all duration-500 hover:shadow-[0_24px_60px_rgba(18,42,2,0.18)] lg:min-h-[80vh] lg:flex-row">


      {/* CONTENT SECTION */}
      <div className="flex w-full flex-col justify-center bg-[#f9f8ef] px-6 py-10 sm:px-10 sm:py-14 lg:w-1/2 lg:px-20 lg:py-20">

        <h2
          className={`${medievalSharp.className} text-3xl leading-tight text-[#385328] sm:text-5xl lg:text-6xl`}
        >
          {props.title}
        </h2>

        <div className="mt-6 h-[2px] w-20 bg-[#d6e3af] sm:w-24" />

        <p className="mt-6 max-w-2xl text-sm leading-7 text-[#385328] sm:text-base sm:leading-8 lg:mt-8 lg:text-xl">
          {props.description}
        </p>

      </div>
      {/* IMAGE SECTION */}
      <div className="relative h-[320px] w-full overflow-hidden sm:h-[420px] lg:h-auto lg:min-h-[80vh] lg:w-1/2">

        <Image
          src={props.imageSrc[currentImage]}
          alt={props.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width:1024px) 100vw, 50vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#122a02]/70 via-[#122a02]/10 to-transparent" />

        {/* Left Arrow */}
        {props.imageSrc.length > 1 && (
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black/60 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        )}

        {/* Right Arrow */}
        {props.imageSrc.length > 1 && (
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black/60 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        )}

        {/* Dots */}
        {props.imageSrc.length > 1 && (
          <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {props.imageSrc.map((_, index) => (
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
        )}
      </div>
    </article>
  )
}

export default ExperienceComponent