import ObjectiveCard from "./ObjectiveCard"

const ObjectivesSection = () => {
  const objectives = [
    {
      title: "Innovation",
      icon: "lightning",
      description: "Foster innovative ideas and solutions for the development of tourism in Koshi Province.",
    },
    {
      title: "Sustainability",
      icon: "globe",
      description:
        "Promote sustainable tourism practices that preserve the natural and cultural heritage of Koshi Province.",
    },
    {
      title: "Investment",
      icon: "money",
      description:
        "Attract investment in tourism projects that have the potential to transform the tourism landscape of Koshi Province.",
    },
  ]

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Event Objectives</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <ObjectiveCard
              key={index}
              title={objective.title}
              icon={objective.icon}
              description={objective.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ObjectivesSection

