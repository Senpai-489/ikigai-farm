import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Lovers_Quarrel,
  Noto_Sans_JP,
  MedievalSharp,
} from 'next/font/google'
import { Phone, PlayCircleIcon } from 'lucide-react'

const lovers_Quarrel = Lovers_Quarrel({
  subsets: ['latin'],
  weight: '400',
})

const noto_Sans_JP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: '400',
})

const medieval_Sharp = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
})

const Reasonforbeing = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-20 px-6 lg:flex-row lg:px-12">
        
        {/* LEFT IMAGE STACK */}
        <div className="relative flex w-full items-center justify-center lg:w-1/2">
          
          {/* Background layers */}
          <div className="absolute h-[320px] w-[240px] rounded-2xl bg-[#1d5a2f] rotate-2 sm:h-[420px] sm:w-[300px] lg:h-[520px] lg:w-[360px]" />

          <div className="absolute h-[320px] w-[240px] rounded-2xl bg-[#1f6d29] rotate-6 sm:h-[420px] sm:w-[300px] lg:h-[520px] lg:w-[360px]" />

          <div className="absolute h-[320px] w-[240px] rounded-2xl bg-[#194b1f] rotate-12 sm:h-[420px] sm:w-[300px] lg:h-[520px] lg:w-[360px]" />

          {/* Main Image */}
          <Image
            src="/A reason img.webp"
            alt="reason for being"
            width={500}
            height={700}
            className="relative z-10 h-[300px] w-auto rotate-6 rounded-2xl object-cover shadow-2xl drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:h-[420px] lg:h-[520px]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
          
          {/* Heading */}
          <h1
            className={`${medieval_Sharp.className} text-3xl text-[#262626] sm:text-4xl md:text-5xl`}
          >
            "A Reason for Being"
          </h1>

          {/* Sub heading */}
          <p
            className={`${lovers_Quarrel.className} mt-4 text-4xl text-[#8b5e3c] sm:text-5xl`}
          >
            reconnect with what matters
          </p>

          {/* Description */}
          <p
            className={`${noto_Sans_JP.className} mt-8 max-w-2xl text-base leading-relaxed text-[#4b5928] sm:text-lg md:text-xl`}
          >
            Inspired by the philosophy of Ikigai, Ikigai Farm
            is a curated outdoor destination designed to
            bring together nature, experiences, and meaningful
            connections. Just a short drive from the city,
            we offer a refreshing escape where you can unwind,
            explore, celebrate, and reconnect.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex w-full flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start">
            
            <button className="flex items-center gap-3 rounded-full bg-[#262626] px-6 py-3 text-sm text-white transition duration-300 hover:scale-105 hover:bg-[#535352] sm:text-base">
              <PlayCircleIcon className="text-amber-200" />
              Get a virtual tour
            </button>

           <Link href="tel:+918006746390"> <button className="flex items-center gap-3 rounded-full bg-[#262626] px-6 py-3 text-sm text-white transition duration-300 hover:scale-105 hover:bg-[#535352] sm:text-base">
              <Phone className="text-amber-200" />
              Book your visit
            </button> </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reasonforbeing