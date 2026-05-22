import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MedievalSharp } from 'next/font/google'
const medievalSharp = MedievalSharp({ subsets: ['latin'],weight: '400' })

const EventComponent = (props: { imageSrc: string, title: string, description: string }) => {
  return (
    <article className='group overflow-hidden rounded-[2rem] border border-[#d6e3af] bg-[#ffffff] shadow-[0_16px_40px_rgba(18,42,2,0.14)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(18,42,2,0.18)]'>
      <div className='grid gap-0 lg:grid-cols-[1.05fr_0.95fr]'>
        <div className='flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-10'>
          <div className='space-y-4'>
            
            <p className={`${medievalSharp.className} text-3xl leading-tight text-black sm:text-4xl lg:text-5xl`}>{props.title}</p>
            <p className='max-w-xl text-base leading-7 text-black sm:text-lg'>{props.description}</p>
          </div>

          <div className='flex flex-wrap gap-3'>
            <Link href='/Contact'>
              <button className='rounded-full bg-[#122a02] px-5 py-3 text-sm font-medium text-amber-100 transition-colors duration-300 hover:bg-[#1f3c07]'>Enquire Now</button>
            </Link>
            <Link href='/Download-Menu'>
              <button className='rounded-full border border-[#122a02] px-5 py-3 text-sm font-medium text-[#122a02] transition-colors duration-300 hover:bg-[#122a02] hover:text-amber-100'>Download Menu</button>
            </Link>
          </div>
        </div>

        <div className='relative min-h-[18rem] sm:min-h-[24rem] lg:min-h-full'>
          <Image
            src={props.imageSrc}
            alt={props.title}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-105'
            sizes='(min-width: 1024px) 50vw, 100vw'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-[#122a02]/35 via-transparent to-transparent' />
        </div>
      </div>
    </article>
  )
}

export default EventComponent