import { Card } from "../../ui/Card"

const PostEventWinners = ({ year }) => {
  const winners = {
    2024: [
      {
        place: "1st Place",
        team: "Rural Innovators",
        project: "Homestay Network",
        description:
          "A digital platform connecting travelers with authentic rural homestays across Koshi Province. The network standardizes quality while preserving authenticity, provides training to hosts, and facilitates direct bookings without intermediaries.",
        prize: "NPR 100,000",
        members: ["Ramesh Basnet", "Sita Karki", "Dinesh Rai", "Gita Sherpa"],
        image: "https://imgs.search.brave.com/nXKbf4E17eOxqnvfhHqK7V2tkY77BbX_xTKDyd3DzSs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hc3NldHR5cGUu/Y29tL2Fma2dhbWlu/Zy8yMDIzLTEyL2E3/MDZjY2Y5LTkyNzQt/NGU5Ny1iMjY3LWE4/MzcyNjFlM2JmMS9T/bmFwaW5zdGFfYXBw/XzQwOTA4OTMxNl8z/NTAwNTEwODQzMzU2/ODFfNTQyNDE1ODM4/NTQ0MjgxODg1OV9u/XzEwODAuanBnP3Jl/Y3Q9NzQsMCwxMDA2/LDU2NiZhdXRvPWZv/cm1hdCxjb21wcmVz/cyZkcHI9MS4wJnc9/MTIwMA",
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
        image: "https://imgs.search.brave.com/lV2ti1-azmDZfxKfxOQkwn0t6kHxxwgF1yfaa6jvL7U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXNwb3J0cy5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDYvQmVzdC1QVUJH/LVBsYXllcnMuanBn",
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
        image: "https://imgs.search.brave.com/S_PbMSJf5tgkYp-vtBPfy3mPUEY-mkVJrtrBLbvrdEs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aXRoZXRoYW8udm4v/aW1hZ2UvMDMuMTIu/MjAyNC9nZXRzby1y/b3ktZXNwb3J0cy14/dW5vYXotdG9pLWNh/bS10aGF5LXR1LWhh/by1raGktZHVvYy10/aGktZGF1LXB1Ymct/bW9iaWxlXzE3MzMy/MDk4ODYuanBnP3Y9/MTczMzIxNzUzNA",
        achievement: "Attracted international wellness retreats and yoga teacher training programs",
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
        image: "https://imgs.search.brave.com/UDprxF4TDyzwe9irkOyw5e46MQsnnloMAp4b3muMtu0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lc3Bv/cnRzd29ybGRjdXAu/Y29tL2Fzc2V0cy9w/dWJnX3BjX2JhMDg0/YmYzY2YuanBlZz93/PTM4NDA",
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
        image: "https://imgs.search.brave.com/f6NpSaERGN9BZ_6FP_amjEPL7h0JKV1XP6cNJ6JUQuk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nbG9i/YWwubm92YWVzcG9y/dHMuY29tL19Ob3Zh/L2ltZy90ZWFtcy9i/Zy10ZWFtcy5wbmc",
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
        image: "https://imgs.search.brave.com/fQ-BSVQQBs1jeRk_bhHQWZ6BY9HErQbiDpxy3JkMPus/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbmds/aXNoLm9ubGluZWto/YWJhci5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTgvMDgv/RXNwb3J0cy0yLTMw/MHgyMDAuanBn",
        achievement: "Implemented on Annapurna Circuit with 80% waste reduction",
      },
    ],
    2022: [
      {
        place: "1st Place",
        team: "Team Everest",
        project: "EcoTrek Nepal",
        description:
          "A sustainable trekking platform connecting local guides with eco-conscious travelers. The platform features carbon footprint tracking, waste reduction initiatives, and direct economic benefits to local communities.",
        prize: "NPR 100,000",
        members: ["Anish Sharma", "Priya Thapa", "Rajesh Gurung", "Sunita Rai"],
        image: "https://imgs.search.brave.com/yeFG0tk90qDxAT7C_G2C8z-IYPm3twRYAcCQnOb7epM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzA1L1NLX1RlbGVj/b21fVDFfd2l0aF8y/MDE1X0xlYWd1ZV9v/Zl9MZWdlbmRzX1dv/cmxkX0NoYW1wdGlv/bnNoaXBfdHJvcGh5/LmpwZw",
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
        image: "https://imgs.search.brave.com/I4NU2YpDXTMrhZzhFlyTEJ80HiQ2gjgT80hbVrQZk84/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hY3R1/YWxseWdvb2R0ZWFt/bmFtZXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzAx/L0dyb3VwLU5hbWVz/LWZvci1TaXgtUGVv/cGxlLUZlYXR1cmVk/LUltYWdlLmpwZw",
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
        image: "https://imgs.search.brave.com/m2cGSVDycLrT6J8xYVUcCR6ZMK4oe88nKZEypqPoUao/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hY3R1/YWxseWdvb2R0ZWFt/bmFtZXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzEw/L0dyb3VwLU5hbWVz/LWZvci1GaXZlLVBl/b3BsZS1GZWF0dXJl/ZC1JbWFnZS02MzR4/NDIwLmpwZw",
        achievement: "Pilot project launched in Janakpur with local government support",
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
              <h4 className="text-2xl font-bold mb-2 text-gradient bg-gradient-to-r from-[#223F80] to-indigo-600">
                {winner.project}
              </h4>
              <p className="text-[#F58432] font-medium mb-4">by {winner.team}</p>

              <p className="text-gray-700 mb-4">{winner.description}</p>

              <div className="mb-4 p-3 bg-blue-50 rounded-lg border-l-4 border-[#2783BC]">
                <h5 className="font-semibold text-[#2783BC]">Post-Event Achievement:</h5>
                <p className="text-[#2783BC]">{winner.achievement}</p>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold mb-2">Team Members:</h5>
                <div className="flex flex-wrap gap-2">
                  {winner.members.map((member, i) => (
                    <span key={i} className="inline-block px-3 py-1 bg-blue-100 text-[#2783BC] rounded-full text-sm">
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

