'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { MedievalSharp } from 'next/font/google'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
const medievalSharp = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
})

const experiences = [
  {
    title: 'Weekend Getaways',
    description:
      'Escape the city with nature walks, bonfires, countryside dining, and peaceful outdoor experiences crafted for families, couples, and groups.',
  },
  {
    title: 'Corporate Experiences',
    description:
      'Team-building activities, leadership offsites, outdoor workshops, and curated retreats designed to help teams reconnect and recharge.',
  },
  {
    title: 'Celebrations & Events',
    description:
      'Host birthdays, intimate celebrations, musical evenings, private dinners, and unforgettable outdoor gatherings surrounded by nature.',
  },
]

const ExperiencesHomeSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(0)

  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? null : index)
  }

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/bgact.webp"
          alt="experiences background"
          width={1600}
          height={1000}
          className="h-full w-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Decorative Blur */}
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#e8d28d]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#1f6d29]/30 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2
            className={`${medievalSharp.className} text-4xl text-[#fff4b8] drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:text-5xl md:text-6xl`}
          >
            Experiences at Ikigai Farm
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80 sm:text-base md:text-lg">
            Discover immersive outdoor experiences designed for relaxation,
            celebration, and meaningful connections.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {experiences.map((item, index) => {
            const isOpen = activeCard === index

            return (
              <div
                key={index}
                onClick={() => toggleCard(index)}
                className={`group cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 ${
                  isOpen
                    ? 'ring-2 ring-[#fff4b8]/50 shadow-2xl shadow-[#fff4b8]/10'
                    : ''
                }`}
              >
                
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <h1
                    className={`${medievalSharp.className} text-3xl leading-tight text-[#fff4b8] drop-shadow-[3px_2px_0px_rgba(0,0,0,1)] sm:text-4xl lg:text-5xl`}
                  >
                    {item.title.split(' ').map((word, i) => (
                      <span key={i}>
                        {word}
                        <br />
                      </span>
                    ))}
                  </h1>

                  <div
                    className={`mt-2 rounded-full border border-white/20 p-2 text-white transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown size={20} />
                  </div>
                </div>

                {/* Reveal Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen
                      ? 'mt-8 max-h-60 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                  <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">
                    {item.description}
                  </p>

                  <Link href="/Experiences">
                    <button className="mt-8 rounded-full border border-[#fff4b8]/40 bg-[#fff4b8]/10 px-6 py-3 text-sm text-[#fff4b8] transition duration-300 hover:bg-[#fff4b8] hover:text-black sm:text-base">
                      Explore Experience
                    </button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ExperiencesHomeSection