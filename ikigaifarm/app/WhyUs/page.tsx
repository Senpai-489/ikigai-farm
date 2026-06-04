'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ThreeDHoverGallery from '../components/lightswind/3d-hover-gallery'
import { medievalSharp, notoSerifJP } from '@/app/fonts'

import {
  Leaf,
  Target,
  PartyPopper,
  Users,
  Utensils,
  MapPin,
} from 'lucide-react'
import ValueGrid from '../components/ValueGrid'

export const values = [
  {
    icon: Leaf,
    title: 'Nature First',
    description:
      'Escape the city and reconnect with nature through immersive outdoor experiences in a peaceful farm setting.',
  },
  {
    icon: Target,
    title: '40+ Activities',
    description:
      'From ziplining and ATV rides to archery, pottery and farming experiences, there is something for everyone.',
  },
  {
    icon: PartyPopper,
    title: 'Memorable Celebrations',
    description:
      'Host birthdays, reunions, weddings and private events in a unique natural environment.',
  },
  {
    icon: Users,
    title: 'Corporate Retreats',
    description:
      'Build stronger teams through adventure challenges and customized corporate experiences.',
  },
  {
    icon: Utensils,
    title: 'Farm-To-Table Dining',
    description:
      'Enjoy fresh meals prepared with locally sourced ingredients and authentic farm flavours.',
  },
  {
    icon: MapPin,
    title: 'Close To Delhi NCR',
    description:
      'Conveniently located in Noida, making it an ideal destination for families, schools and groups.',
  },
]

const images = [
  '/Archery1.jpeg',
  '/CamelRide4.jpeg',
  '/FarmWedding2.jpeg',
  '/CorporateFood.jpeg',
  '/FamilyReunion2.jpeg',
  '/KidsParty6.jpeg',
  '/CorporateParty.jpeg',
  '/FarmWedding4.jpeg',
]

const Page = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <Navbar />

      <main className="grow">
        {/* HERO */}
        <section className=" h-auto overflow-hidden p-4">

         

          {/* Content */}
          <div className=" z-10 flex h-full items-center justify-center px-4">
            <div className="max-w-5xl  bg-transparent p-6 text-center backdrop-blur-md md:p-10">
              <p
                className={`text-xl font-bold text-green-800 md:text-2xl ${medievalSharp.className}`}
              >
                Why Choose Ikigai Farm?
              </p>

              <h1
                className={`mt-3 text-3xl leading-tight text-[#122a02] md:text-5xl lg:text-6xl ${notoSerifJP.className}`}
              >
                What Makes Us Delhi NCR&apos;s
                <br />
                Top Choice For Nature Retreats
              </h1>
            </div>
          </div>
        </section>

          <ThreeDHoverGallery
            images={images}
            className="hidden md:block px-8 w-full"
          />
        {/* ABOUT */}
        <section className="mx-auto max-w-5xl px-6">
          <p className="text-center relative mb-12 text-xl leading-8 text-gray-700 md:text-2xl">
            Ikigai Farm is a premier outdoor adventure and nature destination
            in Noida, inspired by the Japanese philosophy of Ikigai a reason
            for being. Nestled amidst lush greenery, the farm offers over 40
            adventure activities, farm-to-table dining, corporate retreats,
            school excursions, weddings, birthday celebrations, and curated
            group experiences. Just a short drive from Delhi NCR, Ikigai Farm
            blends adventure, nature, learning, and meaningful connections to
            create unforgettable experiences for families, friends, schools,
            and organizations.
          </p>
        </section>
     
        <ValueGrid items={values} />
        
       
      </main>

      <Footer />
    </div>
  )
}

export default Page