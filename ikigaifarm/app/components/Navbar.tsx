'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

import {
  Menu,
  X,
  ChevronDown,
} from 'lucide-react'

import { MdArrowDropDown } from 'react-icons/md'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] =
    useState(false)

  const [openDropdown, setOpenDropdown] =
    useState<string | null>(null)

  const leftLinks = [
    {
      href: '/Schools',
      label: 'Schools',
    },
  ]

  const rightLinks = [
    {
      href: '/Activities',
      label: 'Activities',
    },
    {
      href: '/Packages',
      label: 'Packages',
    },
  ]

  const navLinks = [
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

  const experienceItems = [
    'Upcoming Workshops',
    'Experiences',
    
  ]

  const eventItems = [
    '✧ Signature Events',
    'Kids Birthday Parties',
    'Corporate Events',
    'Farm Weddings',
    'Family Reunions',
    
  ]

  const toggleDropdown = (
    name: string,
  ) => {
    setOpenDropdown((prev) =>
      prev === name
        ? null
        : name,
    )
  }

  return (
    <header className="relative z-50 w-full px-4 py-4 sm:px-8 lg:px-14 lg:py-6">
      {/* DESKTOP */}
      <div className="hidden grid-cols-[1fr_auto_1fr] items-center md:grid">
        {/* LEFT */}
        <div className="flex items-center justify-end gap-3 lg:gap-5">
          {/* EVENTS */}
            <div className="group relative">
         <Link href="/Events">
              <button
                className={navLinkStyles}
              >
                Events

              <MdArrowDropDown className="h-5 w-5" />
            </button>
          </Link>
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
                  {eventItems.map(
                    (
                      title,
                      index,
                    ) => (
                      <Link
                        key={index}
                        href={title === 'Upcoming Workshops'|| title === 'Signature Events' ? `/Events/${title.toLowerCase().replace(/\s+/g, '-')}` : `/Events/#${title}`}
                        className="group/item flex items-center gap-3 px-5 py-3 text-sm font-medium text-zinc-200 transition-all duration-200 hover:bg-white/10 hover:text-white"
                      >
                      
                        {title}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* EXPERIENCES */}
          <div className="group relative">
           <Link href="/Events/upcoming-workshops">
              <button
                className={navLinkStyles}
              >
                ✧ Upcoming Workshops

                <MdArrowDropDown className="h-5 w-5" />
              </button>
            </Link>
           

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
                  {experienceItems.map(
                    (
                      title,
                      index,
                    ) => (
                      <Link
                        key={index}
                        href={title === 'Upcoming Workshops' ? `/Events/upcoming-workshops` : `/${title}`}
                        className="group/item flex items-center gap-3 px-5 py-3 text-sm font-medium text-zinc-200 transition-all duration-200 hover:bg-white/10 hover:text-white"
                      >
                       
                        {title}
                      </Link>
                    ),
                  )}
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
          <Link
            href="/"
            className="shrink-0"
          >
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
           <Link href="/Food">
              <button
                className={navLinkStyles}
              >
                Food Menu

                <MdArrowDropDown className="h-5 w-5" />
              </button>
            </Link>

            

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
                  {foodMenuItems.map(
                    (
                      title,
                      index,
                    ) => (
                      <Link
                        key={index}
                        href={`/Food/#${title}`}
                        className="group/item flex items-center gap-3 px-5 py-3 text-sm font-medium text-zinc-200 transition-all duration-200 hover:bg-white/10 hover:text-white"
                      >
                      
                        {title}
                      </Link>
                    ),
                  )}
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
            setIsMenuOpen(
              !isMenuOpen,
            )
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
            ? 'mt-5 max-h-[2000px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-black/90 p-4 shadow-[0_24px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl">
          {/* NORMAL LINKS */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              onClick={() =>
                setIsMenuOpen(
                  false,
                )
              }
              className="flex h-14 items-center justify-center rounded-2xl bg-[#111111] px-5 text-sm font-medium text-[#ffe494] transition-all duration-300 hover:bg-[#1f3c07]"
            >
              {link.label}
            </Link>
          ))}

          {/* EVENTS */}
          <div className="overflow-hidden rounded-2xl bg-[#111111]">
            <button
              onClick={() =>
                toggleDropdown(
                  'events',
                )
              }
              className="flex h-14 w-full items-center justify-between px-5 text-sm font-medium text-[#ffe494]"
            >
              Events

              <ChevronDown
                className={`transition-transform duration-300 ${
                  openDropdown ===
                  'events'
                    ? 'rotate-180'
                    : ''
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-500 ${
                openDropdown ===
                'events'
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-2 px-3 pb-3">
                  {eventItems.map(
                    (
                      title,
                      index,
                    ) => (
                      <Link
                        key={index}
                         href={title === 'Upcoming Workshops'|| title === 'Signature Events' ? `/Events/${title.toLowerCase().replace(/\s+/g, '-')}` : `/Events/#${title}`}
                        onClick={() =>
                          setIsMenuOpen(
                            false,
                          )
                        }
                        className="rounded-xl bg-black px-4 py-3 text-center text-sm text-zinc-200 transition-all duration-300 hover:bg-[#1f3c07]"
                      >
                        {title}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* EXPERIENCES */}
          <div className="overflow-hidden rounded-2xl bg-[#111111]">
            <button
              onClick={() =>
                toggleDropdown(
                  'experiences',
                )
              }
              className="flex h-14 w-full items-center justify-between px-5 text-sm font-medium text-[#ffe494]"
            >
              ✧ Upcoming Workshops

              <ChevronDown
                className={`transition-transform duration-300 ${
                  openDropdown ===
                  'experiences'
                    ? 'rotate-180'
                    : ''
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-500 ${
                openDropdown ===
                'experiences'
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-2 px-3 pb-3">
                  {experienceItems.map(
                    (
                      title,
                      index,
                    ) => (
                      <Link
                        key={index}
                        href={title === 'Upcoming Workshops' ? `/Events/upcoming-workshops` : `/${title}`}
                        onClick={() =>
                          setIsMenuOpen(
                            false,
                          )
                        }
                        className="rounded-xl bg-black px-4 py-3 text-center text-sm text-zinc-200 transition-all duration-300 hover:bg-[#1f3c07]"
                      >
                        {title}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* FOOD */}
          <div className="overflow-hidden rounded-2xl bg-[#111111]">
            <button
              onClick={() =>
                toggleDropdown(
                  'food',
                )
              }
              className="flex h-14 w-full items-center justify-between px-5 text-sm font-medium text-[#ffe494]"
            >
              Food Menu

              <ChevronDown
                className={`transition-transform duration-300 ${
                  openDropdown ===
                  'food'
                    ? 'rotate-180'
                    : ''
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-500 ${
                openDropdown ===
                'food'
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-2 px-3 pb-3">
                  {foodMenuItems.map(
                    (
                      title,
                      index,
                    ) => (
                      <Link
                        key={index}
                        href={`/Food/#${title}`}
                        onClick={() =>
                          setIsMenuOpen(
                            false,
                          )
                        }
                        className="rounded-xl bg-black px-4 py-3 text-center text-sm text-zinc-200 transition-all duration-300 hover:bg-[#1f3c07]"
                      >
                        {title}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar