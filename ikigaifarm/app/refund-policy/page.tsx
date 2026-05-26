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

const RefundPolicyPage: React.FC = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f6ed] text-[#122a02]">

      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden px-6 py-24 text-center">

        {/* Background Glow */}
        <div className="absolute -left-20 top-0 h-[300px] w-[300px] rounded-full bg-[#dce8b4]/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-[#b8d68c]/30 blur-3xl" />

        <div className="relative z-10 max-w-4xl">

          <p
            className={`mb-4 text-sm uppercase tracking-[0.35em] text-[#6c844d] sm:text-base ${notoSerif.className}`}
          >
            Terms & Conditions
          </p>

          <h1
            className={`${medievalSharp.className} text-5xl leading-tight text-[#122a02] sm:text-6xl lg:text-7xl`}
          >
            Refund Policy
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#4f633d] sm:text-base sm:leading-8">
            Transparency and trust matter to us. Please review our refund
            and payment guidelines carefully before making a booking.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="relative z-10 mx-auto w-[92vw] max-w-6xl pb-24">

        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT CARD */}
          <div className="rounded-[2rem] border border-[#d6e3af] bg-white p-8 shadow-[0_20px_60px_rgba(18,42,2,0.08)] sm:p-10">

            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#6c844d]">
                Policy 01
              </p>

              <h2
                className={`${medievalSharp.className} mt-3 text-4xl text-[#122a02] sm:text-5xl`}
              >
                Non-Refundable Policy
              </h2>
            </div>

            <div className="space-y-8">

              <div>
                <h3 className="text-xl font-semibold text-[#122a02]">
                  Payment and Booking
                </h3>

                <p className="mt-3 leading-8 text-[#4f633d]">
                  All reservations for activities, tickets, or event bookings
                  at Ikigai Farm require full payment at the time of booking.
                  This payment is non-refundable.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#122a02]">
                  Cancellation
                </h3>

                <p className="mt-3 leading-8 text-[#4f633d]">
                  Once payment is made, it is non-refundable regardless of
                  the reason for cancellation. This applies to individual
                  tickets, group bookings, and scheduled events.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#122a02]">
                  Rescheduling
                </h3>

                <p className="mt-3 leading-8 text-[#4f633d]">
                  Requests to reschedule bookings must be made in writing and
                  are subject to availability. Any additional charges or rate
                  differences will be borne by the customer.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#122a02]">
                  No Shows
                </h3>

                <p className="mt-3 leading-8 text-[#4f633d]">
                  Failure to attend on the scheduled date will be treated as
                  a no-show and no refunds will be issued.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#122a02]">
                  Force Majeure
                </h3>

                <p className="mt-3 leading-8 text-[#4f633d]">
                  In unforeseen situations such as natural disasters or
                  government restrictions, Ikigai Farm is not liable for
                  refunds. Alternative arrangements may be offered at our
                  discretion.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#122a02]">
                  Acknowledgment
                </h3>

                <p className="mt-3 leading-8 text-[#4f633d]">
                  By completing your booking, you agree to this policy and
                  all associated terms and conditions.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-[2rem] border border-[#d6e3af] bg-[#122a02] p-8 text-white shadow-[0_20px_60px_rgba(18,42,2,0.18)] sm:p-10">

            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#d6e3af]">
                Policy 02
              </p>

              <h2
                className={`${medievalSharp.className} mt-3 text-4xl text-[#fff4b8] sm:text-5xl`}
              >
                Double Payment Refunds
              </h2>
            </div>

            <div className="space-y-8">

              <div>
                <p className="leading-8 text-white/80">
                  If a duplicate payment is debited due to a technical error
                  or payment issue, you are eligible for a full refund of
                  the excess amount.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#fff4b8]">
                  Verification
                </h3>

                <p className="mt-3 leading-8 text-white/80">
                  Once reported, our team will verify all transaction
                  details before initiating the refund.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#fff4b8]">
                  Refund Initiation
                </h3>

                <p className="mt-3 leading-8 text-white/80">
                  Upon confirmation, the refund process will begin
                  immediately.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#fff4b8]">
                  Timeline
                </h3>

                <p className="mt-3 leading-8 text-white/80">
                  Refunds are generally processed within 30 business days,
                  depending on your bank or payment provider.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#fff4b8]">
                  Contact Support
                </h3>

                <p className="mt-3 leading-8 text-white/80">
                  Please contact us at:
                </p>

                <div className="mt-5 flex flex-col gap-4">

                  <a
                    href="mailto:bookings@ikigaifarm.com"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:bg-white/10"
                  >
                    bookings@ikigaifarm.com
                  </a>

                  <a
                    href="tel:+918006746390"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:bg-white/10"
                  >
                    +91 8006746390
                  </a>

                </div>
              </div>

              <div className="rounded-2xl border border-[#fff4b8]/20 bg-[#1f3c07] p-5">

                <p className="leading-7 text-[#fff4b8]">
                  Refunds will always be credited back to the original payment
                  method used at the time of purchase.
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

export default RefundPolicyPage