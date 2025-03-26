"use client"

import { useState } from "react"
import { Button } from "../../ui/Button"
import { Link } from "react-router-dom"

const PostEventGallery = ({ year }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const galleryImages = {
    2024: [
      { url: "/placeholder.svg?height=400&width=600", alt: "Opening Ceremony" },
      { url: "/placeholder.svg?height=400&width=600", alt: "Project Presentations" },
      { url: "/placeholder.svg?height=400&width=600", alt: "Networking Event" },
      { url: "/placeholder.svg?height=400&width=600", alt: "Award Ceremony" },
    ],
    2023: [
      { url: "/placeholder.svg?height=400&width=600", alt: "Opening Ceremony" },
      { url: "/placeholder.svg?height=400&width=600", alt: "Project Presentations" },
      { url: "/placeholder.svg?height=400&width=600", alt: "Networking Event" },
      { url: "/placeholder.svg?height=400&width=600", alt: "Award Ceremony" },
    ],
    2022: [
      { url: "/placeholder.svg?height=400&width=600", alt: "Opening Ceremony" },
      { url: "/placeholder.svg?height=400&width=600", alt: "Project Presentations" },
      { url: "/placeholder.svg?height=400&width=600", alt: "Networking Event" },
      { url: "/placeholder.svg?height=400&width=600", alt: "Award Ceremony" },
    ],
  }

  return (
    <div className="my-20 animate-slide-up">
      <h3 className="text-2xl font-bold text-center mb-8">Event Gallery</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages[year].map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={image.url || "/placeholder.svg"}
              alt={image.alt}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                hoveredIndex === index ? "scale-110" : "scale-100"
              }`}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-white p-4">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button
          variant="primary"
          as={Link}
          to="/media-gallery"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          }
          iconPosition="right"
        >
          View Full Gallery
        </Button>
      </div>
    </div>
  )
}

export default PostEventGallery

