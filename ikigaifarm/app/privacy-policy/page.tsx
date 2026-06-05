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

const CookiesPolicyPage: React.FC = () => {
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
            Privacy & Transparency
          </p>

          <h1
            className={`${medievalSharp.className} text-5xl leading-tight text-[#122a02] sm:text-6xl lg:text-7xl`}
          >
            Cookies Policy
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#4f633d] sm:text-base sm:leading-8">
            Learn how Ikigai Farm uses cookies and tracking technologies to
            improve your experience and enhance our services.
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
                About Cookies
              </p>

              <h2
                className={`${medievalSharp.className} mt-3 text-4xl text-[#122a02] sm:text-5xl`}
              >
                Introduction
              </h2>

            </div>

            <div className="space-y-8">

              <div>
                <p className="leading-8 text-[#4f633d]">
                  Welcome to Ikigai Farm. We use cookies and similar tracking
                  technologies to enhance your browsing experience, analyze
                  website traffic, and understand how visitors interact with
                  our platform.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#122a02]">
                  What Are Cookies?
                </h3>

                <p className="mt-3 leading-8 text-[#4f633d]">
                  Cookies are small text files stored on your device when you
                  visit a website. They help remember your preferences,
                  settings, and browsing activity for a smoother experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#122a02]">
                  Essential Cookies
                </h3>

                <p className="mt-3 leading-8 text-[#4f633d]">
                  These cookies are necessary for our website to function
                  properly, including security, accessibility, and navigation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#122a02]">
                  Performance Cookies
                </h3>

                <p className="mt-3 leading-8 text-[#4f633d]">
                  These cookies help us understand how visitors interact with
                  our website by collecting anonymous analytical data.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#122a02]">
                  Functional Cookies
                </h3>

                <p className="mt-3 leading-8 text-[#4f633d]">
                  Functional cookies remember your preferences such as
                  language settings or previously viewed content for a more
                  personalized experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#122a02]">
                  Marketing Cookies
                </h3>

                <p className="mt-3 leading-8 text-[#4f633d]">
                  These cookies help display relevant advertisements and
                  measure the effectiveness of marketing campaigns.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-[2rem] border border-[#d6e3af] bg-[#122a02] p-8 text-white shadow-[0_20px_60px_rgba(18,42,2,0.18)] sm:p-10">

            <div className="mb-8">

              <p className="text-sm uppercase tracking-[0.25em] text-[#d6e3af]">
                Your Rights
              </p>

              <h2
                className={`${medievalSharp.className} mt-3 text-4xl text-[#fff4b8] sm:text-5xl`}
              >
                Cookie Preferences
              </h2>

            </div>

            <div className="space-y-8">

              <div>
                <h3 className="text-xl font-semibold text-[#fff4b8]">
                  How We Use Cookies
                </h3>

                <ul className="mt-4 space-y-3 text-white/80">

                  <li>
                    • To remember your preferences and settings.
                  </li>

                  <li>
                    • To analyze website traffic and user behavior.
                  </li>

                  <li>
                    • To improve performance and user experience.
                  </li>

                  <li>
                    • To display relevant advertising content.
                  </li>

                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#fff4b8]">
                  Browser Settings
                </h3>

                <p className="mt-3 leading-8 text-white/80">
                  Most web browsers allow you to control cookies through
                  browser settings. You may choose to refuse cookies or
                  delete existing cookies at any time.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#fff4b8]">
                  Third-Party Cookies
                </h3>

                <p className="mt-3 leading-8 text-white/80">
                  Ikigai Farm may use third-party services and integrations
                  which may place cookies on your device. These are governed
                  by the respective privacy policies of those providers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#fff4b8]">
                  Policy Updates
                </h3>

                <p className="mt-3 leading-8 text-white/80">
                  We may update this Cookies Policy periodically to reflect
                  operational, legal, or regulatory changes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#fff4b8]">
                  Contact Us
                </h3>

                <div className="mt-5 flex flex-col gap-4">

                  <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white/80">
                    Ikigai Farm, Bandh Rd, Nagla Nagli, Sector 134, Noida, Uttar Pradesh 201304, India

                  </div>

                  <a
                    href="mailto:contact@ikigaifarm.org"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:bg-white/10"
                  >
                    contact@ikigaifarm.org
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
                  By continuing to use our website, you consent to the use
                  of cookies in accordance with this policy.
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

export default CookiesPolicyPage