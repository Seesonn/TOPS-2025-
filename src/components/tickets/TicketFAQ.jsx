"use client"

import { useState } from "react"
import { Card } from "../../ui/Card"

const TicketFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is included in the ticket price?",
      answer:
        "Each ticket tier includes different benefits. Standard tickets provide access to general sessions, exhibition areas, event materials, and refreshments. Gold tickets add networking lunch, panel discussions, workshops, and event merchandise. Premium tickets include all Gold benefits plus VIP seating, exclusive dinner with speakers, mentoring sessions, and more.",
    },
    {
      question: "Can I upgrade my ticket after purchase?",
      answer:
        "Yes, you can upgrade your ticket by paying the difference between your current ticket and the desired tier. Please contact us at tickets@topskoshi2025.com for assistance with upgrades.",
    },
    {
      question: "Are tickets refundable?",
      answer:
        "Tickets are refundable up to 30 days before the event with a 15% processing fee. Within 30 days of the event, tickets are non-refundable but can be transferred to another person.",
    },
    {
      question: "How do I transfer my ticket to someone else?",
      answer:
        "To transfer your ticket, log in to your account, go to 'My Tickets', and select the transfer option. You'll need to provide the recipient's name and email address.",
    },
    {
      question: "Will food be provided during the event?",
      answer:
        "Refreshments are included with all ticket tiers. Gold and Premium tickets include lunch. Premium tickets also include an exclusive dinner with speakers and VIPs.",
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
          Have more questions? Contact us at{" "}
          <a href="mailto:tickets@topskoshi2025.com" className="text-blue-600 hover:underline">
            tickets@topskoshi2025.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default TicketFAQ

