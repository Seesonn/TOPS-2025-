

// import { useState, useEffect } from "react"
// import { Card } from "../../ui/Card"

// const PostEventTestimonials = ({ year }) => {
//   const [activeIndex, setActiveIndex] = useState(0)

//   const testimonials = {
//     2024: [
//       {
//         quote:
//           "Participating in ToPS Koshi 2024 was a game-changer for our project. The mentorship, networking opportunities, and feedback we received helped us refine our idea and secure funding for implementation.",
//         author: "Anish Sharma",
//         position: "Team Leader",
//         team: "Team Everest (1st Place Winner)",
//         image: "/placeholder.svg?height=100&width=100",
//       },
//       {
//         quote:
//           "The event was incredibly well-organized and provided a platform for us to showcase our innovation to potential investors and partners. We've already started implementing our project with the support we received.",
//         author: "Bikash Tamang",
//         position: "Team Leader",
//         team: "Digital Sherpas (2nd Place Winner)",
//         image: "/placeholder.svg?height=100&width=100",
//       },
//       {
//         quote:
//           "As a sponsor, we were impressed by the quality and creativity of the projects presented. We've already initiated partnerships with two teams to implement their solutions in our tourism operations.",
//         author: "Rajendra Adhikari",
//         position: "Marketing Director",
//         team: "Nepal Tourism Board",
//         image: "/placeholder.svg?height=100&width=100",
//       },
//     ],
//     2023: [
//       {
//         quote:
//           "ToPS Koshi 2023 provided us with the perfect platform to showcase our trekking safety solution. The connections we made during the event have been invaluable for our growth.",
//         author: "Binod Thapa",
//         position: "Team Leader",
//         team: "Mountain Tech (1st Place Winner)",
//         image: "/placeholder.svg?height=100&width=100",
//       },
//       {
//         quote:
//           "The mentorship sessions were incredibly helpful in refining our business model. We're now successfully operating our food tourism platform across three districts in Koshi Province.",
//         author: "Rajan KC",
//         position: "Team Leader",
//         team: "Culinary Explorers (2nd Place Winner)",
//         image: "/placeholder.svg?height=100&width=100",
//       },
//       {
//         quote:
//           "The event brought together the perfect mix of innovation, expertise, and investment opportunities. As a jury member, I was impressed by the quality of projects and their potential impact on tourism.",
//         author: "Dr. Sarah Johnson",
//         position: "Tourism Expert",
//         team: "International Tourism Council",
//         image: "/placeholder.svg?height=100&width=100",
//       },
//     ],
//     2022: [
//       {
//         quote:
//           "Winning ToPS Koshi 2022 gave our homestay network the visibility and credibility we needed. We've now expanded to 45 homestays across Koshi Province and are creating sustainable income for rural communities.",
//         author: "Ramesh Basnet",
//         position: "Team Leader",
//         team: "Rural Innovators (1st Place Winner)",
//         image: "/placeholder.svg?height=100&width=100",
//       },
//       {
//         quote:
//           "The event was a turning point for our project. The feedback from industry experts helped us pivot our business model, and we're now the leading paragliding booking platform in the region.",
//         author: "Sunil Thapa",
//         position: "Team Leader",
//         team: "Adventure Tech (2nd Place Winner)",
//         image: "/placeholder.svg?height=100&width=100",
//       },
//       {
//         quote:
//           "As an investor, ToPS Koshi provided an excellent opportunity to discover innovative tourism startups. We've invested in two projects from the event that are now showing promising growth.",
//         author: "Michael Chen",
//         position: "Investment Director",
//         team: "Asia Tourism Ventures",
//         image: "/placeholder.svg?height=100&width=100",
//       },
//     ],
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % testimonials[year].length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [testimonials, year])

//   return (
//     <div className="my-20">
//       <h3 className="text-2xl font-bold text-center mb-12">Participant Testimonials</h3>

//       <div className="relative max-w-4xl mx-auto">
//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//           >
//             {testimonials[year].map((testimonial, index) => (
//               <div key={index} className="w-full flex-shrink-0 px-4">
//                 <Card className="p-8 text-center">
//                   <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
//                     <img
//                       src={testimonial.image || "/placeholder.svg"}
//                       alt={testimonial.author}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   <svg
//                     className="w-10 h-10 mx-auto mb-4 text-blue-200"
//                     fill="currentColor"
//                     viewBox="0 0 32 32"
//                     aria-hidden="true"
//                   >
//                     <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
//                   </svg>

//                   <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.quote}"</p>

//                   <div>
//                     <p className="font-semibold text-gray-900">{testimonial.author}</p>
//                     <p className="text-blue-600">{testimonial.position}</p>
//                     <p className="text-gray-600 text-sm">{testimonial.team}</p>
//                   </div>
//                 </Card>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-center mt-6 space-x-2">
//           {testimonials[year].map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`w-3 h-3 rounded-full transition-colors ${
//                 index === activeIndex ? "bg-blue-600" : "bg-gray-300"
//               }`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PostEventTestimonials

