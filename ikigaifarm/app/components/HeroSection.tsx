'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Noto_Serif_JP, Lovers_Quarrel } from 'next/font/google'
import { Calendar1, GroupIcon } from 'lucide-react'
import { MagneticButton } from "@/app/components/lightswind/magnetic-button"
const noto_Serif_JP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: '400',
})

const lovers_Quarrel = Lovers_Quarrel({
  subsets: ['latin'],
  weight: '400',
})

const HeroSection = () => {
    const router = useRouter(); 
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src="/bg-vid.mp4" type="video/mp4" />
      </video> */}
      <Image
        src="/bg img.jpeg"
        alt="background placeholder"
        width={1200}
        height={600}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        priority
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 -z-10 bg-black/40"></div> */}

      {/* Main Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-10">
        
        {/* Hero Top */}
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-14">
          
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/logo1.png"
              alt="ikigai farm"
              width={400}
              height={400}
              className="h-auto w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px]"
              priority
            />
          </div>

          {/* Divider */}
          <div className="hidden h-72 border-l-2 border-[#535352] lg:block"></div>

          {/* Text */}
          <div className="flex flex-col items-center text-center text-black drop-shadow-[1px_4px_4px_rgba(0,0,0,0.8)]">
            
            <h1
              className={`${noto_Serif_JP.className} text-7xl font-bold sm:text-8xl md:text-8xl lg:text-8xl xl:text-8xl`}
            >
              ikigai<span className="text-[#e53131]">.</span>
            </h1>

            <h1
              className={`${noto_Serif_JP.className} text-7xl text-center -translate-x-2 font-bold sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl`}
            >
              farm
            </h1>

            <p
              className={`${noto_Serif_JP.className} mt-4 text-2xl text-black sm:text-5xl md:text-6xl lg:text-7xl`}
            >
              "a reason for being"
            </p>
          </div>

          {/* Japanese Text */}
          <div
            className={`${noto_Serif_JP.className} hidden flex-col items-center gap-4 text-2xl text-blac md:flex lg:text-4xl`}
          >
            <p>生</p>
            <p>き</p>
            <p>甲</p>
            <p>斐</p>
            <Image src="/japanesetext.png" alt="japanese text" width={50} height={50} className="h-auto" />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex w-full flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
          
          <MagneticButton onClick={() => router.push('/GroupBookings')} className="group relative overflow-hidden rounded-full border border-[#fff4b8]/20 bg-black/70 px-7 py-3 text-[#fff4b8] shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-[#fff4b8]/60 hover:shadow-[0_0_35px_rgba(255,244,184,0.25)] sm:px-8 sm:py-4">
  
  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#fff4b8]/0 via-[#fff4b8]/10 to-[#fff4b8]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

  {/* Content */}
  <div className="relative z-10 flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff4b8]/10 transition-all duration-300 group-hover:bg-[#fff4b8]">
      <GroupIcon className="h-5 w-5 text-[#fff4b8] transition-colors duration-300 group-hover:text-black md:h-6 md:w-6" />
    </div>

    <span className="text-base font-medium tracking-wide sm:text-lg md:text-xl">
      Group Booking
    </span>
  </div>
</MagneticButton>

<MagneticButton onClick={() => router.push('/Events')} className="group relative overflow-hidden rounded-full border border-[#fff4b8]/20 bg-black/70 px-7 py-3 text-[#fff4b8] shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-[#fff4b8]/60 hover:shadow-[0_0_35px_rgba(255,244,184,0.25)] sm:px-8 sm:py-4">
  
  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#fff4b8]/0 via-[#fff4b8]/10 to-[#fff4b8]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

  {/* Content */}
  <div className="relative z-10 flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff4b8]/10 transition-all duration-300 group-hover:bg-[#fff4b8]">
      <Calendar1 className="h-5 w-5 text-[#fff4b8] transition-colors duration-300 group-hover:text-black md:h-6 md:w-6" />
    </div>

    <span className="text-base font-medium tracking-wide sm:text-lg md:text-xl">
      Event Packages
    </span>
  </div>
</MagneticButton>
        </div>
      </div>
    </section>
  )
}

export default HeroSection