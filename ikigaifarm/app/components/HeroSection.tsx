'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Calendar1, GroupIcon } from 'lucide-react'
import { MagneticButton } from '@/app/components/lightswind/magnetic-button'

const HeroSection = () => {
  const router = useRouter()

  return (
    <section className=" w-full overflow-hidden">

      {/* Desktop Background */}
      <div className=" hidden h-screen w-full md:block">
        <Image
          src="/heroLDS.png"
          alt="Desktop Hero"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Mobile Background */}
      <div className="relative block w-full md:hidden">
        <Image
          src="/HeroIMG.png"
          alt="Mobile Hero"
          width={800}
          height={1400}
          priority
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Buttons Container */}
      <div className="absolute bottom-0 -translate-y-54  sm:-translate-y-0  left-1/2 z-20 flex w-full -translate-x-1/2 flex-col items-center justify-center md:gap-5 px-12 flex-row  ">

       
       {/* Group Booking Button */}
<MagneticButton
  onClick={() => router.push('/GroupBookings')}
  className="group relative flex w-full max-w-[290px] items-center justify-center overflow-hidden rounded-2xl border border-[#fff4b8]/20 bg-black/55 px-4 py-3 text-[#fff4b8] shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-300 active:scale-95 sm:w-auto sm:max-w-none sm:rounded-full sm:bg-black/70 sm:px-7 sm:py-3 md:px-8 md:py-4 hover:border-[#fff4b8]/60 hover:shadow-[0_0_35px_rgba(255,244,184,0.25)]"
>

  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#fff4b8]/0 via-[#fff4b8]/10 to-[#fff4b8]/0 opacity-100 transition-opacity duration-500 sm:opacity-0 sm:group-hover:opacity-100" />

  <div className="relative z-10 flex items-center gap-3">

    {/* Icon */}
    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#fff4b8]/10 bg-[#fff4b8]/10 backdrop-blur-md transition-all duration-300 group-hover:bg-[#fff4b8] sm:h-10 sm:w-10">
      <GroupIcon className="h-4 w-4 text-[#fff4b8] transition-colors duration-300 group-hover:text-black sm:h-5 sm:w-5 md:h-6 md:w-6" />
    </div>

    {/* Text */}
    <span className="text-sm font-medium tracking-wide sm:text-base md:text-xl">
      Group Booking
    </span>
  </div>
</MagneticButton>

{/* Event Packages Button */}
<MagneticButton
  onClick={() => router.push('/Events')}
  className="group relative flex w-full max-w-[290px] items-center justify-center overflow-hidden rounded-2xl border border-[#fff4b8]/20 bg-black/55 px-4 py-3 text-[#fff4b8] shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-300 active:scale-95 sm:w-auto sm:max-w-none sm:rounded-full sm:bg-black/70 sm:px-7 sm:py-3 md:px-8 md:py-4 hover:border-[#fff4b8]/60 hover:shadow-[0_0_35px_rgba(255,244,184,0.25)]"
>

  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#fff4b8]/0 via-[#fff4b8]/10 to-[#fff4b8]/0 opacity-100 transition-opacity duration-500 sm:opacity-0 sm:group-hover:opacity-100" />

  <div className="relative z-10 flex items-center gap-3">

    {/* Icon */}
    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#fff4b8]/10 bg-[#fff4b8]/10 backdrop-blur-md transition-all duration-300 group-hover:bg-[#fff4b8] sm:h-10 sm:w-10">
      <Calendar1 className="h-4 w-4 text-[#fff4b8] transition-colors duration-300 group-hover:text-black sm:h-5 sm:w-5 md:h-6 md:w-6" />
    </div>

    {/* Text */}
    <span className="text-sm font-medium tracking-wide sm:text-base md:text-xl">
      Event Packages
    </span>
  </div>
</MagneticButton>

      </div>
    </section>
  )
}

export default HeroSection