import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar1, GroupIcon } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className=" w-full overflow-hidden">

      {/* Desktop */}
      <div className=" hidden h-screen w-full md:block">
        <Image
          src="/heroLDS.png"
          alt="Desktop Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Mobile */}
      <div className="relative block w-full md:hidden">
        <Image
          src="/HeroIMGlowres.jpg"
          alt="Mobile Hero"
          width={800}
          height={1400}
          priority
          sizes="100vw"
          className="h-auto w-full object-cover"
        />
      </div>

      {/* BUTTONS */}
      <div className="relative md:absolute bottom-24 lg:bottom-5 left-1/2 z-30 flex w-[92%] max-w-[340px] -translate-x-1/2 flex-col gap-3 sm:w-auto sm:max-w-none flex-row">

  <Link href="/GroupBookings" className="w-full sm:w-auto">
    <button className="flex h-14 w-full items-center justify-center gap-3 rounded-full bg-black/65 px-6 text-sm font-medium text-[#fff4b8] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-black/80 sm:min-w-[240px]">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <rect x="7" y="7" width="10" height="10" rx="1" />
      </svg>

      Group Booking
    </button>
  </Link>

  <Link href="/Events" className="w-full sm:w-auto">
    <button className="flex h-14 w-full items-center justify-center gap-3 rounded-full bg-black/65 px-6 text-sm font-medium text-[#fff4b8] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-black/80 sm:min-w-[240px]">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>

      Event Packages
    </button>
  </Link>

</div>
    </section>
  )
}

export default HeroSection