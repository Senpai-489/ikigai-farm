'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

type MasonryGridProps = {
  images: string[]
}

export default function MasonryGrid({
  images,
}: MasonryGridProps) {
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null)

  const closeModal = () =>
    setSelectedIndex(null)

  const nextImage = () => {
    if (selectedIndex === null) return

    setSelectedIndex(
      (selectedIndex + 1) %
        images.length,
    )
  }

  const prevImage = () => {
    if (selectedIndex === null) return

    setSelectedIndex(
      selectedIndex === 0
        ? images.length - 1
        : selectedIndex - 1,
    )
  }

  useEffect(() => {
    const handleKeyDown = (
      e: KeyboardEvent,
    ) => {
      if (
        selectedIndex === null
      )
        return

      if (e.key === 'Escape')
        closeModal()

      if (e.key === 'ArrowRight')
        nextImage()

      if (e.key === 'ArrowLeft')
        prevImage()
    }

    window.addEventListener(
      'keydown',
      handleKeyDown,
    )

    return () =>
      window.removeEventListener(
        'keydown',
        handleKeyDown,
      )
  }, [selectedIndex])

  return (
    <>
      {/* Masonry Grid */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {images.map(
          (image, index) => (
            <div
              key={index}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-3xl"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={1000}
                height={1000}
                className="h-auto w-full rounded-3xl object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/30" />

              {/* Fullscreen Button */}
              <button
                onClick={() =>
                  setSelectedIndex(
                    index,
                  )
                }
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-black/70
                  text-white
                  opacity-0
                  backdrop-blur-md
                  transition-all
                  duration-300
                  group-hover:opacity-100
                "
              >
                <Maximize2
                  size={18}
                />
              </button>
            </div>
          ),
        )}
      </div>

      {/* Fullscreen Modal */}
      {selectedIndex !== null && (
        <div
          onClick={closeModal}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/95
            p-4
          "
        >
          {/* Close */}
          <button
            onClick={closeModal}
            className="
              absolute
              right-5
              top-5
              z-20
              rounded-full
              bg-white/10
              p-3
              text-white
              backdrop-blur-md
            "
          >
            <X size={24} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="
              absolute
              left-4
              rounded-full
              bg-white/10
              p-3
              text-white
              backdrop-blur-md
            "
          >
            <ChevronLeft
              size={28}
            />
          </button>

          {/* Image */}
          <div
            onClick={(e) =>
              e.stopPropagation()
            }
            className="relative max-h-[90vh] max-w-[95vw]"
          >
            <Image
              src={
                images[
                  selectedIndex
                ]
              }
              alt="Fullscreen"
              width={2000}
              height={2000}
              className="
                max-h-[90vh]
                w-auto
                rounded-2xl
                object-contain
              "
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="
              absolute
              right-4
              rounded-full
              bg-white/10
              p-3
              text-white
              backdrop-blur-md
            "
          >
            <ChevronRight
              size={28}
            />
          </button>
        </div>
      )}
    </>
  )
}