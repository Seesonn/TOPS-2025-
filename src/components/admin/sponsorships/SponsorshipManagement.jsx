
import { useState, useEffect } from "react"
import { Card } from "../../../ui/Card"
import SponsorshipDetails from "./SponsorshipDetails"

const SponsorshipManagement = () => {
  const [sponsorships, setSponsorships] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedSponsorship, setSelectedSponsorship] = useState(null)
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // Simulate API call to fetch sponsorships
    setTimeout(() => {
      const mockSponsorships = [
        {
          id: "spn-001",
          companyName: "Nepal Airlines",
          contactName: "Rajendra Shrestha",
          email: "rajendra@nepalairlines.com",
          phone: "+977 9841234567",
          website: "https://www.nepalairlines.com",
          sponsorshipLevel: "title",
          message:
            "We are excited to support the Tourism Project Showcase as the title sponsor. As Nepal's flag carrier, we are committed to promoting tourism in the Koshi region.",
          submittedAt: "2025-01-10T09:15:00",
          status: "approved",
        },
        {
          id: "spn-002",
          companyName: "Himalayan Bank",
          contactName: "Sunita Gurung",
          email: "sunita@himalayanbank.com",
          phone: "+977 9852345678",
          website: "https://www.himalayanbank.com",
          sponsorshipLevel: "gold",
          message:
            "Himalayan Bank is proud to support initiatives that boost tourism in Nepal. We look forward to being part of this showcase.",
          submittedAt: "2025-01-12T14:30:00",
          status: "pending",
        },
        {
          id: "spn-003",
          companyName: "Mountain Gear Nepal",
          contactName: "Bikash Tamang",
          email: "bikash@mountaingear.com.np",
          phone: "+977 9863456789",
          website: "https://www.mountaingear.com.np",
          sponsorshipLevel: "silver",
          message:
            "As a leading outdoor equipment provider, we are keen to support tourism initiatives that promote adventure activities in Nepal.",
          submittedAt: "2025-01-14T11:45:00",
          status: "approved",
        },
        {
          id: "spn-004",
          companyName: "Everest Tea Estate",
          contactName: "Prabha Rai",
          email: "prabha@everesttea.com",
          phone: "+977 9874567890",
          website: "https://www.everesttea.com",
          sponsorshipLevel: "bronze",
          message:
            "We would like to showcase our organic teas from the Koshi region and support local tourism development.",
          submittedAt: "2025-01-16T10:20:00",
          status: "rejected",
        },
        {
          id: "spn-005",
          companyName: "Koshi Rafting Adventures",
          contactName: "Deepak Magar",
          email: "deepak@koshirafting.com",
          phone: "+977 9885678901",
          website: "https://www.koshirafting.com",
          sponsorshipLevel: "silver",
          message:
            "As a local adventure tourism operator, we are excited to support this showcase and highlight the adventure tourism potential of the Koshi region.",
          submittedAt: "2025-01-18T15:10:00",
          status: "pending",
        },
      ]

      setSponsorships(mockSponsorships)
      setLoading(false)
    }, 1000)
  }, [])

  const handleStatusChange = (id, newStatus) => {
    setSponsorships((prevSponsorships) =>
      prevSponsorships.map((spn) => (spn.id === id ? { ...spn, status: newStatus } : spn)),
    )

    if (selectedSponsorship && selectedSponsorship.id === id) {
      setSelectedSponsorship((prev) => ({ ...prev, status: newStatus }))
    }
  }

  const filteredSponsorships = sponsorships.filter((spn) => {
    // Apply status filter
    if (filter !== "all" && spn.status !== filter) return false

    // Apply search filter (case insensitive)
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      return (
        spn.companyName.toLowerCase().includes(searchLower) ||
        spn.contactName.toLowerCase().includes(searchLower) ||
        spn.sponsorshipLevel.toLowerCase().includes(searchLower)
      )
    }

    return true
  })

  const getSponsorshipLevelName = (level) => {
    const levels = {
      title: "Title Sponsor",
      gold: "Gold Sponsor",
      silver: "Silver Sponsor",
      bronze: "Bronze Sponsor",
    }
    return levels[level] || level
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Sponsorship Management</h1>
        <div className="flex space-x-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All Sponsorships</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
          <div className="relative">
            <input
              type="text"
              placeholder="Search sponsorships..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-9"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card className="overflow-hidden">
            <div className="bg-green-50 px-4 py-3 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Sponsorships ({filteredSponsorships.length})</h2>
            </div>

            <div className="divide-y divide-gray-200 max-h-[calc(100vh-250px)] overflow-y-auto">
              {loading ? (
                <div className="p-4 text-center">
                  <svg
                    className="animate-spin h-8 w-8 mx-auto text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <p className="mt-2 text-gray-500">Loading sponsorships...</p>
                </div>
              ) : filteredSponsorships.length === 0 ? (
                <div className="p-4 text-center text-gray-500">No sponsorships found</div>
              ) : (
                filteredSponsorships.map((sponsorship) => (
                  <button
                    key={sponsorship.id}
                    className={`w-full text-left p-4 hover:bg-gray-50 focus:outline-none transition-colors duration-150 ${
                      selectedSponsorship?.id === sponsorship.id ? "bg-green-50" : ""
                    }`}
                    onClick={() => setSelectedSponsorship(sponsorship)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{sponsorship.companyName}</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {getSponsorshipLevelName(sponsorship.sponsorshipLevel)}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Contact: {sponsorship.contactName}</p>
                      </div>
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          sponsorship.status === "approved"
                            ? "bg-green-100 text-green-800"
                            : sponsorship.status === "rejected"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {sponsorship.status.charAt(0).toUpperCase() + sponsorship.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      Submitted: {new Date(sponsorship.submittedAt).toLocaleDateString()}
                    </p>
                  </button>
                ))
              )}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-2">
          {selectedSponsorship ? (
            <SponsorshipDetails
              sponsorship={selectedSponsorship}
              onStatusChange={handleStatusChange}
              onClose={() => setSelectedSponsorship(null)}
            />
          ) : (
            <Card className="p-6 flex flex-col items-center justify-center h-full text-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-lg font-medium mb-2">No Sponsorship Selected</h3>
              <p className="max-w-md">
                Select a sponsorship application from the list to view details, or use the search and filter options to
                find specific sponsorships.
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

export default SponsorshipManagement

