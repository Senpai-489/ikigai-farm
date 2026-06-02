import type { Metadata } from 'next'
import './globals.css'

import {
  geistMono,
  geistSans,
} from './fonts'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Phone, MessageCircle } from 'lucide-react'
import { BsWhatsapp } from 'react-icons/bs'

const SiteAudioPlayer = dynamic(
  () => import('./components/SiteAudioPlayer'),
)

export const metadata: Metadata = {
  title: 'Ikigai Farm',
  description:
    'A destination for nature and adventure.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="overflow-x-hidden bg-white">

        {children}

        {/* FLOATING ACTION BUTTONS */}
        <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-3">

          {/* WHATSAPP */}
          <Link
            href="https://wa.me/+918006746390"
            target="_blank"
          >
            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110">
              <BsWhatsapp className="h-7 w-7" />
            </button>
          </Link>

          {/* CALL */}
          <Link href="tel:+918006746390">
            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#122a02] text-[#fff4b8] shadow-[0_10px_30px_rgba(18,42,2,0.35)] transition-all duration-300 hover:scale-110">
              <Phone className="h-6 w-6" />
            </button>
          </Link>

        </div>

        <SiteAudioPlayer src="/zen-music1.mp3" />

      </body>
    </html>
  )
}