"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const leftLinks = [
    { href: '/Events', label: 'Events' },
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