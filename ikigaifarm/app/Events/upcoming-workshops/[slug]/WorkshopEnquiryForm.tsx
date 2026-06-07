'use client'

import { medievalSharp } from '@/app/fonts'
import { useState } from 'react'
import {
  Loader2,
  CheckCircle2,
  Send,
} from 'lucide-react'
const PRICE_PER_PARTICIPANT = 999

export default function WorkshopEnquiryForm({
  workshop,
}: {
  workshop: string
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Workshop: workshop,
    phone: '',
    participants: 1,
    query: '',
  })
const [isSubmitting, setIsSubmitting] =
  useState(false)

const [isSubmitted, setIsSubmitted] =
  useState(false)
  const totalPrice =
    formData.participants * PRICE_PER_PARTICIPANT

  const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault()

  if (isSubmitting) return

  setIsSubmitting(true)

  const GOOGLE_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbzN6-80Fb3Q-1u1POeUvcHN58d2J4cfK4AIy-WG-WDprkff6KEHLotKUccQrdGEsN7j/exec'

  try {
    await fetch(
      GOOGLE_SCRIPT_URL,
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({
          workshop,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          participants:
            formData.participants,
          pricePerParticipant: 999,
          totalPrice,
          query: formData.query,
        }),
      }
    )

    setIsSubmitted(true)

    setFormData({
      name: '',
      email: '',
      Workshop: workshop,
      phone: '',
      participants: 1,
      query: '',
    })

    setTimeout(() => {
      setIsSubmitted(false)
    }, 4000)
  } catch (error) {
    console.error(error)
    alert('Something went wrong')
  } finally {
    setIsSubmitting(false)
  }
}

  return (
    <form 
      onSubmit={handleSubmit}
      className="space-y-6 scroll-smooth rounded-[2rem] border border-[#d6e3af] bg-white p-8 shadow-xl"
    >
      <h2 className={`text-3xl text-center font-semibold text-[#122a02] ${medievalSharp.className}`}>
        Enquiry
      </h2>

      <input
        type="text"
        required
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
        className="w-full rounded-xl border p-4"
      />

      <input
        type="email"
        required
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value,
          })
        }
        className="w-full rounded-xl border p-4"
      />

      <input
        type="tel"
        required
        placeholder="Contact Number"
        value={formData.phone}
        onChange={(e) =>
          setFormData({
            ...formData,
            phone: e.target.value,
          })
        }
        className="w-full rounded-xl border p-4"
      />

      <div>
        <label className="mb-3 block font-medium">
          Number of Participants
        </label>
<div>
 

  <div className="flex items-center justify-center gap-3 sm:gap-4">
    <button
      type="button"
      onClick={() =>
        setFormData((prev) => ({
          ...prev,
          participants: Math.max(
            1,
            prev.participants - 1
          ),
        }))
      }
      className="
        flex
        h-12
        w-12
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-[#122a02]
        text-xl
        font-bold
        text-white
        transition
        hover:bg-[#1f3c07]
      "
    >
      -
    </button>

    <input
      type="number"
      min={1}
      value={formData.participants}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          participants: Math.max(
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
          participants:
            prev.participants + 1,
        }))
      }
      className="
        flex
        h-12
        w-12
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-[#122a02]
        text-xl
        font-bold
        text-white
        transition
        hover:bg-[#1f3c07]
      "
    >
      +
    </button>
  </div>
</div>
      </div>

      <div className="rounded-2xl bg-[#f8f8f8] p-6">
        <div className="flex justify-between">
          <span>Workshop</span>
          <span className='font-bold text-right' >{workshop}</span>
        </div>

        <div className="mt-2 flex justify-between">
          <span>Price Per Participant</span>
          <span>₹999</span>
        </div>

        <div className="mt-2 flex justify-between">
          <span>Participants</span>
          <span>{formData.participants}</span>
        </div>

        <div className="mt-4 border-t pt-4 text-lg font-bold">
          <div className="flex justify-between">
            <span>Total (Excl. GST)</span>
            <span>
              ₹{totalPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <textarea
        rows={5}
        placeholder="Your Query"
        value={formData.query}
        onChange={(e) =>
          setFormData({
            ...formData,
            query: e.target.value,
          })
        }
        className="w-full rounded-xl border p-4"
      />

      <button
  type="submit"
  disabled={
    isSubmitting || isSubmitted
  }
  className={`
    w-full
    rounded-full
    py-4
    font-semibold
    text-white
    transition-all
    duration-300
    flex
    items-center
    justify-center
    gap-3

    ${
      isSubmitted
        ? 'bg-green-600'
        : 'bg-[#122a02] hover:bg-[#1f3c07]'
    }

    ${
      isSubmitting ||
      isSubmitted
        ? 'cursor-not-allowed opacity-90'
        : ''
    }
  `}
>
  {isSubmitting ? (
    <>
      <Loader2
        size={20}
        className="animate-spin"
      />
      Sending Enquiry...
    </>
  ) : isSubmitted ? (
    <>
      <CheckCircle2 size={20} />
      Successfully Sent
    </>
  ) : (
    <>
      <Send size={18} />
      Send Enquiry
    </>
  )}
</button>
    </form>
  )
}