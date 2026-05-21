import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import {
  Noto_Serif_JP,
  Lovers_Quarrel,
  MedievalSharp,
} from 'next/font/google'

import {
 Mail,
  MapPin,
  Phone,
  
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

const mapQuery = encodeURIComponent(
  'Rajgarh Farms, Bandh Rd, Nagla Nagli, Sector 134, Noida, Uttar Pradesh 201304, India',
)

const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${mapQuery}&zoom=16`

const page = () => {
  return (
    <div className="min-h-screen bg-[#f8f5eb]">
      
      <Navbar />

      {/* TOP LINE */}
      <div className="mx-auto mt-4 h-px w-[92%] bg-linear-to-r from-transparent via-[#122a02]/40 to-transparent" />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        <div className="text-center">
          
          <h1
            className={`text-5xl text-[#122a02] sm:text-6xl lg:text-7xl ${medievalSharp.className}`}
          >
            Contact Us
          </h1>

          <p
            className={`mt-4 text-4xl text-[#4f4a3d] sm:text-5xl ${loversQuarrel.className}`}
          >
            Plan Your Visit, Event, or Enquiry
          </p>

          <p
            className={`mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#4f4a3d] sm:text-base md:text-lg ${notoSerifJP.className}`}
          >
            Whether you&apos;re planning a celebration, organizing a group
            experience, or simply want to know more about Ikigai Farm,
            we&apos;d love to hear from you.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          
          {/* FORM */}
          <div className="rounded-4xl border border-[#122a02]/10 bg-white p-6 shadow-[0_24px_80px_rgba(18,42,2,0.10)] sm:p-8">
            
            <h2
              className={`text-3xl text-[#122a02] ${medievalSharp.className}`}
            >
              Send an Enquiry
            </h2>

            <form className="mt-8 space-y-6">
              
              {/* NAME */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#122a02]">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-[#122a02]/15 bg-[#fdfdf8] px-5 py-4 text-sm text-[#122a02] shadow-sm transition duration-300 placeholder:text-[#8b856f] focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10"
                />
              </div>

              {/* EMAIL */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#122a02]">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-[#122a02]/15 bg-[#fdfdf8] px-5 py-4 text-sm text-[#122a02] shadow-sm transition duration-300 placeholder:text-[#8b856f] focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10"
                />
              </div>

              {/* CONTACT */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#122a02]">
                  Contact Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your contact number"
                  className="w-full rounded-2xl border border-[#122a02]/15 bg-[#fdfdf8] px-5 py-4 text-sm text-[#122a02] shadow-sm transition duration-300 placeholder:text-[#8b856f] focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10"
                />
              </div>

              {/* QUERY */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#122a02]">
                  Your Query
                </label>

                <textarea
                  placeholder="Tell us about your visit, event, or enquiry..."
                  className="h-40 w-full resize-none rounded-3xl border border-[#122a02]/15 bg-[#fdfdf8] px-5 py-4 text-sm text-[#122a02] shadow-sm transition duration-300 placeholder:text-[#8b856f] focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#122a02] px-6 py-4 text-sm font-medium text-amber-100 shadow-lg shadow-[#122a02]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#1f3c07]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col gap-6">
            
            {/* INFO CARD */}
            <div className="rounded-4xl border border-[#122a02]/10 bg-[#122a02] p-6 text-white shadow-[0_24px_80px_rgba(18,42,2,0.14)] sm:p-8">
              
              <h2
                className={`text-3xl text-[#fff4b8] ${medievalSharp.className}`}
              >
                Visit Ikigai Farm
              </h2>

              <div className="mt-8 space-y-6">
                
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-[#fff4b8]" />

                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#fff4b8]/70">
                      Address
                    </p>

                    <p className="mt-1 text-sm leading-7 text-white/85 sm:text-base">
                      Rajgarh Farms, Bandh Rd, Nagla Nagli, Sector 134, Noida, Uttar Pradesh 201304, India
                      
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 text-[#fff4b8]" />

                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#fff4b8]/70">
                      Phone
                    </p>

                    <p className="mt-1 text-sm text-white/85 sm:text-base">
                      +91 8006746390
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 text-[#fff4b8]" />

                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#fff4b8]/70">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-white/85 sm:text-base">
                      hello@ikigaifarm.com
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* GOOGLE MAP */}
            <div className="overflow-hidden rounded-4xl border border-[#122a02]/10 shadow-[0_24px_80px_rgba(18,42,2,0.10)]">
              
              <iframe
                title="Ikigai Farm Location"
                width="100%"
                height="350"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={mapSrc}
                className="border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default page