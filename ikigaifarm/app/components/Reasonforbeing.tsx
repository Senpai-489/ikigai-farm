import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
  Phone,
  PlayCircleIcon,
} from 'lucide-react'

import {
  loversQuarrel,
  medievalSharp,
  notoSansJP,
} from '@/app/fonts'

const Reasonforbeing = () => {
  return (
    <section className="relative overflow-hidden lg:-translate-y-40  bg-white [content-visibility:auto] [contain-intrinsic-size:760px]">
<section className="lg:mb-40">
  <div className="mx-auto max-w-6xl px-4">
    <h3 className={` ${medievalSharp.className} text-center text-3xl lg:text-5xl  text-black`}>
      We Are Also Available On
    </h3>

    <div className="my-10 flex flex-wrap items-center justify-center gap-8 md:gap-16">
      <img
        src="/TripAdvisorLogo.jpeg"
        alt="Tripadvisor"
        className="h-16 lg:h-28 object-contain  transition "
      />

      <img
        src="/DistrictLogoPurple.jpeg"
        alt="District"
        className="h-16 lg:h-28 object-contain  transition "
      />

      <img
        src="/BookMyShowLogo.png"
        alt="BookMyShow"
        className="h-16 lg:h-28 object-contain  transition "
      />
    </div>
  </div>
</section>
      <div className="mx-auto flex py-8 max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:gap-24 lg:px-12">

        {/* LEFT */}
        <div className="relative flex w-full items-center justify-center lg:w-1/2">

          {/* BACKGROUND STACK */}
          <div className="absolute h-[280px] w-[280px] rotate-2 rounded-2xl bg-[#1d5a2f] sm:h-[380px] sm:w-[380px] lg:h-[520px] lg:w-[520px]" />

          <div className="absolute h-[280px] w-[280px] rotate-6 rounded-2xl bg-[#1f6d29] sm:h-[380px] sm:w-[380px] lg:h-[520px] lg:w-[520px]" />

          <div className="absolute h-[280px] w-[280px] rotate-12 rounded-2xl bg-[#194b1f] sm:h-[380px] sm:w-[380px] lg:h-[520px] lg:w-[520px]" />

          {/* IMAGE */}
          <Image
            src="/zipline.jpeg"
            alt="reason for being"
            width={400}
            height={400}
            quality={70}
            priority={false}
            sizes="(min-width:1024px) 500px, 80vw"
            className="relative z-10 h-[280px] w-auto rotate-6 rounded-2xl object-cover shadow-2xl transition-transform duration-700 hover:scale-105 sm:h-[380px] lg:h-[520px]"
          />
        </div>

        {/* RIGHT */}
        <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">

          <h1
            className={`${medievalSharp.className} text-3xl text-[#262626] sm:text-4xl md:text-5xl`}
          >
            “A Reason for Being”
          </h1>

          <p
            className={`${loversQuarrel.className} mt-4 text-4xl text-[#8b5e3c] sm:text-5xl md:text-6xl`}
          >
            reconnect with what matters
          </p>

          <p
            className={`${notoSansJP.className} mt-8 max-w-2xl text-base leading-8 text-[#4b5928] sm:text-lg md:text-xl`}
          >
            Inspired by the philosophy of Ikigai,
            Ikigai Farm is a curated outdoor
            destination designed to bring together
            nature, experiences, and meaningful
            connections.

            Just a short drive from the city,
            we offer a refreshing escape where
            you can unwind, explore, celebrate,
            and reconnect.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex w-full flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start">

            <button
              className="
                flex
                items-center
                gap-3
                rounded-full
                bg-[#262626]
                px-7
                py-4
                text-sm
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#3a3a3a]
                sm:text-base
              "
            >
              <PlayCircleIcon className="text-amber-200" />

              Get a virtual tour
            </button>

            <Link href="tel:+918006746390">

              <button
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#262626]
                  px-7
                  py-4
                  text-sm
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-[#3a3a3a]
                  sm:text-base
                "
              >
                <Phone className="text-amber-200" />

                Book your visit
              </button>

            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reasonforbeing