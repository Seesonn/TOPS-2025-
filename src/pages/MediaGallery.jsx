import PageHeader from "../components/common/PageHeader"

const MediaGallery = () => {
  return (
    <div>
      <PageHeader title="Media Gallery" description="Photos and videos from Tourism Project Showcase events" />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">Event Gallery</h2>
        <p className="text-gray-600 mb-8">
          Media content will be available after the event. Check back later for photos and videos.
        </p>
      </div>
    </div>
  )
}

export default MediaGallery

