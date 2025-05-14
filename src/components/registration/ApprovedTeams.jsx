

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
    name: "Acme Coaster",
    collegeName: "Acme Engineering College",
    mentor: "Basudev Baral",
    sector: "Adventure Tourism",
    teamLeader: "Sagar Kandel - 9845662220",
    members: [
      "Pratik Sharma Dulal - 9861000144",
      "Rabin Tamang - 9841251474",
      "Rajesh Shrestha - 9860416814",
      "Sachet Subedi - 9864276157"
    ],
      status: "approved",
    projectTitle: "Koshi Mountain Coaster Adventure"
  },
  {
    id: 2,
    name: "AgroBasti",
    collegeName: "Nepal Engineering College",
    mentor: "Surya Thapaliya",
    sector: "Agro-Tourism",
    teamLeader: "Rashmika Shrestha - 9863441156",
    members: [
      "Saina Shrestha - 9844235275",
      "Sumi Duwa Shrestha - 9748285026",
      "Ganga Poudel - 9861661342"
    ],
      status: "approved",
    projectTitle: "Khiti Agan"
  },
  {
    id: 3,
    name: "Beyond the brew",
    collegeName: "Khwopa Engineering College",
    mentor: "Suman Ghimire",
    sector: "Agro-Tourism",
    teamLeader: "Shrijal Man Shrestha - 9822782043",
    members: [
      "Sachin Chaurasiya - 9766547557",
      "Krishal Byanju - 9741808269",
      "Ganesh Chapagain - 9847805353",
      "Nirjala Prajapati - 9818444005"
    ],
      status: "approved",
    projectTitle: "Panitar Tea Village"
  },
  {
    id: 4,
    name: "Koshi Explorers",
    collegeName: "IOE Pulchowk Campus",
    mentor: "Tej Bdr. Dhakal",
    teamLeader: "Abhinna Rimal - 9861041363",
    members: [
      "Amshu Bhandari - 9843738650",
      "Ayush Aryal - 9808838347",
      "Aayusha Bajracharya",
      "Megana Shrestha"
    ],
      status: "approved",
    projectTitle: "Arun Adventure Gateway"
  },
  {
    id: 5,
    name: "Pathfinders",
    collegeName: "Pulchowk College",
    mentor: "Uttam Bhattarai",
    sector: "Adventure Tourism",
    teamLeader: "Sandhya Thapa - 9840732769",
    members: [
      "Bevika Mool - 98400346820",
      "Nisha KC - 9823090407",
      "Samata Shrestha - 9861719454",
      "Swechha Shrestha - 9849660415"
    ],
      status: "approved",
    projectTitle: "Vertical Odyssey"
  },
  {
    id: 6,
    name: "K2PA Crew",
    collegeName: "Pulchowk College",
    mentor: "Animesh Bastola",
    sector: "Cultural & Rural Tourism",
    teamLeader: "Prashant Shrestha - 9765349622",
    members: [
      "Aakriti Pun - 9849882016",
      "Kushal Pangeni - 9749780900",
      "Kritika K.C. - 9849398907"
    ],
      status: "approved",
    projectTitle: "Multicultural Village & Resort"
  },
  {
    id: 7,
    name: "Winners",
    collegeName: "Pulchowk College",
    mentor: "Birat Anupam",
    sector: "Adventure Tourism",
    teamLeader: "Sukirti Joshi - 9803362907",
    members: [
      "Shristi Pandey - 9861858201",
      "Smriti Thapaliya - 9865466814",
      "Sugam Gautam - 9869420038",
      "Sushma Dotel - 9863211994"
    ],
      status: "approved",
    projectTitle: "Beyond The Mera Peak Base Camp"
  },
  {
    id: 8,
    name: "Sketch squad",
    collegeName: "Pulchowk Campus",
    mentor: "Aslesha Karki",
    sector: "Agro-Tourism",
    teamLeader: "Subham Jung Karki - 9840464444",
    
    members: [
      "Aavash Shrestha - 9840332000",
      "Amik Shakya - 9861341782",
      "Bibek Khanal - 9847363028"
    ],
    projectTitle: "Sip Savor Ilam",
      status: "approved",
  },
  {
    id: 9,
    name: "Rural Ridge Builders",
    collegeName: "Nepal Engineering College",
    mentor: "Bhabish Shrestha",
    sector: "Spiritual Tourism",
    teamLeader: "Abhishek Gubhaju - 9851312284, 9860747474",
    members: [
      "Amshu K.C. - 9861398272",
      "Ekata Nepal - +977 9813841025",
      "Subash Adhikari - +977 9749238372",
      "Unik Magar - +977 980‑6270609"
    ],
    projectTitle: "Spiritual Eco-Heaven: Journey to Scenic Heights and Sustainable Living",
      status: "approved",
  },
  {
    id: 10,
    name: "Pulchowk Team Year V",
    collegeName: "IOE, Pulchowk Campus",
    mentor: "Ramesh Rai",
    sector: "Cultural Tourism",
    teamLeader: "Anuzsri Oli - 9841601448",
    members: [
      "Drishtant Dhakal - 9841176434",
      "Manush Paudel - 9840043517",
      "Ravi Raman K.C. - 9818206573",
      "Vaskar Malla - 9868985349"
    ],
    projectTitle: "Mundam Serenity Circuit Along the Cultural Trail",
    status: "approved",
  }
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