import PageHeader from "../components/common/PageHeader"

const Contact = () => {
  return (
    <div>
      <PageHeader title="Contact Us" description="Get in touch with the Tourism Project Showcase team" />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">General Inquiries</h3>
            <p className="mb-2">Email: info@topskoshi2025.com</p>
            <p className="mb-2">Phone: +977 9852056497</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Event Venue</h3>
            <p className="mb-2">G. Ramayana Hotel</p>
            <p className="mb-2">Koshi Province, Nepal</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

