

import { useState, useEffect } from "react"
import PageHeader from "../components/common/PageHeader"
import { Button } from "../ui/Button"
import MediaGalleryGrid from "../components/media/MediaGalleryGrid"
import MediaVideoSection from "../components/media/MediaVideoSection"
import MediaDownloads from "../components/media/MediaDownloads"

const MediaGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [isLoading, setIsLoading] = useState(true)

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Media" },
    { id: "events", name: "Events" },
    { id: "presentations", name: "Presentations" },
    { id: "workshops", name: "Workshops" },
    { id: "networking", name: "Networking" },
    { id: "awards", name: "Awards Ceremony" },
  ]

  // Simulated media items
  const mediaItems = [
    {
      id: 1,
      type: "image",
      url: "https://imgs.search.brave.com/CTyUxu1V9ZDPBCux3ji2r-CpaGp2jbjWtTjG3G67D3g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0ctbG9vdF9H/cmFuZHNsYW1fMjAx/OS5qcGc",
      title: "Opening Ceremony",
      description: "The grand opening of ToPS Koshi 2024 with the Minister of Tourism and local dignitaries",
      category: "events",
      date: "April 28, 2024",
    },
    {
      id: 2,
      type: "image",
      url: "https://imgs.search.brave.com/CTyUxu1V9ZDPBCux3ji2r-CpaGp2jbjWtTjG3G67D3g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0ctbG9vdF9H/cmFuZHNsYW1fMjAx/OS5qcGc",
      title: "Keynote Speech",
      description: "Dr. Rajesh Sharma delivering the keynote address on 'Future of Sustainable Tourism in Nepal'",
      category: "events",
      date: "April 28, 2024",
    },
    {
      id: 3,
      type: "image",
      url: "https://imgs.search.brave.com/CTyUxu1V9ZDPBCux3ji2r-CpaGp2jbjWtTjG3G67D3g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0ctbG9vdF9H/cmFuZHNsYW1fMjAx/OS5qcGc",
      title: "Project Presentation",
      description: "Team Everest presenting their innovative eco-tourism project to the panel of judges",
      category: "presentations",
      date: "April 29, 2024",
    },
    {
      id: 4,
      type: "image",
      url: "https://imgs.search.brave.com/CTyUxu1V9ZDPBCux3ji2r-CpaGp2jbjWtTjG3G67D3g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0ctbG9vdF9H/cmFuZHNsYW1fMjAx/OS5qcGc",
      title: "Innovation Workshop",
      description: "Participants engaged in the 'Tourism Innovation Strategies' workshop led by industry experts",
      category: "workshops",
      date: "April 29, 2024",
    },
    {
      id: 5,
      type: "image",
      url: "https://imgs.search.brave.com/CTyUxu1V9ZDPBCux3ji2r-CpaGp2jbjWtTjG3G67D3g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0ctbG9vdF9H/cmFuZHNsYW1fMjAx/OS5qcGc",
      title: "Networking Dinner",
      description: "Participants and sponsors networking during the gala dinner at the Rooftop Terrace",
      category: "networking",
      date: "April 28, 2024",
    },
    {
      id: 6,
      type: "image",
      url: "https://imgs.search.brave.com/CTyUxu1V9ZDPBCux3ji2r-CpaGp2jbjWtTjG3G67D3g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0ctbG9vdF9H/cmFuZHNsYW1fMjAx/OS5qcGc",
      title: "Award Ceremony",
      description: "Team Everest receiving the first prize for their EcoTrek Nepal project",
      category: "awards",
      date: "April 30, 2024",
    },
    {
      id: 7,
      type: "image",
      url: "https://imgs.search.brave.com/CTyUxu1V9ZDPBCux3ji2r-CpaGp2jbjWtTjG3G67D3g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0ctbG9vdF9H/cmFuZHNsYW1fMjAx/OS5qcGc",
      title: "Panel Discussion",
      description: "Industry experts discussing 'Sustainable Tourism Development in Post-Pandemic Era'",
      category: "events",
      date: "April 29, 2024",
    },
    {
      id: 8,
      type: "image",
      url: "https://imgs.search.brave.com/CTyUxu1V9ZDPBCux3ji2r-CpaGp2jbjWtTjG3G67D3g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0ctbG9vdF9H/cmFuZHNsYW1fMjAx/OS5qcGc",
      title: "Cultural Performance",
      description: "Traditional Nepali cultural performance showcasing the rich heritage of Koshi Province",
      category: "events",
      date: "April 29, 2024",
    },
    {
      id: 9,
      type: "image",
      url: "https://imgs.search.brave.com/CTyUxu1V9ZDPBCux3ji2r-CpaGp2jbjWtTjG3G67D3g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0ctbG9vdF9H/cmFuZHNsYW1fMjAx/OS5qcGc",
      title: "Mentoring Session",
      description: "One-on-one mentoring session between Team Digital Sherpas and tourism technology expert",
      category: "workshops",
      date: "April 29, 2024",
    },
    {
      id: 10,
      type: "image",
      url: "https://imgs.search.brave.com/CTyUxu1V9ZDPBCux3ji2r-CpaGp2jbjWtTjG3G67D3g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0ctbG9vdF9H/cmFuZHNsYW1fMjAx/OS5qcGc",
      title: "Closing Ceremony",
      description: "The closing ceremony with all participants, sponsors, and organizers",
      category: "events",
      date: "April 30, 2024",
    },
    {
      id: 11,
      type: "image",
      url: "https://imgs.search.brave.com/CTyUxu1V9ZDPBCux3ji2r-CpaGp2jbjWtTjG3G67D3g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0ctbG9vdF9H/cmFuZHNsYW1fMjAx/OS5qcGc",
      title: "Sponsor Exhibition",
      description: "Nepal Tourism Board and other sponsors showcasing their initiatives at the exhibition hall",
      category: "networking",
      date: "April 28, 2024",
    },
    {
      id: 12,
      type: "image",
      url: "https://imgs.search.brave.com/CTyUxu1V9ZDPBCux3ji2r-CpaGp2jbjWtTjG3G67D3g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0ctbG9vdF9H/cmFuZHNsYW1fMjAx/OS5qcGc",
      title: "Silver Award Winners",
      description: "Team Digital Sherpas receiving the silver award for their Virtual Himalaya project",
      category: "awards",
      date: "April 30, 2024",
    },
  ]

  // Filter media items based on active filter
  const filteredMedia =
    activeFilter === "all" ? mediaItems : mediaItems.filter((item) => item.category === activeFilter)

  // Videos
  const videos = [
    {
      id: 1,
      thumbnail: "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2025/04/unnamed-2025-04-12T083150.005.webp",
      videoUrl: "https://example.com/videos/tops-highlights.mp4",
      title: "ToPS Koshi 2024 Highlights",
      description:
        "A comprehensive recap of the three-day Tourism Project Showcase event featuring key moments, presentations, and award ceremony",
      duration: "5:24",
      category: "events",
    },
    {
      id: 2,
      thumbnail: "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2025/04/unnamed-2025-04-12T083150.005.webp",
      videoUrl: "https://example.com/videos/keynote-speech.mp4",
      title: "Keynote Speech: Future of Tourism in Nepal",
      description:
        "Dr. Rajesh Sharma discusses the challenges and opportunities for tourism development in Nepal post-pandemic",
      duration: "18:36",
      category: "presentations",
    },
    {
      id: 3,
      thumbnail: "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2025/04/unnamed-2025-04-12T083150.005.webp",
      videoUrl: "https://example.com/videos/winner-presentation.mp4",
      title: "Winner Project Presentation: EcoTrek Nepal",
      description:
        "The winning team presents their innovative eco-tourism platform connecting local guides with environmentally conscious travelers",
      duration: "12:45",
      category: "presentations",
    },
    {
      id: 4,
      thumbnail: "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2025/04/unnamed-2025-04-12T083150.005.webp",
      videoUrl: "https://example.com/videos/cultural-performance.mp4",
      title: "Cultural Performance Highlights",
      description:
        "Traditional Nepali cultural performances showcasing the rich heritage and diversity of Koshi Province",
      duration: "8:12",
      category: "events",
    },
    {
      id: 5,
      thumbnail: "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2025/04/unnamed-2025-04-12T083150.005.webp",
      videoUrl: "https://example.com/videos/panel-discussion.mp4",
      title: "Panel Discussion: Sustainable Tourism",
      description:
        "Industry experts and government officials discuss strategies for sustainable tourism development in Nepal",
      duration: "22:37",
      category: "events",
    },
    {
      id: 6,
      thumbnail: "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2025/04/unnamed-2025-04-12T083150.005.webp",
      videoUrl: "https://example.com/videos/award-ceremony.mp4",
      title: "Award Ceremony Full Coverage",
      description: "Complete coverage of the award ceremony recognizing the most innovative tourism projects",
      duration: "15:50",
      category: "awards",
    },
  ]

  // Filter videos based on active filter
  const filteredVideos = activeFilter === "all" ? videos : videos.filter((video) => video.category === activeFilter)

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Media Gallery"
        description="Photos and videos from Tourism Project Showcase events"
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16 text-center animate-slide-up">
          <h2 className="section-title">Event Gallery</h2>
          <p className="text-lg text-gray-700 mb-8">
            Browse photos and videos from our previous Tourism Project Showcase events. Get a glimpse of the innovation,
            networking, and excitement that defines ToPS Koshi.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "primary" : "outline"}
                size="small"
                onClick={() => setActiveFilter(category.id)}
                className="mb-2"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">Photo Gallery</h3>
          <MediaGalleryGrid items={filteredMedia} />
        </div>

        {/* Video Section */}
        <MediaVideoSection videos={filteredVideos} />

        {/* Downloads Section */}
        <MediaDownloads />
      </div>
    </div>
  )
}

export default MediaGallery

