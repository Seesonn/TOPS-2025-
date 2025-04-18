

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PageHeader from "../components/common/PageHeader"
import TicketPricingCard from "../components/tickets/TicketPricingCard"
import TicketFeatureComparison from "../components/tickets/TicketFeatureComparison"
import TicketFAQ from "../components/tickets/TicketFAQ"
import { Button } from "../ui/Button"

const Tickets = () => {
  const navigate = useNavigate()
  const [selectedTicket, setSelectedTicket] = useState(null)

  const ticketTiers = [
    {
      id: "standard",
      name: "Standard",
      price: "NPR 1,000",
      color: "from-[#2783BC]/90 to-[#223F80]/80",
      description: "Perfect for general attendees interested in exploring tourism innovations",
      features: [
        "Access to all general sessions",
        "Entry to exhibition area",
        "Event materials and program",
        "Refreshments during breaks",
        "Certificate of participation",
      ],
      // bestFor: "General attendees and students",
      availability: "Limited seats available",
    },
    {
      id: "gold",
      name: "Gold",
      price: "NPR 2,500",
      color: "from-[#F58432] to-amber-600",
      description: "Enhanced experience with networking opportunities and premium features",
      features: [
        "All Standard ticket benefits",
        "Access to networking lunch",
        "Entry to panel discussions",
        "Workshop participation",
        "Digital copy of all presentations",
        "Event merchandise pack",
      ],
      // bestFor: "Tourism professionals and entrepreneurs",
      availability: "Limited seats available",
      recommended: true,
    },
    {
      id: "premium",
      name: "Premium",
      price: "NPR 10,000",
      color: "from-[#223F80] to-[#2783BC]",
      description: "VIP experience with exclusive access and personalized benefits",
      features: [
        "All Gold ticket benefits",
        "VIP seating in all sessions",
        "Exclusive dinner with speakers",
        "One-on-one mentoring session",
        "Access to VIP lounge",
        "Professional headshot session",
        "Full media coverage package",
      ],
      // bestFor: "Industry leaders and investors",
      availability: "Limited seats available",
    },
  ]

  const handleBuyTicket = (ticketId) => {
    setSelectedTicket(ticketId)
    navigate("/login", { state: { from: "tickets", ticketId } })
  }

  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Event Tickets"
        description="Secure your spot at the Tourism Project Showcase – Koshi 2025"
        backgroundImage="https://imgs.search.brave.com/Cjvy9G5J_rVwmDoqOXz0Ie9kGNt5hM-36lqkMqEVK1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC9QWXd5NmdI/LmpwZw"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16 text-center animate-slide-up">
          <h2 className="section-title">Choose Your Ticket</h2>
          <p className="text-lg text-gray-700 mb-8">
            Select the ticket that best suits your needs and interests. Each tier offers a unique experience at the
            Tourism Project Showcase – Koshi 2025.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {ticketTiers.map((tier, index) => (
            <div key={tier.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <TicketPricingCard tier={tier} onBuyTicket={() => handleBuyTicket(tier.id)} />
            </div>
          ))}
        </div>

        {/* <TicketFeatureComparison ticketTiers={ticketTiers} /> */}

        <div className="my-20 p-8 bg-blue-50 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Group Discounts Available</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Planning to attend with your team or colleagues? We offer special discounts for groups of 5 or more. Contact
            us to learn more about our group rates.
          </p>
          <Button variant="primary" as="a" href="mailto:tickets@topskoshi2025.com">
            Inquire About Group Rates
          </Button>
        </div>

        <TicketFAQ />
      </div>
    </div>
  )
}

export default Tickets

