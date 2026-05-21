import React from 'react'
import Navbar from '../components/Navbar'
import {
  Noto_Serif_JP,
  Lovers_Quarrel,
} from 'next/font/google'
import Footer from '../components/Footer'
import EventComponent from '../components/EventComponent'
import Image from 'next/image'

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
})

const loversQuarrel = Lovers_Quarrel({
  subsets: ['latin'],
  weight: '400',
})

const Cards = [
  {
    imageSrc: '/placeholder.webp',
    title: 'Zipline',
    description:
      'Test balance on 15m high aerial obstacles designed to push your limits and clear your mind.',
  },
  {
    imageSrc: '/placeholder.webp',
    title: 'Archery',
    description:
      'Test balance on 15m high aerial obstacles designed to push your limits and clear your mind.',
  },
  {
    imageSrc: '/placeholder.webp',
    title: 'Kids train',
    description:
      'Test balance on 15m high aerial obstacles designed to push your limits and clear your mind.',
  },
  {
    imageSrc: '/placeholder.webp',
    title: 'Trampoline',
    description:
      'Test balance on 15m high aerial obstacles designed to push your limits and clear your mind.',
  },
  {
    imageSrc: '/placeholder.webp',
    title: 'Camel Cart Ride',
    description:
      'Test balance on 15m high aerial obstacles designed to push your limits and clear your mind.',
  },
  {
    imageSrc: '/placeholder.webp',
    title: 'Pottery Workshop',
    description:
      'Test balance on 15m high aerial obstacles designed to push your limits and clear your mind.',
  },
]

const page = () => {
  return (
    <div>
      {/* HERO */}
      <div className="relative flex min-h-screen flex-col items-center bg-transparent overflow-hidden">
        
        <Navbar />

        <Image
          src={'/BG-img.png'}
          alt="activities hero"
          width={1200}
          height={600}
          className="absolute -z-10 h-full w-full object-cover"
        />

        {/* Optional overlay */}
        <div className="absolute inset-0 -z-10 bg-black/10" />

        <div className="flex flex-col items-center px-4 pt-24 pb-16 sm:px-6 md:px-10 lg:px-16">
          
          <h1
            className={`text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${notoSerifJP.className}`}
          >
            ikigai farm
          </h1>

          <h2
            className={`mt-3 text-center text-4xl sm:text-5xl md:text-6xl ${loversQuarrel.className}`}
          >
            "a reason for being"
          </h2>

          <p
            className={`mt-6 max-w-5xl text-center text-base leading-relaxed text-[#4b5d35] sm:text-lg md:text-xl lg:text-2xl ${notoSerifJP.className}`}
          >
            Discover a world of unforgettable outdoor experiences at Ikigai Farm.
            From thrilling adventures to serene escapes, we offer a curated
            selection of activities that connect you with nature, foster meaningful
            connections, and create lasting memories. Whether you're seeking
            team-building retreats, family-friendly fun, or unique celebrations,
            Ikigai Farm is your destination for authentic and enriching experiences.
          </p>
        </div>
      </div>

      {/* EVENTS */}
      <div className="flex flex-col gap-8 bg-[#fdfdf1] px-4 py-10 sm:px-6 md:px-10 lg:px-20">
        
        {Cards.map((card, index) => (
          <EventComponent
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}

        <button className="mx-auto mb-10 block rounded-full bg-[#122a02] px-6 py-3 text-base font-medium text-amber-100 transition-colors duration-300 hover:bg-[#1f3c07] sm:text-lg">
          Explore all activities
        </button>
      </div>

      <Footer />
    </div>
  )
}

export default page