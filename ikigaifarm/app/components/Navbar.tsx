'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { MdArrowDropDown } from 'react-icons/md'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] =
    useState(false)

  const leftLinks = [
    {
      href: '/Schools',
      label: 'Schools',
    },
    {
      href: '/Experiences',
      label: 'Experiences',
    },
  ]

  const rightLinks = [
    {
      href: '/Activities',
      label: 'Activities',
    },
    {
      href: '/GroupBookings',
      label: 'Group Bookings',
    },
  ]

  const navLinks = [
    {
      href: '/Events',
      label: 'Events',
    },
    ...leftLinks,
    ...rightLinks,
  ]

  const navLinkStyles =
    'flex h-[48px] min-w-[120px] items-center justify-center rounded-full bg-black/90 px-5 text-sm text-[#ffe494] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#1a1a1a] lg:min-w-[150px] lg:text-base'

  const foodMenuItems = [
    'Kids Celebrations',
    'Corporate Party',
    'Weekend Brunch',
    'Farm to Table',
    'Sundown Table',
    
  ]

  return (
    <header className="relative z-50 w-full px-4 py-4 sm:px-8 lg:px-14 lg:py-6">

      {/* DESKTOP */}
      <div className="hidden grid-cols-[1fr_auto_1fr] items-center md:grid">

        {/* LEFT */}
        <div className="flex items-center justify-end gap-3 lg:gap-5">

          {/* EVENTS */}
          <div className="group relative">

            <Link
              href="/Events"
              className={navLinkStyles}
              prefetch={false}
            >
              Events

              <MdArrowDropDown className="h-5 w-5" />
            </Link>

            {/* EVENTS DROPDOWN */}
            <div
              className="
                invisible
                absolute
                left-1/2
                top-[calc(100%+12px)]
                z-50
                w-72
                -translate-x-1/2
                opacity-0
                transition-all
                duration-300
                group-hover:visible
                group-hover:opacity-100
              "
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">

                <div className="flex flex-col py-2">

                  {[
                    'Kids Birthday Parties',
                    'Corporate Events',
                    'Farm Weddings',
                    'Family Reunions',
                    'Upcoming Workshops',
                    'Signature Events',
                  ].map((title, index) => (
                    <Link
                      key={index}
                      href={`/Events/#${title}`}
                      className="group/item flex items-center gap-3 px-5 py-3 text-sm font-medium text-zinc-200 transition-all duration-200 hover:bg-white/10 hover:text-white"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#ffe494] transition-transform duration-300 group-hover/item:scale-125" />

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
              prefetch={false}
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
              alt="logo"
              width={220}
              height={220}
              quality={70}
              priority
              sizes="(min-width:1024px) 220px, 120px"
              className="h-24 w-24 object-contain drop-shadow-[4px_4px_2px_rgba(0,0,0,1)] sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-52 lg:w-52"
            />
          </Link>

        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-start gap-3 lg:gap-5">

          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navLinkStyles}
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}

          {/* FOOD MENU */}
          <div className="group relative">

            <Link
              href="/Food"
              className={navLinkStyles}
              prefetch={false}
            >
              Food Menu

              <MdArrowDropDown className="h-5 w-5" />
            </Link>

            {/* FOOD DROPDOWN */}
            <div
              className="
                invisible
                absolute
                left-1/2
                top-[calc(100%+12px)]
                z-50
                w-72
                -translate-x-1/2
                opacity-0
                transition-all
                duration-300
                group-hover:visible
                group-hover:opacity-100
              "
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">

                <div className="flex flex-col py-2">

                  {foodMenuItems.map((title, index) => (
                    <Link
                      key={index}
                      href={`/Food/#${title}`}
                      className="group/item flex items-center gap-3 px-5 py-3 text-sm font-medium text-zinc-200 transition-all duration-200 hover:bg-white/10 hover:text-white"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#ffe494] transition-transform duration-300 group-hover/item:scale-125" />

                      {title}
                    </Link>
                  ))}

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* MOBILE NAV */}
      <div className="flex items-center justify-between md:hidden">

        <Link href="/">
          <Image
            src="/logo1.png"
            alt="logo"
            width={100}
            height={100}
            quality={65}
            priority
            sizes="80px"
            className="h-20 w-20 object-contain drop-shadow-[4px_4px_2px_rgba(0,0,0,1)]"
          />
        </Link>

        <button
          type="button"
          aria-label="Toggle Menu"
          onClick={() =>
            setIsMenuOpen(!isMenuOpen)
          }
          className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-[#ffe494] transition-all duration-300 active:scale-95"
        >
          {isMenuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          isMenuOpen
            ? 'mt-5 max-h-[1200px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-black/90 p-4 shadow-[0_24px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              onClick={() =>
                setIsMenuOpen(false)
              }
              className="flex h-14 items-center justify-center rounded-2xl bg-[#111111] px-5 text-sm font-medium text-[#ffe494] transition-all duration-300 hover:bg-[#1f3c07]"
            >
              {link.label}
            </Link>
          ))}

          {/* EVENT CATEGORIES */}
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
                  onClick={() =>
                    setIsMenuOpen(false)
                  }
                  className="rounded-xl bg-black px-4 py-3 text-center text-sm text-zinc-200 transition-all duration-300 hover:bg-[#1f3c07]"
                >
                  {title}
                </Link>
              ))}

            </div>
          </div>

          {/* FOOD MENU CATEGORIES */}
          <div className="rounded-2xl bg-[#111111] p-3">

            <p className="mb-3 text-center text-sm font-semibold text-[#ffe494]">
              Food Categories
            </p>

            <div className="flex flex-col gap-2">

              {foodMenuItems.map((title, index) => (
                <Link
                  key={index}
                  href={`/Food/#${title}`}
                  onClick={() =>
                    setIsMenuOpen(false)
                  }
                  className="rounded-xl bg-black px-4 py-3 text-center text-sm text-zinc-200 transition-all duration-300 hover:bg-[#1f3c07]"
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