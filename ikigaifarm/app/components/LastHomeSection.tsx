import Image from 'next/image'
import React from 'react'
import { MedievalSharp } from 'next/font/google'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

const medieval_Sharp = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
})

const LastHomeSection = () => {
  const activities = [
    'Archery',
    'ATV Ride',
    'Trampoline',
    'Camel Ride',
    'Zorbing',
    'Zipline',
  ]

  return (
    <section className="relative overflow-hidden bg-white py-20 [content-visibility:auto] [contain-intrinsic-size:1000px]">

      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#9dc56d]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#003901]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="mb-16 text-center">
          <h2
            className={`text-3xl font-semibold leading-tight text-[#1d1d1d] sm:text-4xl lg:text-6xl ${medieval_Sharp.className}`}
          >
            <span className="font-extrabold text-[#003901]">
              IKIGAI FARM
            </span>{' '}
            — For Unending Fun & Adventure
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-700 sm:text-lg lg:text-xl">
            Experience the most exciting outdoor activity farm in Delhi NCR
            with thrilling adventures, nature, and unforgettable memories.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-flex items-center rounded-full border border-[#003901]/20 bg-[#dff2c4] px-4 py-2 text-sm font-medium text-[#003901] shadow-sm">
              40+ Adventure Activities
            </div>

            <h3 className="mt-6 text-4xl font-bold leading-tight text-black sm:text-5xl">
              Explore, Dare, Enjoy!
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-700 sm:text-xl">
              Experience the ultimate thrill at Ikigai Farm. Conquer rope
              courses, zip through the skies, challenge yourself with
              adventure sports, and enjoy unforgettable outdoor experiences
              designed for every age group.
            </p>

            {/* ACTIVITY LIST */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">

              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 rounded-2xl border border-[#003901]/10 bg-white/80 px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <CheckCircle className="h-6 w-6 text-green-600" />

                  <p className="text-base font-medium text-gray-800">
                    {activity}
                  </p>
                </div>
              ))}

            </div>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link href="/Contact">
                <button className="group flex items-center gap-2 rounded-full bg-[#003901] px-7 py-4 text-sm font-semibold text-[#fffba6] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#0a4f0c]">
                  Book Now
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>

              <Link href="/Activities/All-activities">
                <button className="rounded-full border-2 border-[#003901] bg-white px-7 py-4 text-sm font-semibold text-[#003901] transition-all duration-300 hover:bg-[#003901] hover:text-[#fffba6]">
                  View All Activities
                </button>
              </Link>

            </div>

          </div>

          {/* RIGHT IMAGES */}
          <div className="relative">

            {/* Main Image Grid */}
            <div className="grid grid-cols-3 grid-rows-2 gap-4">

              {/* Large Image */}
              <div className="group col-span-2 row-span-2 overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="/CamelRide.jpeg"
                  alt="Camel Ride"
                  width={900}
                  height={700}
                  quality={70}
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Small Top */}
              <div className="group overflow-hidden rounded-[1.5rem] shadow-xl">
                <Image
                  src="/Archery.jpeg"
                  alt="Archery"
                  width={400}
                  height={300}
                  quality={70}
                  sizes="(min-width: 1024px) 13vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Small Bottom */}
              <div className="group overflow-hidden rounded-[1.5rem] shadow-xl">
                <Image
                  src="/ATV ride.jpeg"
                  alt="ATV Ride"
                  width={400}
                  height={300}
                  quality={70}
                  sizes="(min-width: 1024px) 13vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

            </div>

            {/* Bottom Row */}
            <div className="mt-4 grid grid-cols-3 gap-4">

              {[
                {
                  src: '/zorbing.jpeg',
                  alt: 'Zorbing',
                },
                {
                  src: '/Tyreclimb.jpeg',
                  alt: 'Tyre Climb',
                },
                {
                  src: '/zipline.jpeg',
                  alt: 'Zipline',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-[1.5rem] shadow-xl"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    quality={70}
                    sizes="(min-width: 1024px) 13vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ))}

            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-6 hidden rounded-3xl border border-white/40 bg-white/80 p-5 backdrop-blur-xl shadow-2xl lg:block">
            

              <p className="mt-1 text-2xl font-bold text-black">
                Adventure Awaits
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default LastHomeSection
