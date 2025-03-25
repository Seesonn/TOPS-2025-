import OrganizerCard from "./OrganizerCard"

const OrganizersSection = () => {
  const organizers = [
    {
      name: "Alison Hospitality",
      description:
        "A leading hospitality management company dedicated to promoting tourism in Nepal through innovative initiatives and events.",
      website: "https://alisonhospitality.com",
    },
    {
      name: "Kafals",
      description:
        "An organization focused on promoting local culture, food, and tourism through various events and initiatives across Nepal.",
      website: "https://kafals.com",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Event Organizers</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {organizers.map((organizer, index) => (
            <OrganizerCard
              key={index}
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

