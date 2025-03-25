import { Link } from "react-router-dom"
import { Button } from "../../ui/Button"
import { SponsorLogo } from "../../ui/SponsorLogo"

const SponsorsSection = () => {
  const sponsors = [
    { name: "Nepal Tourism Board", tier: "title" },
    { name: "Koshi Province", tier: "gold" },
    { name: "Himalayan Airlines", tier: "silver" },
    { name: "Hotel Association Nepal", tier: "bronze" },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Sponsors</h2>
          <p className="section-subtitle">Organizations supporting innovation in tourism</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {sponsors.map((sponsor, index) => (
            <SponsorLogo key={index} name={sponsor.name} tier={sponsor.tier} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="primary"
            as={Link}
            to="/sponsorship"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            }
          >
            Become a Sponsor
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SponsorsSection

