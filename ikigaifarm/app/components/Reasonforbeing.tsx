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
  <div className="overflow-hidden mb-8 bg-black py-4">
  <div className="flex w-max animate-[scroll_20s_linear_infinite] whitespace-nowrap">
    {Array.from({ length: 20 }).map((_, i) => (
      <span
        key={i}
        className="mx-8 text-sm font-bold uppercase tracking-widest text-amber-300"
      >
        Upcoming Events ✦
      </span>
    ))}
  </div>
</div>
  <div className="-z-10 mb-12 gap-10 flex flex-col mx-auto w-screen items-center justify-center " >
  <div className="relative w-full max-w-4xl">
  <div className="w-full px-4 space-y-4">
  {/* Main Event Image */}
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
    <Image
      src="/dandiyanights.jpeg"
      alt="Dandiya Nights"
      width={1000}
      height={400}
      quality={70}
      sizes="100vw"
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] sm:h-[350px] lg:h-full"
    />

    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
  </div>

  {/* Booking Options */}
  <div className="grid grid-cols-2 gap-2 sm:gap-3">

    {/* District */}
    <a
      href="https://www.district.in/events/ikigai-dandiya-nights-2026-noida-oct17-2026-buy-tickets"
      className="group flex min-w-0 items-center gap-2 rounded-xl border border-black/10 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:gap-4 sm:rounded-2xl sm:p-3"
    >
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-20 sm:rounded-xl">
        <img
          src="/DistrictLogoPurple.jpeg"
          alt="Book on District"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[8px] font-medium uppercase tracking-wider text-black/40 sm:text-xs">
          Tickets
        </p>

        <p className="mt-0.5 truncate text-[10px] font-semibold leading-tight text-black sm:text-base">
          Book on District
        </p>
      </div>

      <div className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-sm text-white transition-transform duration-300 group-hover:translate-x-1 sm:flex sm:h-9 sm:w-9 sm:text-base">
        →
      </div>
    </a>

    {/* BookMyShow */}
    <a
      href="https://in.bookmyshow.com/activities/ikigai-dandiya-nights-2026-noida/ET00510140?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
      className="group flex min-w-0 items-center gap-2 rounded-xl border border-black/10 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:gap-4 sm:rounded-2xl sm:p-3"
    >
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-20 sm:rounded-xl">
        <img
          src="/bookmyshowlogosmall.png"
          alt="Book on BookMyShow"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[8px] font-medium uppercase tracking-wider text-black/40 sm:text-xs">
          Tickets
        </p>

        <p className="mt-0.5 truncate text-[10px] font-semibold leading-tight text-black sm:text-base">
          BookMyShow
        </p>
      </div>

      <div className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-sm text-white transition-transform duration-300 group-hover:translate-x-1 sm:flex sm:h-9 sm:w-9 sm:text-base">
        →
      </div>
    </a>
  </div>
</div>


{/* ====================================================== */}
{/* CHRISTMAS CARNIVAL */}
{/* ====================================================== */}

<div className="mt-6 px-4 w-full space-y-4 sm:mt-8">
  {/* Main Event Image */}
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
    <Image
      src="/ChristmasPoster.jpeg"
      alt="Christmas Carnival"
      width={1000}
      height={400}
      quality={70}
      sizes="100vw"
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] sm:h-[350px] lg:h-full"
    />

    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
  </div>

  {/* Booking Options */}
  <div className="grid grid-cols-2 gap-2 sm:gap-3">

    {/* District */}
    <a
      href="https://www.district.in/events/ikigai-christmas-carnival-food-festival-2026-dec20-2026-buy-tickets"
      className="group flex min-w-0 items-center gap-2 rounded-xl border border-black/10 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:gap-4 sm:rounded-2xl sm:p-3"
    >
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-20 sm:rounded-xl">
        <img
          src="/DistrictLogoPurple.jpeg"
          alt="Book on District"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[8px] font-medium uppercase tracking-wider text-black/40 sm:text-xs">
          Tickets
        </p>

        <p className="mt-0.5 truncate text-[10px] font-semibold leading-tight text-black sm:text-base">
          Book on District
        </p>
      </div>

      <div className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-sm text-white transition-transform duration-300 group-hover:translate-x-1 sm:flex sm:h-9 sm:w-9 sm:text-base">
        →
      </div>
    </a>

    {/* BookMyShow */}
    <a
      href="https://in.bookmyshow.com/activities/ikigai-christmas-carnival-food-festival-2026/ET00510138"
      className="group flex min-w-0 items-center gap-2 rounded-xl border border-black/10 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:gap-4 sm:rounded-2xl sm:p-3"
    >
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-20 sm:rounded-xl">
        <img
          src="/bookmyshowlogosmall.png"
          alt="Book on BookMyShow"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[8px] font-medium uppercase tracking-wider text-black/40 sm:text-xs">
          Tickets
        </p>

        <p className="mt-0.5 truncate text-[10px] font-semibold leading-tight text-black sm:text-base">
          BookMyShow
        </p>
      </div>

      <div className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-sm text-white transition-transform duration-300 group-hover:translate-x-1 sm:flex sm:h-9 sm:w-9 sm:text-base">
        →
      </div>
    </a>
  </div>
</div>

  </div> 



  </div>

  <div className="mx-auto max-w-6xl px-4">
    <h3 className={` ${medievalSharp.className} text-center text-3xl lg:text-5xl  text-black`}>
      We Are Also Available On
    </h3>

    <div className="my-10 flex flex-wrap items-center justify-center gap-8 md:gap-16">
      <img
        src="/TripAdvisorLogo.png"
        alt="Tripadvisor"
        className="h-16 lg:h-28 object-contain  transition "
      />

      <img
        src="/DistrictLogo.svg"
        alt="District"
        className="h-12 lg:h-28 object-contain  transition "
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