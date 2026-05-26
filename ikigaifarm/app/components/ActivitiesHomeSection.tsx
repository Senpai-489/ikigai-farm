import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'
import { medievalSharp } from '@/app/fonts'

const images = [
  '/beltCarousel1.jpeg',
  '/beltCarousel2.jpeg',
  '/beltCarousel3.jpeg',
  '/beltCarousel4.jpeg',
  '/beltCarousel5.jpeg',
]

const ActivitiesHomeSection = () => {
  return (
    <section className="overflow-hidden py-20">

      <h1
        className={`${medievalSharp.className} mb-12 text-center text-5xl text-[#123413]`}
      >
        40+ Adventure Activities
      </h1>

      <div className="relative overflow-hidden">

        <div className="marquee flex gap-6">

          {[...images, ...images].map(
            (src, index) => (
              <div
                key={index}
                className="shrink-0"
              >
                <Image
                  src={src}
                  alt=""
                  width={400}
                  height={300}
                  className="h-72 w-auto rounded-xl object-cover"
                />
              </div>
            )
          )}
        </div>
      </div>

      <Link
        href="/Activities"
        className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full bg-[#262626] px-6 py-3 text-[#feffac]"
      >
        Explore All Activities
        <MoveRight />
      </Link>
    </section>
  )
}

export default ActivitiesHomeSection