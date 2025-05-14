// import { Link } from "react-router-dom"
// import { Button } from "../../ui/Button"
// import { ThemeIcon } from "../../ui/ThemeIcon"

// const ThemesSection = () => {
//   const themes = [
//     { name: "Adventure Tourism", icon: "mountain" },
//     { name: "Eco-Tourism", icon: "leaf" },
//     { name: "Cultural Tourism", icon: "landmark" },
//     { name: "Food Tourism", icon: "utensils" },
//     { name: "Religious Tourism", icon: "pray" },
//     { name: "Medical Tourism", icon: "hospital" },
//     { name: "Smart City", icon: "city" },
//     { name: "Agro-Tourism", icon: "tractor" },
//     { name: "Sports Tourism", icon: "running" },
//     { name: "Educational Tourism", icon: "graduation-cap" },
//     { name: "Wildlife Tourism", icon: "paw" },
//   ]

//   return (
//     <section className="py-20 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 rounded-full filter blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500 rounded-full filter blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="section-title">Tourism Themes</h2>
//           <p className="section-subtitle">Explore innovative solutions across these 11 key tourism sectors</p>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
//           {themes.map((theme, index) => (
//             <ThemeIcon key={index} name={theme.name} icon={theme.icon} />
//           ))}
//         </div>

//         <div className="text-center mt-16">
//           <Button
//             variant="secondary"
//             as={Link}
//             to="/event-overview"
//             icon={
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path
//                   fillRule="evenodd"
//                   d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             }
//             iconPosition="right"
//           >
//             Learn More About Themes
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }

// // export default ThemesSection
// import { Link } from "react-router-dom"
// import { Button } from "../../ui/Button"
// import { Card } from "../../ui/Card" // Import Card component

// // Import theme icons from assets
// import adventureIcon from "../../assests/Adventure Tourism.png"
// import ecoIcon from "../../assests/Eco-Tourism.png"
// import culturalIcon from "../../assests/Cultural Tourism.png"
// import foodIcon from "../../assests/Food Tourism.png"
// import religiousIcon from "../../assests/Religious.png"
// import medicalIcon from "../../assests/Medical Tourism.png"
// import smartCityIcon from "../../assests/Smart City.png"
// import agroIcon from "../../assests/Agro-Tourism.png"
// import sportsIcon from "../../assests/sport.png"
// import educationalIcon from "../../assests/education.png"
// import wildlifeIcon from "../../assests/wild.png"

// const ThemesSection = () => {
//   const themes = [
//     { 
//       name: "Adventure Tourism", 
//       icon: adventureIcon,
//       description: "Trekking, mountaineering, rafting, paragliding, bungee jumping, zip-lining."
//     },
//     { 
//       name: "Eco-Tourism", 
//       icon: ecoIcon,
//       description: "National parks, conservation areas, community-based tourism."
//     },
//     { 
//       name: " Cultural & Heritage Tourism", 
//       icon: culturalIcon,
//       description: "UNESCO sites, festivals, traditional arts, architecture."
//     },
//     { 
//       name: "Culinary & Gastronomy Tourism", 
//       icon: foodIcon,
//       description: "Nepal's ethnic cuisines, food trails, cooking classes, authentic dining"
//     },
//     { 
//       name: "Religious & Spiritual Tourism", 
//       icon: religiousIcon,
//       description: "Hindu and Buddhist pilgrimage sites"
//     },
//     { 
//       name: "Medical Tourism", 
//       icon: medicalIcon,
//       description: "Healthcare combined with travel"
//     },
//     { 
//       name: "Smart City & Rural Tourism", 
//       icon: smartCityIcon,
//       description: "Technology-driven urban tourism and rural tourism promotion"
//     },
//     { 
//       name: "Agro-Tourism", 
//       icon: agroIcon,
//       description: "Farm stays, organic food experiences, rural lifestyle exploration"
//     },
//     { 
//       name: "Sports Tourism", 
//       icon: sportsIcon,
//       description: "Mountain biking, trail running, rock climbing, high-altitude sports"
//     },
//     { 
//       name: "Water Tourism", 
//       icon: educationalIcon,
//       description: "Rafting, kayaking, boating, fishing, waterfalls, hot springs, wetland exploration"
//     },
//     { 
//       name: "Wildlife & Safari Tourism", 
//       icon: wildlifeIcon,
//       description: "Jungle safaris, birdwatching, photography"
//     },
//   ]

