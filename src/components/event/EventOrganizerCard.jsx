// import { Card } from "../../ui/Card"
// import { Mail, Phone } from "lucide-react"
// import { SocialIcon } from "../../ui/SocialIcon"

// const EventOrganizerCard = ({ image, name, position, email, phone, socialLinks }) => {
//   return (
//     <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100">
//       <div className="relative">
//         {/* Decorative top accent */}
//         <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>

//         <div className="p-6 flex flex-col items-center text-center">
//           {/* Profile Image with border */}
//           <div className="w-32 h-32 rounded-full overflow-hidden mb-5 border-4 border-white shadow-md">
//             <img
//               src={image || "/placeholder.svg"}
//               alt={`${name} - ${position}`}
//               className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//             />
//           </div>

//           {/* Name and Position */}
//           <h3 className="text-xl font-bold mb-1 text-gray-800">{name}</h3>
//           <p className="text-blue-600 font-medium mb-4 text-sm uppercase tracking-wider">{position}</p>

//           {/* Contact Info */}
//           <div className="space-y-2 mb-5 w-full">
//             <a
//               href={`mailto:${email}`}
//               className="flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors group"
//             >
//               <Mail size={16} className="mr-2 group-hover:text-blue-600" />
//               <span className="text-sm">{email}</span>
//             </a>

//             {phone && (
//               <a
//                 href={`tel:${phone}`}
//                 className="flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors group"
//               >
//                 <Phone size={16} className="mr-2 group-hover:text-blue-600" />
//                 <span className="text-sm">{phone}</span>
//               </a>
//             )}
//           </div>

//           {/* Social Links */}
//           <div className="flex space-x-4 pt-4 border-t border-gray-100 w-full">
//             {socialLinks?.linkedin && (
//               <SocialIcon platform="linkedin" url={socialLinks.linkedin} aria-label={`${name}'s LinkedIn profile`} />
//             )}

//             {socialLinks?.twitter && (
//               <SocialIcon platform="twitter" url={socialLinks.twitter} aria-label={`${name}'s Twitter profile`} />
//             )}

//             {socialLinks?.github && (
//               <SocialIcon platform="github" url={socialLinks.github} aria-label={`${name}'s GitHub profile`} />
//             )}

//             {socialLinks?.facebook && (
//               <SocialIcon platform="facebook" url={socialLinks.facebook} aria-label={`${name}'s Facebook profile`} />
//             )}

//             {socialLinks?.instagram && (
//               <SocialIcon platform="instagram" url={socialLinks.instagram} aria-label={`${name}'s Instagram profile`} />
//             )}
//           </div>
//         </div>
//       </div>
//     </Card>
//   )
// }

// export default EventOrganizerCard
import { Card } from "../../ui/Card"
import { Mail, Phone, } from "lucide-react"
import { SocialIcon } from "../../ui/SocialIcon"

const EventOrganizerCard = ({
  image,
  name,
  position,
  email,
  phone,
  socialLinks,
  
}) => {
  return (
    <Card className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:shadow-2xl border border-gray-100 bg-white">
      {/* Background pattern - subtle grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-[100px] z-0"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-tr-[80px] z-0"></div>

      <div className="relative z-10">
        {/* Top accent bar with gradient animation */}
        <div className="h-1.5 bg-gradient-to-r from-[#223F80] via-[#F58432] to-[#2783BC] bg-[length:200%_auto] animate-gradient"></div>

        <div className="p-8 flex flex-col items-center text-center">
          {/* Profile Image with animated border */}
          <div className="relative mb-6 group-hover:-translate-y-1 transition-transform duration-500">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
              <img
                src={image || "/placeholder.svg"}
                alt={`${name} - ${position}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Name and Position with enhanced typography */}
          <h3 className="text-xl font-bold mb-1 text-gray-800 group-hover:text-[#2783BC] transition-colors duration-300">
            {name}
          </h3>

            <p className="text-[#F58432] bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-sm tracking-wider">
              {position}
            </p>
         

         
          {/* Contact Info  */}
         
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-center text-gray-600  hover:text-black transition-all duration-300  "
            >
              <Mail
                size={16}
                className="mr-2 text-black"
              />
              <span className="text-sm font-medium">{email}</span>
            </a>

            {phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center text-gray-600 hover:text-black transition-all duration-300   py-2 px-4 "
              >
                <Phone
                  size={16}
                  className="mr-2 text-black  "
                />
                <span className="text-sm font-medium">{phone}</span>
              </a>
            )}
       

          {/* Social Links  */}
          <div className="flex justify-center space-x-4 pt-5 border-t border-gray-100 w-full">
            {socialLinks?.linkedin && (
              <div className="transform transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                <SocialIcon platform="linkedin" url={socialLinks.linkedin} aria-label={`${name}'s LinkedIn profile`} />
              </div>
            )}

            {socialLinks?.twitter && (
              <div className="transform transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                <SocialIcon 
                platform="twitter" url={socialLinks.twitter} aria-label={`${name}'s Twitter profile`} />
              </div>
            )}

            {socialLinks?.github && (
              <div className="transform transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                <SocialIcon platform="github" url={socialLinks.github} aria-label={`${name}'s GitHub profile`} />
              </div>
            )}

            {socialLinks?.facebook && (
              <div className="transform transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                <SocialIcon platform="facebook" url={socialLinks.facebook} aria-label={`${name}'s Facebook profile`} />
              </div>
            )}

            {socialLinks?.instagram && (
              <div className="transform transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                <SocialIcon
                  platform="instagram"
                  url={socialLinks.instagram}
                  aria-label={`${name}'s Instagram profile`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default EventOrganizerCard
