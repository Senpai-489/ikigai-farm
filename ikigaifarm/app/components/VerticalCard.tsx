
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ChevronLeft,
  ChevronRight,
  PhoneCallIcon,
} from 'lucide-react'
import { MedievalSharp } from 'next/font/google'
import { usePathname } from 'next/navigation'


const medievalSharp = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
})

const VerticalCard = (props: {
  imageSrc: string[]
  title: string
  slug?: string
  readmore?: boolean
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

const pathname = usePathname()
return (
    <article
      id={props.title}
      className="
        group
        overflow-hidden
        rounded-[2rem]
        border
        border-[#d6e3af]
        bg-white
        shadow-[0_12px_30px_rgba(18,42,2,0.12)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_20px_50px_rgba(18,42,2,0.18)]
      "
    >
      {/* IMAGE */}
      <div className="relative h-[240px] w-full overflow-hidden">
        <Image
          src={props.imageSrc[currentImage]}
          alt={props.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {props.imageSrc.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="
                absolute
                left-3
                top-1/2
                z-20
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-black/40
                text-white
                backdrop-blur-md
              "
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextImage}
              className="
                absolute
                right-3
                top-1/2
                z-20
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-black/40
                text-white
                backdrop-blur-md
              "
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {props.imageSrc.length > 1 && (
          <div className="absolute bottom-4 right-4 z-20 flex gap-2">
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

      {/* CONTENT */}
      <div className="p-6">
        <h2
          className={`${medievalSharp.className} text-2xl lg:text-4xl text-[#122a02]`}
        >
          {props.title}
        </h2>

        <div className="mt-3 h-[2px] w-20 bg-[#d6e3af]" />

        <p className="mt-5 text-lg leading-6 text-[#385328]">
          {props.description}
        </p>

        <div className="mt-6 flex items-center gap-3">
          {/* <Link
            href="/Contact"
            className="
              flex-1
              rounded-full
              bg-[#122a02]
              px-4
              py-3
              text-center
              text-sm
              font-medium
              text-amber-100
              transition-all
              duration-300
              hover:bg-[#1f3c07]
            "
          >
            Enquire
          </Link> */}
        {props.readmore && (
          <Link
href={`${pathname}/${encodeURIComponent(props.slug || '')}`}
className=" flex-1
              rounded-full
              bg-[#122a02]
              px-4
              py-3
              text-center
              text-sm
              font-medium
              text-amber-100
              transition-all
              duration-300
              hover:bg-[#1f3c07]"
>
Enquire Now
</Link> 
        )}
              
          <Link
            href="tel:+918006746390"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[#122a02]
              text-[#122a02]
              transition-all
              duration-300
              hover:bg-[#122a02]
              hover:text-white
            "
          >
            <PhoneCallIcon size={18} />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default VerticalCard

