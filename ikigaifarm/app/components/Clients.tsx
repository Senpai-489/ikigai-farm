'use client'

import React from 'react'
import Image from 'next/image'

const Belt = () => {
  const images = [
    '/Client1.webp',
    '/Client2.png',
    '/Client3.png',
    '/Client4.png',
    '/Client5.png',
    '/Client6.png',
    '/Client7.png',
    '/Client8.png',
    '/Client9.png',
    '/Client10.png',
    '/Client11.png',
    '/Client12.png',
  ]

  return (
    <section className="relative overflow-hidden py-16">

      {/* HEADER */}
      <div className="mb-10 text-center">

        <p className="text-sm uppercase tracking-[0.35em] text-[#6c844d]">
          Trusted By
        </p>

        <h2 className="mt-3 text-2xl font-semibold text-[#122a02] lg:text-4xl">
          Our Esteemed Clients
        </h2>

      </div>

      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#f8f6ed] to-transparent sm:w-24" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#f8f6ed] to-transparent sm:w-24" />

      {/* BELT */}
      <div className="relative w-full overflow-hidden">

        <div className="marquee-track">

          {[...images, ...images].map(
            (image, index) => (
              <div
                key={index}
                className="
                  relative flex h-24 w-44 shrink-0
                  items-center justify-center
                  rounded-[1.8rem]
                  border border-[#d6e3af]
                  bg-white
                  p-5
                  shadow-[0_10px_30px_rgba(18,42,2,0.08)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_14px_40px_rgba(18,42,2,0.12)]
                  sm:h-28 sm:w-52
                  lg:h-32 lg:w-60
                "
              >

                <div className="relative h-full w-full">

                  <Image
                    src={image}
                    alt="client logo"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition-all duration-500 hover:grayscale-0"
                  />

                </div>

              </div>
            )
          )}

        </div>
      </div>

      
    </section>
  )
}

export default Belt