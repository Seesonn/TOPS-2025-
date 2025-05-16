// // import PageHeader from "../components/common/PageHeader"

// // const JuryMentors = () => {
// //   return (
// //     <div>
// //       <PageHeader
// //         title="Jury & Mentors"
// //         description="Meet the experts who will evaluate projects and provide guidance"
// //       />
// //       <div className="container mx-auto px-4 py-16">
// //         <h2 className="text-3xl font-bold mb-6">Our Distinguished Jury</h2>
// //         <p className="text-gray-600 mb-8">Information about jury members and mentors will be announced soon.</p>
// //       </div>
// //     </div>
// //   )
// // }

// // export default JuryMentors

// // import { useState } from "react"
// // import PageHeader from "../components/common/PageHeader"
// // import JuryMentorsList from "../components/jury/JuryMentorsList"
// // import JuryMentorModal from "../components/jury/JuryMentorModal"
// // import { Button } from "../ui/Button"
// // import Ashlesha from "../assests/AshleshaKarki.jpeg"
// // import an from "../assests/an.png"

// // const JuryMentors = () => {
// //   const [activeCategory, setActiveCategory] = useState("jury")
// //   const [selectedMentor, setSelectedMentor] = useState(null)
// //   const handleEmailClick = () => {
// //     window.location.href = "mailto:sisanbhattarai.dev@gmail.com";
// //   };
// //   // Sample data for jury members and mentors
// //   const juryMembers = [
// //     {
// //       id: 1,
// //       name: "Dr. Anita Sharma",
// //       title: "Chairperson",
// //       organization: "Tourism Board of Nepal",
// //       image: "https://imgs.search.brave.com/GVQhBlUR8C0YlnBG_cMBRa19Bq5lDtMgOG64_aRZlKs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L0xHRF9HYW1p/bmdfYXRfdGhlXzIw/MTVfTFBMX1N1bW1l/cl9GaW5hbHMuanBn",
// //       expertise: ["Sustainable Tourism", "Policy Development", "Tourism Marketing"],
// //       bio: "Dr. Anita Sharma is a renowned expert in sustainable tourism with over 20 years of experience in the industry. As the Chairperson of the Tourism Board of Nepal, she has been instrumental in developing policies that promote responsible tourism practices across the country. She holds a Ph.D. in Tourism Management from Oxford University and has published numerous research papers on sustainable tourism development in the Himalayan region.",
// //       achievements: [
// //         "Led the development of Nepal's Sustainable Tourism Framework 2020-2030",
// //         "Recipient of the International Tourism Excellence Award 2022",
// //         "Successfully implemented community-based tourism projects in 15 remote villages",
// //       ],
// //       linkedin: "https://linkedin.com/in/anita-sharma",
// //       email: "anita.sharma@tourismboard.gov.np",
// //     },
// //     {
// //       id: 2,
// //       name: "Rajesh Thapa",
// //       title: "Director",
// //       organization: "Koshi Tourism Development",
// //       image: "https://imgs.search.brave.com/GVQhBlUR8C0YlnBG_cMBRa19Bq5lDtMgOG64_aRZlKs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L0xHRF9HYW1p/bmdfYXRfdGhlXzIw/MTVfTFBMX1N1bW1l/cl9GaW5hbHMuanBn",
// //       expertise: ["Destination Development", "Tourism Infrastructure", "Public-Private Partnerships"],
// //       bio: "Rajesh Thapa brings extensive experience in tourism infrastructure development and destination management. As the Director of Koshi Tourism Development, he oversees strategic initiatives to position Koshi Province as a premier tourism destination in Nepal. With an MBA from Kathmandu University and specialized training in destination management from Singapore Tourism Board, Rajesh has successfully led multiple tourism development projects across Eastern Nepal.",
// //       achievements: [
// //         "Developed the Koshi Tourism Master Plan 2023-2028",
// //         "Secured $5 million in investment for tourism infrastructure in Koshi Province",
// //         "Established successful tourism corridors connecting 8 districts in Eastern Nepal",
// //       ],
// //       linkedin: "https://linkedin.com/in/rajesh-thapa",
// //       email: "rajesh@koshitourism.org.np",
// //     },
// //     {
// //       id: 3,
// //       name: "Sisan Bhattarai",
// //       title: "Advisor",
// //       organization: "International Tourism Council",
// //       image: "https://imgs.search.brave.com/GVQhBlUR8C0YlnBG_cMBRa19Bq5lDtMgOG64_aRZlKs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L0xHRF9HYW1p/bmdfYXRfdGhlXzIw/MTVfTFBMX1N1bW1l/cl9GaW5hbHMuanBn",
// //       expertise: ["International Tourism Trends", "Tourism Investment", "Destination Branding"],
// //       bio: "Sisan Bhattarai is an international tourism expert with a focus on emerging destinations. As an Advisor at the International Tourism Council, she provides strategic guidance to destinations worldwide on tourism development, branding, and investment attraction. With previous experience at the World Tourism Organization and leading consulting firms, Sarah brings a global perspective to tourism development in Nepal.",
// //       achievements: [
// //         "Advised over 20 countries on tourism development strategies",
// //         "Former Tourism Development Consultant for the World Bank",
// //         "Author of 'Emerging Destinations: Strategies for Sustainable Growth'",
// //       ],
// //       linkedin: "",
// //       email: "sarah.johnson@itc-global.org",
// //     },
// //     {
// //       id: 4,
// //       name: "Prakash Gurung",
// //       title: "President",
// //       organization: "Nepal Mountaineering Association",
// //       image: "https://imgs.search.brave.com/GVQhBlUR8C0YlnBG_cMBRa19Bq5lDtMgOG64_aRZlKs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L0xHRF9HYW1p/bmdfYXRfdGhlXzIw/MTVfTFBMX1N1bW1l/cl9GaW5hbHMuanBn",
// //       expertise: ["Adventure Tourism", "Mountain Expeditions", "Tourism Safety Standards"],
// //       bio: "Prakash Gurung is a veteran mountaineer and tourism professional with over 25 years of experience in adventure tourism. As the President of the Nepal Mountaineering Association, he works to promote sustainable mountaineering practices and safety standards. A certified mountain guide who has summited Mt. Everest three times, Prakash combines practical field experience with strategic leadership in adventure tourism development.",
// //       achievements: [
// //         "Developed Nepal's first Adventure Tourism Safety Protocol",
// //         "Led initiatives that increased adventure tourism arrivals by 45% over five years",
// //         "Recipient of the National Tourism Hero Award 2021",
// //       ],
// //       linkedin: "https://linkedin.com/in/prakash-gurung",
// //       email: "president@nepalmountaineering.org",
// //     },
// //   ]

