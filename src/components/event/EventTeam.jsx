import { Facebook } from "lucide-react"
import EventOrganizerCard from "./EventOrganizerCard"

const EventTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alina Magar",
      position: "CEO",
      image: "https://tops.alison.com.np/uploads/organiser_1744965561.jpg",
      email: "alinamagar@gmail.com",
      phone: "9852056497",
      
    },
    {
      id: 2,
      name: "Sagun Thapa Magar",
      position: "Director",
      image: "https://tops.alison.com.np/uploads/organiser_1744965712.jpg",
      email: "sagunthapamagar@gmail.com",
      phone: "9815365670",
      
    },
    {
      id: 3,
      name: "Santosh Dhamala",
      position: "Event Manager",
      image: "https://tops.alison.com.np/uploads/organiser_1744965904.jpg",
      email: "kafalsevent@gmail.com",
      phone: "9852054672",
     
    },
    {
      id: 4,
      name: "Keshab Sapkota",
      position: "Marketing Coordinator",
      image: "https://tops.alison.com.np/uploads/organiser_1744967751.webp",
      email: "keshab@gmail.com",
      phone: "9851200747",
     
    },
    {
        id: 4,
        name: "Richa Bhandari",
        position: "Marketing Representative",
        image: "https://tops.alison.com.np/uploads/organiser_1744968505.jpg",
        email: "richabhandari@gmail.com",
        phone: "9851200747",
        // socialLinks: {
        //     linkedin: "https://linkedin.com/in",
        //     twitter: "https://twitter.com",
        //     facebook:"https://twitter.com",
        //     instagram:"https://twitter.com"
        // },
      },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-[#223F80]">Meet Our</span> <span className="text-[#F58432]">Organizer Team</span>
            
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our dedicated team of professionals works tirelessly to create an exceptional event experience for all
            participants.
          </p>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* flex flex-wrap justify-center */}
          {teamMembers.map((member) => (
            <EventOrganizerCard
              key={member.id}
              image={member.image}
              name={member.name}
              position={member.position}
              email={member.email}
              phone={member.phone}
              // socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventTeam
