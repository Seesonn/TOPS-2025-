import PageHeader from "../components/common/PageHeader"

const PostEvent = () => {
  return (
    <div>
      <PageHeader
        title="Post Event"
        description="Highlights and outcomes from the Tourism Project Showcase – Koshi 2025"
      />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">Event Highlights</h2>
        <p className="text-gray-600 mb-8">
          Post-event information will be available after the event concludes. Check back later for highlights, winners,
          and more.
        </p>
      </div>
    </div>
  )
}

export default PostEvent

