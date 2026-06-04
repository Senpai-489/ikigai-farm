import React from 'react'
import Navbar from '../../components/Navbar'
import EventComponent from '../../components/EventComponent'
import { MedievalSharp } from 'next/font/google'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ThreeDMarquee, MarqueeImage } from "@/app/components/lightswind/3d-marquee"
import { AlignVerticalSpaceAround } from 'lucide-react'
const medievalSharp = MedievalSharp({ subsets: ['latin'], weight: '400' })
import VerticalCard from '../../components/VerticalCard'
const images = [
  { src: '/KidsParty2.jpeg',
    alt: 'Kids Birthday Parties' },
  { src: '/CorporateParty2.jpeg',
    alt: 'Corporate Events' },
    { src: '/FarmWedding2.jpeg',
    alt: 'Farm Weddings' },
    { src: '/FamilyReunion.jpeg',
    alt: 'Family Reunions' },
    { src: '/KidsParty5.jpeg',
    alt: 'Kids Birthday Parties' },
  { src: '/CorporateParty1.jpeg',
    alt: 'Corporate Events' },
    { src: '/FarmWedding3.jpeg',
    alt: 'Farm Weddings' },
    { src: '/FamilyReunion2.jpeg',
    alt: 'Family Reunions' },
    { src: '/KidsParty6.jpeg',
    alt: 'Kids Birthday Parties' },
  { src: '/CorporateParty.jpeg',
    alt: 'Corporate Events' },
    { src: '/FarmWedding4.jpeg',
    alt: 'Farm Weddings' },
    { src: '/FamilyReunion1.jpeg',
    alt: 'Family Reunions' },
    { src: '/FarmWedding5.jpeg',
    alt: 'Farm Weddings' },
    { src: '/KidsParty7.jpeg',
    alt: 'Kids Birthday Parties' },
    { src: '/KidsParty1.jpeg',
    alt: 'Kids Birthday Parties' },
    { src: '/CorporateParty.jpeg',
    alt: 'Corporate Events' },
    { src: '/FarmWedding4.jpeg',
    alt: 'Farm Weddings' },



]
const Cards = [
{
  imageSrc: ['/placeholder.webp'],
  title: 'Holi Bash',
  description:
    'Celebrate Holi with vibrant colors, music, dance, and unforgettable fun in a lively farm setting.',
},
{
  imageSrc: ['/placeholder.webp'],
  title: 'Bhajan Clubbing',
  description:
    'A unique fusion of devotional bhajans, energetic beats, and a vibrant community atmosphere.',
},
{
  imageSrc: ['/placeholder.webp'],
  title: 'Navratri Garba',
  description:
    'Dance under the stars with traditional Garba, festive music, and joyful celebrations.',
},
{
  imageSrc: ['/placeholder.webp'],
  title: 'New Year Celebration',
  description:
    'Welcome the new year with music, entertainment, great food, and memorable moments.',
},
{
  imageSrc: ['/placeholder.webp'],
  title: 'Christmas Carnival',
  description:
    'Experience festive decorations, holiday cheer, family fun, and Christmas magic at the farm.',
},
{
  imageSrc: ['/placeholder.webp'],
  title: 'Lohri Festival',
  description:
    'Celebrate Lohri with bonfires, folk music, dance, and traditional festive spirit.',
},
{
  imageSrc: ['/placeholder.webp'],
  title: 'Music Festival',
  description:
    'Enjoy live performances, vibrant energy, and unforgettable musical experiences in nature.',
},
{
  imageSrc: ['/placeholder.webp'],
  title: 'Sufi Nights',
  description:
    'Immerse yourself in soulful Sufi music, serene vibes, and enchanting performances.',
},
  
]
const page = () => {
  return (
    <main className='min-h-screen overflow-x-hidden bg-transparent text-[#0f1d0a]'>
      <Navbar />
      <section className='relative mx-auto  px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16'>
        {/* <div className='pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-[#f7efe3] via-transparent to-transparent' />
        <div className='pointer-events-none absolute -left-28 top-24 -z-10 h-72 w-72 rounded-full bg-[#e7f1d4] blur-3xl' />
        <div className='pointer-events-none absolute -right-20 top-52 -z-10 h-80 w-80 rounded-full bg-[#f5e6c9] blur-3xl' /> */}

        <ThreeDMarquee images={images} className='absolute left-1/2 -translate-y-20 -top-1/12 -z-10 w-[120%] -translate-x-1/2 ' />

        <div className='relative bg-white p-8 z-10 max-w-3xl space-y-5 text-left sm:space-y-6'>
          <p className='inline-flex w-fit items-center gap-2 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#2c3b1d] shadow-sm'>
            Signature Events
          </p>
          <h1 className={`text-4xl font-semibold tracking-tight text-[#14240c] sm:text-5xl lg:text-6xl ${medievalSharp.className}`}>
            Our Signature Events Are Crafted to Create Unforgettable Memories
          </h1>
          <p className='max-w-2xl text-base leading-7 text-[#2a3821] sm:text-lg'>
            Explore our range of signature events, crafted to create unforgettable memories in a beautiful farm setting.
          </p>
          {/* <div className='flex flex-wrap items-center gap-3 text-sm text-[#2d3c23]'>
            <span className='rounded-full bg-[#e7f1d4] px-3 py-1'>Small-group coaching</span>
            <span className='rounded-full bg-[#f3e8d4] px-3 py-1'>Hands-on sessions</span>
            <span className='rounded-full bg-[#e1ebf8] px-3 py-1'>Seasonal themes</span>
          </div> */}
        </div>

        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:mt-20'>
          {Cards.map((card) => (
            <VerticalCard key={card.title} readmore={false} imageSrc={card.imageSrc} title={card.title} description={card.description} />
          ))}
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