// //   const mentors = [
// //     {
// //       id: 5,
// //       name: "Animesh Bastola",
// //       title: "Mentor Co-ordinator",
// //       organization: " United National College, Dharan, Sunsari",
// //       image: an,
// //       expertise: ["Eco-Tourism", "Sustainable Business Models", "Digital Marketing"],
// //       bio: "Maya Sherpa is a successful tourism entrepreneur who founded EcoTrek Nepal, a leading sustainable trekking company. Her business model focuses on environmental conservation, fair employment practices, and authentic cultural experiences. Maya holds an MBA from Tribhuvan University and has completed specialized training in sustainable tourism at Cornell University. Her company has been recognized internationally for its innovative approach to responsible tourism.",
// //       achievements: [
// //         "Built EcoTrek Nepal from startup to a company serving 5,000+ tourists annually",
// //         "Winner of the Asia Responsible Tourism Award 2023",
// //         "Pioneered carbon-neutral trekking experiences in the Everest region",
// //       ],
// //       linkedin: "https://linkedin.com/in/maya-sherpa",
// //       email: "maya@ecotreknepal.com",
// //     },
// //     {
// //       id: 6,
// //       name: "Ashlesha Karki",
// //       title: "Deputy Managing Director",
// //       organization: " Hotel Mechi Crown",
// //       image: Ashlesha ,
// //       expertise: ["Tourism Education", "Research Methodology", "Cultural Tourism"],
// //       bio: "Dr. Ramesh Poudel is a leading academic in tourism studies with a focus on cultural tourism development. As a Professor at the Kathmandu School of Tourism, he mentors students and conducts research on sustainable tourism practices. With a Ph.D. in Cultural Anthropology and extensive fieldwork experience, Dr. Poudel brings academic rigor and research expertise to tourism project development.",
// //       achievements: [
// //         "Published over 30 research papers in international tourism journals",
// //         "Developed Nepal's first comprehensive tourism curriculum",
// //         "Research consultant for UNESCO World Heritage Sites in Nepal",
// //       ],
// //       linkedin: "https://www.linkedin.com/in/ashlesha-karki-75739a182",
// //       email: "r.poudel@kst.edu.np",
// //     },
// //     {
// //       id: 7,
// //       name: "Basudev Baral",
// //       title: "Digital Tourism Consultant",
// //       organization: "Tourism Tech Asia",
// //       image: "https://imgs.search.brave.com/GVQhBlUR8C0YlnBG_cMBRa19Bq5lDtMgOG64_aRZlKs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L0xHRF9HYW1p/bmdfYXRfdGhlXzIw/MTVfTFBMX1N1bW1l/cl9GaW5hbHMuanBn",
// //       expertise: ["Digital Transformation", "Online Marketing", "Tourism Technology"],
// //       bio: "Jennifer Wong specializes in digital transformation for tourism businesses across Asia. With experience working with major online travel platforms and technology companies, she helps traditional tourism businesses adapt to the digital landscape. Jennifer has an MSc in Digital Marketing from Singapore Management University and certification in Tourism Analytics from Cornell University.",
// //       achievements: [
// //         "Helped over 100 tourism SMEs establish successful digital presence",
// //         "Former Digital Strategy Lead at Booking.com Asia Pacific",
// //         "Speaker at major tourism technology conferences across Asia",
// //       ],
// //       linkedin: "https://linkedin.com/in/jennifer-wong",
// //       email: "jennifer@tourismtechasia.com",
// //     },
// //     {
// //       id: 8,
// //       name: "Bhabish Shrestha",
// //       title: "Journalist and tourism researcher",
// //       organization: "Nepal Tourism Investment Fund",
// //       image: "https://imgs.search.brave.com/GVQhBlUR8C0YlnBG_cMBRa19Bq5lDtMgOG64_aRZlKs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L0xHRF9HYW1p/bmdfYXRfdGhlXzIw/MTVfTFBMX1N1bW1l/cl9GaW5hbHMuanBn",
// //       expertise: ["Tourism Finance", "Investment Analysis", "Business Planning"],
// //       bio: "Binod Magar is a financial expert specializing in tourism investment. As the Investment Director at Nepal Tourism Investment Fund, he evaluates tourism projects for funding and provides financial advisory services to tourism entrepreneurs. With a background in investment banking and an MBA in Finance from Harvard Business School, Binod brings strong financial expertise to tourism project development.",
// //       achievements: [
// //         "Facilitated over $10 million in investments for tourism startups in Nepal",
// //         "Developed financial modeling templates specifically for tourism businesses",
// //         "Former investment analyst at Goldman Sachs with focus on hospitality sector",
// //       ],
// //       linkedin: "https://linkedin.com/in/binod-magar",
// //       email: "binod@ntif.com.np",
// //     },
// //     {
// //       id: 9,
// //       name: "Birat Anupam",
// //       title: "Journalist and tourism researcher",
// //       organization: "Nepal Tourism Investment Fund",
// //       image: "https://imgs.search.brave.com/GVQhBlUR8C0YlnBG_cMBRa19Bq5lDtMgOG64_aRZlKs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L0xHRF9HYW1p/bmdfYXRfdGhlXzIw/MTVfTFBMX1N1bW1l/cl9GaW5hbHMuanBn",
// //       expertise: ["Tourism Finance", "Investment Analysis", "Business Planning"],
// //       bio: "Binod Magar is a financial expert specializing in tourism investment. As the Investment Director at Nepal Tourism Investment Fund, he evaluates tourism projects for funding and provides financial advisory services to tourism entrepreneurs. With a background in investment banking and an MBA in Finance from Harvard Business School, Binod brings strong financial expertise to tourism project development.",
// //       achievements: [
// //         "Facilitated over $10 million in investments for tourism startups in Nepal",
// //         "Developed financial modeling templates specifically for tourism businesses",
// //         "Former investment analyst at Goldman Sachs with focus on hospitality sector",
// //       ],
// //       linkedin: "https://linkedin.com/in/binod-magar",
// //       email: "binod@ntif.com.np",
// //     },
// //     {
// //       id: 10,
// //       name: "Ramesh K Rai",
// //       title: "Greater Mundum Trail Initiator and Promoter",
// //       organization: "Nepal Tourism Investment Fund",
// //       image: "https://imgs.search.brave.com/GVQhBlUR8C0YlnBG_cMBRa19Bq5lDtMgOG64_aRZlKs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L0xHRF9HYW1p/bmdfYXRfdGhlXzIw/MTVfTFBMX1N1bW1l/cl9GaW5hbHMuanBn",
// //       expertise: ["Tourism Finance", "Investment Analysis", "Business Planning"],
// //       bio: "Binod Magar is a financial expert specializing in tourism investment. As the Investment Director at Nepal Tourism Investment Fund, he evaluates tourism projects for funding and provides financial advisory services to tourism entrepreneurs. With a background in investment banking and an MBA in Finance from Harvard Business School, Binod brings strong financial expertise to tourism project development.",
// //       achievements: [
// //         "Facilitated over $10 million in investments for tourism startups in Nepal",
// //         "Developed financial modeling templates specifically for tourism businesses",
// //         "Former investment analyst at Goldman Sachs with focus on hospitality sector",
// //       ],
// //       linkedin: "https://linkedin.com/in/binod-magar",
// //       email: "binod@ntif.com.np",
// //     },
// //     {
// //       id: 11,
// //       name: "Suman Ghimire",
// //       title: "Senior Manager  ",
// //       organization: "Tourism Marketing and Promotion Department : NTB",
// //       image: "https://imgs.search.brave.com/GVQhBlUR8C0YlnBG_cMBRa19Bq5lDtMgOG64_aRZlKs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L0xHRF9HYW1p/bmdfYXRfdGhlXzIw/MTVfTFBMX1N1bW1l/cl9GaW5hbHMuanBn",
// //       expertise: ["Tourism Finance", "Investment Analysis", "Business Planning"],
// //       bio: "Binod Magar is a financial expert specializing in tourism investment. As the Investment Director at Nepal Tourism Investment Fund, he evaluates tourism projects for funding and provides financial advisory services to tourism entrepreneurs. With a background in investment banking and an MBA in Finance from Harvard Business School, Binod brings strong financial expertise to tourism project development.",
// //       achievements: [
// //         "Facilitated over $10 million in investments for tourism startups in Nepal",
// //         "Developed financial modeling templates specifically for tourism businesses",
// //         "Former investment analyst at Goldman Sachs with focus on hospitality sector",
// //       ],
// //       linkedin: "https://linkedin.com/in/binod-magar",
// //       email: "binod@ntif.com.np",
// //     },

