"use client"

import { useState, useEffect } from "react"
import { Card } from "../../../ui/Card"
import RegistrationDetails from "./RegistrationDetails"

const RegistrationManagement = () => {
  const [registrations, setRegistrations] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedRegistration, setSelectedRegistration] = useState(null)
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // Simulate API call to fetch registrations
    setTimeout(() => {
      const mockRegistrations = [
        {
          id: "reg-001",
          teamName: "Eco Explorers",
          projectTheme: "eco",
          projectTitle: "Sustainable Trekking Routes in Koshi",
          projectDescription:
            "A comprehensive mapping of eco-friendly trekking routes with minimal environmental impact in the Koshi region.",
          leaderName: "Aarav Sharma",
          leaderEmail: "aarav@gmail.com",
          leaderPhone: "+977 9801234567",
          leaderInstitution: "Kathmandu University",
          members: [
            { name: "Aarav Sharma", email: "aarav@gmail.com", institution: "Kathmandu University" },
            { name: "Priya Thapa", email: "priya@gmail.com", institution: "Kathmandu University" },
            { name: "Rohan Gurung", email: "rohan@gmail.com", institution: "Tribhuvan University" },
          ],
          heardFrom: "university",
          specialRequirements: "Need power outlet for demonstration",
          submittedAt: "2025-01-15T08:30:00",
          status: "pending",
        },
        {
          id: "reg-002",
          teamName: "Digital Nomads",
          projectTheme: "smart-city",
          projectTitle: "Smart Tourism App for Koshi Region",
          projectDescription:
            "An interactive mobile application that provides real-time information about tourist destinations, accommodations, and local experiences in the Koshi region.",
          leaderName: "Anisha Rai",
          leaderEmail: "anisha@gmail.com",
          leaderPhone: "+977 9802345678",
          leaderInstitution: "Nepal Engineering College",
          members: [
            { name: "Anisha Rai", email: "anisha@gmail.com", institution: "Nepal Engineering College" },
            { name: "Suraj Limbu", email: "suraj@gmail.com", institution: "Nepal Engineering College" },
            { name: "Dipika Shrestha", email: "dipika@gmail.com", institution: "Pokhara University" },
            { name: "Bikash Tamang", email: "bikash@gmail.com", institution: "Tribhuvan University" },
          ],
          heardFrom: "social-media",
          specialRequirements: "",
          submittedAt: "2025-01-16T14:45:00",
          status: "approved",
        },
        {
          id: "reg-003",
          teamName: "Heritage Guardians",
          projectTheme: "cultural",
          projectTitle: "Cultural Heritage Preservation through Tourism",
          projectDescription:
            "A project focused on preserving and promoting the cultural heritage of indigenous communities in Koshi through sustainable tourism practices.",
          leaderName: "Rajesh Magar",
          leaderEmail: "rajesh@gmail.com",
          leaderPhone: "+977 9803456789",
          leaderInstitution: "Tribhuvan University",
          members: [
            { name: "Rajesh Magar", email: "rajesh@gmail.com", institution: "Tribhuvan University" },
            { name: "Sabina Khadka", email: "sabina@gmail.com", institution: "Tribhuvan University" },
          ],
          heardFrom: "newspaper",
          specialRequirements: "Need display space for cultural artifacts",
          submittedAt: "2025-01-17T11:20:00",
          status: "rejected",
        },
        {
          id: "reg-004",
          teamName: "Adventure Seekers",
          projectTheme: "adventure",
          projectTitle: "Extreme Sports Tourism in Eastern Nepal",
          projectDescription:
            "Developing a comprehensive plan for promoting extreme sports tourism including paragliding, white water rafting, and rock climbing in the Koshi region.",
          leaderName: "Nischal Basnet",
          leaderEmail: "nischal@gmail.com",
          leaderPhone: "+977 9804567890",
          leaderInstitution: "Pokhara University",
          members: [
            { name: "Nischal Basnet", email: "nischal@gmail.com", institution: "Pokhara University" },
            { name: "Kriti Pradhan", email: "kriti@gmail.com", institution: "Pokhara University" },
            { name: "Aashish KC", email: "aashish@gmail.com", institution: "Pokhara University" },
          ],
          heardFrom: "friend",
          specialRequirements: "",
          submittedAt: "2025-01-18T09:15:00",
          status: "pending",
        },
        {
          id: "reg-005",
          teamName: "Rural Revivalists",
          projectTheme: "agro",
          projectTitle: "Farm-to-Table Tourism Experience",
          projectDescription:
            "Creating immersive farm-to-table tourism experiences that connect visitors with local farmers and traditional agricultural practices in rural Koshi.",
          leaderName: "Suman Tamang",
          leaderEmail: "suman@gmail.com",
          leaderPhone: "+977 9805678901",
          leaderInstitution: "Agriculture and Forestry University",
          members: [
            { name: "Suman Tamang", email: "suman@gmail.com", institution: "Agriculture and Forestry University" },
            { name: "Puja Rai", email: "puja@gmail.com", institution: "Agriculture and Forestry University" },
            { name: "Binod Sherpa", email: "binod@gmail.com", institution: "Agriculture and Forestry University" },
            { name: "Gita Magar", email: "gita@gmail.com", institution: "Tribhuvan University" },
          ],
          heardFrom: "university",
          specialRequirements: "Need refrigeration for food samples",
          submittedAt: "2025-01-19T16:30:00",
          status: "approved",
        },
      ]

      setRegistrations(mockRegistrations)
      setLoading(false)
    }, 1000)
  }, [])

  const handleStatusChange = (id, newStatus) => {
    setRegistrations((prevRegistrations) =>
      prevRegistrations.map((reg) => (reg.id === id ? { ...reg, status: newStatus } : reg)),
    )

    if (selectedRegistration && selectedRegistration.id === id) {
      setSelectedRegistration((prev) => ({ ...prev, status: newStatus }))
    }
  }

  const filteredRegistrations = registrations.filter((reg) => {
    // Apply status filter
    if (filter !== "all" && reg.status !== filter) return false

    // Apply search filter (case insensitive)
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      return (
        reg.teamName.toLowerCase().includes(searchLower) ||
        reg.projectTitle.toLowerCase().includes(searchLower) ||
        reg.leaderName.toLowerCase().includes(searchLower)
      )
    }

    return true
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Registration Management</h1>
        <div className="flex space-x-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All Registrations</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
          <div className="relative">
            <input
              type="text"
              placeholder="Search registrations..."
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
            <div className="bg-blue-50 px-4 py-3 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Registrations ({filteredRegistrations.length})</h2>
            </div>

            <div className="divide-y divide-gray-200 max-h-[calc(100vh-250px)] overflow-y-auto">
              {loading ? (
                <div className="p-4 text-center">
                  <svg
                    className="animate-spin h-8 w-8 mx-auto text-blue-500"
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
                  <p className="mt-2 text-gray-500">Loading registrations...</p>
                </div>
              ) : filteredRegistrations.length === 0 ? (
                <div className="p-4 text-center text-gray-500">No registrations found</div>
              ) : (
                filteredRegistrations.map((registration) => (
                  <button
                    key={registration.id}
                    className={`w-full text-left p-4 hover:bg-gray-50 focus:outline-none transition-colors duration-150 ${
                      selectedRegistration?.id === registration.id ? "bg-blue-50" : ""
                    }`}
                    onClick={() => setSelectedRegistration(registration)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{registration.teamName}</h3>
                        <p className="text-sm text-gray-500 mt-1">{registration.projectTitle}</p>
                        <p className="text-xs text-gray-500 mt-1">Leader: {registration.leaderName}</p>
                      </div>
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          registration.status === "approved"
                            ? "bg-green-100 text-green-800"
                            : registration.status === "rejected"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {registration.status.charAt(0).toUpperCase() + registration.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      Submitted: {new Date(registration.submittedAt).toLocaleDateString()}
                    </p>
                  </button>
                ))
              )}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-2">
          {selectedRegistration ? (
            <RegistrationDetails
              registration={selectedRegistration}
              onStatusChange={handleStatusChange}
              onClose={() => setSelectedRegistration(null)}
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <h3 className="text-lg font-medium mb-2">No Registration Selected</h3>
              <p className="max-w-md">
                Select a registration from the list to view details, or use the search and filter options to find
                specific registrations.
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

export default RegistrationManagement

