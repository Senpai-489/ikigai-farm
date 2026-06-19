import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'
import Belt from './Clients'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

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

          <div className='w-auto'>
            <h4 className='mb-3 font-semibold'>Quick Links</h4>
            <ul className='space-y-2 text-sm text-gray-300'>
              <li><Link href='/' className='hover:text-white'>About Us</Link></li>
              <li><Link href='/PartnerWithUs' className='hover:text-white'>Partner With Us</Link></li>
              <li><Link href='/Blogs' className='hover:text-white'>Blog</Link></li>
              <li><Link href='/Faqs' className='hover:text-white'>FAQs</Link></li>
              
              <li><Link href='/WhyUs' className='hover:text-white'>Why Choose Us</Link></li>
              <li><Link href='/refund-policy' className='hover:text-white'>Refund Policy</Link></li>
              <li><Link target='_blank' href='https://www.instagram.com/ikigaifarm.noida/' className='hover:text-white'>Gallery</Link></li>
              <li><Link href='/Contact' className='hover:text-white'>Contact Us</Link></li>
            </ul>
          </div>


          <div className='w-[20vw]'>
            <h4 className='mb-3 font-semibold'>Adventures</h4>
            <div className='flex flex-col gap-2 text-sm'>
              <a href='/Activities#Zipline' className='text-gray-300 hover:text-white'>Zipline</a>
              <a href='/Activities#Camel Cart Ride' className='text-gray-300 hover:text-white'>Camel Ride</a>
              <a href='/Activities#Archery' className='text-gray-300 hover:text-white'>Archery</a>
              <a href='/Activities#Kids Train' className='text-gray-300 hover:text-white'>Kids Train</a>
              <a href='/Activities#Trampoline' className='text-gray-300 hover:text-white'>Trampoline</a>
                <a href='/Activities#Rain Dance' className='text-gray-300 hover:text-white'>Rain Dance</a>
                <a href='/Activities' className='text-gray-300 hover:text-white'>View More</a>
                
            </div>
          </div>
          <div className='md:w-[20vw]'>
            <h4 className='mb-3 flex flex-col font-semibold'>Contact</h4>
            <ul className='text-sm text-gray-300 space-y-6 flex flex-col'>
             <a href="https://maps.app.goo.gl/3nvysqEu9cYSrZ2o9" target="_blank" rel="noopener noreferrer">
                <li className='flex items-start gap-2'><MapPin size={18} className='mt-0.5 shrink-0' /> <span>Ikigai Farm, Bandh Rd, Nagla Nagli, Sector 134, Noida, Uttar Pradesh 201304, India</span></li>
              </a>
              <a href="tel:+918006746390">
                <li className='flex items-center gap-2'><Phone size={14} />+91 8006746390</li>
              </a>
              <a href="mailto:contact@ikigaifarm.org">
                <li className='flex items-center gap-2'><Mail size={14} /> contact@ikigaifarm.org</li>
              </a>
              <ul className='flex items-center gap-4 mt-4'>
                <Link href='https://www.instagram.com/ikigaifarm.noida/' target='_blank' rel='noopener noreferrer'>
                  <img src='/instagramicon.png' alt='Instagram' width={28} height={28} />
                </Link>
                <Link href='https://www.linkedin.com/company/ikigai-farm-noida/' target='_blank' rel='noopener noreferrer'>
                <img src='/linkedinicon.png' alt='LinkedIn' width={28} height={28} />
                </Link>
                <Link href='https://www.facebook.com/profile.php?id=61560689761675' target='_blank' rel='noopener noreferrer'>
                  <img src='/facebookicon.png' alt='Facebook' width={28} height={28} />
                </Link>
              </ul>
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