// //   ]

// //   return (
// //     <div>
// //       <PageHeader
// //         title="Jury & Mentors"
// //         description="Meet the experts who will evaluate projects and provide guidance"
// //         backgroundImage="https://fis-api.luxuryholidaynepal.com/media/attachments/nepal.jpg"
// //       />

// //       <div className="container mx-auto px-4 py-16">
// //         <div className="max-w-4xl mx-auto mb-16 text-center">
// //           <h2 className="section-title">Our Distinguished Experts</h2>
// //           <p className="text-lg text-gray-700 mb-8">
// //             ToPS Koshi 2025 brings together industry leaders, academics, and successful entrepreneurs who will evaluate
// //             projects and provide valuable guidance to participants.
// //           </p>

// //           <div className="flex justify-center gap-4 mb-12">
// //             <Button
// //               variant={activeCategory === "jury" ? "primary" : "outline"}
// //               onClick={() => setActiveCategory("jury")}
// //             >
// //               Jury Panel
// //             </Button>
// //             <Button
// //               variant={activeCategory === "mentors" ? "primary" : "outline"}
// //               onClick={() => setActiveCategory("mentors")}
// //             >
// //               Project Mentors
// //             </Button>
// //           </div>
// //         </div>

// //         <JuryMentorsList
// //           experts={activeCategory === "jury" ? juryMembers : mentors}
// //           onSelectExpert={(expert) => setSelectedMentor(expert)}
// //         />

// //         {selectedMentor && <JuryMentorModal expert={selectedMentor} onClose={() => setSelectedMentor(null)} />}

// //         <div className="mt-16 p-8 bg-blue-50 rounded-xl text-center">
// //           <h3 className="text-xl font-bold mb-4">Interested in becoming a mentor?</h3>
// //           <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
// //             We're looking for experienced professionals to mentor participating teams. If you have expertise in tourism,
// //             business development, or related fields and would like to contribute to the development of innovative
// //             tourism projects, we'd love to hear from you.
// //           </p>

// // <Button variant="primary" onClick={handleEmailClick}>
// //   Apply to Become a Mentor
// // </Button>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default JuryMentors

// import { useState } from "react";
// import PageHeader from "../components/common/PageHeader";
// import JuryMentorsList from "../components/jury/JuryMentorsList";
// import JuryMentorModal from "../components/jury/JuryMentorModal";
// import { Button } from "../ui/Button";
// import Ashlesha from "../assests/AshleshaKarki.jpeg";
// import an from "../assests/an.png";
// import a1 from "../assests/Adviser-01.png"
// import a2 from "../assests/Adviser-02.png"
// import a3 from "../assests/Adviser-03.png"
// import a4 from "../assests/Adviser-04.png"
// import a5 from "../assests/Adviser-05.png"
// import a6 from "../assests/Adviser-06.png"
// import a7 from "../assests/Adviser-07.png"
// import a8 from "../assests/Adviser-08.png"
// import a9 from "../assests/Adviser-09.png"
// import a10 from "../assests/Adviser-10.png"
// import a11 from "../assests/Adviser-11.png"
// import m1 from "../assests/Mentors-01.png"
// import m2 from "../assests/Mentors-02.png"
// import m3 from "../assests/Mentors-03.png"      
// import m4 from "../assests/Mentors-04.png"
// import m5 from "../assests/Mentors-05.png"
// import m6 from "../assests/Mentors-06.png"
// import m7 from "../assests/Mentors-07.png"
// import m8 from "../assests/Mentors-08.png"
// import m9 from "../assests/Mentors-09.png"
// import m10 from "../assests/Mentors-10.png"



// const JuryMentors = () => {
//   const [selectedExpert, setSelectedExpert] = useState(null);

//   const handleEmailClick = () => {
//     window.location.href = "mailto:sisanbhattarai.dev@gmail.com";
//   };

