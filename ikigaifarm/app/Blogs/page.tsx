import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'

import {
  MedievalSharp,
  Noto_Serif_JP,
} from 'next/font/google'

import { blogs } from '../lib/blogData'

const medievalSharp = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
})

const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
})

const BlogPage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f6ed] text-[#122a02]">

      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden px-6 py-24 text-center">

        {/* BACKGROUND GLOW */}
        <div className="absolute -left-20 top-0 h-[320px] w-[320px] rounded-full bg-[#dce8b4]/40 blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-[320px] w-[320px] rounded-full bg-[#b8d68c]/30 blur-3xl" />

        <div className="relative z-10 max-w-5xl">

          <p
            className={`mb-4 text-sm uppercase tracking-[0.35em] text-[#6c844d] sm:text-base ${notoSerif.className}`}
          >
            Stories • Experiences • Nature
          </p>

          <h1
            className={`${medievalSharp.className} text-5xl leading-tight text-[#122a02] sm:text-6xl lg:text-8xl`}
          >
            Ikigai Journal
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#4f633d] sm:text-lg sm:leading-8">
            Explore stories, guides, experiences, and inspiration from
            the world of Ikigai Farm.
          </p>

        </div>
      </section>

      {/* BLOG GRID */}
      <section className="mx-auto w-[92vw] max-w-7xl pb-24">

        <div className="mb-14 text-center">

          <p
            className={`text-sm uppercase tracking-[0.35em] text-[#6c844d] ${notoSerif.className}`}
          >
            Latest Articles
          </p>

          <h2
            className={`${medievalSharp.className} mt-4 text-4xl text-[#122a02] sm:text-5xl lg:text-6xl`}
          >
            Explore The Journal
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {blogs.map((blog, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-[2rem] border border-[#d6e3af] bg-white shadow-[0_16px_40px_rgba(18,42,2,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(18,42,2,0.14)]"
            >

              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden">

                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 rounded-full bg-black/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#fff4b8] backdrop-blur-xl">
                  {blog.category}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-8">

                <h3
                  className={`${medievalSharp.className} text-3xl leading-tight text-[#122a02]`}
                >
                  {blog.title}
                </h3>

                <p className="mt-5 leading-8 text-[#4f633d]">
                  {blog.description}
                </p>

                <div className="mt-8">

                  <Link href={`/Blogs/${blog.slug}`}>
                    <button className="rounded-full border border-[#122a02] px-6 py-3 text-sm font-medium text-[#122a02] transition-all duration-300 hover:bg-[#122a02] hover:text-[#fff4b8]">
                      Read More
                    </button>
                  </Link>

                </div>

              </div>
            </article>
          ))}

        </div>
      </section>

      <Footer />

    </main>
  )
}

export default BlogPage