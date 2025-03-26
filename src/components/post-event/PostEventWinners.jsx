import { Card } from "../../ui/Card"

const PostEventWinners = ({ year }) => {
  const winners = {
    2024: [
      {
        place: "1st Place",
        team: "Team Everest",
        project: "EcoTrek Nepal",
        description:
          "A sustainable trekking platform connecting local guides with eco-conscious travelers. The platform features carbon footprint tracking, waste reduction initiatives, and direct economic benefits to local communities.",
        prize: "NPR 100,000",
        members: ["Anish Sharma", "Priya Thapa", "Rajesh Gurung", "Sunita Rai"],
        image: "/placeholder.svg?height=400&width=600",
        achievement: "Secured NPR 2 million in seed funding after the event",
      },
      {
        place: "2nd Place",
        team: "Digital Sherpas",
        project: "Virtual Himalaya",
        description:
          "VR experiences of Nepal's iconic destinations for virtual tourism and pre-trip planning. The immersive platform allows users to explore trekking routes, cultural sites, and adventure activities before their actual visit.",
        prize: "NPR 75,000",
        members: ["Bikash Tamang", "Maya Lama", "Suraj Poudel"],
        image: "/placeholder.svg?height=400&width=600",
        achievement: "Partnership with Nepal Tourism Board for official implementation",
      },
      {
        place: "3rd Place",
        team: "Heritage Innovators",
        project: "Living Museums",
        description:
          "Interactive cultural heritage sites where visitors can experience traditional Nepali lifestyles. The project transforms historical sites into living museums with local artisans, traditional food preparation, and cultural performances.",
        prize: "NPR 50,000",
        members: ["Dipesh Maharjan", "Sabina Shrestha", "Kamal Bhattarai", "Nirmala Adhikari"],
        image: "/placeholder.svg?height=400&width=600",
        achievement: "Pilot project launched in Janakpur with local government support",
      },
    ],
    2023: [
      {
        place: "1st Place",
        team: "Mountain Tech",
        project: "Trek Safe",
        description:
          "A comprehensive safety and emergency response system for trekkers in remote areas. The solution combines GPS tracking, offline maps, emergency alerts, and a network of local responders to ensure trekker safety.",
        prize: "NPR 100,000",
        members: ["Binod Thapa", "Sarita Gurung", "Prakash Magar"],
        image: "/placeholder.svg?height=400&width=600",
        achievement: "Now used by over 50 trekking agencies across Nepal",
      },
      {
        place: "2nd Place",
        team: "Culinary Explorers",
        project: "Taste of Nepal",
        description:
          "A food tourism platform connecting travelers with authentic local culinary experiences. The platform features cooking classes, food tours, farm visits, and dining experiences with local families across Koshi Province.",
        prize: "NPR 75,000",
        members: ["Rajan KC", "Sushma Tamang", "Deepak Shrestha", "Anjali Rai"],
        image: "/placeholder.svg?height=400&width=600",
        achievement: "Featured in National Geographic Traveller Food magazine",
      },
      {
        place: "3rd Place",
        team: "Green Trails",
        project: "Zero Waste Trekking",
        description:
          "A comprehensive waste management system for popular trekking routes. The initiative includes biodegradable packaging, waste collection points, recycling facilities, and education programs for both tourists and local businesses.",
        prize: "NPR 50,000",
        members: ["Manish Limbu", "Puja Sharma", "Santosh Tamang"],
        image: "/placeholder.svg?height=400&width=600",
        achievement: "Implemented on Annapurna Circuit with 80% waste reduction",
      },
    ],
    2022: [
      {
        place: "1st Place",
        team: "Rural Innovators",
        project: "Homestay Network",
        description:
          "A digital platform connecting travelers with authentic rural homestays across Koshi Province. The network standardizes quality while preserving authenticity, provides training to hosts, and facilitates direct bookings without intermediaries.",
        prize: "NPR 100,000",
        members: ["Ramesh Basnet", "Sita Karki", "Dinesh Rai", "Gita Sherpa"],
        image: "/placeholder.svg?height=400&width=600",
        achievement: "Expanded to 120+ homestays across Eastern Nepal",
      },
      {
        place: "2nd Place",
        team: "Adventure Tech",
        project: "Paragliding Passport",
        description:
          "A digital platform for booking and managing paragliding experiences in Koshi Province. The solution includes weather monitoring, pilot certification verification, equipment tracking, and a loyalty program for adventure enthusiasts.",
        prize: "NPR 75,000",
        members: ["Sunil Thapa", "Mina Gurung", "Anil Shrestha"],
        image: "/placeholder.svg?height=400&width=600",
        achievement: "Processed over 5,000 bookings in first year of operation",
      },
      {
        place: "3rd Place",
        team: "Wellness Wanderers",
        project: "Himalayan Healing",
        description:
          "A wellness tourism initiative showcasing traditional healing practices and meditation retreats. The project combines ancient Himalayan healing traditions with modern wellness concepts in serene mountain locations.",
        prize: "NPR 50,000",
        members: ["Yogesh Sharma", "Pramila Rai", "Bikram Tamang", "Saraswati Adhikari"],
        image: "/placeholder.svg?height=400&width=600",
        achievement: "Attracted international wellness retreats and yoga teacher training programs",
      },
    ],
  }

  return (
    <div className="my-20">
      <h3 className="text-2xl font-bold text-center mb-12">Award Winners</h3>

      <div className="space-y-16">
        {winners[year].map((winner, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center animate-slide-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="md:w-1/2">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={winner.image || "/placeholder.svg"}
                    alt={`${winner.team} - ${winner.project}`}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className={`absolute top-4 left-4 px-4 py-2 rounded-full text-white font-medium ${
                      index === 0 ? "bg-amber-500" : index === 1 ? "bg-gray-400" : "bg-amber-700"
                    }`}
                  >
                    {winner.place}
                  </div>
                </div>
              </Card>
            </div>

            <div className="md:w-1/2">
              <h4 className="text-2xl font-bold mb-2 text-gradient bg-gradient-to-r from-blue-600 to-indigo-600">
                {winner.project}
              </h4>
              <p className="text-blue-600 font-medium mb-4">by {winner.team}</p>

              <p className="text-gray-700 mb-4">{winner.description}</p>

              <div className="mb-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h5 className="font-semibold text-blue-800">Post-Event Achievement:</h5>
                <p className="text-blue-700">{winner.achievement}</p>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold mb-2">Team Members:</h5>
                <div className="flex flex-wrap gap-2">
                  {winner.members.map((member, i) => (
                    <span key={i} className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {member}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-500 mr-2"
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
                <span className="font-semibold">Prize: {winner.prize}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostEventWinners

