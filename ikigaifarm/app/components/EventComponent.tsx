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
    <article
      id={props.title}
      className="group overflow-hidden rounded-[2rem] border border-[#d6e3af] bg-white shadow-[0_16px_40px_rgba(18,42,2,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(18,42,2,0.18)]"
    >

      {/* IMAGE */}
      <div className="relative aspect-[4/3] overflow-hidden">

        <Image
          src={props.imageSrc[currentImage]}
          alt={props.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#122a02]/60 via-[#122a02]/10 to-transparent" />

        {/* LEFT BUTTON */}
        {props.imageSrc.length > 1 && (
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black/60"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        {/* RIGHT BUTTON */}
        {props.imageSrc.length > 1 && (
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black/60"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}

        {/* Floating Title */}
        <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6">
          <h2
            className={`${medievalSharp.className} text-3xl leading-tight text-[#fff4b8] drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)] sm:text-4xl`}
          >
            {props.title}
          </h2>
        </div>

        {/* Dots */}
        {props.imageSrc.length > 1 && (
          <div className="absolute bottom-4 right-4 z-20 flex gap-2">
            {props.imageSrc.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  currentImage === index
                    ? 'bg-[#fff4b8] w-5'
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-6 p-5 sm:p-6">

        <p className="text-sm leading-7 text-[#385328] sm:text-base">
          {props.description}
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-3">

          <Link href="/Contact">
            <button className="rounded-full bg-[#122a02] px-5 py-3 text-sm font-medium text-amber-100 transition-all duration-300 hover:scale-105 hover:bg-[#1f3c07]">
              Enquire Now
            </button>
          </Link>

          <Link href="/Download-Brochure">
            <button className="rounded-full border border-[#122a02] px-5 py-3 text-sm font-medium text-[#122a02] transition-all duration-300 hover:bg-[#122a02] hover:text-amber-100">
              Download Brochure
            </button>
          </Link>

        </div>
      </div>
    </article>
  )
}

export default EventComponent