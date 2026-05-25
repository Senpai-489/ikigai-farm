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
    <article className='group overflow-hidden rounded-[2rem] border border-[#d6e3af] bg-[#ffffff] shadow-[0_16px_40px_rgba(18,42,2,0.14)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(18,42,2,0.18)]'>

      <div className='grid gap-0 lg:grid-cols-[1.05fr_0.95fr]'>

        {/* LEFT CONTENT */}
        <div className='flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-10'>

          <div className='space-y-4'>

            <p
              className={`${medievalSharp.className} text-3xl leading-tight text-black sm:text-4xl lg:text-5xl`}
            >
              {props.title}
            </p>

            <p className='max-w-xl text-base leading-7 text-black sm:text-lg'>
              {props.description}
            </p>

          </div>

          {/* BUTTONS */}
          <div className='flex flex-wrap gap-3'>

            <Link href='/Contact'>
              <button className='rounded-full bg-[#122a02] px-5 py-3 text-sm font-medium text-amber-100 transition-colors duration-300 hover:bg-[#1f3c07]'>
                Enquire Now
              </button>
            </Link>

            <Link href='/Download-Menu'>
              <button className='rounded-full border border-[#122a02] px-5 py-3 text-sm font-medium text-[#122a02] transition-colors duration-300 hover:bg-[#122a02] hover:text-amber-100'>
                Download Menu
              </button>
            </Link>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className='relative min-h-[18rem] overflow-hidden sm:min-h-[24rem] lg:min-h-full'>

          <Image
            src={props.imageSrc[currentImage]}
            alt={props.title}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-105'
            sizes='(min-width: 1024px) 50vw, 100vw'
          />

          {/* Overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-[#122a02]/35 via-transparent to-transparent' />

          {/* Left Arrow */}
          {props.imageSrc.length > 1 && (
            <button
              onClick={prevImage}
              className='absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black/60'
            >
              <ChevronLeft className='h-5 w-5' />
            </button>
          )}

          {/* Right Arrow */}
          {props.imageSrc.length > 1 && (
            <button
              onClick={nextImage}
              className='absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black/60'
            >
              <ChevronRight className='h-5 w-5' />
            </button>
          )}

          {/* Dots */}
          {props.imageSrc.length > 1 && (
            <div className='absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2'>
              {props.imageSrc.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? 'w-6 bg-[#fff4b8]'
                      : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </article>
  )
}

export default EventComponent