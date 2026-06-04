import { CheckCircle2, IndianRupeeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PackagesCard = (props: {
  title: string
  price: string
  specs: string
  description: string[]
}) => {
  return (
    <div className="w-full rounded-lg drop-shadow-2xl overflow-hidden border border-[#e5e5e5] bg-[#f7f7f7] transition-all duration-300 hover:border-[#d9d9d9]">
      
      {/* Package Title */}
      <div className="border-b border-[#e5e5e5] py-10 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#ff7a00]">
          {props.title}
        </p>
      </div>

      {/* Price */}
      <div className="border-b border-[#e5e5e5] px-6 py-10 text-center">
        <div className="flex items-start justify-center">
          <IndianRupeeIcon
            size={28}
            className="mt-2 text-[#333]"
          />

          <span className="text-4xl font-bold leading-none text-[#333]">
            {props.price}
          </span>
        </div>

        <p className="mt-4 text-base text-[#9a9a9a]">
          {props.specs}
        </p>
      </div>

      {/* Features */}
      <div className="flex min-h-[280px]  flex-col justify-start gap-6 px-8 py-10">
        {props.description.map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-start gap-3"
          >
            <CheckCircle2
              size={18}
              className="mt-1 shrink-0 text-[#ff7a00]"
            />

            <p className="text-left text-lg leading-relaxed text-[#555]">
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="border-t flex  border-[#e5e5e5] px-6 py-10">
        <Link
          href="/Contact"
          className="
           mx-auto w-full rounded-full text-center bg-[#122a02] px-6 py-3 text-sm font-medium text-amber-100 transition-all duration-300 hover:scale-105 hover:bg-[#1f3c07] sm:px-7 sm:py-4 sm:text-base
          "
        >
          Book Now
        </Link>
      </div>
    </div>
  )
}

export default PackagesCard