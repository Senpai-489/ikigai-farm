'use client'

import {
  useEffect,
  useRef,
  useState,
} from 'react'

import gsap from 'gsap'

import Image from 'next/image'

import {
  BsVolumeMuteFill,
  BsVolumeUpFill,
} from 'react-icons/bs'

import {
  Noto_Serif_JP,
  MedievalSharp,
} from 'next/font/google'

const notoSerifJP =
  Noto_Serif_JP({
    subsets: ['latin'],
  })

const medievalSharp =
  MedievalSharp({
    subsets: ['latin'],
    weight: '400',
  })

type Props = {
  src: string
}

export default function SiteAudioPlayer({
  src,
}: Props) {
  const audioRef =
    useRef<HTMLAudioElement | null>(
      null,
    )

  const overlayRef =
    useRef<HTMLDivElement | null>(
      null,
    )

  const contentRef =
    useRef<HTMLDivElement | null>(
      null,
    )

  const logoRef =
    useRef<HTMLDivElement | null>(
      null,
    )

  const glowRef =
    useRef<HTMLDivElement | null>(
      null,
    )

  const [isMuted, setIsMuted] =
    useState(false)

  const [hasEntered, setHasEntered] =
    useState(false)

  const [isAnimating, setIsAnimating] =
    useState(false)

  useEffect(() => {
    const saved =
      localStorage.getItem(
        'ikigai-audio-muted',
      )

    if (saved !== null) {
      setIsMuted(saved === 'true')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'ikigai-audio-muted',
      String(isMuted),
    )
  }, [isMuted])

  // ENTRY ANIMATIONS
  useEffect(() => {
    if (!contentRef.current)
      return

    const tl = gsap.timeline()

    tl.fromTo(
      '.hero-logo',
      {
        opacity: 0,
        scale: 0.7,
        rotate: -8,
      },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1.4,
        ease: 'power4.out',
      },
    )

      .fromTo(
        '.hero-line',
        {
          width: 0,
          opacity: 0,
        },
        {
          width: '140px',
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.8',
      )

      .fromTo(
        '.hero-title',
        {
          opacity: 0,
          y: 40,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power4.out',
        },
        '-=0.6',
      )

      .fromTo(
        '.hero-subtitle',
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.8',
      )

      .fromTo(
        '.hero-button',
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.7',
      )

    gsap.to(glowRef.current, {
      scale: 1.2,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    gsap.to(logoRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])
useEffect(() => {
  if (!hasEntered) {
    document.body.style.overflow =
      'hidden'

    document.documentElement.style
      .overflow = 'hidden'
  } else {
    document.body.style.overflow =
      'auto'

    document.documentElement.style
      .overflow = 'auto'
  }

  return () => {
    document.body.style.overflow =
      'auto'

    document.documentElement.style
      .overflow = 'auto'
  }
}, [hasEntered])
  const enterExperience =
    async () => {
      const audio =
        audioRef.current

      if (
        !audio ||
        !overlayRef.current ||
        !contentRef.current
      )
        return

      try {
        setIsAnimating(true)

        audio.volume = 0.5
        audio.loop = true
        audio.muted = false

        await audio.play()

        setIsMuted(false)

        const tl =
          gsap.timeline({
            onComplete: () => {
              setHasEntered(
                true,
              )
            },
          })

        tl.to(contentRef.current, {
          opacity: 0,
          y: -80,
          scale: 0.92,
          duration: 1,
          ease: 'power4.inOut',
        })

          .to(
            glowRef.current,
            {
              scale: 2.5,
              opacity: 0,
              duration: 1.4,
              ease: 'power4.out',
            },
            0,
          )

          .to(
            overlayRef.current,
            {
              opacity: 0,
              scale: 1.08,
              filter:
                'blur(14px)',
              duration: 1.6,
              ease: 'power4.inOut',
            },
            '-=0.5',
          )
      } catch (err) {
        console.error(err)
      }
    }

  const toggleAudio =
    async () => {
      const audio =
        audioRef.current

      if (!audio) return

      try {
        if (isMuted) {
          audio.muted = false

          await audio.play()
        } else {
          audio.muted = true
        }

        setIsMuted(!isMuted)
      } catch (err) {
        console.error(err)
      }
    }

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        preload="auto"
        loop
      />

      {/* EXPERIENCE SCREEN */}
      {!hasEntered && (
        <div
          ref={overlayRef}
          className="
            fixed
            inset-0
            z-[9999]
            overflow-hidden
            bg-[#efe8da]
          "
        >
          {/* JAPANESE PAPER BACKGROUND */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_top,#f6f0e4_0%,#ece2d0_40%,#e2d4bf_100%)]
            "
          />

          {/* RED BLOSSOM GLOW */}
          <div
            className="
              absolute
              right-[-10%]
              top-[-10%]
              h-[500px]
              w-[500px]
              rounded-full
              bg-red-300/20
              blur-3xl
            "
          />

          {/* GOLDEN GLOW */}
          <div
            ref={glowRef}
            className="
              absolute
              left-1/2
              top-1/2
              h-[450px]
              w-[450px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#d4b200]/20
              blur-3xl
            "
          />

          {/* JAPANESE GRID */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.04]
              [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
              [background-size:80px_80px]
            "
          />

          {/* CONTENT */}
          <div
            ref={contentRef}
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              items-center
              justify-center
              px-6
              text-center
            "
          >
            {/* LOGO */}
            <div
              ref={logoRef}
              className="
                hero-logo
                relative
                mb-10
                h-32
                w-32
                sm:h-40
                sm:w-40
              "
            >
              <Image
                src="/logo1.png"
                alt="Ikigai Farm"
                fill
                priority
                className="object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
              />
            </div>

            {/* SMALL LABEL */}
            <p
              className={`
                hero-subtitle
                text-[20px]
                uppercase
                tracking-[0.45em]
                text-[#7b1e1e]
                
                ${notoSerifJP.className}
              `}
            >
              生き甲斐 • A REASON FOR
              BEING
            </p>

            {/* DIVIDER */}
            <div
              className="
                hero-line
                my-6
                h-px
                bg-[#c2a76d]
              "
            />

            {/* TITLE */}
            <h1
              className={`
                hero-title
                text-5xl
                leading-[0.9]
                text-[#111]
                sm:text-7xl
                lg:text-8xl
                ${medievalSharp.className}
              `}
            >
              Ikigai
              <span
                className="
                  mt-2
                  block
                  text-[#7b1e1e]
                "
              >
                Farm
              </span>
            </h1>

            {/* TEXT */}
            <p
              className={`
                hero-subtitle
                mt-8
                max-w-2xl
                text-sm
                leading-7
                text-[#3e3a32]
                sm:text-base
                md:text-lg
                ${notoSerifJP.className}
              `}
            >
              Escape the noise
              of the city and
              immerse yourself
              in a serene world
              of nature,
              experiences,
              adventure, and calm.
            </p>

            {/* BUTTON */}
            <button
              onClick={
                enterExperience
              }
              disabled={
                isAnimating
              }
              className="
                hero-button
                group
                relative
                mt-12
                overflow-hidden
                rounded-full
                border
                border-[#111]/10
                bg-[#111]
                px-10
                py-4
                text-sm
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#f6e7a1]
                shadow-[0_10px_40px_rgba(0,0,0,0.18)]
                transition-all
                duration-500
                hover:scale-105
              "
            >
              {/* HOVER */}
              <span
                className="
                  absolute
                  inset-0
                  translate-y-full
                  bg-[#2a2a2a]
                  transition-transform
                  duration-500
                  group-hover:translate-y-0
                "
              />

              <span className="relative z-10">
                {isAnimating
                  ? 'Entering...'
                  : 'Enter Experience'}
              </span>
            </button>
          </div>

          {/* CORNER BLOSSOMS */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-64
              w-64
              rotate-12
              rounded-full
              bg-[radial-gradient(circle,#d14d4d_0%,transparent_70%)]
              opacity-30
              blur-3xl
            "
          />
        </div>
      )}

      {/* AUDIO BUTTON */}
      {hasEntered && (
        <button
          onClick={toggleAudio}
          className="
            fixed
            bottom-4
            left-4
            z-[100]
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-black/70
            text-white
            backdrop-blur-xl
            transition-all
            duration-300
            hover:scale-110
            sm:h-14
            sm:w-14
          "
        >
          {isMuted ? (
            <BsVolumeMuteFill className="h-5 w-5 sm:h-6 sm:w-6" />
          ) : (
            <BsVolumeUpFill className="h-5 w-5 sm:h-6 sm:w-6" />
          )}
        </button>
      )}
    </>
  )
}