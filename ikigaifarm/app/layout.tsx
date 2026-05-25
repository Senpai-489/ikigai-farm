import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BsWhatsapp, BsTelephoneFill } from "react-icons/bs";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ikigai Farm",
  description: "A destination for you, your family and friends to connect with nature, celebrate special occasions, and create unforgettable memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} `}
    >
      <body className=" flex flex-col overflow-x-hidden bg-white">
        {children}
        <div className="fixed z-50 right-4 bottom-4 flex flex-col gap-4 sm:right-6 sm:bottom-6 md:right-8 md:bottom-8 lg:right-10 lg:bottom-10">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/+918006746390"
            className="inline-flex rounded-full p-0"
          >
            <BsWhatsapp
              className="h-12 w-12 rounded-full bg-green-900 p-2 text-green-500 shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
            />
          </Link>

          <Link href="tel:+918006746390" className="inline-flex rounded-full p-0">
            <BsTelephoneFill
              className="h-12 w-12 rounded-full bg-green-900 p-2 text-white shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
            />
          </Link>
        </div>
      </body>
    </html>
  );
}
