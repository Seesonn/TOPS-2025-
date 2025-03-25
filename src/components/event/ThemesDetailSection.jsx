import ThemeCard from "./ThemeCard"

const ThemesDetailSection = () => {
  const themes = [
    {
      name: "Adventure Tourism",
      icon: "mountain",
      description: "Trekking, mountaineering, paragliding, rafting, and other adventure activities in Koshi Province.",
    },
    {
      name: "Eco-Tourism",
      icon: "leaf",
      description:
        "Sustainable tourism practices that conserve the environment and improve the well-being of local people.",
    },
    {
      name: "Cultural Tourism",
      icon: "landmark",
      description: "Showcasing the rich cultural heritage, traditions, and festivals of Koshi Province.",
    },
    {
      name: "Food Tourism",
      icon: "utensils",
      description: "Culinary experiences featuring local cuisines, food festivals, and farm-to-table concepts.",
    },
    {
      name: "Religious Tourism",
      icon: "pray",
      description: "Pilgrimage sites, temples, monasteries, and religious festivals in Koshi Province.",
    },
    {
      name: "Medical Tourism",
      icon: "hospital",
      description: "Healthcare services, wellness retreats, and ayurvedic treatments for tourists.",
    },
    {
      name: "Smart City",
      icon: "city",
      description: "Technology-driven solutions for urban tourism, smart infrastructure, and digital experiences.",
    },
    {
      name: "Agro-Tourism",
      icon: "tractor",
      description: "Farm stays, agricultural tours, and rural tourism experiences in Koshi Province.",
    },
    {
      name: "Sports Tourism",
      icon: "running",
      description: "Sporting events, facilities, and activities that attract tourists to Koshi Province.",
    },
    {
      name: "Educational Tourism",
      icon: "graduation-cap",
      description: "Learning experiences, workshops, and educational programs for tourists.",
    },
    {
      name: "Wildlife Tourism",
      icon: "paw",
      description: "Wildlife safaris, bird watching, and conservation efforts in Koshi Province.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Tourism Themes</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Projects will focus on one or more of these 11 key tourism sectors
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {themes.map((theme, index) => (
            <ThemeCard key={index} name={theme.name} icon={theme.icon} description={theme.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThemesDetailSection

