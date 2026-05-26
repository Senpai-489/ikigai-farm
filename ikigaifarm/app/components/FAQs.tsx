'use client'

import { memo, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import {
  medievalSharp,
  notoSerifJP,
} from '@/app/fonts'

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
      'Ikigai Farm is conveniently located near sector 134 Noida and easily accessible from Delhi NCR.',
  },
  {
    question:
      'Can we customize our event or itinerary?',
    answer:
      'Absolutely. We tailor experiences around your group size, interests, wellness goals, educational needs, and event vision.',
  },
]

const FAQItem = memo(
  ({
    faq,
    isOpen,
    onClick,
  }: {
    faq: {
      question: string
      answer: string
    }
    isOpen: boolean
    onClick: () => void
  }) => (
    <div className="overflow-hidden rounded-[2rem] border border-[#122a02]/10 bg-white shadow-lg transition-all duration-300">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-8"
      >
        <h3
          className={`text-lg text-[#122a02] sm:text-xl ${notoSerifJP.className}`}
        >
          {faq.question}
        </h3>

        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen
              ? 'rotate-180'
              : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 sm:px-8">
          <div className="h-px bg-[#122a02]/10" />

          <p
            className={`mt-5 text-sm leading-7 text-[#4f4a3d] sm:text-base ${notoSerifJP.className}`}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  )
)

FAQItem.displayName = 'FAQItem'

const FAQSection = () => {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(0)

  return (
    <section className="relative overflow-hidden bg-[#faf6ea] px-4 py-20 sm:px-6 lg:px-8">

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d6e3af]/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">

        <div className="text-center">
          <p
            className={`text-sm uppercase tracking-[0.3em] text-[#6b5f3a] ${notoSerifJP.className}`}
          >
            Frequently Asked Questions
          </p>

          <h2
            className={`mt-4 text-4xl text-[#122a02] sm:text-5xl lg:text-6xl ${medievalSharp.className}`}
          >
            Everything You Need to Know
          </h2>
        </div>

        <div className="mt-14 flex flex-col gap-5">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={
                activeIndex === index
              }
              onClick={() =>
                setActiveIndex(
                  activeIndex === index
                    ? null
                    : index
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection