import React from 'react'
import {medievalSharp} from '@/app/fonts'
type ValueItem = {
  icon: React.ElementType
  title: string
  description: string
}

const ValueGrid = ({
  items,
}: {
  items: ValueItem[]
}) => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className={`${medievalSharp.className} text-4xl font-bold uppercase text-[#122a02] md:text-5xl`}>
            Why Choose Ikigai Farm
          </h2>

          <div className="mx-auto mt-5 h-1 w-28 bg-[#c9c9c9]" />
        </div>

        <div className="mt-20  grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {items.map(
            (
              {
                icon: Icon,
                title,
                description,
              },
              index,
            ) => (
              <div
                key={index}
                className="group text-center drop-shadow-2xl bg-[#062b14] rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:translate-y-4 hover:bg-[#0a4e24] hover:shadow-lg"
              >
                <div className="mb-8 flex justify-center">
                  <div className="rounded-full border border-[#122a02]/10 bg-[#0a4e24] p-5 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <Icon
                      size={48}
                      className="text-[#ffffb7]"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold uppercase text-[#ffffb7]">
                  {title}
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-white">
                  {description}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

export default ValueGrid