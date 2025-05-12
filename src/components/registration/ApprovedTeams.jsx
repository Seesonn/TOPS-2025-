

// import { useState, useEffect } from "react"
// import { Card } from "../../ui/Card"
// import ApprovedTeamCard from "./ApprovedTeamCard"


// const mockTeams = [
//   {
//     id: 1,
//     name: "EcoTourism Innovators",
//     projectName: "GreenTravel App",
//     theme: "Sustainable Tourism",
//     members: ["Aarav Sharma", "Diya Shrestha", "Rohan Gurung"],
//     description: "An app that helps tourists find eco-friendly accommodations and activities.",
//     status: "approved",
//     submissionDate: "2023-05-15",
//   },
//   {
//     id: 2,
//     name: "Cultural Explorers",
//     projectName: "Heritage Connect",
//     theme: "Cultural Tourism",
//     members: ["Priya Karki", "Anish Rai", "Sita Tamang"],
//     description: "A platform connecting tourists with local cultural experiences and traditions.",
//     status: "approved",
//     submissionDate: "2023-05-16",
//   },
//   {
//     id: 3,
//     name: "Adventure Seekers",
//     projectName: "ThrillSeeker",
//     theme: "Adventure Tourism",
//     members: ["Niraj Adhikari", "Aanya Poudel", "Arjun Thapa"],
//     description: "An application for finding and booking adventure tourism activities.",
//     status: "approved",
//     submissionDate: "2023-05-14",
//   },
//   {
//     id: 4,
//     name: "Digital Nomads",
//     projectName: "WorkAndWander",
//     theme: "Digital Tourism",
//     members: ["Kavita Magar", "Bijay Limbu", "Samir KC"],
//     description: "A solution for digital nomads to find work-friendly destinations and accommodations.",
//     status: "approved",
//     submissionDate: "2023-05-17",
//   },
//   {
//     id: 5,
//     name: "Local Guides",
//     projectName: "LocalLens",
//     theme: "Community Tourism",
//     members: ["Rajan Bhattarai", "Sabina Thapa", "Deepak Tamang"],
//     description: "A platform connecting tourists with local guides for authentic experiences.",
//     status: "approved",
//     submissionDate: "2023-05-13",
//   },
//   {
//     id: 6,
//     name: "Accessibility Advocates",
//     projectName: "TravelForAll",
//     theme: "Accessible Tourism",
//     members: ["Manisha Gurung", "Prakash Shrestha", "Sunita Rai"],
//     description: "An app that helps people with disabilities find accessible travel options.",
//     status: "approved",
//     submissionDate: "2023-05-18",
//   },
//   {
//     id: 7,
//     name: "Eco Explorers",
//     projectName: "Nature Connect",
//     theme: "Sustainable Tourism",
//     members: ["Binod Chhetri", "Anjali Subedi", "Kamal Basnet"],
//     description: "A platform that connects tourists with eco-friendly nature experiences and conservation activities.",
//     status: "approved",
//     submissionDate: "2023-05-19",
//   },
//   {
//     id: 8,
//     name: "Heritage Keepers",
//     projectName: "Cultural Passport",
//     theme: "Cultural Tourism",
//     members: ["Rajesh Maharjan", "Puja Shrestha", "Sunil Lama"],
//     description: "An app that helps tourists discover and learn about cultural heritage sites and traditions.",
//     status: "approved",
//     submissionDate: "2023-05-20",
//   },
//   {
//     id: 9,
//     name: "Rural Connectors",
//     projectName: "Village Experience",
//     theme: "Community Tourism",
//     members: ["Ramesh Neupane", "Gita Poudel", "Bikash Tamang"],
//     description: "A platform connecting tourists with authentic rural experiences and homestays.",
//     status: "approved",
//     submissionDate: "2023-05-21",
//   },
//   {
//     id: 10,
//     name: "Tech Travelers",
//     projectName: "Smart Tourism",
//     theme: "Digital Tourism",
//     members: ["Santosh Thapa", "Nirmala KC", "Dipesh Gurung"],
//     description: "An AI-powered app that creates personalized travel itineraries based on user preferences.",
//     status: "approved",
//     submissionDate: "2023-05-22",
//   },
// ]

// const ApprovedTeams = () => {
//   const [topTeams, setTopTeams] = useState([])
//   const [loading, setLoading] = useState(true)

