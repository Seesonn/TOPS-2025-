"use client"

import { useState, useEffect } from "react"
import { Card } from "../../ui/Card"

const MediaGalleryGrid = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [isLightboxVisible, setIsLightboxVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxVisible) return

      if (e.key === "Escape") {
        closeLightbox()
      } else if (e.key === "ArrowRight") {
        showNext()
      } else if (e.key === "ArrowLeft") {
        showPrevious()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isLightboxVisible, currentIndex, items])

  const openLightbox = (item, index) => {
    setSelectedItem(item)
    setCurrentIndex(index)
    setIsLightboxVisible(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setIsLightboxVisible(false)
    document.body.style.overflow = "auto"

    // Reset selected item after animation completes
    setTimeout(() => {
      setSelectedItem(null)
    }, 300)
  }

  const showNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSelectedItem(items[currentIndex + 1])
    } else {
      setCurrentIndex(0)
      setSelectedItem(items[0])
    }
  }

  const showPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setSelectedItem(items[currentIndex - 1])
    } else {
      setCurrentIndex(items.length - 1)
      setSelectedItem(items[items.length - 1])
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div key={item.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
            <Card
              className="overflow-hidden cursor-pointer h-full hover:shadow-xl transition-all duration-300 group"
              onClick={() => openLightbox(item, index)}
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={item.url || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-semibold">{item.title}</h4>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
            isLightboxVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors z-10"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                showPrevious()
              }}
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                showNext()
              }}
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <img
              src={selectedItem.url || "/placeholder.svg"}
              alt={selectedItem.title}
              className="max-w-full max-h-[80vh] object-contain"
            />

            <div className="bg-black bg-opacity-70 p-4 text-white">
              <h3 className="text-xl font-semibold mb-1">{selectedItem.title}</h3>
              <p className="text-gray-300">{selectedItem.description}</p>
              <p className="text-gray-400 text-sm mt-2">
                {selectedItem.date} • Image {currentIndex + 1} of {items.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {items.length === 0 && (
        <div className="text-center py-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-gray-300 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-gray-500">No media items found for this category.</p>
          <p className="text-gray-400 text-sm mt-2">Try selecting a different category filter.</p>
        </div>
      )}
    </>
  )
}

export default MediaGalleryGrid

