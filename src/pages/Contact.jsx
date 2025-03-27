
import { useState } from "react"
import PageHeader from "../components/common/PageHeader"
import { Card } from "../ui/Card"
import { Button } from "../ui/Button"
import ContactForm from "../components/contact/ContactForm"
import ContactInfo from "../components/contact/ContactInfo"
import ContactMap from "../components/contact/ContactMap"
import ContactFAQ from "../components/contact/ContactFAQ"

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFormSubmit = () => {
    setFormSubmitted(true)
    // In a real application, you would send the form data to your backend here
  }

  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Contact Us"
        description="Get in touch with the Tourism Project Showcase team"
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16 text-center animate-slide-up">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-lg text-gray-700 mb-8">
            Have questions about the Tourism Project Showcase – Koshi 2025? We're here to help. Reach out to our team
            for information about registration, sponsorship opportunities, or any other inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-20">
          <div className="animate-slide-right order-2 lg:order-1">
            {formSubmitted ? (
              <Card className="p-8 text-center h-full flex flex-col justify-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your message has been received. Our team will get back to you within 24-48 hours.
                </p>
                <Button variant="primary" onClick={() => setFormSubmitted(false)}>
                  Send Another Message
                </Button>
              </Card>
            ) : (
              <ContactForm onSubmit={handleFormSubmit} />
            )}
          </div>

          <div className="animate-slide-left order-1 lg:order-2">
            <ContactInfo />
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Our Location</h3>
          <ContactMap />
        </div>

        <ContactFAQ />
      </div>
    </div>
  )
}

export default Contact

