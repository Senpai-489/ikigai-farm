'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import MasonryGrid from '../components/MasonryGrid'
import {
  Noto_Serif_JP,
  MedievalSharp,
} from 'next/font/google'

import Footer from '../components/Footer'
import Image from 'next/image'

import {
  Balloon,
  
  BoomBox,
  
  BowArrow,
  
  CameraIcon,
  
  CheckCircle,
  CupSoda,
  HandPlatter,
  Soup,
  SportShoe,
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
  const gridImages = [
    
    
     '/Adventure1.jpg',
    '/Adventure2.jpg',
    '/Adventure3.jpg',
    '/Adventure4.jpg',
    '/Adventure5.jpg',
    '/Adventure6.jpg',
    '/Adventure7.jpg',
    '/Adventure8.jpg',
    '/Adventure9.jpg',
    '/Adventure10.jpg',
    '/Adventure11.jpg',
    '/Adventure12.jpg',
    '/ATV2.jpeg',
    '/zipline2.jpeg',
    '/CamelRide4.jpeg',
     
     ]

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
        "20+ Adventure Activities",
"Camp Games",
"Healthy & Hygienic Meals",
"4 Meals Included",
        
      ]
    },
    {
      title: 'Adults',
      price: '1250/-',
      specs: '',
      description: [
        "40+ Adventure Activities",
        "Camp Games",
        "Healthy & Hygienic Meals",
        "4 Meals Included"
      ]
    },
    {
      title: 'Groups',
      price: '1050/person',
      specs: 'minimum 30+ people ',
      description: [
       " Exclusive Area For Meals",
"40+ Activities & Camp Games",
"Dedicated Coordinator",
"4 Meals Included"
      ]
    },
    {
      title: 'Birthday',
      price: '1600/person',
      specs: 'minimum 30+ people',
      description: [
        "Exclusive Party Area",
        "Camping Style Decor",
        "Birthday E-invite",
        "Exclusive games coordinator",
        "40+ Adventure Activities",
        "4 Meals Included"
      ]
    }
  ]

  const glimpseCardData = [
    {
      title: 'Adventure Day Out',
      timeframe: '10:00 AM - 3:00 PM',
      schedule: [
        {
          time: '10:00 AM',
          activity: 'Charge up with welcome drink &  breakfast',
          icon: HandPlatter,
        },
        {
          time: '10:15 AM',
          activity: 'Gear up for adventure activities',
          icon: TreePalmIcon,
        },
        {
          time: '12:15 PM',
          activity: 'Enjoy refreshing snacks',
          icon: CupSoda,
        },
        {
          time: '12:45 PM',
          activity: 'Enjoy activities and games',
          icon: BowArrow,
        },
        {
          time: '01:45 PM',
          activity: 'Relish delicious delicacies at the Gala Lunch',
          icon: Soup,
        },
        {
          time: '02:00 PM',
          activity: 'Get back to fun challenges',
          icon: SportShoe,
        },
        {
          time: '02:30 PM',
          activity: 'High Tea & Shake a leg at DJ floor',
          icon: BoomBox,
        },
        {
          time: '03:00 PM',
          activity: 'Carry Beautiful Memories Home',
          icon: CameraIcon,
        }
      ],
    },
    {
      title: 'Sunset Trails',
      timeframe: '04:00 PM - 09:00 PM',
      schedule: [
       {
          time: '04:00 PM',
          activity: 'Charge up with welcome drink &  breakfast',
          icon: HandPlatter,
        },
        {
          time: '04:30 PM',
          activity: 'Gear up for adventure activities',
          icon: TreePalmIcon,
        },
        {
          time: '06:00 PM',
          activity: 'Enjoy Delightful Refreshments',
          icon: CupSoda,
        },
        {
          time: '06:30 PM',
          activity: 'Enjoy activities and games',
          icon: BowArrow,
        },
        {
          time: '07:30 PM',
          activity: 'Relish delicious delicacies at the Gala Dinner',
          icon: Soup,
        },
        {
          time: '08:00 PM',
          activity: 'Get back to fun challenges',
          icon: SportShoe,
        },
        {
          time: '08:30 PM',
          activity: 'Refreshments & Shake a leg at DJ floor',
          icon: BoomBox,
        },
        {
          time: '09:00 PM',
          activity: 'Carry Beautiful Memories Home',
          icon: CameraIcon,
        }
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
  <div className="relative h-[300px] overflow-hidden  lg:h-[420px]">
    <Image
      src="/Archery1.jpeg"
      alt="Packages Hero"
      fill
      className="object-cover"
    />

    <div className="absolute inset-0 bg-black/60" />

    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
     

      <h2 className={`${medievalSharp.className} max-w-3xl text-4xl font-bold text-white md:text-6xl`}>
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
        Package Timelines
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
              timeframe={card.timeframe}
            schedule={card.schedule}
          />
        </div>
      ))}
    </div>
  </div>
</section>
        <div className="p-12">
          <p className={`p-8 text-center text-3xl lg:text-7xl font-bold text-[#122a02] mt-20 mb-10 ${medievalSharp.className}`}>
           Photo Gallery
          </p>
          <MasonryGrid images={gridImages} />
        </div>

      
      <Footer />
    </div>
  )
}

export default Page
