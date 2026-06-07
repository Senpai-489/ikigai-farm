import React from 'react'
import Navbar from '../components/Navbar'
import EventComponent from '../components/EventComponent'
import { MedievalSharp } from 'next/font/google'
import Footer from '../components/Footer'
import Link from 'next/link'
import { ThreeDMarquee } from "@/app/components/lightswind/3d-marquee"
const images = [
    { src: '/KidsParty2.jpeg',
        alt: 'Kids Birthday Party'
    },
    { src: '/KidsParty5.jpeg',
        alt: 'Kids Birthday Party'
    },
    { src: '/KidsParty6.jpeg',
        alt: 'Kids Birthday Party'
    },
    { src: '/CorporateParty2.jpeg',
        alt: 'Corporate Event'
    },
    { src: '/CorporateParty1.jpeg',
        alt: 'Corporate Event'
    },
    { src: '/CorporateParty.jpeg',
        alt: 'Corporate Event'
    },
    { src: '/FarmWedding2.jpeg',
        alt: 'Farm Wedding'
    },
    { src: '/FarmWedding3.jpeg',
        alt: 'Farm Wedding'
    },
    { src: '/FarmWedding4.jpeg',
        alt: 'Farm Wedding'
    },
    { src: '/FarmWedding5.jpeg',
        alt: 'Farm Wedding'
    },
    { src: '/FamilyReunion.jpeg',
        alt: 'Family Reunion'
    },
    { src: '/FamilyReunion2.jpeg',
        alt: 'Family Reunion'
    },
    { src: '/FamilyReunion1.jpeg',
        alt: 'Family Reunion'
    },
    { src: '/FarmWedding4.jpeg',
        alt: 'Farm Wedding'
    },
    { src: '/FarmWedding5.jpeg',
        alt: 'Farm Wedding'
    },
    { src: '/FamilyReunion.jpeg',
        alt: 'Family Reunion'
    },
    { src: '/FamilyReunion2.jpeg',
        alt: 'Family Reunion'
    },
    
]
const medievalSharp = MedievalSharp({ subsets: ['latin'], weight: '400' })
const Cards = [
    {
        imageSrc: ['/KidsParty2.jpeg','/KidsParty5.jpeg','/KidsParty6.jpeg','/KidsParty7.jpeg','/KidsParty1.jpeg'],
        title: 'Kids Birthday Parties',
        description: 'Celebrate your child’s special day with a fun-filled farm birthday party, complete with games, activities, and delicious treats.'
    },
    {
        imageSrc: ['/CorporateParty2.jpeg','/CorporateParty1.jpeg','/CorporateParty.jpeg'],
        title: 'Corporate Events',
        description: 'Strengthen bonds and boost morale with our unique team-building experiences, set against the backdrop of our serene farm.'
    },
    {
        imageSrc: ['/FarmWedding2.jpeg','/FarmWedding3.jpeg','/FarmWedding4.jpeg','/FarmWedding5.jpeg'],
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
        <main className='min-h-screen overflow-x-hidden bg-transparent '>
        <ThreeDMarquee images={images} className='absolute left-1/2  -z-10 w-[120%] -translate-x-1/2 ' />
        <Navbar />
                <section className='mx-auto bg-white lg:w-[50vw] px-4 mt-24 lg:mt-0 py-12 sm:px-6 lg:px-8 lg:py-16'>
                    <div className=' max-w-3xl space-y-4'>
                        <p className='text-sm font-semibold uppercase tracking-[0.3em] text-black'>Events</p>
                        <h1 className={`text-4xl font-semibold text-black sm:text-5xl`}>Thoughtfully designed gatherings for every kind of celebration</h1>
                        <p className='text-base leading-7 text-black sm:text-lg'>Choose from intimate birthday parties, corporate retreats, and wedding experiences, all shaped around nature, food, and open-air adventure.</p>
                    </div>

                    <div className='flex items-center mt-24 lg:mt-40 flex-col gap-8 '>
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