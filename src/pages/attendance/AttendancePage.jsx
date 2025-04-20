import AttendanceCard from "../../components/attendance/AttendanceCard"
import PageHeader from "../../components/common/PageHeader"

const AttendancePage = () => {
  // Sample attendee data
  const attendees = [
    { id: 1, name: "Sagar Pokhrel", organization: "Tech Solutions .", ticketType: "standard" },
    { id: 2, name: "Manish Dev", organization: "Creative Designs", ticketType: "gold" },
    { id: 3, name: "Sisan Bhattarai", organization: "Data Analytics ", ticketType: "premium" },
    { id: 5, name: "Bishow Chauhan", organization: "Future Technologies", ticketType: "standard" },
  ]

  return (
    <div className="bg-gray-50">
          <PageHeader
            title="Attendance"
            description="Recognizing excellence and innovation in tourism projects"
            backgroundImage="https://imgs.search.brave.com/Cfn9Z4fk2zUIbKFae0IKxRVemVafnAjyWCdFBVmaSD4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9saWRheXN0b25l/cGFsLmluL21lZGlh/L2ZpbGVzL0Jsb2dz/L05hdGlvbmFsU3lt/Ym9sc09mTmVwYWwv/bmVwYWwtbmF0aW9u/YWwtZmxvd2VyLnBu/Zw"
          />

<div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16 text-center animate-slide-up">
          <h2 className="section-title">Attendance</h2>
          <p className="text-lg text-gray-700 mb-8">
            
          </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {attendees.map((attendee) => (
          <AttendanceCard
            key={attendee.id}
            name={attendee.name}
            organization={attendee.organization}
            ticketType={attendee.ticketType}
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default AttendancePage
