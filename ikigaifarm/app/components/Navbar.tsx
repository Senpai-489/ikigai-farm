"use client"

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

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
    }, 500)
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

  const navLinks = [...leftLinks, ...rightLinks]

  const navLinkStyles =
    'flex items-center justify-center h-[48px] min-w-[120px] bg-black px-4 text-sm text-[#ffe494] transition-transform duration-300 hover:scale-105 lg:min-w-[150px] lg:text-lg'

  return (
    <header className="relative z-30 w-full bg-transparent px-4 py-4 sm:px-6 lg:px-10 lg:py-6">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]">

        {/* LEFT LINKS */}
        <div className="hidden items-center justify-end gap-3 md:flex lg:gap-5">

          {/* EVENTS */}
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
              Events
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
              {/* Hover bridge */}
              <div className="absolute -top-4 left-0 h-4 w-full" />

              <div
                className="
                  overflow-hidden rounded-2xl
                  border border-white/10
                  bg-black/85
                  backdrop-blur-xl
                  shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                "
              >
                <div className="flex flex-col py-2">

                  {[
                    {
                      title: 'Kids Birthday Parties',
                      
                    },
                    {
                      title: 'Corporate Events',
                      
                    },
                    {
                      title: 'Farm Weddings',
                      
                    },
                    {
                      title: 'Family Reunions',
                      
                    },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={`/Events/#${item.title}`}
                      className="
                        group flex items-center gap-3
                        px-5 py-3
                        text-sm font-medium text-zinc-200
                        transition-all duration-200
                        hover:bg-white/10
                        hover:text-white
                      "
                    >
                      <span
                        className={`
                          h-2 w-2 rounded-full
                          
                          transition-transform duration-300
                          group-hover:scale-125
                        `}
                      />

                      {item.title}
                    </Link>
                  ))}

                </div>
              </div>
            </div>
          </div>

          {/* LEFT NAV LINKS */}
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
              width={96}
              height={96}
              className="h-16 w-16 object-contain drop-shadow-[4px_4px_2px_rgba(0,0,0,1)] md:h-20 md:w-20 lg:h-24 lg:w-24"
            />
          </Link>
        </div>

        {/* RIGHT LINKS */}
        <div className="hidden items-center justify-start gap-3 md:flex lg:gap-5">
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

        {/* MOBILE BUTTON */}
        <div className="flex justify-end md:hidden">
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-[#ffe494] transition-transform duration-300 hover:scale-105"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-navigation"
        className={`md:hidden ${
          isMenuOpen
            ? 'mt-4 max-h-[500px] opacity-100'
            : 'pointer-events-none max-h-0 opacity-0'
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-3xl border border-black/10 bg-[#122a02]/95 p-4 shadow-[0_24px_50px_rgba(0,0,0,0.2)]">

          <Link
            href="/Events"
            className="flex h-12 items-center rounded-2xl bg-black px-4 text-sm font-medium text-[#ffe494] transition-colors duration-300 hover:bg-[#1f3c07]"
            prefetch
          >
            Events
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch
              onClick={() => setIsMenuOpen(false)}
              className="flex h-12 items-center rounded-2xl bg-black px-4 text-sm font-medium text-[#ffe494] transition-colors duration-300 hover:bg-[#1f3c07]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar