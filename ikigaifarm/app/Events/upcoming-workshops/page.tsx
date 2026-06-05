import React from 'react'
import Navbar from '../../components/Navbar'
import EventComponent from '../../components/EventComponent'
import { MedievalSharp } from 'next/font/google'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ThreeDMarquee, MarqueeImage } from "@/app/components/lightswind/3d-marquee"
const medievalSharp = MedievalSharp({ subsets: ['latin'], weight: '400' })
import VerticalCard from '../../components/VerticalCard'
const images = [

    {
      src: '/Potteryworkshop1.jpg',
      alt: 'Pottery Workshop'

    },
    {
      src: '/MaskPaintingWorkshop1.jpg',
      alt: 'Mask Painting Workshop'
    },
    {
      src: '/CanvasPainting1.jpg',
      alt: 'Canvas Painting Workshop'
    },
    {
      src: '/CandleMakingWorkshop1.jpg',
      alt: 'Candle Making Workshop'
    },
    {
      src: '/PuppetShowWorkshop1.png',
      alt: 'Puppet Show Workshop'
    },
    {
      src: '/DIYCraftWorkshop1.jpg',
      alt: 'DIY Craft Workshop'
    },
    {
      src: '/BakeryWorkshop1.jpg',
      alt: 'Bakery Workshop'
    },
    {
      src: '/PizzaMaking1.jpg',
      alt: 'Pizza Making Workshop'
    },
    {
      src: '/NukkadNatak1.jpg',
      alt: 'Nukkad Natak Workshop'
    },
    {
      src: '/OpenAirTheatre1.jpg',
      alt: 'Open Air Theater Workshop'
    },
    {
      src: '/MusicJamming1.jpg',
      alt: 'Music and Jamming Workshop'
    },

]
const Cards = [
  {
    slug: 'pottery-workshop',
    imageSrc: ['/Potteryworkshop1.jpg', '/PotteryWorkshop2.jpg', '/PotteryWorkshop3.jpg','/PotteryWorkshop4.jpg','/PotteryWorkshop5.jpg'],
    title: 'Pottery Workshop',
    description: 'Get hands-on with clay and shape beautiful handmade pieces in a calm, creative workshop setting.'
  },
  {
      slug: 'mask-painting-workshop',
    imageSrc: ['/MaskPaintingWorkshop1.jpg', '/MaskPaintingWorkshop2.jpg', '/MaskPaintingWorkshop3.jpg'],
    title: 'Mask Painting Workshop',
    description: 'Design and paint expressive masks with guided creative techniques for a playful art experience.'
  },
  {
      slug: 'canvas-painting-workshop',
    imageSrc: ['/CanvasPainting1.jpg',],
    title: 'Canvas Painting Workshop',
    description: 'Explore color, texture, and composition while creating your own canvas artwork from start to finish.'
  },
  {
      slug: 'candle-making-workshop',
    imageSrc: ['/CandleMakingWorkshop1.jpg', '/CandleMakingWorkshop2.jpg', '/CandleMakingWorkshop3.jpg'],
    title: 'Candle Making Workshop',
    description: 'Learn the basics of candle making and craft personalized candles with colors, scents, and styles you love.'
  },
  {
      slug: 'puppet-show-workshop',
    imageSrc: ['/PuppetShowWorkshop1.png', '/PuppetShowWorkshop2.png', '/PuppetShowWorkshop3.png', '/PuppetShowWorkshop4.png'],
    title: 'Puppet Show Workshop',
    description: 'Create your own puppets and bring them to life in a fun, interactive workshop focused on storytelling and performance.'
  },
  {
      slug: 'diy-craft-workshop',
    imageSrc: ['/DIYCraftWorkshop1.jpg', '/DIYCraftWorkshop2.jpg', '/DIYCraftWorkshop3.jpg', '/DIYCraftWorkshop4.jpg'],
    title: 'DIY Craft Workshop',
    description: 'Build, decorate, and create fun handmade craft projects with simple materials and guided support.'
  },
  {
    slug: 'bakery-workshop',
    imageSrc: ['/BakeryWorkshop1.jpg',],
    title: 'Bakery Workshop',
    description: 'Discover baking techniques and enjoy a warm, interactive session filled with fresh bakes and sweet creations.'
  },
  {
    slug: 'pizza-making-workshop',
    imageSrc: ['/PizzaMaking1.jpg', '/PizzaMaking2.jpg',],
    title: 'Pizza-Making Workshop',
    description: 'Make your own pizza from dough to toppings in a delicious workshop that is equal parts fun and tasty.'
  },
  {
    slug: 'nukkad-natak-workshop',
    imageSrc: ['/NukkadNatak1.jpg', '/NukkadNatak2.jpg',],
    title: 'Nukkad Natak Workshop',
    description: 'Dive into street theatre with voice, movement, and social storytelling in an energetic performance workshop.'
  },
  {
    slug: 'open-air-theater-workshop',
    imageSrc: ['/OpenAirTheatre1.jpg', '/OpenAirTheatre2.jpg', ],
    title: 'Open Air Theater Workshop',
    description: 'Experience performance in a natural setting with an outdoor theatre workshop focused on expression and presence.'
  },
  {
    slug: 'music-and-jamming-workshop',
    imageSrc: ['/MusicJamming1.jpg', '/MusicJamming2.jpg',],
    title: 'Music and Jamming Workshop',
    description: 'Bring instruments, rhythm, and collaboration together in a lively music jam session for all skill levels.'
  },
  {
    slug: 'reading-workshop',
    imageSrc: ['/ReadingWorkshop1.jpg', '/ReadingWorkshop2.jpg', '/ReadingWorkshop3.jpg'],
    title: 'Reading Workshop',
    description: 'Enjoy guided reading sessions that encourage reflection, conversation, and a deeper love for stories.'
  },
 
  {
    slug: 'handwriting-and-calligraphy-workshop',
    imageSrc: ['/HandwritingCalligraphy1.jpg', '/HandwritingCalligraphy2.jpg', '/HandwritingCalligraphy3.jpg'],
    title: 'Handwriting and Calligraphy Class',
    description: 'Practice elegant letterforms and improve your writing with a class centered on handwriting and calligraphy.'
  }
]
const page = () => {
  return (
    <main className='min-h-screen overflow-x-hidden bg-transparent text-[#0f1d0a]'>
      <Navbar />
      <section className='relative mx-auto  px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16'>
        {/* <div className='pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-[#f7efe3] via-transparent to-transparent' />
        <div className='pointer-events-none absolute -left-28 top-24 -z-10 h-72 w-72 rounded-full bg-[#e7f1d4] blur-3xl' />
        <div className='pointer-events-none absolute -right-20 top-52 -z-10 h-80 w-80 rounded-full bg-[#f5e6c9] blur-3xl' /> */}

        <ThreeDMarquee images={images} className='absolute left-1/2 -translate-y-10 -top-1/32 lg:-top-1/12 -z-10 w-[120%] -translate-x-1/2 ' />

        <div className='relative bg-white p-8 z-10 max-w-3xl space-y-5 text-left sm:space-y-6'>
          <p className='inline-flex w-fit items-center gap-2 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#2c3b1d] shadow-sm'>
            Upcoming Workshops
          </p>
          <h1 className={`text-4xl font-semibold tracking-tight text-[#14240c] sm:text-5xl lg:text-6xl ${medievalSharp.className}`}>
            Workshops designed for your next adventure
          </h1>
          <p className='max-w-2xl text-base leading-7 text-[#2a3821] sm:text-lg'>
            Explore our range of upcoming workshops and classes, crafted to grow your skills and deliver unforgettable farm-side learning.
          </p>
          {/* <div className='flex flex-wrap items-center gap-3 text-sm text-[#2d3c23]'>
            <span className='rounded-full bg-[#e7f1d4] px-3 py-1'>Small-group coaching</span>
            <span className='rounded-full bg-[#f3e8d4] px-3 py-1'>Hands-on sessions</span>
            <span className='rounded-full bg-[#e1ebf8] px-3 py-1'>Seasonal themes</span>
          </div> */}
        </div>

         <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:mt-20'>
          {Cards.map((card) => (
            <VerticalCard key={card.title} slug={card.slug} imageSrc={card.imageSrc} readmore={true} title={card.title} description={card.description} />
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