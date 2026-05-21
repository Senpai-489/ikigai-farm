import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import {
  Noto_Serif_JP,
  Lovers_Quarrel,
  MedievalSharp,
} from 'next/font/google'

import Footer from '../components/Footer'
import Image from 'next/image'

import {
  Balloon,
  CheckCircle,
  TreePalmIcon,
} from 'lucide-react'

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
})

const loversQuarrel = Lovers_Quarrel({
  subsets: ['latin'],
  weight: '400',
})

const medievalSharp = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
})

const page = () => {
  return (
    <div>
      
      {/* HERO */}
      <div className="relative flex flex-col items-center overflow-hidden bg-transparent">
        
        <Navbar />

        <Image
          src={'/BG-img.png'}
          alt="activities hero"
          width={1200}
          height={600}
          className="absolute -z-10 h-full min-h-screen w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 -z-10 bg-black/10" />

        {/* Heading */}
        <div className="flex flex-col items-center px-4 pt-24 text-center sm:px-6 lg:px-8">
          
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${medievalSharp.className}`}
          >
            Group Bookings
          </h1>

          <p
            className={`mt-6 max-w-5xl text-center text-3xl leading-tight text-[#333] sm:text-4xl md:text-5xl lg:w-[60vw] lg:text-6xl ${loversQuarrel.className}`}
          >
            From school groups
            
            to corporate
            
            retreats, we tailor
            
            every journey to
            
            your group's unique
            
            purpose. Tell us
            
            about your vision.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="relative mt-16 flex w-full flex-col items-center gap-8 px-4 pb-16 sm:px-6 lg:mt-24 lg:flex-row lg:items-stretch lg:justify-center lg:gap-12 lg:px-8">
          
          {/* Kids */}
          <div className="flex w-full max-w-md flex-col gap-4 rounded-2xl bg-amber-100 p-6 sm:p-8 lg:p-12">
            
            <Balloon size={48} />

            <h2
              className={`text-3xl sm:text-4xl ${notoSerifJP.className}`}
            >
              For Kids
            </h2>

            <p className="text-sm sm:text-base">
              Curated experiences for curious young explorers
            </p>

            <p className="text-3xl font-bold sm:text-4xl">
              1000/- INR
            </p>

            <p className="flex items-center gap-2 text-sm sm:text-base">
              <CheckCircle size={18} />
              Self Guided Garden Tour
            </p>

            <p className="flex items-center gap-2 text-sm sm:text-base">
              <CheckCircle size={18} />
              Complimentary Farm Tea
            </p>

            <p className="flex items-center gap-2 text-sm sm:text-base">
              <CheckCircle size={18} />
              Meditation Zone Access
            </p>

            <p className="flex items-center gap-2 text-sm sm:text-base">
              <CheckCircle size={18} />
              Food Included
            </p>

            <Link href='/GroupBookings/#BookingForm' className='mx-auto block'>
              <button className="mt-4 rounded-full bg-[#122a02] px-6 py-3 text-sm font-medium text-amber-100 transition-colors duration-300 hover:bg-[#1f3c07]">
                Book My Spot
              </button>
            </Link>
          </div>

          {/* Adults */}
          <div className="flex w-full max-w-md flex-col gap-4 rounded-2xl bg-[#122a02]/80 p-6 text-amber-100 sm:p-8 lg:p-12">
            
            <TreePalmIcon color="#fff4b8" size={48} />

            <h2
              className={`text-3xl sm:text-4xl ${notoSerifJP.className}`}
            >
              For Adults
            </h2>

            <p className="text-sm sm:text-base">
              Immersive farm experiences for nature-loving adults
            </p>

            <p className="text-3xl font-bold sm:text-4xl">
              1500/- INR
            </p>

            <p className="flex items-center gap-2 text-sm sm:text-base">
              <CheckCircle size={18} />
              Guided Nature Walk
            </p>

            <p className="flex items-center gap-2 text-sm sm:text-base">
              <CheckCircle size={18} />
              Farm Tea & Snacks
            </p>

            <p className="flex items-center gap-2 text-sm sm:text-base">
              <CheckCircle size={18} />
              Farm to Table Bento Lunch
            </p>

            <p className="flex items-center gap-2 text-sm sm:text-base">
              <CheckCircle size={18} />
              Harvesting Workshop
            </p>

            <Link href='/GroupBookings/#BookingForm' className='mx-auto block'>
              <button className="mt-4 rounded-full border border-amber-100 px-6 py-3 text-sm font-medium text-amber-100 transition-colors duration-300 hover:bg-[#1f3c07]">
                Book My Spot
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* FORM */}
      <section className="mx-auto mt-10 w-full max-w-5xl px-4 pb-20 sm:px-6 lg:mt-16">
        
        <form id="BookingForm" className="rounded-[2rem] border border-[#122a02]/10 bg-[#fbf6e9] p-5 shadow-[0_24px_80px_rgba(18,42,2,0.14)] sm:p-8 md:p-10">
          
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            
            <p
              className={`text-xs uppercase tracking-[0.25em] text-[#6b5f3a] sm:text-sm ${notoSerifJP.className}`}
            >
              Booking Enquiry
            </p>

            <label
              htmlFor="group-name"
              className={`mt-3 block text-2xl leading-tight text-[#122a02] sm:text-3xl md:text-4xl ${medievalSharp.className}`}
            >
              Have a vision for your group? Let&apos;s make it a reality together.
            </label>

            <p className="mt-4 text-sm leading-6 text-[#4f4a3d] md:text-base">
              Share a few details and we&apos;ll shape the visit around your group
              size, goals, and pace.
            </p>
          </div>

          {/* Inputs */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            
            <div className="space-y-2">
              <label
                htmlFor="group-name"
                className="text-sm font-medium text-[#122a02]"
              >
                Group Name
              </label>

              <input
                type="text"
                id="group-name"
                name="group-name"
                placeholder="Enter your group name"
                className="w-full rounded-2xl border border-[#122a02]/15 bg-white px-5 py-4 text-sm text-[#122a02] shadow-sm transition duration-300 placeholder:text-[#8b856f] focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-person"
                className="text-sm font-medium text-[#122a02]"
              >
                Contact Person
              </label>

              <input
                type="text"
                id="contact-person"
                name="contact-person"
                placeholder="Enter contact person name"
                className="w-full rounded-2xl border border-[#122a02]/15 bg-white px-5 py-4 text-sm text-[#122a02] shadow-sm transition duration-300 placeholder:text-[#8b856f] focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-email"
                className="text-sm font-medium text-[#122a02]"
              >
                Contact Email
              </label>

              <input
                type="email"
                id="contact-email"
                name="contact-email"
                placeholder="Enter contact email"
                className="w-full rounded-2xl border border-[#122a02]/15 bg-white px-5 py-4 text-sm text-[#122a02] shadow-sm transition duration-300 placeholder:text-[#8b856f] focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-phone"
                className="text-sm font-medium text-[#122a02]"
              >
                Contact Phone
              </label>

              <input
                type="tel"
                id="contact-phone"
                name="contact-phone"
                placeholder="Enter contact phone"
                className="w-full rounded-2xl border border-[#122a02]/15 bg-white px-5 py-4 text-sm text-[#122a02] shadow-sm transition duration-300 placeholder:text-[#8b856f] focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-[#122a02]"
              >
                Number of Participants
              </label>

              <input
                type="number"
                id="participants"
                name="participants"
                placeholder="Enter number of participants"
                className="w-full rounded-2xl border border-[#122a02]/15 bg-white px-5 py-4 text-sm text-[#122a02] shadow-sm transition duration-300 placeholder:text-[#8b856f] focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="preferred-date"
                className="text-sm font-medium text-[#122a02]"
              >
                Preferred Date
              </label>

              <input
                type="date"
                id="preferred-date"
                name="preferred-date"
                className="w-full rounded-2xl border border-[#122a02]/15 bg-white px-5 py-4 text-sm text-[#122a02] shadow-sm transition duration-300 focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10"
              />
            </div>
          </div>

          {/* Interests */}
          <div className="mt-8 rounded-[1.75rem] border border-[#122a02]/10 bg-white/80 p-5 md:p-6">
            
            <p className="text-sm font-medium text-[#122a02]">
              Primary Interest
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              
              {[
                'Team Building',
                'Nature Education',
                'Wellness/Meditation',
                'Culinary Experience',
              ].map((interest) => (
                <label
                  key={interest}
                  className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#122a02]/10 bg-[#f8f5eb] px-4 py-3 text-sm text-[#122a02] transition hover:border-[#122a02]/30 hover:bg-[#f3eddc]"
                >
                  <input
                    type="radio"
                    name="interest"
                    value={interest}
                    className="h-4 w-4 accent-[#122a02]"
                  />

                  <span>{interest}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Textarea */}
          <div className="mt-8 space-y-2">
            
            <label
              htmlFor="additional-details"
              className="text-sm font-medium text-[#122a02]"
            >
              Additional Details
            </label>

            <textarea
              id="additional-details"
              name="additional-details"
              placeholder="Let us know about accessibility needs, specific goals, or food allergies..."
              className="h-36 w-full resize-none rounded-3xl border border-[#122a02]/15 bg-white px-5 py-4 text-sm text-[#122a02] shadow-sm transition duration-300 placeholder:text-[#8b856f] focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-8 flex w-full items-center justify-center rounded-full bg-[#122a02] px-6 py-4 text-sm font-medium text-amber-100 shadow-lg shadow-[#122a02]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#1f3c07]"
          >
            Submit Enquiry
          </button>
        </form>
      </section>

      <Footer />
    </div>
  )
}

export default page