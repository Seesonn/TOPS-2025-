// export const SponsorLogo = ({ name, tier, className = "" }) => {
//   const getTierStyles = () => {
//     switch (tier) {
//       case "title":
//         return "border-2 border-amber-500 shadow-lg shadow-amber-100"
//       case "gold":
//         return "border-2 border-amber-400 shadow-md shadow-amber-50"
//       case "silver":
//         return "border-2 border-gray-300 shadow-md"
//       case "bronze":
//         return "border-2 border-amber-700 shadow-sm"
//       default:
//         return "border border-gray-200"
//     }
//   }

//   const getTierBadge = () => {
//     if (tier === "title") {
//       return (
//         <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-medium">
//           Title Sponsor
//         </span>
//       )
//     }
//     if (tier === "gold") {
//       return (
//         <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-400 text-amber-900 text-xs px-3 py-1 rounded-full font-medium">
//           Gold Sponsor
//         </span>
//       )
//     }
//     return null
//   }

//   return (
//     <div className={`relative bg-white p-6 rounded-xl ${getTierStyles()} ${className}`}>
//       {getTierBadge()}
//       <div className="h-16 flex items-center justify-center">
//         <div className="text-gray-700 font-medium">{name}</div>
//       </div>
//     </div>
//   )
// }

