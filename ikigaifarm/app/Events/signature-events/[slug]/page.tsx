import { notFound } from 'next/navigation'
import Image from 'next/image'

import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import SignatureEventsEnquiryForm from './SignatureEventsEnquiryForm'

import { signatureEventData } from '@/app/lib/signatureEventData'
import { medievalSharp } from '@/app/fonts'

export default async function SignatureEventPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const event =
    signatureEventData[
      slug as keyof typeof signatureEventData
    ]

  if (!event) {
    notFound()
  }

  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* HERO */}
        <section className="relative h-[60vh]">
          <Image
            src={event.heroImage}
            alt={event.title}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h1
              className={`${medievalSharp.className} text-center text-5xl text-white md:text-7xl`}
            >
              {event.title}
            </h1>
          </div>
        </section>

        {/* CONTENT */}
        <section className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <h2 className="text-3xl font-semibold text-[#122a02]">
                About This Event
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-700">
                {event.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#edf5e3] px-4 py-2">
                  Duration: {event.duration}
                </span>

                <span className="rounded-full bg-[#edf5e3] px-4 py-2">
                  {event.bestFor}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {event.highlights.map(
                  (item) => (
                    <li
                      key={item}
                      className="text-gray-700"
                    >
                      ✓ {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-4">
              {event.gallery.map(
                (image) => (
                  <div
                    key={image}
                    className="relative h-64 overflow-hidden rounded-3xl"
                  >
                    <Image
                      src={image}
                      alt={event.title}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ENQUIRY */}
        <section className="mx-auto max-w-4xl px-4 pb-20">
          <SignatureEventsEnquiryForm
            workshop={event.title}
          />
        </section>
      </main>

      <Footer />
    </>
  )
}