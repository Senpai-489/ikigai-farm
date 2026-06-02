import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ActivityIcon, Calendar1, GroupIcon, MoveRight } from 'lucide-react'
import { FcRight } from 'react-icons/fc'

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
      <div className="relative md:absolute bottom-20 lg:bottom-5 left-1/2 z-30 flex w-[92%] max-w-[340px] -translate-x-1/2 flex-col gap-3 sm:w-auto sm:max-w-none flex-row">

  <Link href="/Contact" className="w-full sm:w-auto">
    <button className="flex h-14 w-full items-center justify-center gap-3 rounded-full bg-black/65 px-6 text-sm lg:text-lg font-medium text-[#fff4b8] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-black/80 sm:min-w-[240px]">


      Book Now
      <MoveRight className="h-5 w-5" />
    </button>
  </Link>

  

</div>
    </section>
  )
}

export default HeroSection