//   // Advisory Board Members
//   const advisoryBoard = [
//     {
//       id: 1,
//       name: "",
//       title: "Chairperson",
//       organization: "Tourism Board of Nepal",
//       image: a2,
//       expertise: [
//         // "Sustainable Tourism",
//         // "Policy Development",
//         // "Tourism Marketing",
//       ],
//       bio: "Dr. Anita Sharma is a renowned expert in sustainable tourism with over 20 years of experience in the industry...",
//       achievements: [
//         // "Led the development of Nepal's Sustainable Tourism Framework 2020-2030",
//         // "Recipient of the International Tourism Excellence Award 2022",
//       ],
//       linkedin: "https://linkedin.com/in/anita-sharma",
//       email: "anita.sharma@tourismboard.gov.np",
//     },
//      {
//       id: 2,
//       name: "Dr. Anita Sharma",
//       title: "Chairperson",
//       organization: "Tourism Board of Nepal",
//       image: a3,
//       expertise: [
//         // "Sustainable Tourism",
//         // "Policy Development",
//         // "Tourism Marketing",
//       ],
//       bio: "Dr. Anita Sharma is a renowned expert in sustainable tourism with over 20 years of experience in the industry...",
//       achievements: [
//         // "Led the development of Nepal's Sustainable Tourism Framework 2020-2030",
//         // "Recipient of the International Tourism Excellence Award 2022",
//       ],
//       linkedin: "https://linkedin.com/in/anita-sharma",
//       email: "anita.sharma@tourismboard.gov.np",
//     },
//      {
//       id: 3,
//       name: "Dr. Anita Sharma",
//       title: "Chairperson",
//       organization: "Tourism Board of Nepal",
//       image: a4,
//       expertise: [
//         // "Sustainable Tourism",
//         // "Policy Development",
//         // "Tourism Marketing",
//       ],
//       bio: "Dr. Anita Sharma is a renowned expert in sustainable tourism with over 20 years of experience in the industry...",
//       achievements: [
//         // "Led the development of Nepal's Sustainable Tourism Framework 2020-2030",
//         // "Recipient of the International Tourism Excellence Award 2022",
//       ],
//       linkedin: "https://linkedin.com/in/anita-sharma",
//       email: "anita.sharma@tourismboard.gov.np",
//     },
//      {
//       id: 4,
//       name: "Dr. Anita Sharma",
//       title: "Chairperson",
//       organization: "Tourism Board of Nepal",
//       image: a5,
//       expertise: [
//         // "Sustainable Tourism",
//         // "Policy Development",
//         // "Tourism Marketing",
//       ],
//       bio: "Dr. Anita Sharma is a renowned expert in sustainable tourism with over 20 years of experience in the industry...",
//       achievements: [
//         // "Led the development of Nepal's Sustainable Tourism Framework 2020-2030",
//         // "Recipient of the International Tourism Excellence Award 2022",
//       ],
//       linkedin: "https://linkedin.com/in/anita-sharma",
//       email: "anita.sharma@tourismboard.gov.np",
//     },
//      {
//       id: 5,
//       name: "Dr. Anita Sharma",
//       title: "Chairperson",
//       organization: "Tourism Board of Nepal",
//       image: a1,
//       expertise: [
//         // "Sustainable Tourism",
//         // "Policy Development",
//         // "Tourism Marketing",
//       ],
//       bio: "Dr. Anita Sharma is a renowned expert in sustainable tourism with over 20 years of experience in the industry...",
//       achievements: [
//         // "Led the development of Nepal's Sustainable Tourism Framework 2020-2030",
//         // "Recipient of the International Tourism Excellence Award 2022",
//       ],
//       linkedin: "https://linkedin.com/in/anita-sharma",
//       email: "anita.sharma@tourismboard.gov.np",
//     },
//      {
//       id: 6,
//       name: "Dr. Anita Sharma",
//       title: "Chairperson",
//       organization: "Tourism Board of Nepal",
//       image: a6,
//       expertise: [
//       ]
//       bio: "Dr. Anita Sharma is a renowned expert in sustainable tourism with over 20 years of experience in the industry...",
//       achievements: [
       
//       ],
//       linkedin: "https://linkedin.com/in/anita-sharma",
//       email: "anita.sharma@tourismboard.gov.np",
//     },
//     {
//       id: 2,
//       name: "Rajesh Thapa",
//       title: "Director",
//       organization: "Koshi Tourism Development",
//       image:a7,
//       expertise: ["Destination Development", "Tourism Infrastructure"],
//       bio: "Rajesh Thapa brings extensive experience in tourism infrastructure development...",
//       achievements: [
//         "Developed the Koshi Tourism Master Plan 2023-2028",
//         "Secured $5 million in investment for tourism infrastructure",
//       ],
//       linkedin: "https://linkedin.com/in/rajesh-thapa",
//       email: "rajesh@koshitourism.org.np",
//     },
//     {
//       id: 3,
//       name: "Sisan Bhattarai",
//       title: "Advisor",
//       organization: "International Tourism Council",
//       image: a8,
//       expertise: ["International Tourism Trends", "Tourism Investment"],
//       bio: "Sisan Bhattarai is an international tourism expert with a focus on emerging destinations...",
//       achievements: [
        
//       ],
//       linkedin: "",
//       email: "sarah.johnson@itc-global.org",
//     },
//      {
//       id: 3,
//       name: "Sisan Bhattarai",
//       title: "Advisor",
//       organization: "International Tourism Council",
//       image: a9,
//       expertise: ["International Tourism Trends", "Tourism Investment"],
//       bio: "Sisan Bhattarai is an international tourism expert with a focus on emerging destinations...",
//       achievements: [
        
//       ],
//       linkedin: "",
//       email: "sarah.johnson@itc-global.org",
//     },
//      {
//       id: 3,
//       name: "Sisan Bhattarai",
//       title: "Advisor",
//       organization: "International Tourism Council",
//       image: a10,
//       expertise: ["International Tourism Trends", "Tourism Investment"],
//       bio: "Sisan Bhattarai is an international tourism expert with a focus on emerging destinations...",
//       achievements: [
        