//   return (
//     <section className="py-20 relative overflow-hidden bg-gray-50">
//       {/* Background decoration */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 rounded-full filter blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500 rounded-full filter blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16 max-w-3xl mx-auto">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Tourism Themes</h2>
//           <p className="text-lg text-gray-600">
//             Explore innovative solutions across these 11 key tourism sectors
//           </p>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
//           {themes.map((theme, index) => (
//             <Card key={index} className="flex flex-col items-center text-center p-4 h-full hover:shadow-md transition-shadow">
//               <div className="rounded-xl bg-gradient-to-br from-[#282560] to-[#26A7DF] p-3 flex items-center justify-center h-16 w-16 mb-3">
//                 <img 
//                   src={theme.icon || "/placeholder.svg"} 
//                   alt={theme.name} 
//                   className="h-10 w-10 object-contain" 
//                 />
//               </div>
//               <h3 className="text-base font-semibold text-gray-800 mb-1">{theme.name}</h3>
//               <p className="text-xs text-gray-500 line-clamp-2">{theme.description}</p>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center mt-16">
//           <Button
//             variant="secondary"
//             as={Link}
//             to="/event-overview"
//             className="px-8 py-3 text-base font-medium"
//             icon={
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path
//                   fillRule="evenodd"
//                   d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             }
//             iconPosition="right"
//           >
//             Learn More About Themes
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ThemesSection

import { Link } from "react-router-dom"
import { Button } from "../../ui/Button"
import { Card } from "../../ui/Card"

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

const ThemesSection = () => {
   const themes = [
    { 
      name: "Adventure Tourism", 
      icon: adventureIcon,
      description: "Trekking, mountaineering, rafting, paragliding, bungee jumping, zip-lining"
    },
    { 
      name: "Eco & Sustainable Tourism", 
      icon: ecoIcon,
      description: "National parks, conservation areas, community-based tourism"
    },
    { 
      name: " Cultural & Heritage Tourism", 
      icon: culturalIcon,
      description: "UNESCO sites, festivals, traditional arts, architecture"
    },
    { 
      name: "Culinary & Gastronomy Tourism", 
      icon: foodIcon,
      description: "Nepal's ethnic cuisines, food trails, cooking classes, authentic dining"
    },

     { 
      name: "Smart City & Rural Tourism", 
      icon: smartCityIcon,
      description: "Technology-driven urban tourism and rural tourism promotion"
    },
   
    { 
      name: "Wellness & Meditation Tourism", 
      icon: medicalIcon,
      description: "Yoga, Ayurveda, meditation, wellness retreats"
    },
   
{ 
      name: "Water Tourism", 
      icon: educationalIcon,
      description: "Rafting, kayaking, boating, fishing, waterfalls, hot springs, wetland exploration"
    },

    { 
      name: "Agro-Tourism", 
      icon: agroIcon,
      description: "Farm stays, organic food experiences, rural lifestyle exploration"
    },
    { 
      name: "Sports Tourism", 
      icon: sportsIcon,
      description: "Mountain biking, trail running, rock climbing, high-altitude sports"
    },
   
 { 
      name: "Religious & Spiritual Tourism", 
      icon: religiousIcon,
      description: "Hindu and Buddhist pilgrimage sites"
    },


    { 
      name: "Wildlife & Safari Tourism", 
      icon: wildlifeIcon,
      description: "Jungle safaris, birdwatching, photography"
    },
  ]
  return (
<section className="py-20 relative overflow-hidden bg-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500 rounded-full filter blur-3xl animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          
           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
           <span className="text-[#223F80]">Tourism</span> <span className="text-[#F58432]">Themes</span>
           </h2>
          <p className="text-lg text-gray-600">
            Explore innovative solutions across these 11 key tourism sectors
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {themes.map((theme, index) => (
            <Card 
              key={index} 
              className="flex flex-col items-center text-center p-4 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm"
            >
              <div className="rounded-xl bg-gradient-to-br from-[#282560] to-[#26A7DF] p-3 flex items-center justify-center h-16 w-16 mb-3 shadow-md">
                <img 
                  src={theme.icon || "/placeholder.svg"} 
                  alt={theme.name} 
                  className="h-10 w-10 object-contain" 
                  loading="lazy"
                />
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-1">{theme.name}</h3>
              <p className="text-xs text-gray-600 ">{theme.description}</p>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <Button
            variant="primary"
            as={Link}
            to="/event-overview"
            className="px-8 py-3 text-base font-medium group"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            }
            iconPosition="right"
          >
            Explore All Tourism Themes
          </Button> */}
        {/* </div> */}
      </div>
    </section>
  )
}

export default ThemesSection