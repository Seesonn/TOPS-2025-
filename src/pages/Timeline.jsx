

// // import { useState } from "react"
// // import PageHeader from "../components/common/PageHeader"
// // import { Card } from "../ui/Card"
// // import { Button } from "../ui/Button"


// // const Timeline = () => {
// //   const [activeDay, setActiveDay] = useState(1)

// //   const days = [
// //     {
// //       day: 1,
// //       date: "April 28, 2025",
// //       title: "Opening Day",
// //       description: "Welcome ceremony, keynote speeches, and networking",
// //     },
// //     {
// //       day: 2,
// //       date: "April 29, 2025",
// //       title: "Presentation Day",
// //       description: "Project presentations, panel discussions, and workshops",
// //     },
// //     {
// //       day: 3,
// //       date: "April 30, 2025",
// //       title: "Awards Day",
// //       description: "Final evaluations, awards ceremony, and closing",
// //     },
// //   ]

// //   const schedules = {
// //     1: [
// //       { time: "08:00 - 09:00", event: "Registration & Check-in", location: "Main Lobby" },
// //       {
// //         time: "09:00 - 09:30",
// //         event: "Welcome Address",
// //         location: "Grand Ballroom",
// //         speaker: "Alina Magar, Event Director",
// //       },
// //       {
// //         time: "09:30 - 10:30",
// //         event: "Keynote Speech: Future of Tourism in Nepal",
// //         location: "Grand Ballroom",
// //         speaker: "Dr. Rajesh Sharma, Tourism Board of Nepal",
// //       },
// //       { time: "10:30 - 11:00", event: "Coffee Break & Networking", location: "Exhibition Hall" },
// //       {
// //         time: "11:00 - 12:30",
// //         event: "Panel Discussion: Sustainable Tourism Development",
// //         location: "Conference Room A",
// //       },
// //       { time: "12:30 - 14:00", event: "Lunch Break", location: "Garden Restaurant" },
// //       { time: "14:00 - 15:30", event: "Workshop: Tourism Innovation Strategies", location: "Workshop Room 1" },
// //       { time: "15:30 - 16:00", event: "Coffee Break", location: "Exhibition Hall" },
// //       { time: "16:00 - 17:30", event: "Team Orientation & Booth Setup", location: "Exhibition Hall" },
// //       { time: "18:00 - 20:00", event: "Welcome Dinner & Networking", location: "Rooftop Terrace" },
// //     ],
// //     2: [
// //       { time: "08:30 - 09:00", event: "Morning Coffee", location: "Exhibition Hall" },
// //       { time: "09:00 - 10:30", event: "Project Presentations (Group A)", location: "Grand Ballroom" },
// //       { time: "10:30 - 11:00", event: "Coffee Break", location: "Exhibition Hall" },
// //       { time: "11:00 - 12:30", event: "Project Presentations (Group B)", location: "Grand Ballroom" },
// //       { time: "12:30 - 14:00", event: "Lunch Break", location: "Garden Restaurant" },
// //       { time: "14:00 - 15:30", event: "Project Presentations (Group C)", location: "Grand Ballroom" },
// //       { time: "15:30 - 16:00", event: "Coffee Break", location: "Exhibition Hall" },
// //       { time: "16:00 - 17:30", event: "Mentoring Sessions", location: "Conference Rooms" },
// //       { time: "18:00 - 20:00", event: "Cultural Dinner & Performances", location: "Garden Restaurant" }
// //     ],
// //     3: [
// //       { time: "08:30 - 09:00", event: "Morning Coffee", location: "Exhibition Hall" },
// //       { time: "09:00 - 10:30", event: "Final Project Evaluations", location: "Grand Ballroom" },
// //       { time: "10:30 - 11:00", event: "Coffee Break", location: "Exhibition Hall" },
// //       {
// //         time: "11:00 - 12:30",
// //         event: "Keynote Speech: Investing in Tourism Innovation",
// //         location: "Grand Ballroom",
// //         speaker: "Sarah Johnson, International Tourism Council",
// //       },
// //       { time: "12:30 - 14:00", event: "Lunch Break", location: "Garden Restaurant" },
// //       {
// //         time: "14:00 - 15:30",
// //         event: "Panel Discussion: Future of Tourism in Koshi Province",
// //         location: "Conference Room A",
// //       },
// //       { time: "15:30 - 16:00", event: "Coffee Break", location: "Exhibition Hall" },
// //       { time: "16:00 - 17:30", event: "Awards Ceremony", location: "Grand Ballroom" },
// //       { time: "17:30 - 18:00", event: "Closing Remarks", location: "Grand Ballroom" },
// //       { time: "18:00 - 20:00", event: "Farewell Dinner & Celebration", location: "Rooftop Terrace" },
// //     ],
// //   }

// //   return (
// //     <div className="bg-gray-50">
// //       <PageHeader
// //         title="Event Timeline"
// //         description="Key dates and schedule for the Tourism Project Showcase – Koshi 2025"
// //         backgroundImage="https://as2.ftcdn.net/v2/jpg/02/36/78/41/1000_F_236784110_X3osd8iJKS0Y8tFASZSGXmV2RkxNUmBr.jpg"
// //       />

// //       <div className="container mx-auto px-4 py-16">
// //         <div className="max-w-4xl mx-auto mb-16 text-center animate-slide-up">
// //           <h2 className="section-title">Event Schedule</h2>
// //           <p className="text-lg text-gray-700 mb-8">
// //             Join us for three days of innovation, networking, and inspiration at the Tourism Project Showcase – Koshi
// //             2025.
// //           </p>

// //           <div className="flex flex-wrap justify-center gap-4 mb-12">
// //             {days.map((day) => (
// //               <Button
// //                 key={day.day}
// //                 variant={activeDay === day.day ? "primary" : "outline"}
// //                 onClick={() => setActiveDay(day.day)}
// //                 className="min-w-[150px]"
// //               >
// //                 Day {day.day}: {day.title}
// //               </Button>
// //             ))}
// //           </div>

// //           <div className="bg-blue-50 p-6 rounded-xl mb-12">
// //             <h3 className="text-2xl font-bold mb-2">
// //               Day {activeDay}: {days[activeDay - 1].title}
// //             </h3>
// //             <p className="text-[#2783BC] font-medium">{days[activeDay - 1].date}</p>
// //             <p className="text-gray-700 mt-2">{days[activeDay - 1].description}</p>
// //           </div>
// //         </div>

// //         <div className="max-w-4xl mx-auto">
// //           {schedules[activeDay].map((item, index) => (
// //             <div key={index} className="animate-slide-right mb-6" style={{ animationDelay: `${index * 0.05}s` }}>
// //               <Card className="p-6 flex flex-col md:flex-row md:items-center hover:shadow-md transition-shadow">
// //                 <div className="md:w-1/4 mb-4 md:mb-0">
// //                   <div className="font-bold text-[#2783BC]">{item.time}</div>
// //                   <div className="text-sm text-gray-500">{item.location}</div>
// //                 </div>
// //                 <div className="md:w-3/4 md:pl-6 border-l-0 md:border-l-2 border-blue-100">
// //                   <h4 className="text-lg font-semibold">{item.event}</h4>
// //                   {item.speaker && <p className="text-gray-700">Speaker: {item.speaker}</p>}
// //                 </div>
// //               </Card>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="max-w-4xl mx-auto mt-16 text-center">
// //           <h3 className="text-2xl font-bold mb-6">Download Full Schedule</h3>
// //           <Button
// //             variant="primary"
// //             icon={
// //               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// //                 <path
// //                   fillRule="evenodd"
// //                   d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
// //                   clipRule="evenodd"
// //                 />
// //               </svg>
// //             }
// //           >
// //             Download PDF Schedule
// //           </Button>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Timeline
// import React from 'react';

// const Timeline = () => {
//   const events = [
//     {
//       date: "May 23, 2025",
//       nepaliDate: "9th Jestha 2082",
//       title: "Inauguration & Exhibition Opening",
//       sessions: [
//         {
//           time: "1:00 PM - 1:30 PM",
//           title: "Grand Inauguration Ceremony",
//           details: [
//             "Welcome Speech by Organizers",
//             "Address by Chief Guest",
//             "Official Opening of the Event"
//           ],
//           speaker: "Animesh Bastola",
//           location: "Main Hall"
//         },
//         {
//           time: "1:30 PM - 5:00 PM",
//           title: "Exhibition Visit by VIPs and Guests",
//           details: [
//             "Tour of exhibition booths",
//             "Networking session",
//             "Media interactions"
//           ],
//           speaker: null,
//           location: "Exhibition Area"
//         }
//       ]
//     },
//     {
//       date: "May 24, 2025",
//       nepaliDate: "10th Jestha 2082",
//       title: "Public Exhibition & Panel Discussion",
//       sessions: [
//         {
//           time: "10:00 AM - 5:00 PM",
//           title: "Public Exhibition",
//           details: [
//             "Open to general public",
//             "Interactive displays",
//             "Innovation showcases"
//           ],
//           speaker: null,
//           location: "Exhibition Area"
//         },
//         {
//           time: "3:00 PM - 4:30 PM",
//           title: "Panel Discussion: Tourism Vision 2082",
//           details: [
//             "Industry Experts Discussion",
//             "Policy Perspectives",
//             "Q&A Session with Audience"
//           ],
//           speaker: "Bhabish Shrestha",
//           location: "Conference Hall"
//         }
//       ]
//     },
//     {
//       date: "May 25, 2025",
//       nepaliDate: "11th Jestha 2082",
//       title: "Project Presentations & Closing",
//       sessions: [
//         {
//           time: "11:00 AM - 1:00 PM",
//           title: "Final Project Presentations",
//           details: [
//             "Shortlisted project showcases",
//             "Judges evaluation",
//             "Public voting"
//           ],
//           speaker: null,
//           location: "Main Stage"
//         },
//         {
//           time: "3:00 PM - 5:00 PM",
//           title: "Closing & Award Ceremony",
//           details: [
//             "Remarks by Organizers",
//             "Announcement of Winners",
//             "Prize Distribution"
//           ],
//           speaker: null,
//           location: "Main Hall"
//         }
//       ]
//     }
//   ];

