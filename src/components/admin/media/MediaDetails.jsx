"use client"

import { Card } from "../../../ui/Card"
import { Button } from "../../../ui/Button"

const MediaDetails = ({ media, onClose, onDelete }) => {
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <Card className="overflow-hidden">
      <div className="bg-[#223F80] px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-medium text-white">Media Details</h2>
        <button onClick={onClose} className="text-gray-200 hover:text-white" aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="p-4 max-h-[calc(100vh-250px)] overflow-y-auto">
        <div className="mb-4">
          {media.type === "image" ? (
            <div className="rounded-lg overflow-hidden">
              <img src={media.url || "/placeholder.svg"} alt={media.title} className="w-full h-auto" />
            </div>
          ) : media.type === "video" ? (
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <div className="w-full h-full relative">
                <img
                  src={media.thumbnail || "/placeholder.svg"}
                  alt={media.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-black bg-opacity-50 flex items-center justify-center hover:bg-opacity-70 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-100 rounded-lg p-8 flex flex-col items-center justify-center">
              <div className="p-4 bg-white rounded-lg shadow-sm mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">{media.fileType} File</span>
              <span className="text-xs text-gray-500 mt-1">{media.fileSize}</span>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-[#223F80]">{media.title}</h3>
            <p className="text-sm text-gray-500 mt-1">
              Uploaded {formatDate(media.uploadedAt)} by {media.uploadedBy}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700">Description</h4>
            <p className="text-sm text-gray-600 mt-1">{media.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-gray-700">Type</h4>
              <p className="text-sm text-gray-600 mt-1 capitalize">{media.type}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-700">Category</h4>
              <p className="text-sm text-gray-600 mt-1 capitalize">{media.category}</p>
            </div>
            {media.type === "video" && (
              <div>
                <h4 className="text-sm font-medium text-gray-700">Duration</h4>
                <p className="text-sm text-gray-600 mt-1">{media.duration}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={onDelete}
          className="text-red-600 hover:text-red-800 border-red-200 hover:border-red-300"
        >
          Delete
        </Button>

        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              // In a real app, this would copy the URL to clipboard
              navigator.clipboard
                .writeText(media.url)
                .then(() => alert("URL copied to clipboard"))
                .catch(() => alert("Failed to copy URL"))
            }}
            className="border-[#2783BC] text-[#2783BC] hover:bg-blue-50"
          >
            Copy URL
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              // In a real app, this would download the media
              window.open(media.url, "_blank")
            }}
            className="bg-[#F58432] hover:bg-[#223F80] border-transparent"
          >
            Download
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default MediaDetails

