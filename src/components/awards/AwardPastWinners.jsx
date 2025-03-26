"use client"

import { useState } from "react"
import { Card } from "../../ui/Card"
import { Button } from "../../ui/Button"

const AwardPastWinners = () => {
  const [activeYear, setActiveYear] = useState("2024")

  const years = ["2024", "2023", "2022"]

  const winners = {
    2024: [
      {
        place: "1st Place",
        team: "Team Everest",
        project: "EcoTrek Nepal",
        description: "A sustainable trekking platform connecting local guides with eco-conscious travelers",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        place: "2nd Place",
        team: "Digital Sherpas",
        project: "Virtual Himalaya",
        description: "VR experiences of Nepal's iconic destinations for virtual tourism and pre-trip planning",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        place: "3rd Place",
        team: "Heritage Innovators",
        project: "Living Museums",
        description: "Interactive cultural heritage sites where visitors can experience traditional Nepali lifestyles",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        place: "Sustainability Award",
        team: "Green Trails",
        project: "Zero Waste Trekking",
        description: "A comprehensive waste management system for popular trekking routes",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    2023: [
      {
        place: "1st Place",
        team: "Mountain Tech",
        project: "Trek Safe",
        description: "A safety and emergency response system for trekkers in remote areas",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        place: "2nd Place",
        team: "Culinary Explorers",
        project: "Taste of Nepal",
        description: "A food tourism platform connecting travelers with authentic local culinary experiences",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        place: "3rd Place",
        team: "Green Trails",
        project: "Zero Waste Trekking",
        description: "A comprehensive waste management system for popular trekking routes",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        place: "Digital Innovation Award",
        team: "Smart Guide",
        project: "Pocket Sherpa",
        description: "An AI-powered mobile app providing real-time translation and cultural insights for tourists",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    2022: [
      {
        place: "1st Place",
        team: "Rural Innovators",
        project: "Homestay Network",
        description: "A digital platform connecting travelers with authentic rural homestays across Koshi Province",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        place: "2nd Place",
        team: "Adventure Tech",
        project: "Paragliding Passport",
        description: "A digital platform for booking and managing paragliding experiences in Koshi Province",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        place: "3rd Place",
        team: "Wellness Wanderers",
        project: "Himalayan Healing",
        description: "A wellness tourism initiative showcasing traditional healing practices and meditation retreats",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        place: "Community Impact Award",
        team: "Village Crafts",
        project: "Artisan Trails",
        description: "Tourism routes connecting visitors with local artisans and traditional craft workshops",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {years.map((year) => (
          <Button key={year} variant={activeYear === year ? "primary" : "outline"} onClick={() => setActiveYear(year)}>
            {year} Winners
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {winners[activeYear].map((winner, index) => (
          <div key={index} className="animate-slide-right" style={{ animationDelay: `${index * 0.1}s` }}>
            <Card className="overflow-hidden h-full">
              <div className="aspect-video overflow-hidden">
                <img
                  src={winner.image || "/placeholder.svg"}
                  alt={`${winner.team} - ${winner.project}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div
                  className={`inline-block px-3 py-1 rounded-full text-white text-sm font-medium mb-2 ${
                    winner.place.includes("1st")
                      ? "bg-amber-500"
                      : winner.place.includes("2nd")
                        ? "bg-gray-400"
                        : winner.place.includes("3rd")
                          ? "bg-amber-700"
                          : "bg-blue-600"
                  }`}
                >
                  {winner.place}
                </div>
                <h4 className="text-xl font-semibold mb-1">{winner.project}</h4>
                <p className="text-blue-600 font-medium mb-2">by {winner.team}</p>
                <p className="text-gray-600">{winner.description}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AwardPastWinners

