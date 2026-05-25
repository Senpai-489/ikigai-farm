import React from 'react'
import Navbar from '../components/Navbar'
import EventComponent from '../components/EventComponent'
import { MedievalSharp } from 'next/font/google'
import Footer from '../components/Footer'
import Link from 'next/link'
const medievalSharp = MedievalSharp({ subsets: ['latin'], weight: '400' })
const Cards = [
    {
        imageSrc: ['/KidsParty1.jpeg','/KidsParty4.jpeg','/KidsParty5.jpeg'],
        title: 'Kids Birthday Parties',
        description: 'Celebrate your child’s special day with a fun-filled farm birthday party, complete with games, activities, and delicious treats.'
    },
    {
        imageSrc: ['/CorporateParty.jpeg','/CorporateParty2.jpeg','/CorporateParty1.jpeg'],
        title: 'Corporate Events',
        description: 'Strengthen bonds and boost morale with our unique team-building experiences, set against the backdrop of our serene farm.'
    },
    {
        imageSrc: ['/FarmWedding2.jpeg','/FarmWedding1.jpeg'],
        title: 'Farm Weddings',
        description: 'Celebrate your love story in a rustic-chic setting, surrounded by nature’s beauty and the warmth of our farm.'
    },
    {
        imageSrc: ['/FamilyReunion.jpeg','/FamilyReunion2.jpeg','/FamilyReunion1.jpeg'],
        title: 'Family Reunions',
        description: 'Reconnect with loved ones in a picturesque farm setting, filled with fun activities, delicious food, and cherished moments.'
    }
]
const page = () => {
  return (
        <main className='min-h-screen overflow-x-hidden bg-white '>
        <Navbar />
                <section className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                    <div className='mb-10 max-w-3xl space-y-4'>
                        <p className='text-sm font-semibold uppercase tracking-[0.3em] text-black'>Events</p>
                        <h1 className={`text-4xl font-semibold text-black sm:text-5xl`}>Thoughtfully designed gatherings for every kind of celebration</h1>
                        <p className='text-base leading-7 text-black sm:text-lg'>Choose from intimate birthday parties, corporate retreats, and wedding experiences, all shaped around nature, food, and open-air adventure.</p>
                    </div>

                    <div className='grid gap-8 lg:grid-cols-2'>
                        {Cards.map((card) => (
                            <EventComponent key={card.title} imageSrc={card.imageSrc} title={card.title} description={card.description} />
                        ))}
                    </div>
                </section>
                <h4 className={`text-3xl text-center mt-16 mb-10 font-semibold text-[#093405] ${medievalSharp.className}`}>

                    Get in touch to plan your unforgettable event at Ikigai Farm!
                </h4>
                <Link href='/Contact'>
                  <button className='mx-auto block rounded-full bg-[#122a02] px-6 py-3 text-sm font-medium text-amber-100 transition-colors duration-300 hover:bg-[#1f3c07] mb-16'>Contact Us</button>
                </Link>
                <Footer />
        </main>
  )
}

export default page