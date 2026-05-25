import React from 'react'
import Navbar from '../components/Navbar'
import {
  Noto_Serif_JP,
  Lovers_Quarrel,
  MedievalSharp,
} from 'next/font/google'

import Footer from '../components/Footer'
import FoodCards from '../components/FoodCards'
import Image from 'next/image'
import Link from 'next/link'

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
})

const loversQuarrel = Lovers_Quarrel({
  subsets: ['latin'],
  weight: '400',
})

const medievalSharp = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
})

const Cards = [
  {
    imageSrc: ['/KidsFood.jpeg'],
    title: 'Kids Celebrations',
    description:
      'Tiny tummies, big celebrations! Curated for little foodies.',
  },
  {
    imageSrc: ['/CorporateFood.jpeg'],
    title: 'Corporate Party',
    description:
      'Corporate, But Make It Memorable.Beyond Boardrooms. Into Experiences.Celebrate Success, The Ikigai Way.Fresh Air. Fresh Ideas. Better Gatherings.',
  },
  {
    imageSrc: ['/WeekendFood.jpeg'],
    title: 'Weekend Brunches',
    description:
      'Slow Mornings. Beautiful Brunches Where Weekends Taste Better.Brunches Worth Lingering Over.Your Weekend Ritual, Reimagined.',
  },
  {
    imageSrc: ['/FarmToTable.jpeg'],
    title: 'Farm to Table',
    description:
      'From Our Farm To Your Table.Freshly Harvested. Thoughtfully Served.From Soil To Celebration.The Art Of Fresh, Farm-Led Dining.',
  },
  {
    imageSrc: ['/SundownTable.jpeg'],
    title: 'Sundown Table',
    description:
      'Interactive culinary stations where the art of cooking becomes part of the celebration.',
  },
]

const page = () => {
  return (
    <div>
      
      {/* HERO */}
      <div className="relative flex min-h-[70vh] flex-col items-center overflow-hidden bg-transparent sm:min-h-screen">
        
        <Navbar />

        {/* Background */}
        <Image
          src={'/food placeholder.webp'}
          alt="food placeholder"
          width={1200}
          height={600}
          className="absolute -z-20 h-full w-full object-cover sm:h-72 lg:h-full"
        />

        {/* Overlay */}
        <div className="absolute inset-0 -z-10 bg-radial from-[#000000]/80 to-[#02160a]" />

        {/* Hero Content */}
        <div className="flex flex-col items-center px-4 pt-20 pb-12 text-center sm:px-6 sm:pt-24 sm:pb-16 md:px-10 lg:px-16">
          
          <h1
            className={`text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl ${notoSerifJP.className}`}
          >
            Taste of Purpose
          </h1>

          <h2
            className={`mt-4 text-4xl text-white sm:text-5xl md:text-6xl ${loversQuarrel.className}`}
          >
            "A harvest woven in nature&apos;s finest threads"
          </h2>

          <p
            className={`mt-8 max-w-4xl text-center text-base leading-relaxed text-[#f8ffad] sm:text-lg md:text-xl lg:text-2xl ${notoSerifJP.className}`}
          >
            A curated menu of delicious and nutritious meals made from
            fresh, locally-sourced ingredients.
          </p>
        </div>
      </div>

      {/* FOOD CARDS */}
      <div className="flex flex-col gap-8 bg-[#fdfdf1] px-4 py-10 sm:px-6 md:px-10 lg:px-20">
        
        {Cards.map((card, index) => (
          <FoodCards
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center text-center">
          
          <p
            className={`max-w-4xl text-3xl leading-tight text-[#333] sm:text-4xl md:text-5xl ${medievalSharp.className}`}
          >
            Book your Spot at our interactive kitchen today!
          </p>

          <Link href="/Contact" className="mt-8">
            <button className="rounded-full bg-[#122a02] px-6 py-3 text-sm font-medium text-amber-100 transition-colors duration-300 hover:bg-[#1f3c07] sm:px-8 sm:py-4 sm:text-base">
              Book My Spot
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default page