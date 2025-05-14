import OrganizerCard from "./OrganizerCard"
import alison from "../../assests/alison.png" 
import kafals from "../../assests/kafals.png"

const OrganizersSection = () => {
  const organizers = [
    { logo:alison,
      name: "Alison Hospitality",
      description:
        "A leading hospitality management company dedicated to promoting tourism in Nepal through innovative initiatives and events.",
      website: "https://alison.com.np",
    },
    { logo:kafals,
      name: "Kafals",
      description:
        "An organization focused on promoting local culture, food, and tourism through various events and initiatives across Nepal.",
      website: "https://kafals.com.np",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-[#223F80]">Event</span> <span className="text-[#F58432]">Organizers</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {organizers.map((organizer, index) => (
            <OrganizerCard
              key={index}
              logo={organizer.logo}
              name={organizer.name}
              description={organizer.description}
              website={organizer.website}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OrganizersSection

