import {
  MedievalSharp,
  Noto_Sans_JP,
  Noto_Serif_JP,
  Lovers_Quarrel,
  Geist,
  Geist_Mono,
} from 'next/font/google'

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const medievalSharp = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
})

export const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: '400',
})

export const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
})

export const loversQuarrel = Lovers_Quarrel({
  subsets: ['latin'],
  weight: '400',
})