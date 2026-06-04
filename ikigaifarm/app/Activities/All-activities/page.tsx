import React from 'react'
import Navbar from '../../components/Navbar'
import { MedievalSharp } from 'next/font/google'
import Footer from '../../components/Footer'
import Link from 'next/link'

import Image from 'next/image'
const medievalSharp = MedievalSharp({ subsets: ['latin'], weight: '400' })

import MasonryGrid from '../../components/MasonryGrid'
const images = [
  '/MusicJamming2.jpg',
  '/LohriFestival2.jpg',
  '/PizzaMaking1.jpg',
  '/HoliBash2.jpeg',
  '/KidsParty2.jpeg',
  '/FleaMarket4.jpg',
  '/BhajanClubbing2.jpeg',
  '/NavratriGarba2.jpeg',
  '/NewYearCelebration2.jpg',
  '/Archery3.jpeg',
  '/Potteryworkshop1.jpg',
  '/MaskPaintingWorkshop1.jpg',
  '/CandleMakingWorkshop1.jpg',
  '/MusicNights2.jpeg',
  '/SufiNights2.jpg',
  '/CorporateParty2.jpeg',
  '/FarmWedding2.jpeg',
  '/NukkadNatak1.jpg',
  '/FamilyReunion.jpeg',
  '/KidsParty5.jpeg',
  '/OpenAirTheatre1.jpg',
  '/CorporateParty1.jpeg',
  '/FarmWedding3.jpeg',
  '/FamilyReunion2.jpeg',
  '/KidsParty6.jpeg',
  '/CorporateParty.jpeg',
  '/FarmWedding4.jpeg',
  '/HoliBash1.jpeg',
  '/FamilyReunion1.jpeg',
  '/FarmWedding5.jpeg',
  '/KidsParty7.jpeg',
  '/KidsParty1.jpeg',
  '/PizzaMaking1.jpg',
  '/CorporateParty.jpeg',
  '/FarmWedding4.jpeg',
]
const page = () => {
  return (
    <main className='min-h-screen overflow-x-hidden bg-transparent text-[#0f1d0a]'>
      <Navbar />
      <section className='relative mx-auto  px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16'>
        {/* <div className='pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-[#f7efe3] via-transparent to-transparent' />
        <div className='pointer-events-none absolute -left-28 top-24 -z-10 h-72 w-72 rounded-full bg-[#e7f1d4] blur-3xl' />
        <div className='pointer-events-none absolute -right-20 top-52 -z-10 h-80 w-80 rounded-full bg-[#f5e6c9] blur-3xl' /> */}

        {/* <ThreeDMarquee images={images} className='absolute left-1/2 -translate-y-20 -top-1/12 -z-10 w-[120%] -translate-x-1/2 ' /> */}
        <div className="absolute opacity-70 left-1/2 -translate-y-20 -top-1/14 -z-10 w-[100%] -translate-x-1/2  grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2 h-[600px]">
  {/* Tall Right */}
  {/* <div className="relative overflow-hidden rounded-3xl">*/}
  <div className="relative  overflow-hidden rounded-3xl md:col-span-2 md:row-span-1">
    <Image
      src="/FamilyReunion2.jpeg"
      alt="Kids Birthday Parties"
      fill
      className="object-cover hover:scale-105 transition duration-500"
    />
  </div>


  <div className="relative overflow-hidden rounded-3xl">
    <Image
      src="/beltCarousel6.jpeg"
      alt="Kids Birthday Parties"
      fill
      className="object-cover hover:scale-105 transition duration-500"
    />
  </div>
  <div className="relative overflow-hidden rounded-3xl">
    <Image
      src="/Archery3.jpeg"
      alt="Kids Birthday Parties"
      fill
      className="object-cover hover:scale-105 transition duration-500"
    />
  </div>
  <div className="relative overflow-hidden rounded-3xl">
    <Image
      src="/CorporateFood.jpeg"
      alt="Kids Birthday Parties"
      fill
      className="object-cover hover:scale-105 transition duration-500"
    />
  </div>

  
  <div className="relative overflow-hidden rounded-3xl">
    <Image
      src="/zipline.jpeg"
      alt="Kids Birthday Parties"
      fill
      className="object-cover hover:scale-105 transition duration-500"
    />
  </div>

   <div className="relative overflow-hidden rounded-3xl md:col-span-2 md:row-span-1">
    <Image
      src="/CorporateParty1.jpeg"
      alt="Kids Birthday Parties"
      fill
      className="object-cover hover:scale-105 transition duration-500"
    />
  </div>
</div>
        <div className='relative drop-shadow-xl bg-white p-8 z-10 max-w-3xl space-y-5 text-left sm:space-y-6'>
          <p className='inline-flex w-fit items-center gap-2 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#2c3b1d] shadow-sm'>
            All Activities
          </p>
          <h1 className={`text-4xl font-semibold tracking-tight text-[#14240c] sm:text-5xl lg:text-6xl ${medievalSharp.className}`}>
            Explore Our Full Range of 40+ Exciting Activities at Ikigai Farm
          </h1>
          <p className='max-w-2xl text-base leading-7 text-[#2a3821] sm:text-lg'>
            Discover the perfect blend of adventure and tranquility at Ikigai Farm. Our diverse array of activities is designed to cater to every interest, ensuring a memorable experience for all ages.
          </p>
          {/* <div className='flex flex-wrap items-center gap-3 text-sm text-[#2d3c23]'>
            <span className='rounded-full bg-[#e7f1d4] px-3 py-1'>Small-group coaching</span>
            <span className='rounded-full bg-[#f3e8d4] px-3 py-1'>Hands-on sessions</span>
            <span className='rounded-full bg-[#e1ebf8] px-3 py-1'>Seasonal themes</span>
          </div> */}
        </div>

        <section className="py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="mb-12 text-center">
      

      <h2 className={`${medievalSharp.className} mt-5 text-4xl font-black text-[#122a02] md:text-5xl`}>
        Activities Offered at Ikigai Farm
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
        Discover creative workshops, seasonal festivals, family
        celebrations, corporate gatherings, and immersive farm
        experiences designed for all age groups.
      </p>
    </div>

    {/* Grid */}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[
        "Pottery",
        "Mask Painting",
        "Candle Making",
        "DIY Craft",
        "Bakery",
        "Pizza Making",
        "Nukkad Natak",
        "Open Air Theatre",
        "Music & Jamming",
        "Reading",
        "Handwriting & Calligraphy",
        "Puppet Workshop",

        "Holi Bash",
        "Bhajan Clubbing",
        "Navratri Garba",
        "New Year Celebration",
        "Christmas Carnival",
        "Lohri Festival",
        "Music Festival",
        "Sufi Night",
        "Farmer's Market",
        "Flea Bazaar",

        "Kids Birthday Parties",
        "Farm Weddings",
        "Corporate Events",
        "Family Reunions",
        "Archery",
        "Ziplining",
        "ATV Rides",
        "Camel Cart Rides",
        "Zorbing",
        "Farm to Table Experiences",
        "Kids Train",
        "Trampoline"
      ].map((activity) => (
        <div
          key={activity}
          className="
            group
            relative
            overflow-hidden
            
            border
            border-[#e5e5e5]
            bg-white
            p-5
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#ffe494]
            hover:bg-[#fffdf5]
            hover:shadow-xl
          "
        >
          
          <div className="relative flex items-center gap-3">
           

            <span className="font-semibold text-[#122a02]">
              {activity}
            </span>
          </div>
        </div>
      ))}
      <div className='font-semibold text-[#122a02]'>And Unforegettable Memories...</div>
    </div>
  </div>
</section>

<h2 className={`${medievalSharp.className} mb-12 text-center text-4xl font-black text-[#122a02] md:text-5xl`}>
        Have a glimpse of the fun that awaits you at Ikigai Farm
      </h2>


        <div >
          <MasonryGrid images={images} />
        </div>
      </section>

      <section className='mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8'>
        <div className='rounded-3xl border border-[#e2d2b6] b px-6 py-10 text-center shadow-lg backdrop-blur sm:px-10'>
          <h4 className={`text-2xl font-semibold text-[#093405] sm:text-3xl ${medievalSharp.className}`}>
            Get in touch to plan your unforgettable event at Ikigai Farm!
          </h4>
          <p className='mx-auto mt-3 max-w-2xl text-sm text-[#314024] sm:text-base'>
            Tell us your vision and we will craft a day that feels personal, grounded, and full of joy.
          </p>
          <Link href='/Contact'>
            <button className='mt-6 inline-flex items-center justify-center rounded-full bg-[#122a02] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-amber-100 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1f3c07] hover:shadow-xl'>
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default page