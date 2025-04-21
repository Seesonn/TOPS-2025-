import { Link } from "react-router-dom"
import { Button } from "../../ui/Button"
import SpeakerCard from "./SpeakerCard"
import ak from "../../assests/AshleshaKarki.jpeg"

const SpeakersSection = () => {

  const speakers = [
    {
      id: 1,
      name: "Ashlesha Karki",
      organization: " Hotel Mechi Crown",
      role: "Deputy Managing Director",
      image: ak,
    },
    {
      id: 2,
      name: "Rajesh Thapa",
      organization: "Koshi Tourism Development",
      role: "Director",
      image: "https://imgs.search.brave.com/GVQhBlUR8C0YlnBG_cMBRa19Bq5lDtMgOG64_aRZlKs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L0xHRF9HYW1p/bmdfYXRfdGhlXzIw/MTVfTFBMX1N1bW1l/cl9GaW5hbHMuanBn",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      organization: "International Tourism Council",
      role: "Advisor",
      image: "https://tops.alison.com.np/uploads/speaker_1742805470.png",
    },
    // {
    //   id: 4,
    //   name: "Prakash Gurung",
    //   organization: "Nepal Mountaineering Association",
    //   role: "President",
    //   image: "/placeholder.svg?height=300&width=300",
    // },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Key Speakers </h2>
          <p className="section-subtitle">Industry experts and leaders who will evaluate projects and share insights</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              name={speaker.name}
              organization={speaker.organization}
              role={speaker.role}
              image={speaker.image}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="secondary"
            as={Link}
            to="/jury-mentors"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            }
            iconPosition="right"
          >
            View All Jury Members
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SpeakersSection

