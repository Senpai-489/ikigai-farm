import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-[#262626] text-white py-12'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          <div>
            <Image src={'/logo1.png'} alt='Ikigai Farm' width={88} height={88} className='mb-4' />
            <p className='text-sm text-gray-300'>Cultivating purpose through nature, food, and meaningful experiences.</p>
          </div>

          <div>
            <h4 className='mb-3 font-semibold'>Quick Links</h4>
            <ul className='space-y-2 text-sm text-gray-300'>
              <li><Link href='/' className='hover:text-white'>About Us</Link></li>
              <li><Link href='/' className='hover:text-white'>Blog</Link></li>
              <li><Link href='/' className='hover:text-white'>Group Bookings</Link></li>
              <li><Link href='/' className='hover:text-white'>Refund Policy</Link></li>
            </ul>
          </div>


          <div>
            <h4 className='mb-3 font-semibold'>Adventures</h4>
            <div className='flex flex-col gap-3 text-sm'>
              <a href='#' className='text-gray-300 hover:text-white'>Zipline</a>
              <a href='#' className='text-gray-300 hover:text-white'>Camel Ride</a>
              <a href='#' className='text-gray-300 hover:text-white'>Archery</a>
                <a href='#' className='text-gray-300 hover:text-white'>Rain Dance</a>
                <a href='#' className='text-gray-300 hover:text-white'>Zorbing</a>
                <a href='#' className='text-gray-300 hover:text-white'>Trampoline</a>
                <a href='#' className='text-gray-300 hover:text-white'>ATV Ride</a>
            </div>
          </div>
          <div>
            <h4 className='mb-3 font-semibold'>Contact</h4>
            <ul className='text-sm text-gray-300 space-y-2'>
              <li className='flex items-start gap-2'><MapPin size={18} className='mt-0.5 shrink-0' /> <span>Rajgarh Farms, Bandh Rd, Nagla Nagli, Sector 134, Noida, Uttar Pradesh 201304, India</span></li>
              <li className='flex items-center gap-2'><Phone size={14} />+91 8006746390</li>
              <li className='flex items-center gap-2'><Mail size={14} /> hello@ikigai.farm</li>
            </ul>
          </div>
        </div>

        <div className='mt-8 border-t border-white/10 pt-6 text-sm text-gray-400 flex flex-col gap-3 md:flex-row md:justify-between'>
          <div>© {new Date().getFullYear()} Ikigai Farm. All rights reserved.</div>
          <div className='flex gap-4'>
            <Link href='/' className='hover:text-white'>Privacy</Link>
            <Link href='/' className='hover:text-white'>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer