import { Card } from "../../ui/Card"
import { SocialIcon } from "../../ui/SocialIcon"

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: "location",
      title: "Event Venue",
      content: (
        <div>
          <p>G. Ramayana Hotel</p>
          <p>Kathmandu, Nepal</p>
        </div>
      ),
    },
    {
      icon: "phone",
      title: "Phone Numbers",
      content: (
        <div>
          <p>Alina Magar (Event Director): +977 9852056497</p>
          <p>Sesemi Limbu (Registration): +977 9865394201</p>
        </div>
      ),
    },
    {
      icon: "email",
      title: "Email Addresses",
      content: (
        <div>
          <p>
            General Inquiries:{" "}
            <a href="mailto:info@topskoshi2025.com" className="text-[#223F80] hover:underline">
              topskoshi2025@gmail.com
            </a>
          </p>
          <p>
            Registration:{" "}
            <a href="mailto:register@topskoshi2025.com" className="text-[#223F80] hover:underline">
              registertopskoshi2025@gmail.com
            </a>
          </p>
          <p>
            Sponsorship:{" "}
            <a href="mailto:sponsors@topskoshi2025.com" className="text-[#223F80] hover:underline">
              sponsorstopskoshi2025@gmail.com
            </a>
          </p>
        </div>
      ),
    },
    // {
    //   icon: "clock",
    //   title: "Office Hours",
    //   content: (
    //     <div>
    //       <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
    //       <p>Saturday: 10:00 AM - 2:00 PM</p>
    //       <p>Sunday: Closed</p>
    //     </div>
    //   ),
    // },
  ]

  const getIcon = (iconName) => {
    switch (iconName) {
      case "location":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      case "phone":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        )
      case "email":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        )
      case "clock":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <Card className="p-8 shadow-lg h-full">
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex">
            <div className="w-12 h-12 rounded-full bg-blue-100/60 flex items-center justify-center text-[#223F80] mr-4 flex-shrink-0">
              {getIcon(detail.icon)}
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">{detail.title}</h4>
              <div className="text-gray-600">{detail.content}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
        <div className="flex space-x-4">
          <SocialIcon platform="facebook" />
          <SocialIcon platform="twitter" />
          <SocialIcon platform="instagram" />
          <SocialIcon platform="linkedin" />
        </div>
      </div>
    </Card>
  )
}

export default ContactInfo