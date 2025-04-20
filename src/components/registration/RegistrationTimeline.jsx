const RegistrationTimeline = () => {
  const timelineEvents = [
    {
      date: "January 15, 2025",
      title: "Registration Opens",
      description: "Team registration begins for ToPS Koshi 2025.",
    },
    {
      date: "March 31, 2025",
      title: "Registration Deadline",
      description: "Last day to register your team for the event.",
    },
    {
      date: "April 10, 2025",
      title: "Project Submission",
      description: "Deadline for submitting your project proposal and presentation.",
    },
    {
      date: "April 20, 2025",
      title: "Confirmation",
      description: "Selected teams will be notified and provided with final instructions.",
    },
    {
      date: "April 28-30, 2025",
      title: "Event Days",
      description: "Tourism Project Showcase at G. Ramayana Hotel, Koshi Province.",
    },
  ]

  return (
    <div className="my-20 animate-slide-up">
      <h3 className="text-2xl font-bold text-center mb-12">Important Dates</h3>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#2783BC]/80"></div>

        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`relative z-10 mb-12 flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#2783BC]"></div>

            {/* Content */}
            <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}>
              <div className="animate-slide-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#2783BC] text-sm font-medium mb-2">
                  {event.date}
                </span>
                <h4 className="text-lg font-semibold mb-1">{event.title}</h4>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>

            {/* Empty space for the other side */}
            <div className="w-5/12"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RegistrationTimeline

