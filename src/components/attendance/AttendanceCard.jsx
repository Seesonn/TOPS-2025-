// const AttendanceCard = ({ name, organization, ticketType = "standard" }) => {
//     // Define color schemes based on ticket type
//     const colorSchemes = {
//       standard: {
//         accent: "bg-blue-500",
//         text: "text-blue-600",
//         border: "border-blue-100",
//         bg: "from-blue-50 to-white",
//       },
//       gold: {
//         accent: "bg-yellow-500",
//         text: "text-yellow-600",
//         border: "border-yellow-100",
//         bg: "from-yellow-50 to-white",
//       },
//       premium: {
//         accent: "bg-orange-500",
//         text: "text-orange-600",
//         border: "border-orange-100",
//         bg: "from-orange-50 to-white",
//       },
//       vip: {
//         accent: "bg-purple-500",
//         text: "text-purple-600",
//         border: "border-purple-100",
//         bg: "from-purple-50 to-white",
//       },
//     }
  
//     // Get color scheme based on ticket type (default to standard if not found)
//     const colors = colorSchemes[ticketType.toLowerCase()] || colorSchemes.standard
  
//     return (
//       <div
//         className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg border ${colors.border} bg-white`}
//       >
//         {/* Background gradient */}
//         <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-50 z-0`}></div>
  
//         {/* Curved gray portion in the corner */}
//         <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-100/50 rounded-tr-[80px] z-0"></div>
  
//         <div className="relative z-10">
        
          
  
//           <div className="p-6 flex flex-col items-center text-center">
            
  
//             {/* Name with enhanced typography */}
//             <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mt-4">
//               {name}
//             </h3>
  
//             {/* Organization with color based on ticket type */}
//             <p className={`${colors.text} font-medium text-sm mb-2`}>{organization}</p>
//           </div>
//         </div>
//       </div>
//     )
//   }
  
//   export default AttendanceCard
const AttendanceCard = ({ name, organization, ticketType = "standard" }) => {
    // Color schemes only for curved accents
    const getColorScheme = (type) => {
      const schemes = {
        standard: {
          curve: "bg-blue-500",
          text: "text-blue-600",
          badge: "bg-blue-100 text-blue-800",
          accent: "border-blue-200",
          highlight: "bg-blue-50"
        },
        gold: {
          curve: "bg-amber-400",
          text: "text-amber-700",
          badge: "bg-amber-100 text-amber-800",
          accent: "border-amber-200",
          highlight: "bg-amber-50"
        },
        premium: {
          curve: "bg-purple-500",
          text: "text-purple-700",
          badge: "bg-purple-100 text-purple-800",
          accent: "border-purple-200",
          highlight: "bg-purple-50"
        },
        vip: {
          curve: "bg-fuchsia-500",
          text: "text-fuchsia-700",
          badge: "bg-fuchsia-100 text-fuchsia-800",
          accent: "border-fuchsia-200",
          highlight: "bg-fuchsia-50"
        }
      };
      return schemes[type.toLowerCase()] || schemes.standard;
    };
  
    const colors = getColorScheme(ticketType);
  
    return (
      <div className={`relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group border ${colors.accent} overflow-hidden`}>
        
        {/* Curved Color Accent - Top Right */}
        <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full ${colors.curve} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
        
        {/* Curved Color Accent - Bottom Left */}
        <div className={`absolute -bottom-8 -left-8 w-24 h-24 rounded-full ${colors.curve} opacity-15 group-hover:opacity-25 transition-opacity duration-500`}></div>
        
        {/* Main Content */}
        <div className="relative z-10 p-6">
          {/* Badge with curved color accent */}
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full ${colors.badge} text-xs font-semibold uppercase tracking-wide`}>
            {ticketType}
          </div>
          
          <div className="pt-8 flex flex-col items-center text-center">
            {/* Name with color from scheme */}
            <h3 className={`text-2xl font-bold mb-2 ${colors.text}`}>
              {name}
            </h3>
            
            {/* Organization with subtle highlight */}
            <div className={`px-4 py-2 rounded-lg ${colors.highlight}`}>
              <p className={`text-sm font-medium ${colors.text} opacity-90`}>
                {organization}
              </p>
            </div>
            
            {/* Decorative curved lines */}
            <div className="mt-6 flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-8 h-1 rounded-full ${colors.curve} opacity-${30+(i*10)} group-hover:opacity-${50+(i*10)} transition-opacity duration-300`}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom curved accent bar */}
        <div className={`h-1 w-full ${colors.curve} opacity-30 mt-2`}></div>
      </div>
    );
  };
  
  export default AttendanceCard;