//   return (
//     <div className="max-w-4xl mx-auto px-5 py-12 font-sans">
//       {/* Header */}
//       <div className="text-center mb-16">
//         <h1 className="text-3xl md:text-4xl font-bold text-[#223F80] mb-3">
//           TOPS Event Schedule
//         </h1>
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-[#555]">
//           <p>May 23-25, 2025</p>
//           <span className="hidden sm:block">•</span>
//           <p>Hotel G Ramayana, Kathmandu</p>
//         </div>
//       </div>

//       {/* Timeline */}
//       <div className="space-y-16">
//         {events.map((event, index) => (
//           <div key={index} className="relative">
//             {/* Date Marker */}
//             <div className="absolute -left-5 top-0 h-full w-0.5 bg-[#2783BC]">
//               <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-[#223F80] border-4 border-white"></div>
//             </div>

//             {/* Event Content */}
//             <div className="ml-8">
//               <div className="mb-6">
//                 <h2 className="text-xl font-bold text-[#223F80]">{event.title}</h2>
//                 <p className="text-[#2783BC]">
//                   {event.date} <span className="text-gray-500">({event.nepaliDate})</span>
//                 </p>
//               </div>

//               <div className="space-y-8">
//                 {event.sessions.map((session, sessionIndex) => (
//                   <div key={sessionIndex} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//                     <div className="flex flex-col md:flex-row gap-6">
//                       {/* Time Column */}
//                       <div className="md:w-1/4">
//                         <div className="text-[#F58432] font-medium">{session.time}</div>
//                         <div className="text-sm text-gray-500 mt-1">{session.location}</div>
//                       </div>

//                       {/* Content Column */}
//                       <div className="md:w-3/4">
//                         <h3 className="text-lg font-semibold text-[#223F80] mb-3">{session.title}</h3>
                        
//                         {session.details && (
//                           <ul className="list-disc pl-5 space-y-2 text-gray-700">
//                             {session.details.map((detail, detailIndex) => (
//                               <li key={detailIndex}>{detail}</li>
//                             ))}
//                           </ul>
//                         )}

//                         {session.speaker && (
//                           <div className="mt-4 pt-4 border-t border-gray-100">
//                             <p className="text-sm text-gray-500">Featured Speaker</p>
//                             <p className="font-medium text-[#F58432]">{session.speaker}</p>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <div className="mt-20 text-center">
//         <div className="inline-block border-t border-b border-[#2783BC] py-4 px-8">
//           <p className="text-[#223F80] font-medium">For more information</p>
//           <a 
//             href="https://topsnepal.org" 
//             className="text-[#F58432] hover:underline font-medium"
//           >
//             Visit topsnepal.org
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;

import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import SchedulePDF from './SchedulePDF'; 
import { Button } from '../ui/Button';
import PageHeader from '../components/common/PageHeader';

const Timeline = () => {
  const [activeDay, setActiveDay] = useState(0);

  const events = [
    {
      id: 'day1',
      date: "May 23, 2025",
      nepaliDate: "9th Jestha 2082",
      title: "Inauguration & Exhibition Opening",
      sessions: [
        {
          time: "1:00 PM - 1:30 PM",
          title: "Grand Inauguration Ceremony",
          details: [
            "Welcome Speech by Organizers",
            "Address by Chief Guest",
            "Official Opening of the Event"
          ],
          speaker: "Animesh Bastola",
          // location: "Main Hall"
        },
        {
          time: "1:30 PM - 5:00 PM",
          title: "Exhibition Visit by VIPs and Guests",
          details: [
            "Tour of exhibition booths",
            "Networking session",
            "Media interactions"
          ],
          speaker: null,
          // location: "Exhibition Area"
        }
      ]
    },
    {
      id: 'day2',
      date: "May 24, 2025",
      nepaliDate: "10th Jestha 2082",
      title: "Public Exhibition & Panel Discussion",
      sessions: [
        {
          time: "10:00 AM - 5:00 PM",
          title: "Public Exhibition",
          details: [
            "Open to general public",
            
          ],
          speaker: null,
          // location: "Exhibition Area"
        },
        {
          time: "3:00 PM - 4:30 PM",
          title: "Panel Discussion: Tourism Vision 2082",
          details: [
            "Industry Experts & Officials Discussion",
            "Q&A Session with Audience"
          ],
          speaker: "Bhabish Shrestha",
          // location: "Conference Hall"
        }
      ]
    },
    {
      id: 'day3',
      date: "May 25, 2025",
      nepaliDate: "11th Jestha 2082",
      title: "Project Presentations & Closing",
      sessions: [
        {
          time: "11:00 AM - 1:00 PM",
          title: "Final Project Presentations",
          details: [
            "Shortlisted project showcases",
            "Judges evaluation"
          ],
          speaker: null,
          // location: "Main Stage"
        },
        {
          time: "3:00 PM - 5:00 PM",
          title: "Closing & Award Ceremony",
          details: [
            "Remarks by Organizers",
            "Announcement of Winners",
            "Prize Distribution"
          ],
          speaker: null,
          // location: "Main Hall"
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header with background image */}
      <PageHeader
        title="Event Schedule"
        description="Note the Schedule of the Tourism Project Showcase"
        backgroundImage="https://t3.ftcdn.net/jpg/13/06/01/38/240_F_1306013815_W5xrWJiKD4xSlHbCEiUfAeHb08kxMBTR.jpg"
      />
      
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#223F80] mb-3">
            TOPS Event Schedule
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-[#555] mb-8">
            <p>May 23-25, 2025</p>
            <span className="hidden sm:block">•</span>
            <p>Hotel G Ramayana, Kathmandu</p>
          </div>

          {/* Day navigation buttons */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md shadow-sm">
              {events.map((event, index) => (
                <Button
                  key={event.id}
                  onClick={() => setActiveDay(index)}
                  className={`px-6 py-3 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#2783BC] focus:z-10 transition-colors duration-200 ${
                    activeDay === index
                      ? 'bg-[#223F80] text-white'
                      : 'bg-white text-[#223F80] hover:bg-gray-50 border border-gray-200'
                  } ${
                    index === 0 
                      ? 'rounded-r-none me-1'  
                      : index === events.length - 1 
                        ? 'rounded-l-none ms-1'  
                        : 'rounded-none mx-1'    
                  }`}
                >
                  Day {index + 1}
                </Button>
              ))}
            </div>
          </div>

          {/* PDF download button */}
          <div className="mb-12">
            <PDFDownloadLink 
              document={<SchedulePDF events={events} />} 
              fileName="TOPS_Schedule_2025.pdf"
              className="bg-[#F58432] hover:bg-[#E57329] text-white px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors duration-200"
            >
              {({ loading }) => (
                loading ? 'Preparing PDF...' : 'Download Full Schedule'
              )}
            </PDFDownloadLink>
          </div>
        </div>

        
        <div className="flex justify-center">
          <div className="w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
         
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#223F80] mb-2">
                {events[activeDay].title}
              </h2>
              <p className="text-lg text-[#2783BC]">
                {events[activeDay].date} 
                <span className="text-gray-500 ml-2">({events[activeDay].nepaliDate})</span>
              </p>
            </div>

    
            <div className="space-y-8">
              {events[activeDay].sessions.map((session, sessionIndex) => (
                <div 
                  key={sessionIndex} 
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                   
                    <div className="md:w-1/4">
                      <div className="text-[#F58432] font-medium text-lg">{session.time}</div>
                      {/* {session.location && (
                        <div className="text-sm text-gray-500 mt-2">
                          <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {session.location}
                        </div>
                      )} */}
                    </div>

                    
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-semibold text-[#223F80] mb-3">{session.title}</h3>
                      
                      {session.details && (
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          {session.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="leading-relaxed">{detail}</li>
                          ))}
                        </ul>
                      )}

                      {session.speaker && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-sm text-gray-500">Featured Speaker</p>
                          <p className="font-medium text-[#F58432] text-lg">{session.speaker}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;