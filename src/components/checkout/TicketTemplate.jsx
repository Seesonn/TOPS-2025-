// // import { QRCodeSVG } from "qrcode.react"

// // const TicketTemplate = ({ orderDetails, userName, ticketType }) => {
// //   // Get color theme based on ticket type
// //   const getTicketTheme = () => {
// //     switch (ticketType) {
// //       case "standard":
// //         return {
// //           bgGradient: "from-blue-500 to-blue-600",
// //           accentColor: "bg-blue-700",
// //           textColor: "text-blue-900",
// //           borderColor: "border-blue-300",
// //         }
// //       case "gold":
// //         return {
// //           bgGradient: "from-amber-500 to-amber-600",
// //           accentColor: "bg-amber-700",
// //           textColor: "text-amber-900",
// //           borderColor: "border-amber-300",
// //         }
// //       case "premium":
// //         return {
// //           bgGradient: "from-indigo-600 to-purple-600",
// //           accentColor: "bg-indigo-700",
// //           textColor: "text-indigo-900",
// //           borderColor: "border-indigo-300",
// //         }
// //       default:
// //         return {
// //           bgGradient: "from-gray-500 to-gray-600",
// //           accentColor: "bg-gray-700",
// //           textColor: "text-gray-900",
// //           borderColor: "border-gray-300",
// //         }
// //     }
// //   }

// //   const theme = getTicketTheme()

// //   // Format date for display
// //   const formatDate = (dateString) => {
// //     const options = { year: "numeric", month: "long", day: "numeric" }
// //     return new Date(dateString).toLocaleDateString(undefined, options)
// //   }

// //   // Generate QR code data
// //   const qrCodeData = JSON.stringify({
// //     ticketId: orderDetails.orderNumber,
// //     ticketType: orderDetails.ticketType,
// //     name: userName,
// //     email: orderDetails.email,
// //     date: "April 28-30, 2025",
// //   })

// //   return (
// //     <div className={`relative overflow-hidden rounded-xl shadow-2xl border-2 ${theme.borderColor}`}>
// //       {/* Ticket header */}
// //       <div className={`bg-gradient-to-r ${theme.bgGradient} text-white p-6`}>
// //         <div className="flex justify-between items-center">
// //           <div>
// //             <h3 className="text-2xl font-bold">Tourism Project Showcase</h3>
// //             <p className="text-white/80">Koshi 2025</p>
// //           </div>
// //           <div className="text-right">
// //             <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
// //               {orderDetails.ticketName}
// //             </span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Ticket body */}
// //       <div className="bg-white p-6">
// //         <div className="flex flex-col md:flex-row gap-6">
// //           <div className="flex-grow">
// //             <div className="mb-4">
// //               <p className="text-gray-500 text-sm">Attendee</p>
// //               <p className="font-bold text-xl">{userName}</p>
// //             </div>

// //             <div className="mb-4">
// //               <p className="text-gray-500 text-sm">Event Date</p>
// //               <p className="font-medium">April 28-30, 2025</p>
// //             </div>

// //             <div className="mb-4">
// //               <p className="text-gray-500 text-sm">Location</p>
// //               <p className="font-medium">G. Ramayana Hotel, Koshi Province</p>
// //             </div>

// //             <div className="mb-4">
// //               <p className="text-gray-500 text-sm">Order Number</p>
// //               <p className="font-medium">{orderDetails.orderNumber}</p>
// //             </div>
// //           </div>

// //           <div className="flex-shrink-0 flex flex-col items-center">
// //             <div className="p-2 bg-white rounded-lg shadow-md">
// //               <QRCodeSVG value={qrCodeData} size={120} level="H" includeMargin={true} />
// //             </div>
// //             <p className="text-xs text-gray-500 mt-2 text-center">Scan for entry</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Ticket footer */}
// //       <div className={`${theme.accentColor} text-white p-4 text-center`}>
// //         <p className="text-sm">Present this ticket at the entrance for admission</p>
// //       </div>

// //       {/* Decorative elements */}
// //       <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
// //       <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
// //     </div>
// //   )
// // }

// // export default TicketTemplate

// import { QRCodeSVG } from "qrcode.react"

// const TicketTemplate = ({ orderDetails, userName, ticketType }) => {
//   // Get color theme based on ticket type
//   const getTicketTheme = () => {
//     switch (ticketType) {
//       case "standard":
//         return {
//           bgGradient: "from-blue-500 to-blue-600",
//           accentColor: "bg-blue-700",
//           textColor: "text-blue-900",
//           borderColor: "border-blue-300",
//         }
//       case "gold":
//         return {
//           bgGradient: "from-amber-500 to-amber-600",
//           accentColor: "bg-amber-700",
//           textColor: "text-amber-900",
//           borderColor: "border-amber-300",
//         }
//       case "premium":
//         return {
//           bgGradient: "from-indigo-600 to-purple-600",
//           accentColor: "bg-indigo-700",
//           textColor: "text-indigo-900",
//           borderColor: "border-indigo-300",
//         }
//       default:
//         return {
//           bgGradient: "from-gray-500 to-gray-600",
//           accentColor: "bg-gray-700",
//           textColor: "text-gray-900",
//           borderColor: "border-gray-300",
//         }
//     }
//   }

//   const theme = getTicketTheme()

//   // Format date for display
//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "long", day: "numeric" }
//     return new Date(dateString).toLocaleDateString(undefined, options)
//   }

//   // Generate QR code data
//   const qrCodeData = JSON.stringify({
//     ticketId: orderDetails.orderNumber,
//     ticketType: orderDetails.ticketType,
//     name: userName,
//     email: orderDetails.email,
//     date: "April 28-30, 2025",
//   })

