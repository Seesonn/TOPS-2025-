

import { useState } from "react"
import { Card } from "../../ui/Card"

const SponsorshipFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is the deadline for sponsorship applications?",
      answer:
        "The deadline for sponsorship applications is February 28, 2025. However, we recommend applying early as sponsorship packages are limited and allocated on a first-come, first-served basis.",
    },
    {
      question: "Can we customize our sponsorship package?",
      answer:
        "Yes, we offer customization options for sponsors. Please contact our sponsorship team at sponsors@topskoshi2025.com to discuss your specific requirements and objectives.",
    },
    {
      question: "How many attendees are expected at the event?",
      answer:
        "We expect approximately 500-600 attendees, including tourism entrepreneurs, students, industry professionals, investors, and government officials from across Nepal and neighboring countries.",
    },
    {
      question: "What promotional materials should we provide?",
      answer:
        "For logo placement, please provide high-resolution logo files in both vector (AI, EPS) and raster (PNG with transparency) formats. For printed materials, specifications will be provided upon confirmation of sponsorship.",
    },
    {
      question: "When will we receive the final attendee list?",
      answer:
        "Sponsors eligible for the attendee list will receive it within one week after the event. The list will include contact information for attendees who have consented to share their details.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="my-20 animate-slide-up">
      <h2 className="section-title text-center mb-4"> 
                <span className="text-[#223F80]">Frequently</span> <span className="text-[#F58432]">Asked Questions</span>


      </h2>
      <p className="section-subtitle text-center mb-12">Common questions about sponsoring ToPS Koshi 2025</p>

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
          Have more questions? Contact our sponsorship team at{" "}
          <a href="mailto:sponsors@topskoshi2025.com" className="text-blue-600 hover:underline">
            sponsors@topskoshi2025.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default SponsorshipFAQ

