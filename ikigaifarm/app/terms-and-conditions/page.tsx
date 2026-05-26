import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MedievalSharp, Noto_Serif_JP } from 'next/font/google'

const medievalSharp = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
})

const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
})

const TermsAndConditionsPage: React.FC = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f6ed] text-[#122a02]">

      <Navbar />

      {/* HERO */}
      <section className="relative flex flex-col min-h-[40vh] items-center justify-center overflow-hidden px-6 py-24 text-center">

        {/* Background Glow */}
        <div className="absolute -left-20 top-0 h-[320px] w-[320px] rounded-full bg-[#dce8b4]/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-[320px] w-[320px] rounded-full bg-[#b8d68c]/30 blur-3xl" />

        <div className="relative z-10 max-w-5xl">

          <p
            className={`mb-4 text-sm uppercase tracking-[0.35em] text-[#6c844d] sm:text-base ${notoSerif.className}`}
          >
            Legal Information
          </p>

          <h1
            className={`${medievalSharp.className} text-5xl leading-tight text-[#122a02] sm:text-6xl lg:text-7xl`}
          >
            Terms & Conditions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#4f633d] sm:text-base sm:leading-8">
            Please read these terms carefully before using the Ikigai Farm
            website, services, facilities, bookings, or experiences.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="relative z-10 mx-auto w-[92vw] max-w-7xl pb-24">

        <div className="flex flex-col gap-8 ">

          {/* LEFT SIDEBAR */}
          <div className="rounded-[2rem] border border-[#d6e3af] bg-[#122a02] p-8 text-white shadow-[0_20px_60px_rgba(18,42,2,0.18)] sm:p-10 lg:sticky lg:top-10 lg:h-fit">

            <div className="mb-8">

              <p className="text-sm uppercase tracking-[0.25em] text-[#d6e3af]">
                Ikigai Farm
              </p>

              <h2
                className={`${medievalSharp.className} mt-3 text-4xl text-[#fff4b8] sm:text-5xl`}
              >
                Website Usage Policy
              </h2>

            </div>

            <div className="space-y-6 text-white/80">

              <p className="leading-8">
                This electronic document is published in accordance with the
                Information Technology Act, 2000 and governs the usage of the
                Ikigai Farm website and related services.
              </p>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                <p className="text-sm uppercase tracking-[0.2em] text-[#fff4b8]">
                  Website
                </p>

                <p className="mt-2 leading-7">
                  www.ikigaifarm.org
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                <p className="text-sm uppercase tracking-[0.2em] text-[#fff4b8]">
                  Contact
                </p>

                <div className="mt-3 space-y-3">

                  <a
                    href="mailto:bookings@ikigaifarm.org"
                    className="block transition-all duration-300 hover:text-[#fff4b8]"
                  >
                    bookings@ikigaifarm.org
                  </a>

                  <a
                    href="tel:+918006746390"
                    className="block transition-all duration-300 hover:text-[#fff4b8]"
                  >
                    +91 8006746390
                  </a>

                </div>

              </div>

              <div className="rounded-2xl border border-[#fff4b8]/20 bg-[#1f3c07] p-5">

                <p className="leading-7 text-[#fff4b8]">
                  Continued use of this website constitutes acceptance of
                  these Terms & Conditions.
                </p>

              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="rounded-[2rem] border border-[#d6e3af] bg-white p-8 shadow-[0_20px_60px_rgba(18,42,2,0.08)] sm:p-10">

            <div className="space-y-12">

              {/* WEBSITE INFO */}
              <div>

                <h3 className="text-3xl font-semibold text-[#122a02]">
                  Website Information
                </h3>

                <p className="mt-5 leading-8 text-[#4f633d]">
                  All information available on the Ikigai Farm website is
                  provided without liability. Content is intended to provide
                  general information regarding activities, experiences,
                  facilities, and services offered by Ikigai Farm.
                </p>

                <p className="mt-5 leading-8 text-[#4f633d]">
                  We reserve the right to modify or update information at any
                  time for maintenance, operational, or business purposes.
                </p>

              </div>

              {/* USER RESPONSIBILITY */}
              <div>

                <h3 className="text-3xl font-semibold text-[#122a02]">
                  User Responsibility
                </h3>

                <p className="mt-5 leading-8 text-[#4f633d]">
                  Users are solely responsible for maintaining the
                  confidentiality of account information, passwords, booking
                  details, and transaction records.
                </p>

                <p className="mt-5 leading-8 text-[#4f633d]">
                  Any information submitted by users must be accurate,
                  complete, and current.
                </p>

              </div>

              {/* WEBSITE USE */}
              <div>

                <h3 className="text-3xl font-semibold text-[#122a02]">
                  Acceptable Website Use
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  {[
                    'No unlawful or harmful activity',
                    'No spam or phishing attempts',
                    'No infringement of intellectual property',
                    'No offensive or abusive content',
                    'No unauthorized access attempts',
                    'No malicious software or viruses',
                    'No misleading information',
                    'No violation of applicable laws',
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-[#d6e3af] bg-[#f8f6ed] p-5"
                    >
                      <p className="leading-7 text-[#385328]">
                        {item}
                      </p>
                    </div>
                  ))}

                </div>

              </div>

              {/* INTELLECTUAL PROPERTY */}
              <div>

                <h3 className="text-3xl font-semibold text-[#122a02]">
                  Intellectual Property Rights
                </h3>

                <p className="mt-5 leading-8 text-[#4f633d]">
                  All trademarks, graphics, logos, text, images, videos,
                  designs, and website content belong exclusively to Ikigai
                  Farm and may not be copied, reproduced, or distributed
                  without prior written permission.
                </p>

              </div>

              {/* PRIVACY */}
              <div>

                <h3 className="text-3xl font-semibold text-[#122a02]">
                  Privacy & Cookies
                </h3>

                <p className="mt-5 leading-8 text-[#4f633d]">
                  Ikigai Farm values user privacy and implements reasonable
                  security measures to protect personal information. Cookies
                  may be used to improve website functionality and user
                  experience.
                </p>

              </div>

              {/* PAYMENTS */}
              <div>

                <h3 className="text-3xl font-semibold text-[#122a02]">
                  Services & Payments
                </h3>

                <p className="mt-5 leading-8 text-[#4f633d]">
                  All payments made through the website are accepted in Indian
                  Rupees only. Users are responsible for ensuring valid and
                  authorized payment methods during bookings or purchases.
                </p>

              </div>

              {/* CANCELLATION */}
              <div>

                <h3 className="text-3xl font-semibold text-[#122a02]">
                  Cancellation Policy
                </h3>

                <div className="mt-6 rounded-2xl border border-[#d6e3af] bg-[#f8f6ed] p-6">

                  <p className="text-lg leading-8 text-[#385328]">
                    Bookings, passes, and reservations once confirmed on
                    Ikigai Farm cannot be cancelled, transferred, postponed,
                    or refunded unless explicitly stated otherwise.
                  </p>

                </div>

              </div>

              {/* LIABILITY */}
              <div>

                <h3 className="text-3xl font-semibold text-[#122a02]">
                  Limitation of Liability
                </h3>

                <p className="mt-5 leading-8 text-[#4f633d]">
                  Use of this website is entirely at the user’s own risk.
                  Ikigai Farm shall not be held liable for any direct,
                  indirect, incidental, or consequential damages arising
                  from website usage or inability to access services.
                </p>

              </div>

              {/* LAW */}
              <div>

                <h3 className="text-3xl font-semibold text-[#122a02]">
                  Applicable Law
                </h3>

                <p className="mt-5 leading-8 text-[#4f633d]">
                  These Terms & Conditions shall be governed in accordance
                  with the laws of India. Any disputes shall fall under the
                  jurisdiction of the courts of Uttar Pradesh, India.
                </p>

              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />

    </main>
  )
}

export default TermsAndConditionsPage