//   //fetch garna approved lie
//   useEffect(() => {
//     // usegarna api call
//     setTimeout(() => {
//       const approved = mockTeams.filter((team) => team.status === "approved").slice(0, 10)
//       setTopTeams(approved)
//       setLoading(false)
//     }, 500)
//   }, [])

//   return (
//     <div className="py-8">
//       <div className="container mx-auto px-4">
//       <div className="text-center mb-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">Top Selected Teams</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Congratulations to our top selected teams who demonstrated exceptional creativity and innovation in their
//             tourism project proposals.
//           </p>
//         </div>
//         {loading ? (
//           <div className="flex justify-center items-center py-10">
//             <div className="animate-spin rounded-full h-6 w-6 border-2 border-teal-500 border-t-transparent"></div>
//             <span className="ml-2 text-gray-600">Loading...</span>
//           </div>
//         ) : topTeams.length > 0 ? (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {topTeams.map((team, index) => (
//               <ApprovedTeamCard key={team.id} team={team} rank={index + 1} />
//             ))}
//           </div>
//         ) : (
//           <Card className="text-center py-8">
//             <h3 className="font-semibold text-gray-700 mb-2">No Teams Selected Yet</h3>
//             <p className="text-gray-500">Team selection is still in progress.</p>
//           </Card>
//         )}
//       </div>
//     </div>
//   )
// }

// export default ApprovedTeams
import { useState, useEffect } from "react"
import { Card } from "../../ui/Card"
import ApprovedTeamCard from "./ApprovedTeamCard"

const mockTeams = [
  {
    id: 1,
    name: "Agro Basti",
    collegeName: "Nepal Engineering College",
    collegeAddress: "Changunarayan, Bhaktapur",
    mentor: "Surya Thapaliya",
    teamLeader: "Ganga Poudel",
    members: [
      "Rasmika Shrestha ",
      "Saina Shrestha",
      "Sumi Duwa Shrestha"
    ],
    projectTitle: "Kheti Aagan",
    projectArea: "Mai Pokhari, Illam",
    visitDuration: "3 days",
    visitDate: "2082-01-26 to 2082-01-28",
   
    status: "approved",
    submissionDate: "2023-05-15"
  },
  {
    id: 1,
    name: "Agro Basti",
    collegeName: "Nepal Engineering College",
    collegeAddress: "Changunarayan, Bhaktapur",
    mentor: "Surya Thapaliya",
    teamLeader: "Ganga Poudel",
    members: [
      "Rasmika Shrestha ",
      "Saina Shrestha",
      "Sumi Duwa Shrestha"
    ],
    projectTitle: "Kheti Aagan",
    projectArea: "Mai Pokhari, Illam",
    visitDuration: "3 days",
    visitDate: "2082-01-26 to 2082-01-28",
   
    status: "approved",
    submissionDate: "2023-05-15"
  },
  {
    id: 1,
    name: "Agro Basti",
    collegeName: "Nepal Engineering College",
    collegeAddress: "Changunarayan, Bhaktapur",
    mentor: "Surya Thapaliya",
    teamLeader: "Ganga Poudel",
    members: [
      "Rasmika Shrestha ",
      "Saina Shrestha",
      "Sumi Duwa Shrestha"
    ],
    projectTitle: "Kheti Aagan",
    projectArea: "Mai Pokhari, Illam",
    visitDuration: "3 days",
    visitDate: "2082-01-26 to 2082-01-28",
   
    status: "approved",
    submissionDate: "2023-05-15"
  },
  
  
]

const ApprovedTeams = () => {
  const [topTeams, setTopTeams] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const approved = mockTeams.filter((team) => team.status === "approved")
      setTopTeams(approved)
      setLoading(false)
    }, 500)
  }, [])

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Top Selected Teams</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Congratulations to our top selected teams who demonstrated exceptional creativity and innovation in their
            tourism project proposals.
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-teal-500 border-t-transparent"></div>
            <span className="ml-2 text-gray-600">Loading approved teams...</span>
          </div>
        ) : topTeams.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topTeams.map((team, index) => (
              <ApprovedTeamCard key={team.id} team={team} rank={index + 1} />
            ))}
          </div>
        ) : (
          <Card className="text-center py-8">
            <h3 className="font-semibold text-gray-700 mb-2">No Teams Approved Yet</h3>
            <p className="text-gray-500">Team approval process is still in progress.</p>
          </Card>
        )}
      </div>
    </div>
  )
}

export default ApprovedTeams