

import { useState } from "react"
import PageHeader from "../components/common/PageHeader"
import SponsorshipTier from "../components/sponsorship/SponsorshipTier"
import SponsorshipBenefits from "../components/sponsorship/SponsorshipBenefits"
import SponsorshipForm from "../components/sponsorship/SponsorshipForm"
import SponsorshipTestimonials from "../components/sponsorship/SponsorshipTestimonials"
import SponsorshipFAQ from "../components/sponsorship/SponsorshipFAQ"
import { Button } from "../ui/Button"

const Sponsorship = () => {
  const [showForm, setShowForm] = useState(false)

  const sponsorshipTiers = [
    {
      name: "Title Sponsor",
      price: "NPR 10,00,000",
      color: "from-[#F58432] to-[#E04E00]", // Vibrant orange
      textColor: "text-white",
      benefits: [
        "Event titled as '[Your Brand] Tourism Project Showcase 2025'",
        "Logo on al branding, baners & digital promotions",
        "Prime media visibility (press, interview, coverage)",
        "Inauguration speech slot & branded booth",
        "Social media features & awards reconigation",
        "VIP 5-star hotel  stay (1 night) & 5 VIP passes",
        
      ]
    },
    {
      name: "In Association With",
      price: "NPR 500,000",
      color: "from-[#2783BC] to-[#1A6BA3]", // Professional blue
      textColor: "text-white",
      benefits: [
        "Co-branding as 'In Association With [Your Brand]' on all materials",
        "Prominent logo placement(event/print)",
        "Panel speaking slot & dedicated exhibition booth",
        "Media recognition & 3 VIP passes",
       
      ]
    },
    {
      name: "Platinum Sponsor",
      price: "NPR 300,000",
      color: "from-[#223F80] to-[#162A5E]", // Deep navy
      textColor: "text-white",
      benefits: [
        "Premier visibility Logo placemen on event banners brochures promotional videos, and venue branding booths",
        "Social media spotlight Featured mentions in all campaigns +2 VIP pasase for networking",
        "On-stage recognition during the event as our top-tier partner"
      ]
    },
    {
      name: "Official Partner",
      price: "NPR 200,000",
      color: "from-[#4CAF50] to-[#388E3C]", // Green
      textColor: "text-white",
      benefits: [
        "Co-branding shared logo space select marketing materials and event standees",
        "Social media shoutouts +2 vip passes for exclusive access",
        "Prime branding space at the venue to engage attendees",
       
      ]
    },
    {
      name: "Supporter",
      price: "NPR 100,000",
      color: "from-[#607D8B] to-[#455A64]", // Slate gray
      textColor: "text-white",
      benefits: [
        "Digital & print exposure Logo on event website, sociaal media, and printed collateral",
        "Acknowledgment during event session and 1 VIP pass",
        "Targeted visibility among industry professionals",
       
      ]
    },
    {
      name: " Event Spot Sponsor",
      price: "NPR 50,000",
      color: "from-[#9C27B0] to-[#7B1FA2]", // Purple
      textColor: "text-white",
      benefits: [
        
        "On-site branding Dedicated space during the event",
        "Social media acknowledgment & logo on select materials",
        "Affordable entry to connect wth a dynamic audience"
      ]
    }
  ]
  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Sponsorship Opportunities"
        description="Support innovation in tourism and gain visibility for your brand"
        backgroundImage="https://imgs.search.brave.com/miwavedpYR3Uz0_LIhpYO7GkmDCf2WTGjckCxCm3bnM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaW1h/bGF5YWd1aWRlbmVw/YWwuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzEyL0th/bnlhbS1UZWEtR2Fy/ZGVuLmpwZw"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16 text-center animate-slide-up">
          <h2 className="section-title">
            <span className="text-[#223F80]">Why Sponsor </span> <span className="text-[#F58432]">ToPS Koshi 2025?</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            The Tourism Project Showcase offers a unique opportunity to connect with the next generation of tourism
            innovators, industry leaders, and potential partners. Your sponsorship not only supports the development of
            tourism in Koshi Province but also provides excellent brand visibility and networking opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-[#223F80]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Brand Visibility</h3>
              <p className="text-gray-600">
                Showcase your brand to over 500+ attendees, including industry leaders, investors, and tourism
                stakeholders.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-[#223F80]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Networking</h3>
              <p className="text-gray-600">
                Connect with potential partners, clients, and talent in the tourism sector through exclusive networking
                events.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-[#223F80]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">CSR Impact</h3>
              <p className="text-gray-600">
                Demonstrate your commitment to sustainable tourism development and supporting local innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="section-title text-center mb-16">
            <span className="text-[#223F80]">Sponsorship</span> <span className="text-[#F58432]">Packages</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorshipTiers.map((tier, index) => (
              <div key={index} className="animate-slide-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <SponsorshipTier tier={tier} onSelect={() => setShowForm(true)} />
              </div>
            ))}
          </div>
        </div>

        

        {showForm ? (
          <div className="animate-fade-in">
            <SponsorshipForm onClose={() => setShowForm(false)} />
          </div>
        ) : (
          <div className="text-center my-16">
            <h3 className="text-2xl font-bold mb-6">Interested in becoming a sponsor?</h3>
            <Button
              variant="primary"
              size="large"
              onClick={() => setShowForm(true)}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            >
              Apply for Sponsorship
            </Button>
          </div>
        )}
        <SponsorshipBenefits />
        <SponsorshipTestimonials />
        <SponsorshipFAQ />
      </div>
    </div>
  )
}

export default Sponsorship

