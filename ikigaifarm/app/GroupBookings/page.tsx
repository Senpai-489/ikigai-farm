'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

import {
  Noto_Serif_JP,
  MedievalSharp,
} from 'next/font/google'

import Footer from '../components/Footer'
import Image from 'next/image'

import {
  Balloon,
  CheckCircle,
  TreePalmIcon,
} from 'lucide-react'

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
})

const medievalSharp = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
})

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyM53wbCXFIe9s2VxvZ_IJdTjNR9uFm9yiDRFzmHyi4YJ5D9umuDRY0yhYP5PaR1Plb/exec'

const Page = () => {
  const [formData, setFormData] =
    useState({
      groupName: '',
      contactPerson: '',
      email: '',
      phone: '',
      participants: '',
      preferredDate: '',
      interest: '',
      additionalDetails: '',
    })

  const [errors, setErrors] =
    useState({
      groupName: '',
      contactPerson: '',
      email: '',
      phone: '',
      participants: '',
      preferredDate: '',
      interest: '',
      additionalDetails: '',
    })

  const [loading, setLoading] =
    useState(false)

  const [successMessage, setSuccessMessage] =
    useState('')

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement
    >
  ) => {
    const { name, value } =
      e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const newErrors = {
      groupName: '',
      contactPerson: '',
      email: '',
      phone: '',
      participants: '',
      preferredDate: '',
      interest: '',
      additionalDetails: '',
    }

    let isValid = true

    // GROUP NAME
    const groupNameRegex =
      /^[A-Za-z0-9\s&.,'-]{2,100}$/

    if (
      !groupNameRegex.test(
        formData.groupName.trim()
      )
    ) {
      newErrors.groupName =
        'Enter a valid group name'
      isValid = false
    }

    // CONTACT PERSON
    const personRegex =
      /^[A-Za-z\s]{2,50}$/

    if (
      !personRegex.test(
        formData.contactPerson.trim()
      )
    ) {
      newErrors.contactPerson =
        'Enter a valid contact person name'
      isValid = false
    }

    // EMAIL
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (
      !emailRegex.test(
        formData.email
      )
    ) {
      newErrors.email =
        'Enter a valid email'
      isValid = false
    }

    // PHONE
    const phoneRegex =
      /^(?:\+91)?[6-9]\d{9}$/

    if (
      !phoneRegex.test(
        formData.phone
      )
    ) {
      newErrors.phone =
        'Enter valid 10-digit Indian mobile number'
      isValid = false
    }

    // PARTICIPANTS
    if (
      !formData.participants ||
      Number(
        formData.participants
      ) <= 0
    ) {
      newErrors.participants =
        'Participants must be greater than 0'
      isValid = false
    }

    // DATE
    if (
      !formData.preferredDate
    ) {
      newErrors.preferredDate =
        'Select preferred date'
      isValid = false
    }

    // INTEREST
    if (!formData.interest) {
      newErrors.interest =
        'Select an interest'
      isValid = false
    }

    // DETAILS
    if (
      formData.additionalDetails
        .trim()
        .length < 10
    ) {
      newErrors.additionalDetails =
        'Please enter at least 10 characters'
      isValid = false
    }

    setErrors(newErrors)

    return isValid
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setSuccessMessage('')

    if (!validateForm())
      return

    try {
      setLoading(true)

      await fetch(
        GOOGLE_SCRIPT_URL,
        {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify(
            formData
          ),
        }
      )

      setSuccessMessage(
        'Enquiry submitted successfully.'
      )

      setTimeout(() => {
        setSuccessMessage('')
      }, 4000)

      setFormData({
        groupName: '',
        contactPerson: '',
        email: '',
        phone: '',
        participants: '',
        preferredDate: '',
        interest: '',
        additionalDetails:
          '',
      })

      setErrors({
        groupName: '',
        contactPerson: '',
        email: '',
        phone: '',
        participants: '',
        preferredDate: '',
        interest: '',
        additionalDetails:
          '',
      })
    } catch (error) {
      console.error(error)

      alert(
        'Something went wrong.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* HERO */}
      <div className="relative flex flex-col items-center overflow-hidden bg-white">
        <Navbar />

        <Image
          src="/bg img.jpeg"
          alt="activities hero"
          width={1200}
          height={600}
          className="absolute -z-10 h-full min-h-screen w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 -z-10 bg-black/10" />

        {/* Heading */}
        <div className="flex flex-col items-center px-4 pt-24 text-center sm:px-6 lg:px-8">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${medievalSharp.className}`}
          >
            Group Bookings
          </h1>

          <p
            className={`mt-6 max-w-5xl text-center leading-tight text-[#333] sm:text-sm md:text-xl lg:w-[60vw] lg:text-2xl ${notoSerifJP.className}`}
          >
            From school groups
            to corporate
            retreats, we tailor
            every journey to
            your group&apos;s unique
            purpose. Tell us
            about your vision.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="relative mt-16 flex w-full flex-col items-center gap-8 px-4 pb-16 sm:px-6 lg:mt-24 lg:flex-row lg:items-stretch lg:justify-center lg:gap-12 lg:px-8">
          {/* Kids */}
          <div className="flex w-full max-w-md flex-col gap-4 rounded-2xl bg-amber-100 p-6 sm:p-8 lg:p-12">
            <Balloon size={48} />

            <h2
              className={`text-3xl sm:text-4xl ${notoSerifJP.className}`}
            >
              For Kids
            </h2>

            <p className="text-sm sm:text-base">
              Curated experiences for curious young explorers
            </p>

            <p className="text-3xl font-bold sm:text-4xl">
              1000/- INR
            </p>

            <p className="flex items-center gap-2 text-sm sm:text-base">
              <CheckCircle size={18} />
              20+ Activities Included
            </p>

            <p className="flex items-center gap-2 text-sm sm:text-base">
              <CheckCircle size={18} />
              Interactive Workshops
            </p>

            <p className="flex items-center gap-2 text-sm sm:text-base">
              <CheckCircle size={18} />
              Snacks & Refreshments
            </p>

            <p className="flex items-center gap-2 text-sm sm:text-base">
              <CheckCircle size={18} />
              Food Included
            </p>

            <Link
              href="/GroupBookings/#BookingForm"
              className="mx-auto block"
            >
              <button className="mt-4 rounded-full bg-[#122a02] px-6 py-3 text-sm font-medium text-amber-100 transition-colors duration-300 hover:bg-[#1f3c07]">
                Book My Spot
              </button>
            </Link>
          </div>

          {/* Adults */}
          <div className="flex w-full max-w-md flex-col gap-4 rounded-2xl bg-[#122a02]/80 p-6 text-amber-100 sm:p-8 lg:p-12">
            <TreePalmIcon
              color="#fff4b8"
              size={48}
            />

            <h2
              className={`text-3xl sm:text-4xl ${notoSerifJP.className}`}
            >
              For Adults
            </h2>

            <p className="text-sm sm:text-base">
              Immersive farm experiences for nature-loving adults
            </p>

            <p className="text-3xl font-bold sm:text-4xl">
              1500/- INR
            </p>

            <p className="flex items-center gap-2 text-sm sm:text-base">
              <CheckCircle size={18} />
              All 40+ Activities Included
            </p>

            <p className="flex items-center gap-2 text-sm sm:text-base">
              <CheckCircle size={18} />
              High Tea & Snacks Included
            </p>

            <p className="flex items-center gap-2 text-sm sm:text-base">
              <CheckCircle size={18} />
              Farm to Table Lunch
            </p>

            <p className="flex items-center gap-2 text-sm sm:text-base">
              <CheckCircle size={18} />
              Interactive Farm Workshops
            </p>

            <Link
              href="/GroupBookings/#BookingForm"
              className="mx-auto block"
            >
              <button className="mt-4 rounded-full border border-amber-100 px-6 py-3 text-sm font-medium text-amber-100 transition-colors duration-300 hover:bg-[#1f3c07]">
                Book My Spot
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* FORM */}
      <section className="mx-auto mt-10 w-full max-w-5xl px-4 pb-20 sm:px-6 lg:mt-16">
        <form
          id="BookingForm"
          onSubmit={
            handleSubmit
          }
          className="rounded-[2rem] border border-[#122a02]/10 bg-[#fbf6e9] p-5 shadow-[0_24px_80px_rgba(18,42,2,0.14)] sm:p-8 md:p-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p
              className={`text-xs uppercase tracking-[0.25em] text-[#6b5f3a] sm:text-sm ${notoSerifJP.className}`}
            >
              Booking Enquiry
            </p>

            <label
              className={`mt-3 block text-2xl leading-tight text-[#122a02] sm:text-3xl md:text-4xl ${medievalSharp.className}`}
            >
              Have a vision for
              your group?
              Let&apos;s make it
              a reality
              together.
            </label>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* GROUP NAME */}
            <div>
              <input
                type="text"
                name="groupName"
                value={
                  formData.groupName
                }
                onChange={
                  handleChange
                }
                placeholder="Group Name"
                className="w-full rounded-2xl border border-[#122a02]/15 bg-white px-5 py-4"
              />

              {errors.groupName && (
                <p className="mt-2 text-sm text-red-500">
                  {
                    errors.groupName
                  }
                </p>
              )}
            </div>

            {/* CONTACT PERSON */}
            <div>
              <input
                type="text"
                name="contactPerson"
                value={
                  formData.contactPerson
                }
                onChange={
                  handleChange
                }
                placeholder="Contact Person"
                className="w-full rounded-2xl border border-[#122a02]/15 bg-white px-5 py-4"
              />

              {errors.contactPerson && (
                <p className="mt-2 text-sm text-red-500">
                  {
                    errors.contactPerson
                  }
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                name="email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                placeholder="Email"
                className="w-full rounded-2xl border border-[#122a02]/15 bg-white px-5 py-4"
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {
                    errors.email
                  }
                </p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <input
                type="tel"
                name="phone"
                value={
                  formData.phone
                }
                onChange={
                  handleChange
                }
                placeholder="Phone"
                className="w-full rounded-2xl border border-[#122a02]/15 bg-white px-5 py-4"
              />

              {errors.phone && (
                <p className="mt-2 text-sm text-red-500">
                  {
                    errors.phone
                  }
                </p>
              )}
            </div>

            {/* PARTICIPANTS */}
            <div>
              <input
                type="number"
                min="1"
                name="participants"
                value={
                  formData.participants
                }
                onChange={
                  handleChange
                }
                placeholder="Participants"
                className="w-full rounded-2xl border border-[#122a02]/15 bg-white px-5 py-4"
              />

              {errors.participants && (
                <p className="mt-2 text-sm text-red-500">
                  {
                    errors.participants
                  }
                </p>
              )}
            </div>

            {/* DATE */}
            <div>
              <input
                type="date"
                min={
                  new Date()
                    .toISOString()
                    .split(
                      'T'
                    )[0]
                }
                name="preferredDate"
                value={
                  formData.preferredDate
                }
                onChange={
                  handleChange
                }
                className="w-full rounded-2xl border border-[#122a02]/15 bg-white px-5 py-4"
              />

              {errors.preferredDate && (
                <p className="mt-2 text-sm text-red-500">
                  {
                    errors.preferredDate
                  }
                </p>
              )}
            </div>
          </div>

          {/* INTEREST */}
          <div className="mt-8">
            <p className="mb-4 text-sm font-medium text-[#122a02]">
              Primary Interest
            </p>

            <div className="grid gap-3 md:grid-cols-2">
              {[
                'Team Building',
                'Nature Education',
                'Wellness/Meditation',
                'Culinary Experience',
              ].map(
                (interest) => (
                  <label
                    key={
                      interest
                    }
                    className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#122a02]/10 bg-[#f8f5eb] px-4 py-3"
                  >
                    <input
                      type="radio"
                      name="interest"
                      value={
                        interest
                      }
                      checked={
                        formData.interest ===
                        interest
                      }
                      onChange={
                        handleChange
                      }
                    />

                    {interest}
                  </label>
                )
              )}
            </div>

            {errors.interest && (
              <p className="mt-2 text-sm text-red-500">
                {
                  errors.interest
                }
              </p>
            )}
          </div>

          {/* TEXTAREA */}
          <div className="mt-8">
            <textarea
              name="additionalDetails"
              value={
                formData.additionalDetails
              }
              onChange={
                handleChange
              }
              placeholder="Additional Details"
              className="mt-8 h-36 w-full rounded-3xl border border-[#122a02]/15 bg-white px-5 py-4"
            />

            {errors.additionalDetails && (
              <p className="mt-2 text-sm text-red-500">
                {
                  errors.additionalDetails
                }
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-8 flex w-full items-center justify-center rounded-full bg-[#122a02] px-6 py-4 text-sm font-medium text-amber-100 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading
              ? 'Submitting...'
              : 'Submit Enquiry'}
          </button>

          {successMessage && (
            <p className="mt-4 text-center text-green-600">
              {
                successMessage
              }
            </p>
          )}
        </form>
      </section>

      <Footer />
    </div>
  )
}

export default Page
