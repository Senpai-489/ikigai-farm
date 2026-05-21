"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { MoveRight } from 'lucide-react'
import { MedievalSharp } from 'next/font/google'
import Link from 'next/link'
const medieval_Sharp = MedievalSharp({ subsets: ['latin'], weight: '400' })
const ActivitiesHomeSection = () => {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const tlRef = useRef<any>(null)

  // using the same image repeated for now; replace with distinct desktop images when available
  const images = Array.from({ length: 8 }).map(() => '/Activity1.webp')

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // width of one set (we render images twice), so half of track width
    let totalWidth = track.getBoundingClientRect().width / 2
    const pxPerSec = 120
    let duration = Math.max(8, totalWidth / pxPerSec)

    gsap.set(track, { x: 0 })
    tlRef.current = gsap.to(track, { x: -totalWidth, duration, ease: 'none', repeat: -1 })

    const pause = () => tlRef.current && tlRef.current.pause()
    const resume = () => tlRef.current && tlRef.current.resume()

    track.addEventListener('mouseenter', pause)
    track.addEventListener('mouseleave', resume)

    const ro = new ResizeObserver(() => {
      if (!track) return
      gsap.killTweensOf(track)
      totalWidth = track.getBoundingClientRect().width / 2
      duration = Math.max(8, totalWidth / pxPerSec)
      gsap.set(track, { x: 0 })
      tlRef.current = gsap.to(track, { x: -totalWidth, duration, ease: 'none', repeat: -1 })
    })
    ro.observe(track)

    return () => {
      track.removeEventListener('mouseenter', pause)
      track.removeEventListener('mouseleave', resume)
      ro.disconnect()
      gsap.killTweensOf(track)
    }
  }, [])

  return (
    <section className="flex flex-col items-center">
      <h1 className={`text-5xl text-center items-center text-[#123413] mt-20 mb-12 ${medieval_Sharp.className}`}>40+ Real Thrilling Adventure Activities</h1>

      <div className="overflow-hidden w-[110vw] rotate-3 bg-[#1e2e1f] py-8">
        <div ref={trackRef} className="flex items-center gap-6 will-change-transform">
          {images.concat(images).map((src, i) => (
            <div key={i} className="shrink-0 px-3">
              <Image src={src} alt={`activity-${i}`} width={400} height={300} className="rounded-lg hover:scale-105 duration-300 cursor-pointer object-cover" />
            </div>
          ))}
        </div>
      </div>
     <Link href="/Activities"><button className="bg-[#262626] text-lg mx-auto mt-6 text-[#feffac] px-6 py-3 rounded-full flex gap-2 items-center hover:bg-[#535352] ">Explore All Activities <MoveRight /></button></Link>
    </section>
  )
}

export default ActivitiesHomeSection
