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
          url: "https://imgs.search.brave.com/ZFkWUzFZup9GBrrHtSPoDGpKgq1ZGOe2lrsH4buc4zU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAzLzEw/L2M2LzAzMTBjNmQz/ODVhZGQ0NTU3YWVi/ZWNjZDU1MjUyMjA4/LmpwZw",
          title: "Opening Ceremony",
          description: "The grand opening of ToPS Koshi 2024 with the Minister of Tourism and local dignitaries",
          category: "events",
          uploadedAt: "2024-05-01T10:30:00",
          uploadedBy: "Admin User",
        },
        {
          id: "med-002",
          type: "image",
          url: "https://imgs.search.brave.com/vS5BoA7zyht-_FSBxJnEPaYsqt5WbVlwYzHp-WPbhMo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL0Q1/NjEyQVFHZVBUU2VD/ckNCWHcvYXJ0aWNs/ZS1jb3Zlcl9pbWFn/ZS1zaHJpbmtfNzIw/XzEyODAvMC8xNjkw/OTk0Mjg2MDYyP2U9/MjE0NzQ4MzY0NyZ2/PWJldGEmdD1tSFZm/U3ZJczVyT2NMdFJ4/aC1PRGN6ZjdJRDht/VXJoaWo0akwyek55/X3FF",
          title: "Keynote Speech",
          description: "Dr. Rajesh Sharma delivering the keynote address on 'Future of Sustainable Tourism in Nepal'",
          category: "events",
          uploadedAt: "2024-05-01T11:45:00",
          uploadedBy: "Admin User",
        },
        {
          id: "med-003",
          type: "image",
          url: "https://imgs.search.brave.com/yg4hzyPFQw8VhxwgdzloH61D-nDVO6hhMfYzO8775Pw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmVz/c2Jvb2tzLnB1Yi9h/cHAvdXBsb2Fkcy9z/aXRlcy8xNTI5LzIw/MjIvMDgvRE1JLWNv/bmZlcmVuY2UuanBn",
          title: "Project Presentation",
          description: "Team Everest presenting their innovative eco-tourism project to the panel of judges",
          category: "presentations",
          uploadedAt: "2024-05-02T09:30:00",
          uploadedBy: "Admin User",
        },
        {
          id: "med-004",
          type: "image",
          url: "https://imgs.search.brave.com/KaiJfExQbkSxpUD_1PfeoWOgomE6UmQVwtGj3Z7tsH8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbm5v/dmF0aW9ucm91bmR0/YWJsZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMDcv/MTkwNS1CSEdFLmpw/Zw",
          title: "Innovation Workshop",
          description: "Participants engaged in the 'Tourism Innovation Strategies' workshop led by industry experts",
          category: "workshops",
          uploadedAt: "2024-05-02T14:15:00",
          uploadedBy: "Admin User",
        },
        {
          id: "med-005",
          type: "video",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          thumbnail: "https://imgs.search.brave.com/t58Yq-aimOQqA_8Cjc1DIrO8hvoF2k1tB7q03wWEuVQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXZlbnRuZXdzLmJl/L21lZGlhL2syL2l0/ZW1zL2NhY2hlLzFj/NzdlYTQ2YjNkNzcw/OWYyNzE0Mzg3OTg2/ZTdjODIwX00uanBn",
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
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          thumbnail: "https://imgs.search.brave.com/beIAllw29sWfc2387HM8j6k7REEmbIlFy3kcEh1AT-E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qll6Qm1OVGMz/TVRNdE9XWTRPQzAw/WWpJNExXRmpaVFl0/WlRZd056WTFZV1Zr/TURWa1hrRXlYa0Zx/Y0djQC5qcGc",
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
          url: "",
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
          url: "",
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

