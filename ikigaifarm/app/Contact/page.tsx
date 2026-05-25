'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import {
  Noto_Serif_JP,
  MedievalSharp,
} from 'next/font/google'

import {
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
})

const medievalSharp = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
})

const GOOGLE_SCRIPT_URL =
 'https://script.google.com/macros/s/AKfycbzLCAR3xiCzovNz8mcnmJV21AKav1mzMsz1CUnAps1jHFK6lFsAA_hlc2KF0S8zJ1vz/exec'

const Page = () => {
  const [formData, setFormData] =
    useState({
      name: '',
      email: '',
      phone: '',
      message: '',
    })

  const [loading, setLoading] =
    useState(false)

  const [successMessage, setSuccessMessage] =
    useState('')

  const [errors, setErrors] =
    useState({
      name: '',
      email: '',
      phone: '',
      message: '',
    })

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      message: '',
    }

    let isValid = true

    // NAME
    const nameRegex =
      /^[A-Za-z\s]{2,50}$/

    if (
      !nameRegex.test(
        formData.name.trim(),
      )
    ) {
      newErrors.name =
        'Please enter a valid name'
      isValid = false
    }

    // EMAIL
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (
      !emailRegex.test(
        formData.email,
      )
    ) {
      newErrors.email =
        'Please enter a valid email'
      isValid = false
    }

    // PHONE
    const phoneRegex =
      /^[6-9]\d{9}$/

    if (
      !phoneRegex.test(
        formData.phone,
      )
    ) {
      newErrors.phone =
        'Please enter a valid 10-digit Indian mobile number'
      isValid = false
    }

    // MESSAGE
    if (
      formData.message
        .trim()
        .length < 10
    ) {
      newErrors.message =
        'Message should be at least 10 characters'
      isValid = false
    }

    setErrors(newErrors)

    return isValid
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    })
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault()

    setSuccessMessage('')

    if (!validateForm()) return

    try {
      setLoading(true)

     await fetch(GOOGLE_SCRIPT_URL, {
  method: 'POST',
  mode: 'no-cors',
   headers: {
    'Content-Type': 'text/plain', 
  },
  body: JSON.stringify({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
  }),
})
      setSuccessMessage(
        'Your enquiry has been sent successfully.',
      )

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })

      setErrors({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch (error) {
      console.error(error)

      alert(
        'Something went wrong. Please try again.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="mx-auto mt-4 h-px w-[92%] bg-linear-to-r from-transparent via-[#122a02]/40 to-transparent" />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            className={`text-5xl text-black sm:text-6xl lg:text-7xl ${medievalSharp.className}`}
          >
            Contact Us
          </h1>

          <p
            className={`mt-4 text-2xl text-black md:text-5xl ${notoSerifJP.className}`}
          >
            Plan Your Visit or Event
          </p>

          <p
            className={`mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#4f4a3d] sm:text-base md:text-lg ${notoSerifJP.className}`}
          >
            Whether you&apos;re planning a
            celebration, organizing a
            group experience, or simply
            want to know more about
            Ikigai Farm, we&apos;d love
            to hear from you.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* FORM */}
          <div className="rounded-4xl border border-[#122a02]/10 bg-white p-6 shadow-[0_24px_80px_rgba(18,42,2,0.10)] sm:p-8">
            <h2
              className={`text-3xl text-black ${medievalSharp.className}`}
            >
              Send an Enquiry
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >
              {/* NAME */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#122a02]">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={
                    handleChange
                  }
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-[#122a02]/15 bg-[#fdfdf8] px-5 py-4 text-sm text-[#122a02] shadow-sm transition duration-300 placeholder:text-[#8b856f] focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10"
                />

                {errors.name && (
                  <p className="text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#122a02]">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={
                    handleChange
                  }
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-[#122a02]/15 bg-[#fdfdf8] px-5 py-4 text-sm text-[#122a02] shadow-sm transition duration-300 placeholder:text-[#8b856f] focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10"
                />

                {errors.email && (
                  <p className="text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* PHONE */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#122a02]">
                  Contact Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={
                    handleChange
                  }
                  placeholder="Enter your contact number"
                  className="w-full rounded-2xl border border-[#122a02]/15 bg-[#fdfdf8] px-5 py-4 text-sm text-[#122a02] shadow-sm transition duration-300 placeholder:text-[#8b856f] focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10"
                />

                {errors.phone && (
                  <p className="text-sm text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#122a02]">
                  Your Query
                </label>

                <textarea
                  name="message"
                  value={
                    formData.message
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Tell us about your visit or event..."
                  className="h-40 w-full resize-none rounded-3xl border border-[#122a02]/15 bg-[#fdfdf8] px-5 py-4 text-sm text-[#122a02] shadow-sm transition duration-300 placeholder:text-[#8b856f] focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10"
                />

                {errors.message && (
                  <p className="text-sm text-red-500">
                    {
                      errors.message
                    }
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#122a02] px-6 py-4 text-sm font-medium text-amber-100 shadow-lg shadow-[#122a02]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#1f3c07] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading
                  ? 'Sending...'
                  : 'Send Message'}
              </button>

              {successMessage && (
                <p className="text-center text-sm text-green-600">
                  {
                    successMessage
                  }
                </p>
              )}
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col gap-6">
            <div className="rounded-4xl border border-[#122a02]/10 bg-[#122a02] p-6 text-white shadow-[0_24px_80px_rgba(18,42,2,0.14)] sm:p-8">
              <h2
                className={`text-3xl text-[#fff4b8] ${medievalSharp.className}`}
              >
                Visit Ikigai Farm
              </h2>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-[#fff4b8]" />

                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#fff4b8]/70">
                      Address
                    </p>

                    <p className="mt-1 text-sm leading-7 text-white/85 sm:text-base">
                      Ikigai Farm,
                      Bandh Rd, Nagla
                      Nagli, Sector
                      134, Noida,
                      Uttar Pradesh
                      201304, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 text-[#fff4b8]" />

                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#fff4b8]/70">
                      Phone
                    </p>

                    <p className="mt-1 text-sm text-white/85 sm:text-base">
                      +91 8006746390
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 text-[#fff4b8]" />

                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#fff4b8]/70">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-white/85 sm:text-base">
                      bookings@ikigaifarm.org
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-4xl border border-[#122a02]/10 shadow-[0_24px_80px_rgba(18,42,2,0.10)]">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.557061229342!2d77.36919127511187!3d28.492883175741355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce791c95d1485%3A0xb367fe11eaf90f92!2sRajgarh%20Farms%2C%20Noida!5e0!3m2!1sen!2sin!4v1779670547874!5m2!1sen!2sin" width="600" height="450"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <a
              
                href="https://www.google.com/maps/place/Rajgarh+Farms,+Noida/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 text-center text-sm font-medium text-[#122a02] underline"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Page
