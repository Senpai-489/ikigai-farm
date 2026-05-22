import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MedievalSharp } from 'next/font/google'

const medievalSharp = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
})

const EventComponent = (props: {
  imageSrc: string
  title: string
  description: string
}) => {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[#d6e3af] bg-white shadow-[0_16px_40px_rgba(18,42,2,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(18,42,2,0.18)]">
      
      {/* IMAGE */}
      <div className="relative aspect-[4/3] overflow-hidden">
        
        <Image
          src={props.imageSrc}
          alt={props.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#122a02]/60 via-[#122a02]/10 to-transparent" />

        {/* Floating Title */}
        <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6">
          <h2
            className={`${medievalSharp.className} text-3xl leading-tight text-[#fff4b8] drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)] sm:text-4xl`}
          >
            {props.title}
          </h2>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-6 p-5 sm:p-6">
        
        <p className="text-sm leading-7 text-[#385328] sm:text-base">
          {props.description}
        </p>

        {/* BUTTONS */}
        
      </div>
    </article>
  )
}

export default EventComponent