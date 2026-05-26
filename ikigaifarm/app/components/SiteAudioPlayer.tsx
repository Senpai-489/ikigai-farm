'use client'

import {
  useEffect,
  useRef,
  useState,
} from 'react'

import gsap from 'gsap'

import {
  BsVolumeMuteFill,
  BsVolumeUpFill,
} from 'react-icons/bs'

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

  // ENTRY ANIMATION
  useEffect(() => {
    if (!contentRef.current)
      return

    const tl = gsap.timeline()

    tl.fromTo(
      '.hero-badge',
      {
        opacity: 0,
        y: 20,
        letterSpacing:
          '0.5em',
      },
      {
        opacity: 1,
        y: 0,
        letterSpacing:
          '0.25em',
        duration: 1,
        ease: 'power3.out',
      },
    )

      .fromTo(
        '.hero-title',
        {
          opacity: 0,
          y: 60,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power4.out',
        },
        '-=0.5',
      )

      .fromTo(
        '.hero-text',
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
        '-=0.7',
      )

      .fromTo(
        '.hero-button',
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.6',
      )

    gsap.to(glowRef.current, {
      scale: 1.15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])

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
          y: -50,
          scale: 0.95,
          duration: 0.8,
          ease: 'power3.inOut',
        })

          .to(
            glowRef.current,
            {
              scale: 2,
              opacity: 0,
              duration: 1.2,
              ease: 'power4.out',
            },
            0,
          )

          .to(
            overlayRef.current,
            {
              opacity: 0,
              scale: 1.1,
              filter:
                'blur(12px)',
              duration: 1.4,
              ease: 'power4.inOut',
            },
            '-=0.4',
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

      {/* ENTER EXPERIENCE */}
      {!hasEntered && (
        <div
          ref={overlayRef}
          className="
            fixed
            inset-0
            z-[9999]
            overflow-hidden
            bg-black
          "
        >
          {/* BEAUTIFUL GRADIENT BACKGROUND */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_top,#3c5c2a_0%,#1b2b13_30%,#071106_70%,#000000_100%)]
            "
          />

          {/* SECONDARY GRADIENT */}
          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(135deg,rgba(215,255,126,0.12)_0%,transparent_35%,rgba(255,255,255,0.03)_100%)]
            "
          />

          {/* GLOW ORB */}
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
              bg-[#d8ff7e]/20
              blur-3xl
            "
          />

          {/* NOISE */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.04]
              mix-blend-overlay
              [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]
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
            {/* BADGE */}
            <p
              className="
                hero-badge
                mb-5
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-[#f4efc8]
                sm:text-xs
              "
            >
              Nature • Luxury •
              Adventure
            </p>

            {/* TITLE */}
            <h1
              className="
                hero-title
                max-w-6xl
                text-5xl
                font-semibold
                leading-[0.95]
                text-white
                sm:text-7xl
                lg:text-8xl
              "
            >
              Welcome to
              <span
                className="
                  mt-2
                  pb-20
                  block
                  bg-gradient-to-r
                  from-[#f7f0c6]
                  via-[#d8ff7e]
                  to-[#ffffff]
                  bg-clip-text
                  text-transparent
                "
              >
                Ikigai Farm
              </span>
            </h1>

            {/* TEXT */}
            <p
              className="
                hero-text
                mt-8
                max-w-2xl
                text-sm
                leading-7
                text-white/70
                sm:text-base
                md:text-lg
              "
            >
              Escape the noise
              of the city and
              immerse yourself
              in nature,
              adventure, calm,
              and unforgettable
              experiences.
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
                mt-10
                overflow-hidden
                rounded-full
                border
                border-white/15
                bg-white/10
                px-10
                py-4
                text-sm
                font-medium
                uppercase
                tracking-[0.2em]
                text-white
                backdrop-blur-xl
                transition-all
                duration-500
                hover:scale-105
                hover:bg-white/20
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  translate-y-full
                  bg-white/10
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