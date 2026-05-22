import Image from 'next/image'
import React from 'react'
import { MedievalSharp } from 'next/font/google'
import Link from 'next/link'
const medieval_Sharp = MedievalSharp({ subsets: ['latin'], weight: '400' })
const LastHomeSection = () => {
  return (
    <section className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
          <h2 className={`text-5xl mt-9 text-center font-semibold ${medieval_Sharp.className}`}><span className=' font-extrabold'>IKIGAI FARM </span> - For Unending Fun & Adventure</h2>
          <p className='text-xl text-center mb-16 text-gray-700'>Best Outdoor Activity Farm in Delhi NCR</p>
      <div className='grid gap-10 lg:grid-cols-2 lg:items-center'>
        <div className='space-y-4 lg:space-y-0'>
            <p className='text-4xl text-black'>Explore, Dare, Enjoy!</p>
            <p className='text-2xl mb-6'>40+ Thrilling Adventure Challenges</p>
          <p className='text-black leading-7'>Experience the Ultimate Thrill at Ikigai Farm, the Best Adventure Park in Delhi NCR. Conquer our rope course, scale the tyre climbing wall, rappel down cliffs, zip through the skies, and more. Adrenaline-pumping thrills and unforgettable adventures for all ages.</p>
          <div className='mt-6 flex gap-4'>
            <Link href="/GroupBookings">
              <button className='rounded-full bg-[#003901] px-6 py-3 text-[#fffba6] hover:opacity-90'>Book Now</button>
            </Link>
            <Link href="/Activities">
              <button className='rounded-full border border-[#003901] px-6 py-3 text-[#003901]'>View Activities</button>
            </Link>
          </div>
        </div>

        <div className='order-first lg:order-last'>
          <div className='grid grid-cols-3 grid-rows-2 gap-4'>
            <div className='col-span-2 row-span-2 overflow-hidden rounded-xl'>
              <Image src={'/CamelRide.jpeg'} alt='last home large' width={900} height={700} className='w-full h-full object-cover' />
            </div>
            <div className='overflow-hidden rounded-xl'>
              <Image src={'/Archery.jpeg'} alt='last home small1' width={400} height={300} className='w-full h-full object-cover' />
            </div>
            <div className='overflow-hidden rounded-xl'>
              <Image src={'/ATV ride.jpeg'} alt='last home small2' width={400} height={300} className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='mt-4 grid grid-cols-3 gap-4'>
            <div className='overflow-hidden rounded-xl'>
              <Image src={'/zorbing.jpeg'} alt='last home small3' width={400} height={300} className='w-full h-full object-cover' />
            </div>
            <div className='overflow-hidden rounded-xl'>
              <Image src={'/Tyreclimb.jpeg'} alt='last home small4' width={400} height={300} className='w-full h-full object-cover' />
            </div>
            <div className='overflow-hidden rounded-xl'>
              <Image src={'/zipline.jpeg'} alt='last home small5' width={400} height={300} className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LastHomeSection