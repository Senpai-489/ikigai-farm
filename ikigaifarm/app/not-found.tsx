'use client'

import Link from 'next/link'
import Image from 'next/image'

import {
  MedievalSharp,
  Noto_Serif_JP,
} from 'next/font/google'

import {
  ArrowLeft,
  Home,
  Trees,
} from 'lucide-react'

const medievalSharp =
  MedievalSharp({
    subsets: ['latin'],
    weight: '400',
  })

const notoSerif =
  Noto_Serif_JP({
    subsets: ['latin'],
  })

export default function NotFound() {
  return (
    <main
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#efe8da]
        px-6
      "
    >
      {/* PAPER BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,#f6f0e4_0%,#ece2d0_40%,#e2d4bf_100%)]
        "
      />

     
      {/* LEFT BAMBOO */}
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-[220px]
          opacity-25
          blur-[0.3px]
        "
      >
        
      </div>

      {/* TOP BLOSSOM */}
      <div
        className="
          absolute
          right-0
          top-0
          h-[260px]
          w-[500px]
          opacity-35
        "
      >
       
      </div>

      {/* GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#d4b200]/10
          blur-3xl
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          max-w-6xl
          flex-col
          items-center
          text-center
        "
      >
        {/* LOGO */}
        <div
          className="
            relative
            mb-8
            h-28
            w-28
            sm:h-36
            sm:w-36
            lg:h-44
            lg:w-44
          "
        >
          <Image
            src="/logo1.png"
            alt="Ikigai Farm"
            fill
            priority
            className="object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
          />
        </div>

        {/* 404 */}
        <p
          className={`
            text-sm
            uppercase
            tracking-[0.4em]
            text-[#7b1e1e]
            sm:text-base
            ${notoSerif.className}
          `}
        >
          Error • 404
        </p>

        {/* TITLE */}
        <h1
          className={`
            mt-5
            text-5xl
            leading-[0.95]
            text-[#111]
            sm:text-7xl
            lg:text-8xl
            ${medievalSharp.className}
          `}
        >
          Lost In
          <span className="mt-2 block text-[#7b1e1e]">
            The Farm
          </span>
        </h1>

        {/* SUBTEXT */}
        <p
          className={`
            mt-8
            max-w-2xl
            text-sm
            leading-8
            text-[#3f3a32]
            sm:text-base
            md:text-lg
            ${notoSerif.className}
          `}
        >
          The page you are
          looking for wandered
          somewhere between the
          adventure trails, and
          sunset bonfires of
          Ikigai Farm.
        </p>

        {/* DECORATIVE DIVIDER */}
        <div className="mt-10 flex items-center gap-4">
          <div className="h-px w-16 bg-[#c2a76d]" />

          <Trees className="h-5 w-5 text-[#7b1e1e]" />

          <div className="h-px w-16 bg-[#c2a76d]" />
        </div>

        {/* BUTTONS */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          {/* HOME */}
          <Link href="/">
            <button
              className="
                group
                flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#111]
                px-8
                py-4
                text-sm
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#f6e7a1]
                shadow-[0_10px_40px_rgba(0,0,0,0.18)]
                transition-all
                duration-300
                hover:scale-105
              "
            >
              <Home className="h-4 w-4" />

              Return Home
            </button>
          </Link>

          {/* BLOGS */}
          <Link href="/Blogs">
            <button
              className="
                group
                flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-[#111]/10
                bg-white/60
                px-8
                py-4
                text-sm
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#111]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-105
                hover:bg-white
              "
            >
              <ArrowLeft className="h-4 w-4" />

              Explore Blogs
            </button>
          </Link>
        </div>

        {/* JAPANESE TEXT */}
        <div
          className={`
            mt-16
            text-xs
            tracking-[0.3em]
            text-[#7b1e1e]/70
            sm:text-sm
            ${notoSerif.className}
          `}
        >
          生き甲斐 • A REASON FOR
          BEING
        </div>
      </div>
    </main>
  )
}