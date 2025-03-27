

import { useState } from "react"
import PageHeader from "../components/common/PageHeader"
import { Card } from "../ui/Card"
import { Button } from "../ui/Button"

const Timeline = () => {
  const [activeDay, setActiveDay] = useState(1)

  const days = [
    {
      day: 1,
      date: "April 28, 2025",
      title: "Opening Day",
      description: "Welcome ceremony, keynote speeches, and networking",
    },
    {
      day: 2,
      date: "April 29, 2025",
      title: "Presentation Day",
      description: "Project presentations, panel discussions, and workshops",
    },
    {
      day: 3,
      date: "April 30, 2025",
      title: "Awards Day",
      description: "Final evaluations, awards ceremony, and closing",
    },
  ]

  const schedules = {
    1: [
      { time: "08:00 - 09:00", event: "Registration & Check-in", location: "Main Lobby" },
      {
        time: "09:00 - 09:30",
        event: "Welcome Address",
        location: "Grand Ballroom",
        speaker: "Alina Magar, Event Director",
      },
      {
        time: "09:30 - 10:30",
        event: "Keynote Speech: Future of Tourism in Nepal",
        location: "Grand Ballroom",
        speaker: "Dr. Rajesh Sharma, Tourism Board of Nepal",
      },
      { time: "10:30 - 11:00", event: "Coffee Break & Networking", location: "Exhibition Hall" },
      {
        time: "11:00 - 12:30",
        event: "Panel Discussion: Sustainable Tourism Development",
        location: "Conference Room A",
      },
      { time: "12:30 - 14:00", event: "Lunch Break", location: "Garden Restaurant" },
      { time: "14:00 - 15:30", event: "Workshop: Tourism Innovation Strategies", location: "Workshop Room 1" },
      { time: "15:30 - 16:00", event: "Coffee Break", location: "Exhibition Hall" },
      { time: "16:00 - 17:30", event: "Team Orientation & Booth Setup", location: "Exhibition Hall" },
      { time: "18:00 - 20:00", event: "Welcome Dinner & Networking", location: "Rooftop Terrace" },
    ],
    2: [
      { time: "08:30 - 09:00", event: "Morning Coffee", location: "Exhibition Hall" },
      { time: "09:00 - 10:30", event: "Project Presentations (Group A)", location: "Grand Ballroom" },
      { time: "10:30 - 11:00", event: "Coffee Break", location: "Exhibition Hall" },
      { time: "11:00 - 12:30", event: "Project Presentations (Group B)", location: "Grand Ballroom" },
      { time: "12:30 - 14:00", event: "Lunch Break", location: "Garden Restaurant" },
      { time: "14:00 - 15:30", event: "Project Presentations (Group C)", location: "Grand Ballroom" },
      { time: "15:30 - 16:00", event: "Coffee Break", location: "Exhibition Hall" },
      { time: "16:00 - 17:30", event: "Mentoring Sessions", location: "Conference Rooms" },
      { time: "18:00 - 20:00", event: "Cultural Dinner & Performances", location: "Garden Restaurant" }
    ],
    3: [
      { time: "08:30 - 09:00", event: "Morning Coffee", location: "Exhibition Hall" },
      { time: "09:00 - 10:30", event: "Final Project Evaluations", location: "Grand Ballroom" },
      { time: "10:30 - 11:00", event: "Coffee Break", location: "Exhibition Hall" },
      {
        time: "11:00 - 12:30",
        event: "Keynote Speech: Investing in Tourism Innovation",
        location: "Grand Ballroom",
        speaker: "Sarah Johnson, International Tourism Council",
      },
      { time: "12:30 - 14:00", event: "Lunch Break", location: "Garden Restaurant" },
      {
        time: "14:00 - 15:30",
        event: "Panel Discussion: Future of Tourism in Koshi Province",
        location: "Conference Room A",
      },
      { time: "15:30 - 16:00", event: "Coffee Break", location: "Exhibition Hall" },
      { time: "16:00 - 17:30", event: "Awards Ceremony", location: "Grand Ballroom" },
      { time: "17:30 - 18:00", event: "Closing Remarks", location: "Grand Ballroom" },
      { time: "18:00 - 20:00", event: "Farewell Dinner & Celebration", location: "Rooftop Terrace" },
    ],
  }

  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Event Timeline"
        description="Key dates and schedule for the Tourism Project Showcase – Koshi 2025"
        backgroundImage="https://as2.ftcdn.net/v2/jpg/02/36/78/41/1000_F_236784110_X3osd8iJKS0Y8tFASZSGXmV2RkxNUmBr.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16 text-center animate-slide-up">
          <h2 className="section-title">Event Schedule</h2>
          <p className="text-lg text-gray-700 mb-8">
            Join us for three days of innovation, networking, and inspiration at the Tourism Project Showcase – Koshi
            2025.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {days.map((day) => (
              <Button
                key={day.day}
                variant={activeDay === day.day ? "primary" : "outline"}
                onClick={() => setActiveDay(day.day)}
                className="min-w-[150px]"
              >
                Day {day.day}: {day.title}
              </Button>
            ))}
          </div>

          <div className="bg-blue-50 p-6 rounded-xl mb-12">
            <h3 className="text-2xl font-bold mb-2">
              Day {activeDay}: {days[activeDay - 1].title}
            </h3>
            <p className="text-blue-800 font-medium">{days[activeDay - 1].date}</p>
            <p className="text-gray-700 mt-2">{days[activeDay - 1].description}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {schedules[activeDay].map((item, index) => (
            <div key={index} className="animate-slide-right mb-6" style={{ animationDelay: `${index * 0.05}s` }}>
              <Card className="p-6 flex flex-col md:flex-row md:items-center hover:shadow-md transition-shadow">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="font-bold text-blue-600">{item.time}</div>
                  <div className="text-sm text-gray-500">{item.location}</div>
                </div>
                <div className="md:w-3/4 md:pl-6 border-l-0 md:border-l-2 border-blue-100">
                  <h4 className="text-lg font-semibold">{item.event}</h4>
                  {item.speaker && <p className="text-gray-700">Speaker: {item.speaker}</p>}
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Download Full Schedule</h3>
          <Button
            variant="primary"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            }
          >
            Download PDF Schedule
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Timeline