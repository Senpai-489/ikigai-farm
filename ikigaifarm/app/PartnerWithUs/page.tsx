import Link from "next/link";
import {
  ArrowRight,
  Building2,
  School,
  Mountain,
  PartyPopper,
  Leaf,
  HeartHandshake,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { medievalSharp } from "../fonts";

const partnershipCategories = [
  {
    title: "Adventure Partners",
    icon: Mountain,
    items: [
      "Adventure Sports Operators",
      "Outdoor Learning Providers",
      "Summer Camp Organizers",
      "Leadership Development Companies",
    ],
  },
  {
    title: "Schools & Institutions",
    icon: School,
    items: [
      "School Excursions",
      "Experiential Learning",
      "Nature Workshops",
      "Student Leadership Camps",
    ],
  },
  {
    title: "Corporate & HR",
    icon: Building2,
    items: [
      "Team Building Programs",
      "Corporate Offsites",
      "Employee Engagement",
      "Leadership Retreats",
    ],
  },
  {
    title: "Events & Experiences",
    icon: PartyPopper,
    items: [
      "Event Planners",
      "Corporate Event Agencies",
      "Wedding Planners",
      "Community Events",
    ],
  },
  {
    title: "CSR & NGOs",
    icon: Leaf,
    items: [
      "Environmental Programs",
      "Community Engagement",
      "Student Sponsorships",
      "CSR Projects",
    ],
  },
  {
    title: "Wellness Partners",
    icon: HeartHandshake,
    items: [
      "Yoga Retreats",
      "Wellness Workshops",
      "Mindfulness Programs",
      "Fitness Experiences",
    ],
  },
];

const stats = [
  { number: "10+", label: "Acres of Outdoor Space" },
  { number: "40+", label: "Adventure Activities" },
  { number: "100+", label: "Events Hosted" },
  { number: "NCR", label: "Prime Location" },
];

const benefits = [
  {
    title: "Reach New Audiences",
    description:
      "Connect with schools, corporates, families and communities seeking meaningful outdoor experiences.",
  },
  {
    title: "Create Revenue Opportunities",
    description:
      "Expand your offerings through collaborative programs and experiential partnerships.",
  },
  {
    title: "Build Greater Impact",
    description:
      "Help people discover purpose, confidence, teamwork and a deeper connection with nature.",
  },
];

export default function PartnerWithUsPage() {
  return (
    <main className="bg-[#fafafa] text-black">
      {/* Hero */}
      <Navbar />
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <div>
              

              <h1 className="text-5xl font-black leading-tight md:text-6xl">
                Partner With
                <br />
                Ikigai Farm
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-600">
                Adventure, Learning & Outdoor Experiences designed to
                inspire growth, connection, well-being and purpose.
              </p>

              <p className="mt-4 max-w-xl text-neutral-500">
                Join schools, corporates, event planners, NGOs and
                wellness leaders creating impactful experiences in
                nature.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="tel:+918006746390"
                  className="inline-flex items-center gap-2 rounded-2xl bg-black px-7 py-4 font-semibold text-white transition hover:scale-105"
                >
                  Become a Partner
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="#opportunities"
                  className="rounded-2xl border border-neutral-300 px-7 py-4 font-semibold transition hover:bg-neutral-100"
                >
                  Explore Opportunities
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="rounded-[32px] border border-neutral-200 bg-white p-6 shadow-xl">
                <div className="grid gap-4">
                  {[
                    "School Excursions",
                    "Corporate Offsites",
                    "Adventure Programs",
                    "Wellness Retreats",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-neutral-200 bg-[#fafafa] p-5 font-semibold"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-16 -left-6 rounded-3xl border border-neutral-200 bg-[#ffe494] p-6 shadow-xl">
                <div className="text-4xl font-black">10+</div>
                <div className="text-sm font-medium">
                  Acres of Outdoor Experiences
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className={`${medievalSharp.className} text-center text-4xl font-black`}>
          Boost Your Outcomes With Partner Benefits
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title}>
              <div className="mb-4 h-1 w-14 rounded-full bg-[#ffe494]" />

              <h3 className="text-xl font-bold">
                {benefit.title}
              </h3>

              <p className="mt-3 leading-relaxed text-neutral-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Opportunities */}
      <section
        id="opportunities"
        className="border-y border-neutral-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <h2 className={`${medievalSharp.className} text-4xl font-black md:text-5xl`}>
              Partnership Opportunities
            </h2>

            <p className="mt-4 text-lg text-neutral-600">
              Collaborate with Ikigai Farm to deliver meaningful
              outdoor experiences for students, teams, families and
              communities.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {partnershipCategories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="group rounded-[28px] border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-black hover:shadow-xl"
                >
                  <Icon
                    size={34}
                    className="mb-6"
                  />

                  <h3 className="text-2xl font-bold">
                    {category.title}
                  </h3>

                  <ul className="mt-6 space-y-3">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-neutral-600"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-1 shrink-0 text-[#d9b400]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-black">
            Why Partner With Ikigai Farm?
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8"
              >
                <div className="text-5xl font-black text-[#ffe494]">
                  {stat.number}
                </div>

                <div className="mt-3 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "School & Corporate Ready Infrastructure",
              "Nature-Based Learning Environment",
              "Custom Programs & Experiences",
              "Convenient Noida NCR Location",
              "Purpose-Driven Experiences",
              "Professional Event Support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className={`${medievalSharp.className} text-center text-4xl font-black`}>
          Partnership Process
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {[
            "Connect",
            "Discuss Goals",
            "Design Experience",
            "Launch Program",
          ].map((step, index) => (
            <div
              key={step}
              className="rounded-[28px] border border-neutral-200 bg-white p-8"
            >
              <div className="text-6xl font-black text-[#ffe494]">
                0{index + 1}
              </div>

              <div className="mt-4 text-xl font-bold">
                {step}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[40px] bg-black px-8 py-16 text-center text-white md:px-16">
            <h2 className={`${medievalSharp.className} text-4xl font-black md:text-6xl`}>
              Let's Build Something Meaningful
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-neutral-300">
              Together, let's create experiences that help people
              reconnect with nature, discover purpose, build
              confidence and create lasting memories.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
              <Link
                href="mailto:contact@ikigaifarm.org"
                className="rounded-2xl bg-[#ffe494] px-8 py-4 font-bold text-black transition hover:scale-105"
              >
                Start a Partnership Discussion
              </Link>

              <a
                href="tel:+918006746390"
                className="rounded-2xl border border-white/20 px-8 py-4 font-semibold"
              >
                <PhoneCall size={18} className="inline-block" />
              </a>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center">
                <MapPin className="mb-3 text-[#ffe494]" />
                <p className="text-neutral-300">
                  Ikigai Farm, Bandh Road,
                  <br />
                  Sector 134, Noida
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Phone className="mb-3 text-[#ffe494]" />
                <p className="text-neutral-300">
                  +91 8006746390
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Mail className="mb-3 text-[#ffe494]" />
                <p className="text-neutral-300">
                  contact@ikigaifarm.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}