import { notFound } from 'next/navigation'
import Image from 'next/image'

import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import WorkshopEnquiryForm from './WorkshopEnquiryForm'

import { workshopData } from '@/app/lib/workshopData'
import { medievalSharp } from '@/app/fonts'

export default async function WorkshopPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const workshop =
    workshopData[
      slug as keyof typeof workshopData
    ]

  if (!workshop) {
    notFound()
  }

  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* HERO */}
        <section className="relative h-[60vh]">
          <Image
            src={workshop.heroImage}
            alt={workshop.title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className={`${medievalSharp.className} text-center text-5xl md:text-7xl text-white`}
            >
              {workshop.title}
            </h1>
          </div>
        </section>

        {/* CONTENT */}
        <section className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-[#122a02]">
                About The Workshop
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-700">
                {workshop.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#edf5e3] px-4 py-2">
                  Duration: {workshop.duration}
                </span>

                <span className="rounded-full bg-[#edf5e3] px-4 py-2">
                  {workshop.ageGroup}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {workshop.highlights.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {workshop.gallery.map((image) => (
                <div
                  key={image}
                  className="relative h-64 overflow-hidden rounded-3xl"
                >
                  <Image
                    src={image}
                    alt={workshop.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-20">
          <WorkshopEnquiryForm workshop={workshop.title} />
        </section>
      </main>

      <Footer />
    </>
  )
}