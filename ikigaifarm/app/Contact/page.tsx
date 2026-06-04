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
  'https://script.google.com/macros/s/AKfycbymTZp83wtKcfNLlsHTOtObdmbXWxMAgwAcRIswiPzIiJwjImOFh6zst7nuw34ftY5v/exec'

const Page = () => {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  eventType: '',
  kids: 0,
  adults: 0,
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
    HTMLInputElement |
    HTMLTextAreaElement |
    HTMLSelectElement
  >
) => {
  const { name, value } = e.target

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }))
}

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault()

    setSuccessMessage('')

    if (!validateForm()) return

    try {
      setLoading(true)

      await fetch(
        GOOGLE_SCRIPT_URL,
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type':
              'text/plain',
          },
          
             body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      eventType: formData.eventType,
      kids: formData.kids,
      adults: formData.adults,
      message: formData.message,
          }),
        },
      )

      setSuccessMessage(
        'Your enquiry has been sent successfully.',
      )

      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        kids: 0,
        adults: 0,
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
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      <div className="mx-auto mt-4 h-px w-[92%] bg-linear-to-r from-transparent via-[#122a02]/40 to-transparent" />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {/* HERO */}
        <div className="text-center">
          <h1
            className={`text-4xl leading-tight text-black sm:text-5xl lg:text-7xl ${medievalSharp.className}`}
          >
            Contact Us
          </h1>

          <p
            className={`mt-4 text-xl leading-snug text-black sm:text-3xl md:text-4xl lg:text-5xl ${notoSerifJP.className}`}
          >
            Plan Your Visit or Event
          </p>

          <p
            className={`mx-auto mt-5 max-w-3xl px-1 text-sm leading-6 text-[#4f4a3d] sm:text-base sm:leading-7 md:text-lg ${notoSerifJP.className}`}
          >
            Whether you&apos;re
            planning a celebration,
            organizing a group
            experience, or simply
            want to know more about
            Ikigai Farm,
            we&apos;d love to hear
            from you.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-10">
          {/* FORM */}
          <div className="rounded-[2rem] border border-[#122a02]/10 bg-white p-5 shadow-[0_24px_80px_rgba(18,42,2,0.10)] sm:p-8">
            <h2
              className={`text-2xl text-black sm:text-3xl ${medievalSharp.className}`}
            >
              Send an Enquiry
            </h2>

            <form
              onSubmit={
                handleSubmit
              }
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
                  value={
                    formData.name
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-[#122a02]/15 bg-[#fdfdf8] px-4 py-3 text-sm text-[#122a02] shadow-sm transition duration-300 placeholder:text-[#8b856f] focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10 sm:px-5 sm:py-4"
                />

                {errors.name && (
                  <p className="text-sm text-red-500">
                    {
                      errors.name
                    }
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
                  value={
                    formData.email
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-[#122a02]/15 bg-[#fdfdf8] px-4 py-3 text-sm text-[#122a02] shadow-sm transition duration-300 placeholder:text-[#8b856f] focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10 sm:px-5 sm:py-4"
                />

                {errors.email && (
                  <p className="text-sm text-red-500">
                    {
                      errors.email
                    }
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
                  value={
                    formData.phone
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Enter your contact number"
                  className="w-full rounded-2xl border border-[#122a02]/15 bg-[#fdfdf8] px-4 py-3 text-sm text-[#122a02] shadow-sm transition duration-300 placeholder:text-[#8b856f] focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10 sm:px-5 sm:py-4"
                />

                {errors.phone && (
                  <p className="text-sm text-red-500">
                    {
                      errors.phone
                    }
                  </p>
                )}
              </div>

              {/* PARTICIPANTS */}
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

  {/* KIDS */}
  <div className="space-y-2">
    <label className="text-sm font-medium text-[#122a02]">
      Number of Kids
    </label>

    <div className="flex items-center justify-between rounded-2xl border border-[#122a02]/15 bg-[#fdfdf8] px-4 py-3">
      <button
        type="button"
        onClick={() =>
          setFormData((prev) => ({
            ...prev,
            kids: Math.max(0, prev.kids - 1),
          }))
        }
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#122a02] text-lg text-white transition hover:bg-[#1f3c07]"
      >
        -
      </button>

      <input
      type="number"
      min={0}
      value={formData.kids}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          kids: Math.max(
            1,
            Number(e.target.value) || 1
          ),
        }))
      }
      className="
        h-12
        w-24
        sm:w-32
        rounded-xl
        border
        border-[#d6e3af]
        text-center
        text-lg
        font-bold
        outline-none
        transition
        focus:border-[#122a02]
        focus:ring-2
        focus:ring-[#122a02]/20
      "
    />


      <button
        type="button"
        onClick={() =>
          setFormData((prev) => ({
            ...prev,
            kids: prev.kids + 1,
          }))
        }
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#122a02] text-lg text-white transition hover:bg-[#1f3c07]"
      >
        +
      </button>
    </div>
  </div>

  {/* ADULTS */}
  <div className="space-y-2">
    <label className="text-sm font-medium text-[#122a02]">
      Number of Adults
    </label>

    <div className="flex items-center justify-between rounded-2xl border border-[#122a02]/15 bg-[#fdfdf8] px-4 py-3">
      <button
        type="button"
        onClick={() =>
          setFormData((prev) => ({
            ...prev,
            adults: Math.max(0, prev.adults - 1),
          }))
        }
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#122a02] text-lg text-white transition hover:bg-[#1f3c07]"
      >
        -
      </button>

      <input
      type="number"
      min={1}
      value={formData.adults}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          adults: Math.max(
            1,
            Number(e.target.value) || 1
          ),
        }))
      }
      className="
        h-12
        w-24
        sm:w-32
        rounded-xl
        border
        border-[#d6e3af]
        text-center
        text-lg
        font-bold
        outline-none
        transition
        focus:border-[#122a02]
        focus:ring-2
        focus:ring-[#122a02]/20
      "
    />

      <button
        type="button"
        onClick={() =>
          setFormData((prev) => ({
            ...prev,
            adults: prev.adults + 1,
          }))
        }
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#122a02] text-lg text-white transition hover:bg-[#1f3c07]"
      >
        +
      </button>
    </div>
  </div>
</div>

            {/* TYPE OF VISIT */}
{/* EVENT TYPE */}
<div className="space-y-2">
  <label className="text-sm font-medium text-[#122a02]">
    Event Type
  </label>

  <select
    name="eventType"
    value={formData.eventType}
    onChange={handleChange}
    className="w-full rounded-2xl border border-[#122a02]/15 bg-[#fdfdf8] px-4 py-3 text-sm text-[#122a02] shadow-sm transition duration-300 focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10 sm:px-5 sm:py-4"
  >
    <option value="">
      Select Event Type
    </option>

    <option value="Adventure Day Out (10am-3pm)">
      Adventure Day Out (10am-3pm)
    </option>

    <option value="Sunset Trail (4pm-9pm)">
      Sunset Trail (4pm-9pm)
    </option>

    <option value="Kids Birthday Party">
      Kids Birthday Party
    </option>

    <option value="Corporate Events">
      Corporate Events
    </option>

    <option value="Family Reunions">
      Family Reunions
    </option>

    <option value="Farm Wedding">
      Farm Wedding
    </option>

    <option value="Anniversary Celebration">
      Anniversary Celebration
    </option>

    <option value="Reception">
      Reception
    </option>

    <option value="Other">
      Other
    </option>
  </select>
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
                  className="h-36 w-full resize-none rounded-3xl border border-[#122a02]/15 bg-[#fdfdf8] px-4 py-3 text-sm text-[#122a02] shadow-sm transition duration-300 placeholder:text-[#8b856f] focus:border-[#122a02] focus:outline-none focus:ring-4 focus:ring-[#122a02]/10 sm:h-40 sm:px-5 sm:py-4"
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
                className="w-full rounded-full bg-[#122a02] px-6 py-3 text-sm font-medium text-amber-100 shadow-lg shadow-[#122a02]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#1f3c07] disabled:cursor-not-allowed disabled:opacity-70 sm:py-4"
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
            <div className="rounded-[2rem] border border-[#122a02]/10 bg-[#122a02] p-5 text-white shadow-[0_24px_80px_rgba(18,42,2,0.14)] sm:p-8">
              <h2
                className={`text-2xl text-[#fff4b8] sm:text-3xl ${medievalSharp.className}`}
              >
                Visit Ikigai Farm
              </h2>

              <div className="mt-8 space-y-6">
                {/* ADDRESS */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <MapPin className="mt-1 shrink-0 text-[#fff4b8]" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#fff4b8]/70 sm:text-sm">
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

                {/* PHONE */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <Phone className="mt-1 shrink-0 text-[#fff4b8]" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#fff4b8]/70 sm:text-sm">
                      Phone
                    </p>

                    <p className="mt-1 text-sm text-white/85 sm:text-base">
                      +91 8006746390
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <Mail className="mt-1 shrink-0 text-[#fff4b8]" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#fff4b8]/70 sm:text-sm">
                      Email
                    </p>

                    <p className="mt-1 break-all text-sm text-white/85 sm:text-base">
                      contact@ikigaifarm.org
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-[2rem] border border-[#122a02]/10 shadow-[0_24px_80px_rgba(18,42,2,0.10)]">
              <div className="h-[320px] w-full sm:h-[400px] lg:h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.557061229342!2d77.36919127511187!3d28.492883175741355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce791c95d1485%3A0xb367fe11eaf90f92!2sRajgarh%20Farms%2C%20Noida!5e0!3m2!1sen!2sin!4v1779670547874!5m2!1sen!2sin"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

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