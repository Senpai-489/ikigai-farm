import { PhoneCallIcon } from "lucide-react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Link from "next/link"
import Image from "next/image"
import ImageCarousel from "../components/ImgCarousel"

const stats = [
  { value: '2000+', label: 'Students' },
  { value: '15+', label: 'Schools' },
  { value: '10+', label: 'Acres' },
  { value: '99%', label: 'Happy Visitors' },
]

const audience = [
  {
    title: 'Schools & Colleges',
    items: [
      'Primary & Secondary Schools',
      'Colleges & Universities',
      'International Schools',
    ],
  },
  {
    title: 'Organisations',
    items: [
      'Corporate Teams',
      'NGOs & Foundations',
      'Community Groups',
    ],
  },
]

const learnings = [
  {
    title: 'Food System Roots',
    description:
      'Understanding where food comes from and the ecosystems they rely on.',
  },
  {
    title: 'Beyond the Classroom',
    description: 'Outdoor experiential learning.',
  },
  {
    title: 'Life Skills Building',
    description: 'Imagination and creativity.',
  },
]

const features = [
  'Experimental learning in Noida',
  'Nature camp for kids.',
  'Healthy Eating for children',
  'Fresh, organic farm-to-table lunch',
  'options available.',
  '20+ fun Adventure Activities',
  'Organic Farm Delhi NCR',
  'Organic farming and fun workshops',
  'Kids Activities Noida',
]

export default function SchoolFarmLandingPage() {
  return (
    <main className="min-h-screen bg-white text-[#222]">
      <Navbar />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/School.jpeg"
            alt="farm"
            fill
            priority
            sizes="100vw"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-center px-5 py-16 sm:px-8 lg:min-h-[700px] lg:px-12">
          <div className="max-w-2xl">
            

            <h1 className="text-4xl  leading-tight text-white sm:text-5xl lg:text-7xl">
              Best Experiential Farm for Schools in Delhi NCR
            </h1>

            <p className="mt-4 text-base text-white/90 sm:text-lg lg:text-xl">
              Inspiring learning through nature, farming, outdoor activities,
              and unforgettable hands-on experiences.
            </p>

            <div className="mt-8 flex gap-4 ">
              <Link href={'/Contact'}><button className="rounded-full bg-[#0f5e1f] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#14752a]">
                Enquire Now
              </button></Link>

            <Link href={'tel:+918006746390'}><button className="rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/20">
                <PhoneCallIcon className="mr-2 h-5 w-5" />
              </button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-[2rem] bg-white p-4 shadow-[0_24px_80px_rgba(0,0,0,0.08)] sm:grid-cols-4 sm:p-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-[#f7f6f2] p-5 text-center"
            >
              <p className="text-2xl font-black text-black sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-[#666]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f5e1f]">
              Who We Serve
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Designed for schools, colleges, and organisations.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#666]">
              We create outdoor learning experiences that blend education,
              creativity, teamwork, and nature exploration.
            </p>
          </div>

          <div className="grid flex-1 gap-5">
            {audience.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-[#d8e7cc] bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#dff8cf] text-[#0f5e1f]">
                    ●
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>

                    <ul className="mt-3 space-y-2 text-sm text-[#666]">
                      {item.items.map((sub) => (
                        <li key={sub}>• {sub}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT STUDENTS LEARN */}
      <section className="bg-white ">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f5e1f]">
              What Do Students Learn?
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Education beyond books.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {learnings.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-[#edf0e6] bg-[#f8f8f4] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dff8cf] text-[#0f5e1f]">
                  ✦
                </div>

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-[#666]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[#103f19]">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c8f7b8]">
                Why Choose Us
              </p>

              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                Learning experiences students remember.
              </h2>

              <div className="mt-8 space-y-4">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 backdrop-blur-md"
                  >
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c8f7b8] text-xs text-[#103f19]">
                      ✓
                    </div>

                    <p className="text-sm text-white/90 sm:text-base">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-full min-h-[320px] lg:min-h-[700px]">
              <ImageCarousel
                images={[
                  '/Schools1.jpeg',
                  '/School2.jpeg',
                  '/Schools3.jpeg',
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-[#0f5e1f] px-6 py-12 text-center text-white shadow-[0_24px_80px_rgba(15,94,31,0.25)] sm:px-10 lg:px-16">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8f7b8]">
              Schedule a Visit
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
              Schedule a visit for your institution today.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Bring your students closer to nature through immersive,
              educational, and joyful experiences.
            </p>

           <Link href="/Contact"><button className="mt-8 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#0f5e1f] transition duration-300 hover:scale-105 hover:bg-[#f3f3f3]">
              Enquire Now
            </button></Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
