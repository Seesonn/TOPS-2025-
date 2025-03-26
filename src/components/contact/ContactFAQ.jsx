"use client"

import { useState } from "react"
import { Card } from "../../ui/Card"

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How can I register for the Tourism Project Showcase?",
      answer:
        "You can register for the event through our online registration form on the Registration page. The registration fee is NPR 2,000 per team, which includes event materials, refreshments, and participation certificates.",
    },
    {
      question: "What is the deadline for registration?",
      answer:
        "The deadline for registration is March 31, 2025. However, we recommend registering early as spots are limited and allocated on a first-come, first-served basis.",
    },
    {
      question: "Can international participants join the event?",
      answer:
        "Yes, international participants are welcome to join the Tourism Project Showcase. We encourage diverse participation and perspectives from around the world.",
    },
    {
      question: "How can I become a sponsor for the event?",
      answer:
        "To become a sponsor, please visit our Sponsorship page for detailed information about sponsorship packages and benefits. You can also contact our sponsorship team directly at sponsors@topskoshi2025.com.",
    },
    {
      question: "Will accommodation be provided for participants?",
      answer:
        "Accommodation is not included in the registration fee. However, we have negotiated special rates with several hotels near the venue. Details will be provided to registered participants.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <Card key={index} className="mb-4 overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-gray-900">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-96 pb-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-700">
          Don't see your question here? Contact us at{" "}
          <a href="mailto:info@topskoshi2025.com" className="text-blue-600 hover:underline">
            info@topskoshi2025.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default ContactFAQ

