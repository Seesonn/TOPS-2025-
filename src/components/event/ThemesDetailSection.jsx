// import ThemeCard from "./ThemeCard"

// const ThemesDetailSection = () => {
//   const themes = [
//     {
//       name: "Adventure Tourism",
//       icon: "mountain",
//       description: "Trekking, mountaineering, paragliding, rafting, and other adventure activities in Koshi Province.",
//     },
//     {
//       name: "Eco-Tourism",
//       icon: "leaf",
//       description:
//         "Sustainable tourism practices that conserve the environment and improve the well-being of local people.",
//     },
//     {
//       name: "Cultural Tourism",
//       icon: "landmark",
//       description: "Showcasing the rich cultural heritage, traditions, and festivals of Koshi Province.",
//     },
//     {
//       name: "Food Tourism",
//       icon: "utensils",
//       description: "Culinary experiences featuring local cuisines, food festivals, and farm-to-table concepts.",
//     },
//     {
//       name: "Religious Tourism",
//       icon: "pray",
//       description: "Pilgrimage sites, temples, monasteries, and religious festivals in Koshi Province.",
//     },
//     {
//       name: "Medical Tourism",
//       icon: "hospital",
//       description: "Healthcare services, wellness retreats, and ayurvedic treatments for tourists.",
//     },
//     {
//       name: "Smart City",
//       icon: "city",
//       description: "Technology-driven solutions for urban tourism, smart infrastructure, and digital experiences.",
//     },
//     {
//       name: "Agro-Tourism",
//       icon: "tractor",
//       description: "Farm stays, agricultural tours, and rural tourism experiences in Koshi Province.",
//     },
//     {
//       name: "Sports Tourism",
//       icon: "running",
//       description: "Sporting events, facilities, and activities that attract tourists to Koshi Province.",
//     },
//     {
//       name: "Educational Tourism",
//       icon: "graduation-cap",
//       description: "Learning experiences, workshops, and educational programs for tourists.",
//     },
//     {
//       name: "Wildlife Tourism",
//       icon: "paw",
//       description: "Wildlife safaris, bird watching, and conservation efforts in Koshi Province.",
//     },
//   ]

//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-4">Tourism Themes</h2>
//         <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
//           Projects will focus on one or more of these 11 key tourism sectors
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {themes.map((theme, index) => (
//             <ThemeCard key={index} name={theme.name} icon={theme.icon} description={theme.description} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ThemesDetailSection



import { Link } from "react-router-dom"
import { Button } from "../../ui/Button"
import { Card } from "../../ui/Card" // Import Card component

// Import theme icons from assets
import adventureIcon from "../../assests/Adventure Tourism.png"
import ecoIcon from "../../assests/Eco-Tourism.png"
import culturalIcon from "../../assests/Cultural Tourism.png"
import foodIcon from "../../assests/Food Tourism.png"
import religiousIcon from "../../assests/Religious.png"
import medicalIcon from "../../assests/Medical Tourism.png"
import smartCityIcon from "../../assests/Smart City.png"
import agroIcon from "../../assests/Agro-Tourism.png"
import sportsIcon from "../../assests/sport.png"
import educationalIcon from "../../assests/education.png"
import wildlifeIcon from "../../assests/wild.png"

const ThemesDetailSection = () => {
  const themes = [
    { 
      name: "Adventure Tourism", 
      icon: adventureIcon, 
      description: "Trekking, mountaineering, paragliding, rafting in Koshi Province." 
    },
    { 
      name: "Eco-Tourism", 
      icon: ecoIcon,
      description: "Sustainable travel to natural areas conserving the environment."
    },
    { 
      name: "Cultural Tourism", 
      icon: culturalIcon,
      description: "Experience the rich cultural heritage and traditions."
    },
    { 
      name: "Food Tourism", 
      icon: foodIcon,
      description: "Culinary experiences and local gastronomy adventures."
    },
    { 
      name: "Religious Tourism", 
      icon: religiousIcon,
      description: "Pilgrimages and visits to sacred sites and temples."
    },
    { 
      name: "Medical Tourism", 
      icon: medicalIcon,
      description: "Healthcare services combined with travel experiences."
    },
    { 
      name: "Smart City", 
      icon: smartCityIcon,
      description: "Exploring technologically advanced urban developments."
    },
    { 
      name: "Agro-Tourism", 
      icon: agroIcon,
      description: "Farm stays and agricultural experiences."
    },
    { 
      name: "Sports Tourism", 
      icon: sportsIcon,
      description: "Travel for sports events and activities."
    },
    { 
      name: "Educational Tourism", 
      icon: educationalIcon,
      description: "Learning experiences through travel."
    },
    { 
      name: "Wildlife Tourism", 
      icon: wildlifeIcon,
      description: "Exploring natural habitats and wildlife."
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Tourism Themes</h2>
          <p className="text-lg text-gray-600">
            Explore innovative solutions across these 11 key tourism sectors in Koshi Province
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {themes.map((theme, index) => (
            <Card 
              key={index}
              className="flex flex-col items-center text-center p-4 hover:shadow-md transition-shadow duration-300 h-full"
            >
              <div className="rounded-xl bg-gradient-to-br from-[#282560] to-[#26A7DF] p-3 flex items-center justify-center h-16 w-16 mb-4">
                <img 
                  src={theme.icon || "/placeholder.svg"} 
                  alt={theme.name} 
                  className="h-10 w-10 object-contain" 
                />
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">{theme.name}</h3>
              <p className="text-xs text-gray-500 line-clamp-2">{theme.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="secondary"
            as={Link}
            to="/event-overview"
            className="px-8 py-3 text-base font-medium"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            }
            iconPosition="right"
          >
            Learn More About Themes
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ThemesDetailSection
