// import PageHeader from "../components/common/PageHeader"

// const JuryMentors = () => {
//   return (
//     <div>
//       <PageHeader
//         title="Jury & Mentors"
//         description="Meet the experts who will evaluate projects and provide guidance"
//       />
//       <div className="container mx-auto px-4 py-16">
//         <h2 className="text-3xl font-bold mb-6">Our Distinguished Jury</h2>
//         <p className="text-gray-600 mb-8">Information about jury members and mentors will be announced soon.</p>
//       </div>
//     </div>
//   )
// }

// export default JuryMentors


import { useState } from "react"
import PageHeader from "../components/common/PageHeader"
import JuryMentorsList from "../components/jury/JuryMentorsList"
import JuryMentorModal from "../components/jury/JuryMentorModal"
import { Button } from "../ui/Button"

const JuryMentors = () => {
  const [activeCategory, setActiveCategory] = useState("jury")
  const [selectedMentor, setSelectedMentor] = useState(null)
  const handleEmailClick = () => {
    window.location.href = "mailto:sisanbhattarai.dev@gmail.com";
  };
  // Sample data for jury members and mentors
  const juryMembers = [
    {
      id: 1,
      name: "Dr. Anita Sharma",
      title: "Chairperson",
      organization: "Tourism Board of Nepal",
      image: "https://tops.alison.com.np/uploads/speaker_1742803607.png",
      expertise: ["Sustainable Tourism", "Policy Development", "Tourism Marketing"],
      bio: "Dr. Anita Sharma is a renowned expert in sustainable tourism with over 20 years of experience in the industry. As the Chairperson of the Tourism Board of Nepal, she has been instrumental in developing policies that promote responsible tourism practices across the country. She holds a Ph.D. in Tourism Management from Oxford University and has published numerous research papers on sustainable tourism development in the Himalayan region.",
      achievements: [
        "Led the development of Nepal's Sustainable Tourism Framework 2020-2030",
        "Recipient of the International Tourism Excellence Award 2022",
        "Successfully implemented community-based tourism projects in 15 remote villages",
      ],
      linkedin: "https://linkedin.com/in/anita-sharma",
      email: "anita.sharma@tourismboard.gov.np",
    },
    {
      id: 2,
      name: "Rajesh Thapa",
      title: "Director",
      organization: "Koshi Tourism Development",
      image: "https://tops.alison.com.np/uploads/speaker_1742803607.png",
      expertise: ["Destination Development", "Tourism Infrastructure", "Public-Private Partnerships"],
      bio: "Rajesh Thapa brings extensive experience in tourism infrastructure development and destination management. As the Director of Koshi Tourism Development, he oversees strategic initiatives to position Koshi Province as a premier tourism destination in Nepal. With an MBA from Kathmandu University and specialized training in destination management from Singapore Tourism Board, Rajesh has successfully led multiple tourism development projects across Eastern Nepal.",
      achievements: [
        "Developed the Koshi Tourism Master Plan 2023-2028",
        "Secured $5 million in investment for tourism infrastructure in Koshi Province",
        "Established successful tourism corridors connecting 8 districts in Eastern Nepal",
      ],
      linkedin: "https://linkedin.com/in/rajesh-thapa",
      email: "rajesh@koshitourism.org.np",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      title: "Advisor",
      organization: "International Tourism Council",
      image: "https://tops.alison.com.np/uploads/speaker_1742803607.png",
      expertise: ["International Tourism Trends", "Tourism Investment", "Destination Branding"],
      bio: "Sarah Johnson is an international tourism expert with a focus on emerging destinations. As an Advisor at the International Tourism Council, she provides strategic guidance to destinations worldwide on tourism development, branding, and investment attraction. With previous experience at the World Tourism Organization and leading consulting firms, Sarah brings a global perspective to tourism development in Nepal.",
      achievements: [
        "Advised over 20 countries on tourism development strategies",
        "Former Tourism Development Consultant for the World Bank",
        "Author of 'Emerging Destinations: Strategies for Sustainable Growth'",
      ],
      linkedin: "https://linkedin.com/in/sarah-johnson",
      email: "sarah.johnson@itc-global.org",
    },
    {
      id: 4,
      name: "Prakash Gurung",
      title: "President",
      organization: "Nepal Mountaineering Association",
      image: "https://tops.alison.com.np/uploads/speaker_1742803607.png",
      expertise: ["Adventure Tourism", "Mountain Expeditions", "Tourism Safety Standards"],
      bio: "Prakash Gurung is a veteran mountaineer and tourism professional with over 25 years of experience in adventure tourism. As the President of the Nepal Mountaineering Association, he works to promote sustainable mountaineering practices and safety standards. A certified mountain guide who has summited Mt. Everest three times, Prakash combines practical field experience with strategic leadership in adventure tourism development.",
      achievements: [
        "Developed Nepal's first Adventure Tourism Safety Protocol",
        "Led initiatives that increased adventure tourism arrivals by 45% over five years",
        "Recipient of the National Tourism Hero Award 2021",
      ],
      linkedin: "https://linkedin.com/in/prakash-gurung",
      email: "president@nepalmountaineering.org",
    },
  ]

  const mentors = [
    {
      id: 5,
      name: "Maya Sherpa",
      title: "Founder & CEO",
      organization: "EcoTrek Nepal",
      image: "https://tops.alison.com.np/uploads/speaker_1742803607.png",
      expertise: ["Eco-Tourism", "Sustainable Business Models", "Digital Marketing"],
      bio: "Maya Sherpa is a successful tourism entrepreneur who founded EcoTrek Nepal, a leading sustainable trekking company. Her business model focuses on environmental conservation, fair employment practices, and authentic cultural experiences. Maya holds an MBA from Tribhuvan University and has completed specialized training in sustainable tourism at Cornell University. Her company has been recognized internationally for its innovative approach to responsible tourism.",
      achievements: [
        "Built EcoTrek Nepal from startup to a company serving 5,000+ tourists annually",
        "Winner of the Asia Responsible Tourism Award 2023",
        "Pioneered carbon-neutral trekking experiences in the Everest region",
      ],
      linkedin: "https://linkedin.com/in/maya-sherpa",
      email: "maya@ecotreknepal.com",
    },
    {
      id: 6,
      name: "Dr. Ramesh Poudel",
      title: "Professor",
      organization: "Kathmandu School of Tourism",
      image: "https://tops.alison.com.np/uploads/speaker_1742803607.png",
      expertise: ["Tourism Education", "Research Methodology", "Cultural Tourism"],
      bio: "Dr. Ramesh Poudel is a leading academic in tourism studies with a focus on cultural tourism development. As a Professor at the Kathmandu School of Tourism, he mentors students and conducts research on sustainable tourism practices. With a Ph.D. in Cultural Anthropology and extensive fieldwork experience, Dr. Poudel brings academic rigor and research expertise to tourism project development.",
      achievements: [
        "Published over 30 research papers in international tourism journals",
        "Developed Nepal's first comprehensive tourism curriculum",
        "Research consultant for UNESCO World Heritage Sites in Nepal",
      ],
      linkedin: "https://linkedin.com/in/ramesh-poudel",
      email: "r.poudel@kst.edu.np",
    },
    {
      id: 7,
      name: "Jennifer Wong",
      title: "Digital Tourism Consultant",
      organization: "Tourism Tech Asia",
      image: "https://tops.alison.com.np/uploads/speaker_1742803607.png",
      expertise: ["Digital Transformation", "Online Marketing", "Tourism Technology"],
      bio: "Jennifer Wong specializes in digital transformation for tourism businesses across Asia. With experience working with major online travel platforms and technology companies, she helps traditional tourism businesses adapt to the digital landscape. Jennifer has an MSc in Digital Marketing from Singapore Management University and certification in Tourism Analytics from Cornell University.",
      achievements: [
        "Helped over 100 tourism SMEs establish successful digital presence",
        "Former Digital Strategy Lead at Booking.com Asia Pacific",
        "Speaker at major tourism technology conferences across Asia",
      ],
      linkedin: "https://linkedin.com/in/jennifer-wong",
      email: "jennifer@tourismtechasia.com",
    },
    {
      id: 8,
      name: "Binod Magar",
      title: "Investment Director",
      organization: "Nepal Tourism Investment Fund",
      image: "https://tops.alison.com.np/uploads/speaker_1742803607.png",
      expertise: ["Tourism Finance", "Investment Analysis", "Business Planning"],
      bio: "Binod Magar is a financial expert specializing in tourism investment. As the Investment Director at Nepal Tourism Investment Fund, he evaluates tourism projects for funding and provides financial advisory services to tourism entrepreneurs. With a background in investment banking and an MBA in Finance from Harvard Business School, Binod brings strong financial expertise to tourism project development.",
      achievements: [
        "Facilitated over $10 million in investments for tourism startups in Nepal",
        "Developed financial modeling templates specifically for tourism businesses",
        "Former investment analyst at Goldman Sachs with focus on hospitality sector",
      ],
      linkedin: "https://linkedin.com/in/binod-magar",
      email: "binod@ntif.com.np",
    },
  ]

  return (
    <div>
      <PageHeader
        title="Jury & Mentors"
        description="Meet the experts who will evaluate projects and provide guidance"
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="section-title">Our Distinguished Experts</h2>
          <p className="text-lg text-gray-700 mb-8">
            ToPS Koshi 2025 brings together industry leaders, academics, and successful entrepreneurs who will evaluate
            projects and provide valuable guidance to participants.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant={activeCategory === "jury" ? "primary" : "outline"}
              onClick={() => setActiveCategory("jury")}
            >
              Jury Panel
            </Button>
            <Button
              variant={activeCategory === "mentors" ? "primary" : "outline"}
              onClick={() => setActiveCategory("mentors")}
            >
              Project Mentors
            </Button>
          </div>
        </div>

        <JuryMentorsList
          experts={activeCategory === "jury" ? juryMembers : mentors}
          onSelectExpert={(expert) => setSelectedMentor(expert)}
        />

        {selectedMentor && <JuryMentorModal expert={selectedMentor} onClose={() => setSelectedMentor(null)} />}

        <div className="mt-16 p-8 bg-blue-50 rounded-xl text-center">
          <h3 className="text-xl font-bold mb-4">Interested in becoming a mentor?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We're looking for experienced professionals to mentor participating teams. If you have expertise in tourism,
            business development, or related fields and would like to contribute to the development of innovative
            tourism projects, we'd love to hear from you.
          </p>
  

<Button variant="primary" onClick={handleEmailClick}>
  Apply to Become a Mentor
</Button>
        </div>
      </div>
    </div>
  )
}

export default JuryMentors

