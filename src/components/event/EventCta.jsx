import { Link } from "react-router-dom"
import { Button } from "../../ui/Button"

const EventCta = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us at ToPS Koshi 2025</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Be part of this exciting event and contribute to the development of tourism in Koshi Province.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="large" as={Link} to="/registration">
            Register Your Team
          </Button>
          <Button variant="outline" size="large" as={Link} to="/sponsorship">
            Become a Sponsor
          </Button>
        </div>
      </div>
    </section>
  )
}

export default EventCta

