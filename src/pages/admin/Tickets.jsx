"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card } from "../../ui/Card"
import LoadingSpinner from "../../components/common/LoadingSpinner"
import TicketManagement from "../../components/admin/tickets/TicketManagement"

const Tickets = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner size="lg" color="#2783BC" />
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Ticket Management</h1>
        <div className="mt-4 md:mt-0">
          <Link
            to="/tickets"
            target="_blank"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2783BC] hover:bg-[#223F80] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2783BC] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-1 mr-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            View Tickets Page
          </Link>
        </div>
      </div>

      <Card className="mb-6">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Ticket Overview</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>
              Manage all ticket sales for the Tourism Project Showcase. Track purchases, generate reports, and handle
              attendee information.
            </p>
          </div>
        </div>
      </Card>

      <TicketManagement />
    </div>
  )
}

export default Tickets

