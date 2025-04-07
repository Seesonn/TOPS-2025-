

import { useState, useEffect } from "react"
import { Card } from "../../../ui/Card"
import TicketDetails from "./TicketDetails"

const TicketManagement = () => {
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // Simulate API call to fetch tickets
    setTimeout(() => {
      const mockTickets = [
        {
          id: "tkt-001",
          orderNumber: "TPS-123456",
          orderDate: "2025-01-15T10:30:00",
          ticketType: "standard",
          ticketName: "Standard Ticket",
          price: 1000,
          paymentMethod: "esewa",
          firstName: "Aarav",
          lastName: "Sharma",
          email: "aarav.sharma@gmail.com",
          phone: "+977 9801234567",
          organization: "Kathmandu University",
          status: "completed",
        },
        {
          id: "tkt-002",
          orderNumber: "TPS-234567",
          orderDate: "2025-01-16T14:45:00",
          ticketType: "gold",
          ticketName: "Gold Ticket",
          price: 2500,
          paymentMethod: "khalti",
          firstName: "Priya",
          lastName: "Thapa",
          email: "priya.thapa@gmail.com",
          phone: "+977 9802345678",
          organization: "Nepal Tourism Board",
          status: "completed",
        },
        {
          id: "tkt-003",
          orderNumber: "TPS-345678",
          orderDate: "2025-01-17T09:15:00",
          ticketType: "premium",
          ticketName: "Premium Ticket",
          price: 10000,
          paymentMethod: "esewa",
          firstName: "Rajesh",
          lastName: "Gurung",
          email: "rajesh.gurung@gmail.com",
          phone: "+977 9803456789",
          organization: "Himalayan Adventures",
          status: "completed",
        },
        {
          id: "tkt-004",
          orderNumber: "TPS-456789",
          orderDate: "2025-01-18T16:20:00",
          ticketType: "standard",
          ticketName: "Standard Ticket",
          price: 1000,
          paymentMethod: "khalti",
          firstName: "Sunita",
          lastName: "Rai",
          email: "sunita.rai@gmail.com",
          phone: "+977 9804567890",
          organization: "Tribhuvan University",
          status: "completed",
        },
        {
          id: "tkt-005",
          orderNumber: "TPS-567890",
          orderDate: "2025-01-19T11:30:00",
          ticketType: "gold",
          ticketName: "Gold Ticket",
          price: 2500,
          paymentMethod: "esewa",
          firstName: "Bikash",
          lastName: "Tamang",
          email: "bikash.tamang@gmail.com",
          phone: "+977 9805678901",
          organization: "Mountain Trekkers Nepal",
          status: "completed",
        },
      ]

      setTickets(mockTickets)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredTickets = tickets.filter((ticket) => {
    // Apply ticket type filter
    if (filter !== "all" && ticket.ticketType !== filter) return false

    // Apply search filter (case insensitive)
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      return (
        ticket.firstName.toLowerCase().includes(searchLower) ||
        ticket.lastName.toLowerCase().includes(searchLower) ||
        ticket.email.toLowerCase().includes(searchLower) ||
        ticket.orderNumber.toLowerCase().includes(searchLower)
      )
    }

    return true
  })

  const getTicketTypeColor = (type) => {
    switch (type) {
      case "standard":
        return "bg-blue-100 text-blue-800"
      case "gold":
        return "bg-amber-100 text-amber-800"
      case "premium":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Ticket Management</h1>
        <div className="flex space-x-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All Tickets</option>
            <option value="standard">Standard</option>
            <option value="gold">Gold</option>
            <option value="premium">Premium</option>
          </select>
          <div className="relative">
            <input
              type="text"
              placeholder="Search tickets..."
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
            <div className="bg-amber-50 px-4 py-3 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Tickets ({filteredTickets.length})</h2>
            </div>

            <div className="divide-y divide-gray-200 max-h-[calc(100vh-250px)] overflow-y-auto">
              {loading ? (
                <div className="p-4 text-center">
                  <svg
                    className="animate-spin h-8 w-8 mx-auto text-amber-500"
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
                  <p className="mt-2 text-gray-500">Loading tickets...</p>
                </div>
              ) : filteredTickets.length === 0 ? (
                <div className="p-4 text-center text-gray-500">No tickets found</div>
              ) : (
                filteredTickets.map((ticket) => (
                  <button
                    key={ticket.id}
                    className={`w-full text-left p-4 hover:bg-gray-50 focus:outline-none transition-colors duration-150 ${
                      selectedTicket?.id === ticket.id ? "bg-amber-50" : ""
                    }`}
                    onClick={() => setSelectedTicket(ticket)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {ticket.firstName} {ticket.lastName}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{ticket.orderNumber}</p>
                        <p className="text-xs text-gray-500 mt-1">{ticket.email}</p>
                      </div>
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getTicketTypeColor(ticket.ticketType)}`}
                      >
                        {ticket.ticketName}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      Purchased: {new Date(ticket.orderDate).toLocaleDateString()}
                    </p>
                  </button>
                ))
              )}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-2">
          {selectedTicket ? (
            <TicketDetails ticket={selectedTicket} onClose={() => setSelectedTicket(null)} />
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
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
              <h3 className="text-lg font-medium mb-2">No Ticket Selected</h3>
              <p className="max-w-md">
                Select a ticket from the list to view details, or use the search and filter options to find specific
                tickets.
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

export default TicketManagement

