'use client'

import React from 'react'
import { MedievalSharp } from 'next/font/google'

const medievalSharp = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
})

const Loading = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f6ed] px-6">

      {/* BACKGROUND GLOW */}
      <div className="absolute -left-24 top-0 h-[320px] w-[320px] rounded-full bg-[#dce8b4]/40 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-[320px] w-[320px] rounded-full bg-[#b8d68c]/30 blur-3xl" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center">

        {/* LOADER */}
        <div className="relative flex h-28 w-28 items-center justify-center">

          {/* OUTER RING */}
          <div className="absolute h-28 w-28 animate-spin rounded-full border-[5px] border-[#d6e3af] border-t-[#122a02]" />

          {/* INNER RING */}
          <div className="absolute h-16 w-16 animate-[spin_2s_linear_infinite_reverse] rounded-full border-[4px] border-[#c8f7b8] border-b-[#0f5e1f]" />

          {/* CENTER DOT */}
          <div className="h-4 w-4 rounded-full bg-[#122a02]" />

        </div>

        {/* TEXT */}
        <h1
          className={`${medievalSharp.className} mt-10 text-4xl leading-tight text-[#122a02] sm:text-5xl lg:text-6xl`}
        >
          Your Adventure
          <br />
          Is Loading...
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-7 text-[#4f633d] sm:text-base">
          Preparing unforgettable experiences, adventures, and memories
          for you at Ikigai Farm.
        </p>

      </div>

    </main>
  )
}

export default Loading