//       ],
//       linkedin: "",
//       email: "sarah.johnson@itc-global.org",
//     },
//      {
//       id: 3,
//       name: "Sisan Bhattarai",
//       title: "Advisor",
//       organization: "International Tourism Council",
//       image: a11,
//       expertise: ["International Tourism Trends", "Tourism Investment"],
//       bio: "Sisan Bhattarai is an international tourism expert with a focus on emerging destinations...",
//       achievements: [
        
//       ],
//       linkedin: "",
//       email: "",
//     },
    
//     // Add more advisory board members as needed
//   ];

//   // Jury Members
//   const juryMembers = [
//     {
//       id: 2,
//       name: "Rajesh Thapa",
//       title: "Director",
//       organization: "Koshi Tourism Development",
//       image:a7,
//       expertise: ["Destination Development", "Tourism Infrastructure"],
//       bio: "Rajesh Thapa brings extensive experience in tourism infrastructure development...",
//       achievements: [
//         "Developed the Koshi Tourism Master Plan 2023-2028",
//         "Secured $5 million in investment for tourism infrastructure",
//       ],
//       linkedin: "https://linkedin.com/in/rajesh-thapa",
//       email: "rajesh@koshitourism.org.np",
//     },
//     {
//       id: 3,
//       name: "Sisan Bhattarai",
//       title: "Advisor",
//       organization: "International Tourism Council",
//       image: a8,
//       expertise: ["International Tourism Trends", "Tourism Investment"],
//       bio: "Sisan Bhattarai is an international tourism expert with a focus on emerging destinations...",
//       achievements: [
        
//       ],
//       linkedin: "",
//       email: "sarah.johnson@itc-global.org",
//     },
//      {
//       id: 3,
//       name: "Sisan Bhattarai",
//       title: "Advisor",
//       organization: "International Tourism Council",
//       image: a9,
//       expertise: ["International Tourism Trends", "Tourism Investment"],
//       bio: "Sisan Bhattarai is an international tourism expert with a focus on emerging destinations...",
//       achievements: [
        
//       ],
//       linkedin: "",
//       email: "sarah.johnson@itc-global.org",
//     },
//      {
//       id: 3,
//       name: "Sisan Bhattarai",
//       title: "Advisor",
//       organization: "International Tourism Council",
//       image: a10,
//       expertise: ["International Tourism Trends", "Tourism Investment"],
//       bio: "Sisan Bhattarai is an international tourism expert with a focus on emerging destinations...",
//       achievements: [
        
//       ],
//       linkedin: "",
//       email: "sarah.johnson@itc-global.org",
//     },
//      {
//       id: 3,
//       name: "Sisan Bhattarai",
//       title: "Advisor",
//       organization: "International Tourism Council",
//       image: a11,
//       expertise: ["International Tourism Trends", "Tourism Investment"],
//       bio: "Sisan Bhattarai is an international tourism expert with a focus on emerging destinations...",
//       achievements: [
        
//       ],
//       linkedin: "",
//       email: "sarah.johnson@itc-global.org",
//     },
//   ];

//   // Mentors
//   const mentors = [
//     {
//       id: 4,
//       name: "Animesh Bastola",
//       title: "Mentor Co-ordinator",
//       organization: "United National College, Dharan, Sunsari",
//       image: an,
//       expertise: ["Eco-Tourism", "Sustainable Business Models"],
//       bio: "Maya Sherpa is a successful tourism entrepreneur who founded EcoTrek Nepal...",
//       achievements: [
//         "Built EcoTrek Nepal from startup to a company serving 5,000+ tourists annually",
//         "Winner of the Asia Responsible Tourism Award 2023",
//       ],
//       linkedin: "https://linkedin.com/in/maya-sherpa",
//       email: "maya@ecotreknepal.com",
//     },
//     {
//       id: 5,
//       name: "Ashlesha Karki",
//       title: "Deputy Managing Director",
//       organization: "Hotel Mechi Crown",
//       image: Ashlesha,
//       expertise: ["Tourism Education", "Research Methodology"],
//       bio: "Dr. Ramesh Poudel is a leading academic in tourism studies...",
//       achievements: [
//         "Published over 30 research papers in international tourism journals",
//         "Developed Nepal's first comprehensive tourism curriculum",
//       ],
//       linkedin: "https://www.linkedin.com/in/ashlesha-karki-75739a182",
//       email: "r.poudel@kst.edu.np",
//     },
//     // Add more mentors as needed
//   ];

//   return (
//     <div>
//       <PageHeader
//         title="Advisory Board, Jury & Mentors"
//         description="Meet the experts who will guide and evaluate projects"
//         backgroundImage="https://fis-api.luxuryholidaynepal.com/media/attachments/nepal.jpg"
//       />

