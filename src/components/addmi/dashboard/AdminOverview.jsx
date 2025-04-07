"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card } from "../../../ui/Card"
import LoadingSpinner from "../../common/LoadingSpinner"

const AdminOverview = () => {
  const [stats, setStats] = useState({
    registrations: { total: 0, pending: 0, approved: 0, rejected: 0 },
    sponsorships: { total: 0, pending: 0, approved: 0, rejected: 0 },
    tickets: { total: 0, standard: 0, gold: 0, premium: 0 },
    media: { total: 0, images: 0, videos: 0, documents: 0 },
  })

  const [recentActivity, setRecentActivity] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulate API call to fetch dashboard data
    const fetchDashboardData = async () => {
      try {
        // In a real app, this would be an API call
        setTimeout(() => {
          setStats({
            registrations: { total: 42, pending: 12, approved: 25, rejected: 5 },
            sponsorships: { total: 18, pending: 7, approved: 9, rejected: 2 },
            tickets: { total: 156, standard: 89, gold: 45, premium: 22 },
            media: { total: 64, images: 42, videos: 15, documents: 7 },
          })

          setRecentActivity([
            {
              id: 1,
              type: "registration",
              action: "approved",
              name: "Team Everest",
              project: "EcoTrek Nepal",
              timestamp: "2024-05-04T14:32:00",
            },
            {
              id: 2,
              type: "sponsorship",
              action: "pending",
              name: "Nepal Tourism Board",
              level: "Gold",
              timestamp: "2024-05-04T13:15:00",
            },
            {
              id: 3,
              type: "ticket",
              action: "purchased",
              name: "Himalayan Adventures",
              quantity: 5,
              ticketType: "Premium",
              timestamp: "2024-05-04T11:45:00",
            },
            {
              id: 4,
              type: "media",
              action: "uploaded",
              name: "Opening Ceremony Photos",
              count: 12,
              timestamp: "2024-05-04T10:20:00",
            },
            {
              id: 5,
              type: "registration",
              action: "rejected",
              name: "Team Innovate",
              project: "Virtual Tourism Guide",
              timestamp: "2024-05-03T16:50:00",
            },
          ])

          setLoading(false)
        }, 1200)
      } catch (err) {
        setError("Failed to load dashboard data. Please try again later.")
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()

    const diffMs = now - date
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMins / 60)
    const diffDays = Math.floor(diffHours / 24)

    if (diffMins < 60) {
      return `${diffMins} minute${diffMins !== 1 ? "s" : ""} ago`
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`
    } else {
      return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`
    }
  }

  const getActivityIcon = (type) => {
    switch (type) {
      case "registration":
        return (
          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#223F80] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </div>
        )
      case "sponsorship":
        return (
          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#F58432] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        )
      case "ticket":
        return (
          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#2783BC] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
              />
            </svg>
          </div>
        )
      case "media":
        return (
          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-purple-600 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )
      default:
        return (
          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gray-500 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        )
    }
  }

  const getStatusBadge = (action) => {
    switch (action) {
      case "approved":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Approved
          </span>
        )
      case "rejected":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Rejected
          </span>
        )
      case "pending":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Pending
          </span>
        )
      case "purchased":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Purchased
          </span>
        )
      case "uploaded":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            Uploaded
          </span>
        )
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {action}
          </span>
        )
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner size="lg" color="#2783BC" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 text-sm font-medium text-red-700 hover:text-red-600 transition-colors"
            >
              Refresh page
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Registration Stats */}
        <Card className="px-4 py-5 border-l-4 border-[#223F80] hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#223F80]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">Total Registrations</dt>
                <dd>
                  <div className="text-lg font-bold text-gray-900">{stats.registrations.total}</div>
                </dd>
              </dl>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-100 pt-4">
            <div className="flex justify-between text-sm">
              <div>
                <span className="text-green-600 font-medium">{stats.registrations.approved}</span> Approved
              </div>
              <div>
                <span className="text-yellow-600 font-medium">{stats.registrations.pending}</span> Pending
              </div>
              <div>
                <span className="text-red-600 font-medium">{stats.registrations.rejected}</span> Rejected
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Link
              to="/admin/registrations"
              className="text-sm font-medium text-[#2783BC] hover:text-[#223F80] transition-colors"
            >
              View all registrations →
            </Link>
          </div>
        </Card>

        {/* Sponsorship Stats */}
        <Card className="px-4 py-5 border-l-4 border-[#F58432] hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#F58432]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">Total Sponsorships</dt>
                <dd>
                  <div className="text-lg font-bold text-gray-900">{stats.sponsorships.total}</div>
                </dd>
              </dl>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-100 pt-4">
            <div className="flex justify-between text-sm">
              <div>
                <span className="text-green-600 font-medium">{stats.sponsorships.approved}</span> Approved
              </div>
              <div>
                <span className="text-yellow-600 font-medium">{stats.sponsorships.pending}</span> Pending
              </div>
              <div>
                <span className="text-red-600 font-medium">{stats.sponsorships.rejected}</span> Rejected
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Link
              to="/admin/sponsorships"
              className="text-sm font-medium text-[#2783BC] hover:text-[#223F80] transition-colors"
            >
              View all sponsorships →
            </Link>
          </div>
        </Card>

        {/* Ticket Stats */}
        <Card className="px-4 py-5 border-l-4 border-[#2783BC] hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#2783BC]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">Total Tickets Sold</dt>
                <dd>
                  <div className="text-lg font-bold text-gray-900">{stats.tickets.total}</div>
                </dd>
              </dl>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-100 pt-4">
            <div className="flex justify-between text-sm">
              <div>
                <span className="text-blue-600 font-medium">{stats.tickets.standard}</span> Standard
              </div>
              <div>
                <span className="text-amber-600 font-medium">{stats.tickets.gold}</span> Gold
              </div>
              <div>
                <span className="text-purple-600 font-medium">{stats.tickets.premium}</span> Premium
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Link
              to="/admin/tickets"
              className="text-sm font-medium text-[#2783BC] hover:text-[#223F80] transition-colors"
            >
              View all tickets →
            </Link>
          </div>
        </Card>

        {/* Media Stats */}
        <Card className="px-4 py-5 border-l-4 border-purple-600 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">Total Media Items</dt>
                <dd>
                  <div className="text-lg font-bold text-gray-900">{stats.media.total}</div>
                </dd>
              </dl>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-100 pt-4">
            <div className="flex justify-between text-sm">
              <div>
                <span className="text-blue-600 font-medium">{stats.media.images}</span> Images
              </div>
              <div>
                <span className="text-red-600 font-medium">{stats.media.videos}</span> Videos
              </div>
              <div>
                <span className="text-gray-600 font-medium">{stats.media.documents}</span> Docs
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Link
              to="/admin/media"
              className="text-sm font-medium text-[#2783BC] hover:text-[#223F80] transition-colors"
            >
              View all media →
            </Link>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg font-medium leading-6 text-[#223F80]">Recent Activity</h3>
            </div>
            <ul className="divide-y divide-gray-200">
              {recentActivity.map((activity) => (
                <li key={activity.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center space-x-4">
                    {getActivityIcon(activity.type)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {activity.type === "registration" && (
                          <>
                            {activity.name} - <span className="font-semibold text-[#223F80]">{activity.project}</span>
                          </>
                        )}
                        {activity.type === "sponsorship" && (
                          <>
                            {activity.name} -{" "}
                            <span className="font-semibold text-[#F58432]">{activity.level} Sponsor</span>
                          </>
                        )}
                        {activity.type === "ticket" && (
                          <>
                            {activity.name} -{" "}
                            <span className="font-semibold text-[#2783BC]">
                              {activity.quantity} {activity.ticketType} Tickets
                            </span>
                          </>
                        )}
                        {activity.type === "media" && (
                          <>
                            {activity.name} -{" "}
                            <span className="font-semibold text-purple-600">{activity.count} items</span>
                          </>
                        )}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{formatDate(activity.timestamp)}</p>
                    </div>
                    <div>{getStatusBadge(activity.action)}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 border-t border-gray-200">
              <Link to="#" className="text-sm font-medium text-[#2783BC] hover:text-[#223F80] transition-colors">
                View all activity →
              </Link>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg font-medium leading-6 text-[#223F80]">Quick Actions</h3>
            </div>
            <div className="px-4 py-5 sm:p-6 space-y-4">
              <Link
                to="/admin/registrations"
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2783BC] transition-all duration-200"
              >
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#223F80] mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Review Pending Registrations
                </span>
                <span className="bg-[#223F80] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {stats.registrations.pending}
                </span>
              </Link>

              <Link
                to="/admin/sponsorships"
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2783BC] transition-all duration-200"
              >
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#F58432] mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Review Pending Sponsorships
                </span>
                <span className="bg-[#F58432] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {stats.sponsorships.pending}
                </span>
              </Link>

              <Link
                to="/admin/media"
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2783BC] transition-all duration-200"
              >
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#2783BC] mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Upload New Media
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                to="/admin/tickets"
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2783BC] transition-all duration-200"
              >
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-600 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Generate Ticket Report
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AdminOverview

