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
    description: 'Celebrate the vibrant festival of colors with us at Ikigai Farm! Join us for a joyous Holi Bash filled with music, dance, and of course, an explosion of colorful powders. Experience the spirit of togetherness and fun in our beautiful farm setting as we welcome spring with open arms. Don\'t miss out on this unforgettable celebration of life and color!'
  },
   {
    imageSrc: ['/placeholder.webp'],
    title: 'Bhajan Clubbing',
    description: 'Experience the soulful blend of spirituality and music with our Bhajan Clubbing event at Ikigai Farm! Join us for an evening of devotional songs, vibrant beats, and a lively atmosphere that will uplift your spirit. Whether you\'re a seasoned bhajan enthusiast or new to the genre, this event promises a unique fusion of traditional melodies and contemporary vibes. Come together with fellow music lovers for a night of joy, devotion, and unforgettable memories in our beautiful farm setting!'
  },
  {
    imageSrc: ['/placeholder.webp'],
    title: 'Navratri Garba',
    description: 'Celebrate the vibrant festival of Navratri with us at Ikigai Farm! Join us for an unforgettable Navratri Garba night filled with energetic dance, traditional music, and a festive atmosphere. Whether you\'re a seasoned dancer or new to the art of Garba, this event promises a joyful celebration of culture and community. Come together with friends and family to dance the night away under the stars in our beautiful farm setting!'
  },
  {
    imageSrc: ['/placeholder.webp'],
    title: 'New Year Celebration',
    description: 'Ring in the new year with us at Ikigai Farm! Join us for an unforgettable New Year celebration filled with music, dance, and a festive atmosphere. Whether you\'re celebrating with family and friends or starting the year fresh, this event promises a night of joy, togetherness, and unforgettable memories in our beautiful farm setting!'
  },
  {
    imageSrc: ['/placeholder.webp'],
    title: 'Chrismas Carnival',
    description: 'Celebrate the joyous Christmas season with us at Ikigai Farm! Join us for an unforgettable Christmas Carnival filled with festive decorations, traditional music, and a warm atmosphere. Whether you\'re celebrating with family and friends or enjoying the magic of the holidays, this event promises a night of joy, togetherness, and unforgettable memories in our beautiful farm setting!'
  },
  {
    imageSrc: ['/placeholder.webp'],
    title: 'Lohri Festival',
    description: 'Experience the vibrant celebration of Lohri with us at Ikigai Farm! Join us for an unforgettable Lohri Festival night filled with traditional music, dance, and a festive atmosphere. Whether you\'re a seasoned participant or new to the celebration, this event promises a joyful gathering of culture and community. Come together with friends and family to celebrate under the stars in our beautiful farm setting!'
  },
  {
    imageSrc: ['/placeholder.webp'],
    title: 'Haloween',
    description: 'Celebrate the spooky season with us at Ikigai Farm! Join us for an unforgettable Halloween night filled with eerie decorations, thrilling activities, and a festive atmosphere. Whether you\'re dressing up in costume or just looking for a fun night out, this event promises a night of excitement, togetherness, and unforgettable memories in our beautiful farm setting!'
  },
  {
    imageSrc: ['/placeholder.webp'],
    title: 'War of DJs',
    description: 'Experience the ultimate DJ battle with our War of DJs event at Ikigai Farm! Join us for an electrifying night of top-tier beats, dazzling visuals, and an atmosphere that will keep you on the edge of your seat. Whether you\'re a seasoned club-goer or new to the world of electronic music, this event promises an unforgettable night of rhythm and resonance in our beautiful farm setting!'
  },
  {
    imageSrc: ['/placeholder.webp'],
    title: 'Sufi Nights',
    description: 'Experience the enchanting blend of spirituality and music with our Sufi Nights at Ikigai Farm! Join us for an unforgettable evening filled with soulful melodies, mesmerizing rhythms, and a serene atmosphere. Whether you\'re a seasoned Sufi music lover or new to the genre, this event promises a unique fusion of traditional sounds and contemporary vibes. Come together with fellow music enthusiasts for a night of joy, devotion, and unforgettable memories in our beautiful farm setting!'
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
            <VerticalCard key={card.title} imageSrc={card.imageSrc} title={card.title} description={card.description} />
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