import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
  MedievalSharp,
  Noto_Serif_JP,
} from 'next/font/google'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import {
  getBlogBySlug,
  getAllBlogSlugs,
} from '@/app/lib/blogData'

import { notFound } from 'next/navigation'

import {
  CalendarDays,
  User2,
  ArrowLeft,
} from 'lucide-react'

const medievalSharp =
  MedievalSharp({
    subsets: ['latin'],
    weight: '400',
  })

const notoSerif =
  Noto_Serif_JP({
    subsets: ['latin'],
  })

export async function generateStaticParams() {
  const slugs =
    getAllBlogSlugs()

  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string
  }>
}) {
  const { slug } =
    await params

  const blog =
    getBlogBySlug(slug)

  if (!blog) {
    return {}
  }

  return {
    title: blog.title,
    description:
      blog.description,
  }
}

const BlogDetailPage =
  async ({
    params,
  }: {
    params: Promise<{
      slug: string
    }>
  }) => {
    const { slug } =
      await params

    const blog =
      getBlogBySlug(slug)

    if (!blog) {
      notFound()
    }

    const sections =
      blog.content
        .trim()
        .split('\n\n')

    return (
      <main className="min-h-screen overflow-hidden bg-[#f8f6ed] text-[#122a02]">
        <Navbar />

        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          {/* IMAGE */}
          <div className="relative h-[75vh] min-h-[500px] w-full">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              className="object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-[#4e4e4e]" />

            {/* GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,244,184,0.25),transparent_55%)]" />
          </div>

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-end justify-center pb-14 sm:pb-20">
            <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center text-white">
              {/* CATEGORY */}
              
              {/* TITLE */}
              <h1
                className={`
                  mt-6
                  max-w-5xl
                  text-4xl
                  leading-[0.95]
                  text-white
                  sm:text-5xl
                  md:text-6xl
                  lg:text-8xl
                  ${medievalSharp.className}
                `}
              >
                {blog.title}
              </h1>

              {/* DESCRIPTION */}
              <p
                className={`
                  mt-6
                  max-w-3xl
                  text-sm
                  leading-7
                  text-white/80
                  sm:text-base
                  md:text-lg
                  ${notoSerif.className}
                `}
              >
                {blog.description}
              </p>

              {/* META */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70 sm:gap-8">
                

               
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="relative">
          {/* PAPER EFFECT */}
          <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:70px_70px]" />

          <div className="relative mx-auto w-[92vw] max-w-4xl py-16 sm:py-24">
            {/* INTRO CARD */}
            <div className="mb-14 overflow-hidden rounded-[2rem] border border-[#d6e3af] bg-white/80 p-6 shadow-[0_20px_80px_rgba(18,42,2,0.08)] backdrop-blur-xl sm:p-10">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[#122a02]" />

                <div className="h-px flex-1 bg-[#d6e3af]" />
              </div>

              <p
                className={`
                  mt-6
                  text-lg
                  leading-9
                  text-[#385328]
                  sm:text-xl
                  ${notoSerif.className}
                `}
              >
                {blog.description}
              </p>
            </div>

            {/* ARTICLE */}
            <article className="space-y-8">
              {sections.map(
                (
                  paragraph,
                  index,
                ) => {
                  // HEADINGS
                  if (
                    paragraph.startsWith(
                      '##'
                    )
                  ) {
                    return (
                      <div
                        key={index}
                        className="pt-10"
                      >
                        <div className="mb-5 flex items-center gap-4">
                          <div className="h-[2px] w-16 bg-[#d6e3af]" />

                          <div className="h-2 w-2 rounded-full bg-[#122a02]" />
                        </div>

                        <h2
                          className={`
                            text-3xl
                            leading-tight
                            text-[#122a02]
                            sm:text-4xl
                            lg:text-5xl
                            ${medievalSharp.className}
                          `}
                        >
                          {paragraph.replace(
                            '## ',
                            '',
                          )}
                        </h2>
                      </div>
                    )
                  }

                  // BULLET LISTS
                  if (
                    paragraph.includes(
                      '- ',
                    )
                  ) {
                    const lines =
                      paragraph
                        .split(
                          '\n',
                        )
                        .filter(
                          Boolean,
                        )

                    return (
                      <div
                        key={index}
                        className="rounded-[2rem] border border-[#d6e3af]/70 bg-white/70 p-6 shadow-[0_12px_40px_rgba(18,42,2,0.05)] backdrop-blur-xl sm:p-8"
                      >
                        <ul className="space-y-4">
                          {lines.map(
                            (
                              line,
                              i,
                            ) => {
                              if (
                                line.startsWith(
                                  '- ',
                                )
                              ) {
                                return (
                                  <li
                                    key={
                                      i
                                    }
                                    className="flex items-start gap-4"
                                  >
                                    <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#122a02]" />

                                    <span
                                      className={`
                                        text-base
                                        leading-8
                                        text-[#385328]
                                        sm:text-lg
                                        ${notoSerif.className}
                                      `}
                                    >
                                      {line.replace(
                                        '- ',
                                        '',
                                      )}
                                    </span>
                                  </li>
                                )
                              }

                              return (
                                <p
                                  key={
                                    i
                                  }
                                  className={`
                                    mb-5
                                    text-base
                                    leading-8
                                    text-[#385328]
                                    sm:text-lg
                                    ${notoSerif.className}
                                  `}
                                >
                                  {
                                    line
                                  }
                                </p>
                              )
                            },
                          )}
                        </ul>
                      </div>
                    )
                  }

                  // NORMAL PARAGRAPHS
                  return (
                    <div
                      key={index}
                      className="relative"
                    >
                      <p
                        className={`
                          text-base
                          leading-9
                          text-[#385328]
                          sm:text-lg
                          lg:text-[1.15rem]
                          ${notoSerif.className}
                        `}
                      >
                        {paragraph}
                      </p>
                    </div>
                  )
                },
              )}
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24">
          <div className="mx-auto w-[92vw] max-w-5xl">
            <div
              className="
                relative
                overflow-hidden
                rounded-[2.5rem]
                border
                border-[#d6e3af]
                bg-[#122a02]
                px-6
                py-16
                text-center
                shadow-[0_30px_120px_rgba(18,42,2,0.2)]
                sm:px-10
              "
            >
              {/* GLOW */}
              <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#d6e3af]/10 blur-3xl" />

              <div className="relative z-10">
                <h3
                  className={`
                    text-3xl
                    text-[#fff4b8]
                    sm:text-5xl
                    ${medievalSharp.className}
                  `}
                >
                  Experience Ikigai
                  Farm
                </h3>

                <p
                  className={`
                    mx-auto
                    mt-5
                    max-w-2xl
                    text-sm
                    leading-7
                    text-white/75
                    sm:text-base
                    ${notoSerif.className}
                  `}
                >
                  Adventure,
                  nature, food,
                  celebrations,
                  wellness, and
                  unforgettable
                  experiences —
                  all in one place.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Link href="/Contact">
                    <button className="rounded-full bg-[#fff4b8] px-8 py-4 text-sm font-medium text-[#122a02] transition-all duration-300 hover:scale-105">
                      Book Your Visit
                    </button>
                  </Link>

                  <Link href="/Blogs">
                    <button className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20">
                      <ArrowLeft className="h-4 w-4" />
                      Back To Blogs
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    )
  }

export default BlogDetailPage