//       <div className="container mx-auto px-4 py-16">
//         {/* <div className="max-w-4xl mx-auto mb-16 text-center">
//           <h2 className="section-title">Our Distinguished Experts</h2>
//           <p className="text-lg text-gray-700 mb-8">
//             ToPS Koshi 2025 brings together industry leaders, academics, and successful entrepreneurs who will guide
//             and evaluate innovative tourism projects.
//           </p>
//         </div> */}

//         {/* Advisory Board Section */}
//         <section className="mb-20">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-center mb-12">
//               <span className="text-[#223F80]">Advisory</span>{" "}
//               <span className="text-[#F58432]">Board</span>
//             </h2>

//             <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//               Our Advisory Board provides strategic direction and oversight for
//               the ToPS Koshi 2025 initiative.
//             </p>
//           </div>
//           <JuryMentorsList
//             experts={advisoryBoard}
//             onSelectExpert={(expert) => setSelectedExpert(expert)}
//           />
//         </section>

//         {/* Jury Panel Section */}
//         <section className="mb-20">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-center mb-12">
//               <span className="text-[#223F80]">Jury</span>{" "}
//               <span className="text-[#F58432]">Panel</span>
//             </h2>

//             <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//               The distinguished jury members who will evaluate projects based on
//               innovation, feasibility, and potential impact. .
//             </p>
//           </div>
//           <JuryMentorsList
//             experts={juryMembers}
//             onSelectExpert={(expert) => setSelectedExpert(expert)}
//           />
//         </section>

//         {/* Mentors Section */}
//         <section className="mb-20">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-center mb-12">
//               <span className="text-[#223F80]">Project</span>{" "}
//               <span className="text-[#F58432]"> Mentors</span>
//             </h2>

//             <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//               Our mentors provide hands-on guidance to help participants refine
//               their projects throughout the competition.
//             </p>
//           </div>
//           <JuryMentorsList
//             experts={mentors}
//             onSelectExpert={(expert) => setSelectedExpert(expert)}
//           />
//         </section>

//         {/* Contact Section */}
//         <div className="mt-16 p-8 bg-blue-50 rounded-xl text-center">
//           <h3 className="text-xl font-bold mb-4">
//             Interested in joining our team of experts?
//           </h3>
//           <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
//             We're looking for experienced professionals to join our advisory
//             board, jury panel, or mentor network. If you have expertise in
//             tourism, business development, or related fields, we'd love to hear
//             from you.
//           </p>
//           <Button variant="primary" onClick={handleEmailClick}>
//             Contact Us
//           </Button>
//         </div>

//         {selectedExpert && (
//           <JuryMentorModal
//             expert={selectedExpert}
//             onClose={() => setSelectedExpert(null)}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default JuryMentors;

import { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import JuryMentorsList from "../components/jury/JuryMentorsList";
import JuryMentorModal from "../components/jury/JuryMentorModal";
// import { Button } from "../ui/Button";
// import Ashlesha from "../assests/AshleshaKarki.jpeg";
// import an from "../assests/an.png";
import a1 from "../assests/Adviser-01.png";
import a2 from "../assests/Adviser-02.png";
import a3 from "../assests/Adviser-03.png";
import a4 from "../assests/Adviser-04.png";
import a5 from "../assests/Adviser-05.png";
import a6 from "../assests/Adviser-06.png";
import a7 from "../assests/Adviser-07.png";
import a8 from "../assests/Adviser-08.png";
import a9 from "../assests/Adviser-09.png";
import a10 from "../assests/Adviser-10.png";
import a11 from "../assests/Adviser-11.png";
import m1 from "../assests/Mentors-01.png";
import m2 from "../assests/Mentors-02.png";
import m3 from "../assests/Mentors-03.png";      
import m4 from "../assests/Mentors-04.png";
import m5 from "../assests/Mentors-05.png";
import m6 from "../assests/Mentors-06.png";
import m7 from "../assests/Mentors-07.png";
import m8 from "../assests/Mentors-08.png";
import m9 from "../assests/Mentors-09.png";
import m10 from "../assests/Mentors-10.png";

const JuryMentors = () => {
  const [selectedExpert, setSelectedExpert] = useState(null);

  const handleEmailClick = () => {
    window.location.href = "mailto:sisanbhattarai.dev@gmail.com";
  };

  // Advisory Board Members
  
  // Jury Members
  const advisoryBoard = [
  {
    id: 1,
    name: "Hon. Sudan Kirati",
    title: "Former Minister",
    organization: "Culture, Tourism and Civil Aviation, Member of Parliament",
    image: a2,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  },
  {
    id: 2,
    name: "Sher Dhan Rai",
    title: "Former Chief Minister",
    organization: "Koshi Province",
    image: a3,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  },
  {
    id: 3,
    name: "Hon. Kedar Karki",
    title: "Former Chief Minister",
    organization: "Koshi Province, Member of the Koshi Provincial Assembly",
    image: a4,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  },
  {
    id: 4,
    name: "Deepak Raj Joshi",
    title: "CEO",
    organization: "Nepal Tourism Board",
    image: a5,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  },
  {
    id: 5,
    name: "Binayak Shah",
    title: "President",
    organization: "Hotel Association of Nepal",
    image: a1,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  },
  {
    id: 6,
    name: "Shova Gyawali",
    title: "President",
    organization: "Federation of Women Entrepreneurs Association",
    image: a6,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  },
  {
    id: 7,
    name: "Rajendra Raut",
    title: "President",
    organization: "FNCCI Koshi Province",
    image: a7,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  },
  {
    id: 8,
    name: "Krishna Shah",
    title: "Co-Coordinator",
    organization: "Koshi Tourism Year 2082",
    image: a8,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  },
  {
    id: 9,
    name: "CN Pandey",
    title: "Former President",
    organization: "NATTA Nepal",
    image: a9,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  },
  {
    id: 10,
    name: "Lakhphuti Sherpa",
    title: "Former President",
    organization: "Nepal Mountain Academy",
    image: a10,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  },
  {
    id: 11,
    name: "Govinda Bhattarai",
    title: "Chairperson",
    organization: "Mountain Sports Federation",
    image: a11,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  }
];

const mentors = [
  {
    id: 1,
    name: "Animesh Bastola",
    title: "Gold Medalist",
    organization: "Hospitality Business from Thailand",
    image: m1,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  },
  {
    id: 2,
    name: "Ashlesha Karki",
    title: "Deputy Managing Director",
    organization: "Hotel Mechi Crown",
    image: m2,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "https://www.linkedin.com/in/ashlesha-karki-75739a182",
    email: ""
  },
  {
    id: 3,
    name: "Basudev Baraan",
    title: "Hospitality Entrepreneur",
    organization: "Tourism Promoter",
    image: m3,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  },
  {
    id: 4,
    name: "Bhabish Shrestha",
    title: "Co-coordinator",
    organization: "Koshi Tourism Year 2082, Koshi Province",
    image: m4,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  },
  {
    id: 5,
    name: "Birat Anupam",
    title: "Journalist",
    organization: "Tourism Researcher",
    image: m5,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  },
  {
    id: 6,
    name: "Ramesh K. Rai",
    title: "Greater Mundum Trail Initiator",
    organization: "Promoter",
    image: m6,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  },
  {
    id: 7,
    name: "Suman Ghimire",
    title: "Senior Manager",
    organization: "Tourism Marketing and Promotion Department: NTB",
    image: m7,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  },
  {
    id: 8,
    name: "Surya Thapaliya",
    title: "Seasoned Tourism Professional",
    organization: "Nepal Tourism Board",
    image: m8,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  },
  {
    id: 9,
    name: "Tej Bahadur Dhakal",
    title: "Lead Tourism Entrepreneur",
    organization: "",
    image: m9,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  },
  {
    id: 10,
    name: "Uttam Bhattarai",
    title: "Former Director",
    organization: "Nepal Mountain Academy",
    image: m10,
    expertise: [],
    bio: "",
    achievements: [],
    linkedin: "",
    email: ""
  }
];

  
  // const  juryMembers = [
  //   {
  //     id: 1,
  //     name: "Animesh Bastola",
  //     title: "Mentor Co-ordinator",
  //     organization: "United National College, Dharan, Sunsari",
  //     image: an,
  //     expertise: [],
  //     bio: "",
  //     achievements: [],
  //     linkedin: "",
  //     email: "",
  //   },
  // ];

  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Advisory Board & Mentors"
        description="Meet the experts who will guide and evaluate projects"
        backgroundImage="https://fis-api.luxuryholidaynepal.com/media/attachments/nepal.jpg"
      />

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Advisory Board Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">
              <span className="text-[#223F80]">Advisory</span>{" "}
              <span className="text-[#F58432]">Board</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our Advisory Board provides strategic direction and oversight for
              the ToPS Koshi 2025 initiative.
            </p>
          </div>
          <JuryMentorsList
            experts={advisoryBoard}
            onSelectExpert={(expert) => setSelectedExpert(expert)}
            cardColor="bg-blue-50"
          />
        </section>

        {/* Jury Panel Section */}
        {/* <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">
              <span className="text-[#223F80]">Jury</span>{" "}
              <span className="text-[#F58432]">Panel</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The distinguished jury members who will evaluate projects based on
              innovation, feasibility, and potential impact.
            </p>
          </div>
          <JuryMentorsList
            experts={juryMembers}
            onSelectExpert={(expert) => setSelectedExpert(expert)}
            cardColor="bg-purple-50"
          />
        </section> */}

        {/* Mentors Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">
              <span className="text-[#223F80]">Project</span>{" "}
              <span className="text-[#F58432]"> Mentors</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our mentors provide hands-on guidance to help participants refine
              their projects throughout the competition.
            </p>
          </div>
          <JuryMentorsList
            experts={mentors}
            onSelectExpert={(expert) => setSelectedExpert(expert)}
            cardColor="bg-green-50"
          />
        </section>

       

        {/* {selectedExpert && (
          <JuryMentorModal
            expert={selectedExpert}
            onClose={() => setSelectedExpert(null)}
          />
        )} */}
      </div>
    </div>
  );
};

export default JuryMentors;