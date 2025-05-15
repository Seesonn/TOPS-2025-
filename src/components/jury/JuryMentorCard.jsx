
// import { Card } from "../../ui/Card"

// const JuryMentorCard = ({ expert, onClick }) => {
//   return (
//     <Card
//       className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
//       onClick={onClick}
//     >
//       <div className="relative">
//         <div className="aspect-square overflow-hidden">
//           <img
//             src={expert.image || "/placeholder.svg?height=400&width=400"}
//             alt={expert.name}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//         </div>

//         {/* Gradient overlay on hover */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <div className="absolute bottom-4 left-4 right-4">
           
//           </div>
//         </div>
//       </div>

//       <div className="p-6 border-t border-gray-100">
//         <h3 className="text-xl font-bold mb-1 group-hover:text-[#2783BC] transition-colors">{expert.name}</h3>
//         <p className="text-[#F58432] font-medium">{expert.title}</p>
//         <p className="text-gray-600 text-sm mb-4">{expert.organization}</p>

//         <div className="flex flex-wrap gap-2 mt-3">
//           {expert.expertise.slice(0, 2).map((skill, index) => (
//             <span
//               key={index}
//               className="inline-block px-2 py-1 bg-blue-50 text-[#2783BC] rounded-md text-xs font-medium"
//             >
//               {skill}
//             </span>
//           ))}
//           {expert.expertise.length > 2 && (
//             <span className="inline-block px-2 py-1 bg-gray-50 text-gray-500 rounded-md text-xs font-medium">
//               +{expert.expertise.length - 2} more
//             </span>
//           )}
//         </div>
//       </div>
//     </Card>
//   )
// }

// export default JuryMentorCard

import { Card } from "../../ui/Card"

const JuryMentorCard = ({ expert, onClick }) => {
  return (
    <Card
      className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={expert.image || "/placeholder.svg?height=400&width=400"}
            alt={expert.name}
            className="w-full h-full object-cover transition-transform duration-500 scale-110"
          />
        </div>

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
           
          </div>
        </div>
      </div>

      <div className="p-6 border-t border-gray-100">
        <h3 className="text-xl font-bold mb-1 group-hover:text-[#2783BC] transition-colors">{expert.name}</h3>
        <p className="text-[#F58432] font-medium">{expert.title}</p>
        <p className="text-gray-600 text-sm mb-4">{expert.organization}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {expert.expertise.slice(0, 2).map((skill, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 bg-blue-50 text-[#2783BC] rounded-md text-xs font-medium"
            >
              {skill}
            </span>
          ))}
          {expert.expertise.length > 2 && (
            <span className="inline-block px-2 py-1 bg-gray-50 text-gray-500 rounded-md text-xs font-medium">
              +{expert.expertise.length - 2} more
            </span>
          )}
        </div>
      </div>
    </Card>
  )
}

export default JuryMentorCard