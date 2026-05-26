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

const medievalSharp = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
})

const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
})

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()

  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const blog = getBlogBySlug(slug)

  if (!blog) {
    return {}
  }

  return {
    title: blog.title,
    description: blog.description,
  }
}

const BlogDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params

  const blog = getBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f6ed] text-[#122a02]">

      <Navbar />

      {/* HERO */}
      <section className="relative h-[400px] overflow-hidden sm:h-[500px] lg:h-[600px]">

        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        <div className="absolute inset-0 flex items-end justify-center pb-10">

          <div className="max-w-5xl px-6 text-center text-white">

            <p
              className={`text-sm uppercase tracking-[0.2em] text-[#d6e3af] ${notoSerif.className}`}
            >
              {blog.category}
            </p>

            <h1
              className={`${medievalSharp.className} mt-4 text-4xl leading-tight sm:text-5xl lg:text-7xl`}
            >
              {blog.title}
            </h1>

            <p className="mt-5 flex flex-col items-center justify-center gap-2 text-sm text-white/80 sm:flex-row sm:gap-4">

              <span>By {blog.author}</span>

              <span>•</span>

              <span>{blog.date}</span>

            </p>

          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto w-[92vw] max-w-4xl py-20">

        <article className="text-[#4f633d]">

          {blog.content
            .trim()
            .split('\n\n')
            .map((paragraph, index) => {
              if (
                paragraph.startsWith('**') &&
                paragraph.endsWith('**')
              ) {
                return (
                  <h2
                    key={index}
                    className={`${medievalSharp.className} mt-12 text-3xl text-[#122a02] sm:text-4xl`}
                  >
                    {paragraph.replace(
                      /\*\*/g,
                      ''
                    )}
                  </h2>
                )
              }

              return (
                <p
                  key={index}
                  className="mt-6 text-base leading-8 sm:text-lg"
                >
                  {paragraph}
                </p>
              )
            })}

        </article>

      </section>

      {/* CTA */}
      <section className="mx-auto w-[92vw] max-w-4xl pb-24">

        <div className="flex flex-col items-center justify-center gap-8 border-t border-[#d6e3af] pt-12">

          <Link href="/Blogs">
            <button className="rounded-full border border-[#122a02] px-8 py-4 text-sm font-medium text-[#122a02] transition-all duration-300 hover:bg-[#122a02] hover:text-[#fff4b8]">
              ← Back to Blogs
            </button>
          </Link>

        </div>

      </section>

      <Footer />

    </main>
  )
}

export default BlogDetailPage