//   return (
//     <div className={`relative overflow-hidden rounded-xl shadow-2xl border-2 ${theme.borderColor}`}>
//       {/* Ticket header */}
//       <div className={`bg-gradient-to-r ${theme.bgGradient} text-white p-6`}>
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <img 
//               src="https://tops.alison.com.np/uploads/logo_1742355674.png" 
//               alt="Event Logo"
//               className="h-12 object-contain" // Adjust height as needed
//             />
            
//           </div>
//           <div className="text-right">
//             <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
//               {orderDetails.ticketName}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Ticket body */}
//       <div className="bg-white p-6">
//         <div className="flex flex-col md:flex-row gap-6">
//           <div className="flex-grow">
//             <div className="mb-4">
//               <p className="text-gray-500 text-sm">Attendee</p>
//               <p className="font-bold text-xl">{userName}</p>
//             </div>

//             <div className="mb-4">
//               <p className="text-gray-500 text-sm">Event Date</p>
//               <p className="font-medium">April 28-30, 2025</p>
//             </div>

//             <div className="mb-4">
//               <p className="text-gray-500 text-sm">Location</p>
//               <p className="font-medium">G. Ramayana Hotel, Koshi Province</p>
//             </div>

//             <div className="mb-4">
//               <p className="text-gray-500 text-sm">Order Number</p>
//               <p className="font-medium">{orderDetails.orderNumber}</p>
//             </div>
//           </div>

//           <div className="flex-shrink-0 flex flex-col items-center">
//             <div className="p-2 bg-white rounded-lg shadow-md">
//               <QRCodeSVG value={qrCodeData} size={120} level="H" includeMargin={true} />
//             </div>
//             <p className="text-xs text-gray-500 mt-2 text-center">Scan for entry</p>
//           </div>
//         </div>
//       </div>

//       {/* Ticket footer */}
//       <div className={`${theme.accentColor} text-white p-4 text-center`}>
//         <p className="text-sm">Present this ticket at the entrance for admission</p>
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
//       <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
//     </div>
//   )
// }

// export default TicketTemplate


import { QRCodeSVG } from "qrcode.react"

const TicketTemplate = ({ orderDetails, userName, ticketType, formData }) => {
  // Get color theme based on ticket type
  const getTicketTheme = () => {
    switch (ticketType) {
      case "standard":
        return {
          bgGradient: "from-blue-500 to-blue-600",
          accentColor: "bg-blue-700",
          textColor: "text-blue-900",
          borderColor: "border-blue-300",
        }
      case "gold":
        return {
          bgGradient: "from-amber-500 to-amber-600",
          accentColor: "bg-amber-700",
          textColor: "text-amber-900",
          borderColor: "border-amber-300",
        }
      case "premium":
        return {
          bgGradient: "from-indigo-600 to-purple-600",
          accentColor: "bg-indigo-700",
          textColor: "text-indigo-900",
          borderColor: "border-indigo-300",
        }
      default:
        return {
          bgGradient: "from-gray-500 to-gray-600",
          accentColor: "bg-gray-700",
          textColor: "text-gray-900",
          borderColor: "border-gray-300",
        }
    }
  }

  const theme = getTicketTheme()

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  // Generate QR code data
  const qrCodeData = JSON.stringify({
    // Ticket information
    ticketId: orderDetails.orderNumber,
    ticketType: orderDetails.ticketType,
   Name: userName,
    price: orderDetails.price,
    orderDate: orderDetails.orderDate,

    // Event information
    eventName: "Tourism Project Showcase 2025",
    eventDate: "April 28-30, 2025",
    eventLocation: "G. Ramayana Hotel, Koshi Province",

    // User information
    name: userName,
    email: orderDetails.email,

    // Include all form data
    formData: formData || {},
  })

  return (
    <div className={`relative overflow-hidden rounded-xl shadow-2xl border-2 ${theme.borderColor}`}>
      {/* Ticket header */}
      <div className={`bg-gradient-to-r ${theme.bgGradient} text-white p-6`}>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">Tourism Project Showcase</h3>
            <p className="text-white/80">Koshi 2025</p>
          </div>
          <div className="text-right">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
              {orderDetails.ticketName}
            </span>
          </div>
        </div>
      </div>
           
      {/* Ticket body */}
      <div className="bg-white p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-grow">
            <div className="mb-4">
              <p className="text-gray-500 text-sm">Attendee</p>
              <p className="font-bold text-xl">{userName}</p>
            </div>

           

            <div className="mb-4">
              <p className="text-gray-500 text-sm">Event Date</p>
              <p className="font-medium">April 28-30, 2025</p>
            </div>

            <div className="mb-4">
              <p className="text-gray-500 text-sm">Location</p>
              <p className="font-medium">G. Ramayana Hotel, Koshi Province</p>
            </div>

            <div className="mb-4">
              <p className="text-gray-500 text-sm">Order Number</p>
              <p className="font-medium">{orderDetails.orderNumber}</p>
            </div>
          </div>

          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="p-2 bg-white rounded-lg shadow-md">
              <QRCodeSVG value={qrCodeData} size={120} level="H" includeMargin={true} />
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">Scan for entry</p>
          </div>
        </div>
      </div>

      {/* Ticket footer */}
      <div className={`${theme.accentColor} text-white p-4 text-center`}>
        <p className="text-sm">Present this ticket at the entrance for admission</p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
    </div>
  )
}

export default TicketTemplate

