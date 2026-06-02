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
import PackagesCard from '../components/PackagesCard'
import GlimpseCard from '../components/GlimpseCard'

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
  const PackagesCardData = [
    {
      title: 'Kids',
      price: '850/-',
      specs: '5-11yrs',
      description: [
        "Guided nature walks",
        "Kids Snacks",
        "Educational storytelling",
        "Creative art activities"
      ]
    },
    {
      title: 'Adults',
      price: '1250/-',
      specs: '12yrs and above',
      description: [
        "Adventure activities",
        "Team-building exercises",
        "Leadership workshops",
        "Outdoor survival skills"
      ]
    },
    {
      title: 'Groups',
      price: '1050/person',
      specs: 'minimum 30+ people ',
      description: [
        "Customized group activities",
        "Team-building exercises",
        "Leadership workshops",
        "Outdoor survival skills"
      ]
    },
    {
      title: 'Birthday',
      price: '1500/person',
      specs: 'minimum 10+ people',
      description: [
        "Fun farm games",
        "Full Arena access",
        "Farm-themed crafts",
        "Nature treasure hunts"
      ]
    }
  ]

  const glimpseCardData = [
    {
      title: 'Adventure Day Out',
      schedule: [
        {
          time: '10:00 AM',
          activity: 'Welcome & Orientation',
          icon: Balloon,
        },
        {
          time: '11:00 AM',
          activity: 'Guided Nature Walk',
          icon: TreePalmIcon,
        },
        {
          time: '12:30 PM',
          activity: 'Farm-to-Table Lunch',
          icon: CheckCircle,
        },
        {
          time: '2:00 PM',
          activity: 'Creative Workshop',
          icon: Balloon,
        },
        {
          time: '3:30 PM',
          activity: 'Team Building Games',
          icon: TreePalmIcon,
        },
      ],
    },
    {
      title: 'Sunset Trails',
      schedule: [
        {
          time: '3:00 PM',
          activity: 'Arrival & Welcome',
          icon: Balloon,
        },
        {
          time: '4:00 PM',
          activity: 'Nature Trail Walk',
          icon: TreePalmIcon,
        },
        {
          time: '5:30 PM',
          activity: 'Golden Hour Activities',
          icon: CheckCircle,
        },
        {
          time: '6:30 PM',
          activity: 'Sunset Circle & Wrap Up',
          icon: Balloon,
        },
      ],
    },
  ]



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
    <div >
      <Navbar />
      {/* HERO */}

{/* Pricing Cards */}
<div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
  {PackagesCardData.map((pkg, index) => (
    <PackagesCard
      key={index}
      title={pkg.title}
      price={pkg.price}
      specs={pkg.specs}
      description={pkg.description}
    />
  ))}
</div>

{/* Celebration Preview Section */}
<section className="mx-auto mt-28 w-full max-w-7xl">
  {/* Hero Banner */}
  <div className="relative h-[300px] overflow-hidden rounded-[2rem] lg:h-[420px]">
    <Image
      src="/Archery1.jpeg"
      alt="Packages Hero"
      fill
      className="object-cover"
    />

    <div className="absolute inset-0 bg-black/40" />

    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
     

      <h2 className="max-w-3xl text-4xl font-bold text-white md:text-6xl">
        A Glimpse Into Your Upcoming Celebration
      </h2>

      <p className="mt-4 max-w-2xl text-lg text-white/90">
        Discover how your adventure unfolds from arrival to unforgettable
        memories.
      </p>
    </div>
  </div>

  {/* Schedule Cards */}
  <div className="mt-16">
    <div className="mb-12 text-center">
      <h3 className="text-3xl font-bold text-[#122a02] md:text-4xl">
        Event Timelines
      </h3>

      <p className="mt-3 text-[#6b5f3a]">
        Carefully planned experiences designed for maximum fun and engagement.
      </p>
    </div>

    <div className="grid p-6 gap-8 lg:grid-cols-2">
      {glimpseCardData.map((card, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-[2rem] border border-[#d9d2ca] bg-white shadow-xl"
        >
          <GlimpseCard
            title={card.title}
            schedule={card.schedule}
          />
        </div>
      ))}
    </div>
  </div>
</section>


      
      <Footer />
    </div>
  )
}

export default Page
