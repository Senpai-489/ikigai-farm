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
    imageSrc: '/zipline.jpeg',
    title: 'Zipline',
    description:
      'Take the leap. Own the sky. Zipline into pure adventure. ',
  },
  {
    imageSrc: '/Archery.jpeg',
    title: 'Archery',
    description:
      'Fun, focus, and friendly competition for all ages. Step into the exciting world of archery. ',
  },
  {
    imageSrc: '/KidsTrain.jpeg',
    title: 'Kids train',
    description:
      'All aboard for fun! Our kids train offers a delightful ride through the farm, sparking joy and wonder for little adventurers.',
  },
  {
    imageSrc: '/Trampoline.jpeg',
    title: 'Trampoline',
    description:
      'Bounce into joy! Our trampoline is a fun-filled escape for all ages, offering endless laughter and a chance to soar high in the fresh farm air.',
  },
  {
    imageSrc: '/CamelRidecpy.jpeg',
    title: 'Camel Cart Ride',
    description:
      'Experience the thrill of a camel cart ride through the scenic farm landscape.',
  },
  {
    imageSrc: '/beltCarousel1.jpeg',
    title: 'Bouncy',
    description:
      'Jump into joy! Our bouncy castle is a fun-filled escape for all ages, offering endless laughter and a chance to soar high in the fresh farm air.',
  },
]

const page = () => {
  return (
    <div>
      {/* HERO */}
      <div className="relative flex min-h-screen flex-col items-center bg-transparent overflow-hidden">
        
        <Navbar />

        <Image
          src={'/bg img.jpeg'}
          alt="activities hero"
          width={1200}
          height={600}
          className="absolute -z-10 h-full w-full object-cover"
        />

        {/* Optional overlay */}
        <div className="absolute inset-0 -z-10 bg-black/10" />

        <div className="flex flex-col items-center px-4 pt-24 pb-16 sm:px-6 md:px-10 lg:px-16">
          
          <h1
            className={`text-center text-6xl md:text-5xl lg:text-7xl ${notoSerifJP.className}`}
          >
            ikigai farm
          </h1>

          <h2
            className={`mt-3 text-center  sm:text-sm md:text-3xl ${notoSerifJP.className}`}
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
      <div className="flex flex-col gap-8 bg-[#fdfdf1] px-4 py-10 sm:px-6 md:px-10 lg:px-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        
        {Cards.map((card, index) => (
          <EventComponent
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}

        <button className="col-span-full mx-auto mb-10 text-center block rounded-full bg-[#122a02] px-6 py-3 text-base font-medium text-amber-100 transition-colors duration-300 hover:bg-[#1f3c07] sm:text-lg">
          Explore all activities
        </button>
      </div>

      <Footer />
    </div>
  )
}

export default page