"use client"

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { MdArrowDropDown } from 'react-icons/md'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = (): void => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current)
    }

    setIsHovering(true)
  }

  const handleMouseLeave = (): void => {
    hoverTimeout.current = setTimeout(() => {
      setIsHovering(false)
    }, 300)
  }

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current)
      }
    }
  }, [])

  const leftLinks = [
    { href: '/Schools', label: 'Schools' },
    { href: '/Experiences', label: 'Experiences' },
  ]

  const rightLinks = [
    { href: '/Activities', label: 'Activities' },
    { href: '/GroupBookings', label: 'Group Bookings' },
    { href: '/Food', label: 'Food Menu' },
  ]

  const navLinks = [
    { href: '/Events', label: 'Events' },
    ...leftLinks,
    ...rightLinks,
  ]

  const navLinkStyles =
    'flex items-center justify-center h-[48px] min-w-[120px] bg-black px-5 text-sm text-[#ffe494] transition-all duration-300 hover:scale-105 hover:bg-[#1a1a1a] lg:min-w-[150px] lg:text-base'

  return (
    <header className="relative z-50 w-full bg-transparent px-4 py-4 sm:px-8 lg:px-14 lg:py-6">

      {/* DESKTOP NAV */}
      <div className="hidden md:grid w-full grid-cols-[1fr_auto_1fr] items-center">

        {/* LEFT */}
        <div className="flex items-center justify-end gap-3 lg:gap-5">

          {/* EVENTS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/Events"
              className={navLinkStyles}
              prefetch
               >
              Events <MdArrowDropDown className="h-5 w-5" />
            </Link>

            <div
              className={`
                absolute left-1/2 top-[calc(100%+12px)]
                z-50 w-72 -translate-x-1/2
                transition-all duration-300
                ${
                  isHovering
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible -translate-y-2 opacity-0'
                }
              `}
            >
              <div className="absolute -top-4 left-0 h-4 w-full" />

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <div className="flex flex-col py-2">
                  {[
                    'Kids Birthday Parties',
                    'Corporate Events',
                    'Farm Weddings',
                    'Family Reunions',
                  ].map((title, index) => (
                    <Link
                      key={index}
                      href={`/Events/#${title}`}
                      className="group flex items-center gap-3 px-5 py-3 text-sm font-medium text-zinc-200 transition-all duration-200 hover:bg-white/10 hover:text-white"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#ffe494] transition-transform duration-300 group-hover:scale-125" />

                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* LEFT LINKS */}
          {leftLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navLinkStyles}
              prefetch
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* LOGO */}
        <div className="flex justify-center">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo1.png"
              loading="eager"
              priority
              alt="logo"
              width={120}
              height={120}
              className="h-24 w-24 object-contain drop-shadow-[4px_4px_2px_rgba(0,0,0,1)] sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-52 lg:w-52"
            />
          </Link>
        </div>

        {/* RIGHT LINKS */}
        <div className="flex items-center justify-start gap-3 lg:gap-5">
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navLinkStyles}
              prefetch
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="flex items-center justify-between md:hidden">

        {/* LOGO */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo1.png"
            loading="eager"
            priority
            alt="logo"
            width={120}
            height={120}
            className="h-20 w-20 object-contain drop-shadow-[4px_4px_2px_rgba(0,0,0,1)]"
          />
        </Link>

        {/* MENU BUTTON */}
        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-[#ffe494] transition-all duration-300 hover:scale-105"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-navigation"
        className={`
          md:hidden
          overflow-hidden
          transition-all duration-500 ease-in-out
          ${
            isMenuOpen
              ? 'max-h-[700px] opacity-100 mt-5'
              : 'max-h-0 opacity-0 pointer-events-none'
          }
        `}
      >
        <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-black/85 p-4 backdrop-blur-xl shadow-[0_24px_50px_rgba(0,0,0,0.3)]">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch
              onClick={() => setIsMenuOpen(false)}
              className="flex h-14 items-center justify-center rounded-2xl bg-[#111111] px-5 text-sm font-medium text-[#ffe494] transition-all duration-300 hover:bg-[#1f3c07]"
            >
              {link.label}
            </Link>
          ))}

          {/* MOBILE EVENT LINKS */}
          <div className="mt-2 rounded-2xl bg-[#111111] p-3">

            <p className="mb-3 text-center text-sm font-semibold text-[#ffe494]">
              Event Categories
            </p>

            <div className="flex flex-col gap-2">
              {[
                'Kids Birthday Parties',
                'Corporate Events',
                'Farm Weddings',
                'Family Reunions',
              ].map((title, index) => (
                <Link
                  key={index}
                  href={`/Events/#${title}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl bg-black px-4 py-3 text-center text-sm text-zinc-200 transition-all duration-300 hover:bg-[#1f3c07] hover:text-white"
                >
                  {title}
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar