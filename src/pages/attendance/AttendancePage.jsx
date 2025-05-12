
import AttendanceCard from "../../components/attendance/AttendanceCard"
import PageHeader from "../../components/common/PageHeader"

const AttendancePage = () => {
  
  const attendees = [
    { id: 1, name: "Sagar Pokhrel", organization: "Tech Solutions", ticketType: "standard" },
    { id: 2, name: "Manish Dev", organization: "Creative Designs", ticketType: "gold" },
    { id: 3, name: "Sisan Bhattarai", organization: "Data Analytics", ticketType: "premium" },
    { id: 4, name: "Bishow Chauhan", organization: "Future Technologies", ticketType: "standard" },
    { id: 5, name: "Swastika Gurung", organization: "Digital Nepal", ticketType: "gold" },
    { id: 6, name: "Sujan Karki", organization: "Software Development", ticketType: "premium" },
    { id: 7, name: "Amrit Gurung", organization: "Cloud Computing", ticketType: "gold" },
    { id: 8, name: "Niraj Basnet", organization: "Cyber Security", ticketType: "standard" },
    { id: 9, name: "Pradeep Paudel", organization: "Artificial Intelligence", ticketType: "gold" },
    { id: 10, name: "Bikram Thapa", organization: "Data Science", ticketType: "premium" },
    { id: 11, name: "Santosh Rai", organization: "Mobile Apps", ticketType: "gold" },
    { id: 12, name: "Dipendra Khadka", organization: "Web Design", ticketType: "standard" },
    { id: 13, name: "Nirajan Sharma", organization: "Digital Marketing", ticketType: "gold" },
    { id: 14, name: "Abhishek Yadav", organization: "Networking", ticketType: "premium" },
    { id: 15, name: "Rohan Maharjan", organization: "Database Management", ticketType: "gold" },
    { id: 16, name: "Aadarsh Pandey", organization: "System Admin", ticketType: "standard" },
    { id: 17, name: "Suman Ghimire", organization: "Game Development", ticketType: "gold" },
    { id: 18, name: "Prakash Neupane", organization: "Blockchain Technology", ticketType: "premium" },
    { id: 19, name: "Vikash Adhikari", organization: "Machine Learning", ticketType: "gold" },
    { id: 20, name: "Anup Bhandari", organization: "Quantum Computing", ticketType: "standard" },
    { id: 21, name: "Ramesh Kumal", organization: "IoT Solutions", ticketType: "gold" },
    { id: 22, name: "Sandip Lamichhane", organization: "Robotics", ticketType: "premium" },
    { id: 23, name: "Ujjwal Shakya", organization: "AR/VR", ticketType: "gold" },
    { id: 24, name: "Deepak Sapkota", organization: "Cyber Forensics", ticketType: "standard" },
    { id: 25, name: "Nischal Thapa", organization: "Digital Transformation", ticketType: "gold" },
    { id: 26, name: "Bibek Joshi", organization: "UI/UX Design", ticketType: "premium" },
    { id: 27, name: "Sanish Maharjan", organization: "Big Data", ticketType: "gold" },
    { id: 28, name: "Pratik Shrestha", organization: "DevOps", ticketType: "standard" },
    { id: 29, name: "Rabin Thapa", organization: "Cloud Security", ticketType: "gold" },
    { id: 30, name: "Suresh Bajracharya", organization: "FinTech", ticketType: "premium" },
    { id: 31, name: "Anil Poudel", organization: "E-Commerce", ticketType: "gold" },
    { id: 32, name: "Krishna Gurung", organization: "IT Consulting", ticketType: "standard" },
    { id: 33, name: "Hari Sharma", organization: "Network Security", ticketType: "gold" },
    { id: 34, name: "Bikash Thakuri", organization: "Software Testing", ticketType: "premium" },
    { id: 35, name: "Nabin Khatri", organization: "Data Engineering", ticketType: "gold" },
    { id: 36, name: "Raju Tamang", organization: "Mobile Development", ticketType: "standard" },
    { id: 37, name: "Suman Basnet", organization: "Web Development", ticketType: "gold" },
    { id: 38, name: "Prakash KC", organization: "AI Research", ticketType: "premium" },
    { id: 39, name: "Bimal Acharya", organization: "Cloud Architecture", ticketType: "gold" },
    { id: 40, name: "Dinesh Bista", organization: "IT Infrastructure", ticketType: "standard" },
    { id: 41, name: "Saroj Dahal", organization: "Tech Startups", ticketType: "gold" },
    { id: 42, name: "Rupesh Shrestha", organization: "Data Visualization", ticketType: "premium" },
    { id: 43, name: "Kiran Rana", organization: "Cyber Defense", ticketType: "gold" },
    { id: 44, name: "Ashish Magar", organization: "IT Solutions", ticketType: "standard" },
    { id: 45, name: "Roshan Thapa", organization: "Digital Innovation", ticketType: "gold" },
    { id: 46, name: "Bhuwan KC", organization: "Tech Education", ticketType: "premium" },
    { id: 47, name: "Sagar Timalsina", organization: "Software Architecture", ticketType: "gold" },
    { id: 48, name: "Rajiv Maharjan", organization: "IT Management", ticketType: "standard" },
  ]


  const sortedAttendees = [...attendees].sort((a, b) => {
    const nameA = a.name.toUpperCase(); 
    const nameB = b.name.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    
    return 0;
  });

  return (
    <div className="bg-gray-50">
        <PageHeader
        title="Event Attendees"
        description="Meet our distinguished participants and supporters"
        backgroundImage="https://imgs.search.brave.com/Cfn9Z4fk2zUIbKFae0IKxRVemVafnAjyWCdFBVmaSD4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9saWRheXN0b25l/cGFsLmluL21lZGlh/L2ZpbGVzL0Jsb2dz/L05hdGlvbmFsU3lt/Ym9sc09mTmVwYWwv/bmVwYWwtbmF0aW9u/YWwtZmxvd2VyLnBu/Zw"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16 text-center animate-slide-up">
           <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Distinguished Attendees</h2>
          <p className="text-xl text-gray-600 mb-6">
            Connecting innovators, leaders, and visionaries from across the industry
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedAttendees.map((attendee) => (
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