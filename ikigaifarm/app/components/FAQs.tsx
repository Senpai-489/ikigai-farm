'use client'

import React, {
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  ChevronDown,
} from 'lucide-react'

import {
  MedievalSharp,
  Noto_Serif_JP,
} from 'next/font/google'

import gsap from 'gsap'

const medievalSharp =
  MedievalSharp({
    subsets: ['latin'],
    weight: '400',
  })

const notoSerifJP =
  Noto_Serif_JP({
    subsets: ['latin'],
  })

const faqs = [
  {
    question:
      'What activities are included at Ikigai Farm?',
    answer:
      'We offer 40+ immersive activities including pottery, farming, tractor rides, nature walks, wellness experiences, team-building games, culinary workshops, and interactive farm experiences.',
  },
  {
    question:
      'Do you accommodate school or corporate group bookings?',
    answer:
      'Yes. We regularly host schools, startups, corporate retreats, wellness groups, and private communities with fully customized experiences.',
  },
  {
    question:
      'Is food included in the booking?',
    answer:
      'Yes. Depending on the package, we include snacks, refreshments, high tea, and farm-to-table meals prepared with fresh ingredients.',
  },
  {
    question:
      'How far is Ikigai Farm from Delhi NCR?',
    answer:
      'Ikigai Farm is conveniently located near sector 134 Noida and easily accessible from Delhi NCR for both day trips and group retreats.',
  },
  {
    question:
      'Can we customize our event or itinerary?',
    answer:
      'Absolutely. We tailor experiences around your group size, interests, wellness goals, educational needs, and event vision.',
  },
  {
    question:
      'How do we book a visit?',
    answer:
      'You can submit the enquiry form on our website or directly contact us via phone or email to plan your experience.',
  },
]

const FAQSection = () => {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(0)

  const sectionRef =
    useRef<HTMLDivElement>(null)

  const cardsRef = useRef<
    HTMLDivElement[]
  >([])

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
      },
    )
  }, [])

  const toggleFAQ = (
    index: number,
  ) => {
    setActiveIndex((prev) =>
      prev === index
        ? null
        : index,
    )
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#faf6ea] px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d6e3af]/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <p
            className={`text-sm uppercase tracking-[0.3em] text-[#6b5f3a] ${notoSerifJP.className}`}
          >
            Frequently Asked Questions
          </p>

          <h2
            className={`mt-4 text-4xl text-[#122a02] sm:text-5xl lg:text-6xl ${medievalSharp.className}`}
          >
            Everything You Need
            to Know
          </h2>

          <p
            className={`mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#4f4a3d] sm:text-base md:text-lg ${notoSerifJP.className}`}
          >
            Planning your visit
            should feel effortless.
            Here are answers to
            the questions we get
            most often.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mt-14 flex flex-col gap-5">
          {faqs.map(
            (faq, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el)
                    cardsRef.current[
                      index
                    ] = el
                }}
                className="overflow-hidden rounded-[2rem] border border-[#122a02]/10 bg-white shadow-[0_20px_60px_rgba(18,42,2,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(18,42,2,0.12)]"
              >
                <button
                  onClick={() =>
                    toggleFAQ(
                      index,
                    )
                  }
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
                >
                  <h3
                    className={`text-lg leading-snug text-[#122a02] sm:text-xl ${notoSerifJP.className}`}
                  >
                    {
                      faq.question
                    }
                  </h3>

                  <div
                    className={`shrink-0 transition-transform duration-500 ${
                      activeIndex ===
                      index
                        ? 'rotate-180'
                        : ''
                    }`}
                  >
                    <ChevronDown
                      className="text-[#122a02]"
                      size={24}
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    activeIndex ===
                    index
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-70'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0 sm:px-8">
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#122a02]/15 to-transparent" />

                      <p
                        className={`mt-5 text-sm leading-7 text-[#4f4a3d] sm:text-base ${notoSerifJP.className}`}
                      >
                        {
                          faq.answer
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

export default FAQSection