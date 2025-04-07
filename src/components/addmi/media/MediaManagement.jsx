"use client"

import { useState, useEffect } from "react"
import { Button } from "../../../ui/Button"
import MediaUploader from "./MediaUploader"
import MediaGallery from "./MediaGallery"

const MediaManagement = () => {
  const [mediaItems, setMediaItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // Simulate API call to fetch media items
    setTimeout(() => {
      const mockMediaItems = [
        {
          id: "med-001",
          type: "image",
          url: "/placeholder.svg?height=600&width=800",
          title: "Opening Ceremony",
          description: "The grand opening of ToPS Koshi 2024 with the Minister of Tourism and local dignitaries",
          category: "events",
          uploadedAt: "2024-05-01T10:30:00",
          uploadedBy: "Admin User",
        },
        {
          id: "med-002",
          type: "image",
          url: "/placeholder.svg?height=600&width=800",
          title: "Keynote Speech",
          description: "Dr. Rajesh Sharma delivering the keynote address on 'Future of Sustainable Tourism in Nepal'",
          category: "events",
          uploadedAt: "2024-05-01T11:45:00",
          uploadedBy: "Admin User",
        },
        {
          id: "med-003",
          type: "image",
          url: "/placeholder.svg?height=600&width=800",
          title: "Project Presentation",
          description: "Team Everest presenting their innovative eco-tourism project to the panel of judges",
          category: "presentations",
          uploadedAt: "2024-05-02T09:30:00",
          uploadedBy: "Admin User",
        },
        {
          id: "med-004",
          type: "image",
          url: "/placeholder.svg?height=600&width=800",
          title: "Innovation Workshop",
          description: "Participants engaged in the 'Tourism Innovation Strategies' workshop led by industry experts",
          category: "workshops",
          uploadedAt: "2024-05-02T14:15:00",
          uploadedBy: "Admin User",
        },
        {
          id: "med-005",
          type: "video",
          url: "https://example.com/videos/tops-koshi-2024-highlights.mp4",
          thumbnail: "/placeholder.svg?height=720&width=1280",
          title: "ToPS Koshi 2024 Highlights",
          description:
            "A comprehensive recap of the three-day Tourism Project Showcase event featuring key moments, presentations, and award ceremony",
          category: "events",
          duration: "5:24",
          uploadedAt: "2024-05-03T16:20:00",
          uploadedBy: "Admin User",
        },
        {
          id: "med-006",
          type: "video",
          url: "https://example.com/videos/keynote-speech.mp4",
          thumbnail: "/placeholder.svg?height=720&width=1280",
          title: "Keynote Speech: Future of Tourism in Nepal",
          description:
            "Dr. Rajesh Sharma discusses the challenges and opportunities for tourism development in Nepal post-pandemic",
          category: "presentations",
          duration: "18:36",
          uploadedAt: "2024-05-01T13:45:00",
          uploadedBy: "Admin User",
        },
        {
          id: "med-007",
          type: "document",
          url: "https://example.com/documents/event-brochure.pdf",
          title: "Event Brochure",
          description: "Official brochure with event details, schedule, and information",
          category: "materials",
          fileType: "PDF",
          fileSize: "2.4 MB",
          uploadedAt: "2024-04-15T09:30:00",
          uploadedBy: "Admin User",
        },
        {
          id: "med-008",
          type: "document",
          url: "https://example.com/documents/press-kit.zip",
          title: "Press Kit",
          description: "Media resources including logos, press releases, and high-resolution images",
          category: "materials",
          fileType: "ZIP",
          fileSize: "18.7 MB",
          uploadedAt: "2024-04-20T11:15:00",
          uploadedBy: "Admin User",
        },
      ]

      setMediaItems(mockMediaItems)
      setLoading(false)
    }, 1000)
  }, [])

  const handleDeleteMedia = (id) => {
    setMediaItems((prevItems) => prevItems.filter((item) => item.id !== id))
    if (selectedMedia && selectedMedia.id === id) {
      setSelectedMedia(null)
    }
  }

  const handleUploadSuccess = (newMedia) => {
    setMediaItems((prevItems) => [newMedia, ...prevItems])
    setIsUploading(false)
  }

  const filteredMedia = mediaItems.filter((item) => {
    // Apply type filter
    if (filter !== "all" && item.type !== filter) return false

    // Apply search filter (case insensitive)
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      return (
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.category.toLowerCase().includes(searchLower)
      )
    }

    return true
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#223F80]">Media Management</h1>
        <Button
          variant="primary"
          onClick={() => setIsUploading(true)}
          className="bg-[#F58432] hover:bg-[#223F80] border-transparent"
        >
          Upload New Media
        </Button>
      </div>

      <div className="flex space-x-2 mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-[#2783BC] focus:ring-[#2783BC]"
        >
          <option value="all">All Media</option>
          <option value="image">Images</option>
          <option value="video">Videos</option>
          <option value="document">Documents</option>
        </select>
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search media..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#2783BC] focus:ring-[#2783BC] pl-9"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {isUploading ? (
        <MediaUploader onSuccess={handleUploadSuccess} onCancel={() => setIsUploading(false)} />
      ) : (
        <MediaGallery
          mediaItems={filteredMedia}
          loading={loading}
          selectedMedia={selectedMedia}
          setSelectedMedia={setSelectedMedia}
          onDelete={handleDeleteMedia}
        />
      )}
    </div>
  )
}

export default MediaManagement

