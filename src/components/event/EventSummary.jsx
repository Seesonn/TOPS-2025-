// import { Link } from "react-router-dom"
// import { Button } from "../../ui/Button"

// const EventSummary = () => {
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <div className="animate-slide-up">
//             <h2 className="text-3xl font-bold mb-6 text-gray-900">About the Event</h2>
//             <p className="text-gray-700 mb-4 text-lg">
//               Tourism Project Showcase – Koshi 2025 is a premier event that brings together students, industry experts,
//               and investors to showcase innovative tourism projects focused on the development of Koshi Province.
//             </p>
//             <p className="text-gray-700 mb-4">
//               The event aims to foster innovation, promote sustainable tourism practices, and attract investment in the
//               tourism sector of Koshi Province.
//             </p>
//             <p className="text-gray-700 mb-8">
//               Organized by Alison Hospitality in collaboration with Kafals, this three-day event will feature project
//               presentations, keynote speeches, panel discussions, and networking opportunities.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <Button
//                 variant="primary"
//                 as={Link}
//                 to="/registration"
//                 icon={
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path
//                       fillRule="evenodd"
//                       d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 }
//               >
//                 Register Your Team
//               </Button>
//               <Button
//                 variant="outline"
//                 as={Link}
//                 to="/timeline"
//                 icon={
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path
//                       fillRule="evenodd"
//                       d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 }
//               >
//                 View Event Schedule
//               </Button>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl shadow-lg overflow-hidden">
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-20 h-20 rounded-full bg-blue-600 bg-opacity-90 flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all shadow-lg">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-10 w-10 text-white"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-lg -z-10"></div>
//             <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg -z-10"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default EventSummary

import { Link } from "react-router-dom";
import { Button } from "../../ui/Button";
import { Carousel } from "../../ui/Carousel"; // Assuming you have or will create a Carousel component



const EventSummary = () => {
  const eventImages = [
    {
      src: "https://wallpapercave.com/dwp2x/n03ntmj.jpg",
      alt: "Tourism project presentation",
    },
    {
      src: "https://imgs.search.brave.com/q1PuqZzaRuwLtbB5fvq3rZrPRMInF05vLyFTtZ59-as/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC8wL2Yv/ZC8xMzIwNTMtMjU2/MHgxNjAwLWRlc2t0/b3AtaGQtaGltYWxh/eWFzLWJhY2tncm91/bmQuanBn",
      alt: "Networking at the event",
    },
    {
      src: "https://imgs.search.brave.com/juVc478_JsB7vGvoUfVJReDUyXrvHRSjuYKES6DqaQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS8xMi8x/OS9lMW1wOGcuanBn",
      alt: "Keynote speech session",
    },
    {
      src: "https://imgs.search.brave.com/pxtTQWVraPz5V3xWEOKjbDR6tmP467g-eEoOAW_xaiA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW91bnRhaW5waG90/b2dyYXBoeS5jb20v/aW1hZ2VzLzY0MC8y/MDE0MTAyNC1BbWEt/RGFibGFtLUFscGVu/Z2xvdy1SZWZsZWN0/aW9uLTQuanBn",
      alt: "Award ceremony",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-up">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              <span className="text-[#223F80]">About</span> <span className="text-[#F58432]">Event</span>
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              Tourism Project Showcase – Koshi 2025 is a premier event that brings together students, industry experts,
              and investors to showcase innovative tourism projects focused on the development of Koshi Province.
            </p>
            <p className="text-gray-700 mb-4">
              The event aims to foster innovation, promote sustainable tourism practices, and attract investment in the
              tourism sector of Koshi Province.
            </p>
            <p className="text-gray-700 mb-8">
              Organized by Alison Hospitality in collaboration with Kafals, this three-day event will feature project
              presentations, keynote speeches, panel discussions, and networking opportunities.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                as={Link}
                to="/registration"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              >
                Register Your Team
              </Button>
              <Button
                variant="outline"
                as={Link}
                to="/timeline"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              >
                View Event Schedule
              </Button>
            </div>
          </div>

          <div className="relative h-full">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Carousel
                images={eventImages}
                autoPlay={true}
                showDots={true}
                interval={5000}
                animation="fade"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSummary;