"use client"

import { useState, useEffect } from "react"
import { Card } from "../../ui/Card"

const SponsorshipTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "Sponsoring ToPS Koshi 2024 provided us with exceptional brand visibility and valuable connections with tourism stakeholders. We've already secured three new partnerships as a direct result.",
      author: "Rajesh Sharma",
      position: "Marketing Director",
      company: "Nepal Airlines",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The quality of participants and projects at ToPS was impressive. As a sponsor, we gained valuable insights into emerging tourism trends and connected with innovative startups in the sector.",
      author: "Sunita Thapa",
      position: "CEO",
      company: "Himalayan Expeditions",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Our sponsorship of ToPS provided an excellent platform to showcase our commitment to sustainable tourism development in Nepal. The ROI exceeded our expectations.",
      author: "Michael Johnson",
      position: "Regional Director",
      company: "Global Tourism Partners",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="my-20">
      <h2 className="section-title text-center mb-16">What Previous Sponsors Say</h2>

      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <Card className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = "/placeholder.svg?height=100&width=100"
                      }}
                    />
                  </div>

                  <svg
                    className="w-10 h-10 mx-auto mb-4 text-blue-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>

                  <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.quote}"</p>

                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-blue-600">{testimonial.position}</p>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SponsorshipTestimonials

