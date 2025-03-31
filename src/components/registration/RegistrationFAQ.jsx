"use client"

import { useState } from "react"
import { Card } from "../../ui/Card"

const RegistrationFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
   
    {
      question: "How many members can be in a team?",
      answer:
        "Each team must have a minimum of 3 and a maximum of 5 members. We encourage teams with diverse skills and backgrounds.",
    },
    {
      question: "Can I register as an individual?",
      answer:
        "No, registration is only open for teams. If you don't have a team, you can post on our official Facebook group to find team members.",
    },
    {
      question: "Is there an age limit for participants?",
      answer:
        "Participants must be at least 18 years old. There is no upper age limit, but the event is primarily designed for students and young professionals.",
    },
    {
      question: "What should we prepare for the event?",
      answer:
        "After registration, you will need to prepare a project proposal and presentation. Detailed guidelines will be sent to registered teams.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="my-20 animate-slide-up">
      <h3 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h3>

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
          <a href="mailto:info@topskoshi2025.com" className="text-blue-600 hover:underline">
            info@topskoshi2025.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default RegistrationFAQ

