'use client'

import { useEffect, useRef, useState } from 'react'
import { BsVolumeMuteFill, BsVolumeUpFill } from 'react-icons/bs'

type Props = {
  src: string
}

export default function SiteAudioPlayer({
  src,
}: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [isMuted, setIsMuted] =
    useState(false)

  useEffect(() => {
    const saved =
      localStorage.getItem(
        'ikigai-audio-muted'
      )

    if (saved !== null) {
      setIsMuted(saved === 'true')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'ikigai-audio-muted',
      String(isMuted)
    )
  }, [isMuted])

  const toggleAudio = async () => {
    const audio = audioRef.current

    if (!audio) return

    try {
      if (isMuted) {
        audio.muted = false
        audio.volume = 0.5

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
        loop
        preload="none"
      />

      <button
        onClick={toggleAudio}
        className="
          fixed
          bottom-4
          left-4
          z-100
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-black/70
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:scale-110
        "
      >
        {isMuted ? (
          <BsVolumeMuteFill className="h-6 w-6" />
        ) : (
          <BsVolumeUpFill className="h-6 w-6" />
        )}
      </button>
    </>
  )
}