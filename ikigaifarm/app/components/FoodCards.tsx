'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { MedievalSharp } from 'next/font/google'

const medievalSharp = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
})

const EventComponent = (props: {
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
    <article id={props.title} className="scroll-mt-24 group mx-auto flex w-[90vw] max-w-[1700px] flex-col overflow-hidden rounded-[2rem] border border-[#d6e3af] bg-[#ffffff] shadow-[0_16px_40px_rgba(18,42,2,0.14)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(18,42,2,0.18)] lg:min-h-[80vh] lg:flex-row">

      {/* LEFT CONTENT */}
      <div className="flex w-full flex-col justify-center bg-[#f9f8ef] px-6 py-10 sm:px-10 sm:py-14 lg:w-1/2 lg:px-20 lg:py-20">

        <div className="space-y-6">

          <h2
            className={`${medievalSharp.className} text-3xl leading-tight text-black sm:text-5xl lg:text-6xl`}
          >
            {props.title}
          </h2>

          <div className="h-[2px] w-20 bg-[#d6e3af] sm:w-24" />

          <p className="max-w-2xl text-sm leading-7 text-black sm:text-base sm:leading-8 lg:text-xl">
            {props.description}
          </p>

        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap gap-4">

          <Link href="/Contact">
            <button className="rounded-full bg-[#122a02] px-6 py-3 text-sm font-medium text-amber-100 transition-all duration-300 hover:scale-105 hover:bg-[#1f3c07] sm:px-7 sm:py-4 sm:text-base">
              Enquire Now
            </button>
          </Link>

          

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative h-[320px] w-full overflow-hidden sm:h-[420px] lg:h-auto lg:min-h-[80vh] lg:w-1/2">

        <Image
          src={props.imageSrc[currentImage]}
          alt={props.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width:1024px) 100vw, 50vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#122a02]/35 via-transparent to-transparent" />

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

export default EventComponent