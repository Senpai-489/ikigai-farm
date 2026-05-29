import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'
import Belt from './Clients'

const Footer = () => {
  return (
    <div>
      <Belt />
    <footer className='bg-[#262626] text-white py-12'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center mb-4 '> 
            <Image src={'/logo1.png'} alt='Ikigai Farm' width={150} height={150} className='mb-4' />
            <p className='text-sm text-center text-gray-300'>Cultivating purpose through nature, food, and meaningful experiences.</p>
          </div>
        <div className='flex justify-between flex-wrap gap-8 mt-8'>

          <div className='w-[20vw]'>
            <h4 className='mb-3 font-semibold'>Quick Links</h4>
            <ul className='space-y-2 text-sm text-gray-300'>
              <li><Link href='/' className='hover:text-white'>About Us</Link></li>
              <li><Link href='/Blogs' className='hover:text-white'>Blog</Link></li>
              <li><Link href='/GroupBookings' className='hover:text-white'>Group Bookings</Link></li>
              <li><Link href='/refund-policy' className='hover:text-white'>Refund Policy</Link></li>
              <li><Link href='/Contact' className='hover:text-white'>Contact Us</Link></li>
            </ul>
          </div>


          <div className='w-[20vw]'>
            <h4 className='mb-3 font-semibold'>Adventures</h4>
            <div className='flex flex-col gap-2 text-sm'>
              <a href='#' className='text-gray-300 hover:text-white'>Zipline</a>
              <a href='#' className='text-gray-300 hover:text-white'>Camel Ride</a>
              <a href='#' className='text-gray-300 hover:text-white'>Archery</a>
                <a href='#' className='text-gray-300 hover:text-white'>Rain Dance</a>
                <a href='/Activities' className='text-gray-300 hover:text-white'>View More</a>
                
            </div>
          </div>
          <div className='md:w-[20vw]'>
            <h4 className='mb-3 flex flex-col font-semibold'>Contact</h4>
            <ul className='text-sm text-gray-300 space-y-6 flex flex-col'>
             <a href="https://www.google.com/maps/place/Rajgarh+Farms,+Noida/@28.4928832,77.3717662,17z/data=!4m6!3m5!1s0x390ce791c95d1485:0xb367fe11eaf90f92!8m2!3d28.4928832!4d77.3717662!16s%2Fg%2F11fj3mkph2?entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                <li className='flex items-start gap-2'><MapPin size={18} className='mt-0.5 shrink-0' /> <span>Ikigai Farm, Bandh Rd, Nagla Nagli, Sector 134, Noida, Uttar Pradesh 201304, India</span></li>
              </a>
              <a href="tel:+918006746390">
                <li className='flex items-center gap-2'><Phone size={14} />+91 8006746390</li>
              </a>
              <a href="mailto:contact@ikigaifarm.org">
                <li className='flex items-center gap-2'><Mail size={14} /> contact@ikigaifarm.org</li>
              </a>
            </ul>
          </div>
        </div>

        <div className='mt-8 border-t border-white/10 pt-6 text-sm text-gray-400 flex flex-col gap-3 md:flex-row md:justify-between'>
          <div>© {new Date().getFullYear()} Ikigai Farm. All rights reserved.</div>
          <div className='flex gap-4'>
            <Link href='/privacy-policy' className='hover:text-white'>Privacy</Link>
            <Link href='/terms-and-conditions' className='hover:text-white'>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer