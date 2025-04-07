"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const AdminSidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [adminInfo, setAdminInfo] = useState({
    name: "Admin User",
    role: "Administrator",
    avatar: "/placeholder.svg?height=40&width=40",
  })
  const sidebarRef = useRef(null)

  // Load admin info from localStorage on mount
  useEffect(() => {
    const storedAdminInfo = localStorage.getItem("adminInfo")
    if (storedAdminInfo) {
      try {
        setAdminInfo(JSON.parse(storedAdminInfo))
      } catch (error) {
        console.error("Failed to parse admin info:", error)
      }
    }
  }, [])

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobileMenuOpen, setIsMobileMenuOpen])

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: "Registrations",
      href: "/admin/registrations",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
      ),
      badge: 12,
      badgeColor: "bg-yellow-500",
    },
    {
      name: "Sponsorships",
      href: "/admin/sponsorships",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
      ),
      badge: 7,
      badgeColor: "bg-yellow-500",
    },
    {
      name: "Tickets",
      href: "/admin/tickets",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
      ),
    },
    {
      name: "Media",
      href: "/admin/media",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
      ),
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ]

  const handleLogout = () => {
    // Show confirmation toast
    toast(
      (t) => (
        <div className="flex flex-col">
          <p className="font-medium mb-2">Are you sure you want to log out?</p>
          <div className="flex space-x-2">
            <button
              className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors"
              onClick={() => {
                localStorage.removeItem("adminLoggedIn")
                toast.dismiss(t.id)
                toast.success("Logged out successfully")
                navigate("/admin/login")
              }}
            >
              Yes, log out
            </button>
            <button
              className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-md hover:bg-gray-300 transition-colors"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: 10000 },
    )
  }

  const isActive = (path) => {
    return location.pathname === path || (path !== "/admin/dashboard" && location.pathname.startsWith(path))
  }

  return (
    <>
      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar for mobile */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=32&width=32" alt="Logo" className="h-8 w-auto" />
            <span className="ml-2 text-xl font-semibold text-[#223F80]">Admin</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2783BC]"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col h-full">
          {/* Admin profile */}
          <div className="px-4 py-4 border-b border-gray-200">
            <div className="flex items-center">
              <img
                src={adminInfo.avatar || "/placeholder.svg"}
                alt={adminInfo.name}
                className="h-10 w-10 rounded-full object-cover border-2 border-[#223F80]"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{adminInfo.name}</p>
                <p className="text-xs text-gray-500">{adminInfo.role}</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                  isActive(item.href)
                    ? "bg-[#F58432] bg-opacity-10 text-[#F58432]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                } transition-colors duration-200`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span
                  className={`mr-3 ${isActive(item.href) ? "text-[#F58432]" : "text-gray-400 group-hover:text-gray-500"}`}
                >
                  {item.icon}
                </span>
                <span className="flex-1">{item.name}</span>
                {item.badge && (
                  <span className={`${item.badgeColor} text-white text-xs font-medium px-2 py-0.5 rounded-full`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          <div className="px-2 py-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="group flex items-center w-full px-2 py-2 text-base font-medium rounded-md text-red-600 hover:bg-red-50 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3 h-5 w-5 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for desktop */}
      <div
        className={`hidden lg:flex lg:flex-shrink-0 transition-all duration-300 ease-in-out ${
          isCollapsed ? "lg:w-20" : "lg:w-64"
        }`}
      >
        <div className="flex flex-col w-full border-r border-gray-200 bg-white">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            {!isCollapsed && (
              <div className="flex items-center">
                <img src="/placeholder.svg?height=32&width=32" alt="Logo" className="h-8 w-auto" />
                <span className="ml-2 text-xl font-semibold text-[#223F80]">Admin</span>
              </div>
            )}
            {isCollapsed && (
              <div className="mx-auto">
                <img src="/placeholder.svg?height=32&width=32" alt="Logo" className="h-8 w-auto" />
              </div>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2783BC] transition-colors"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isCollapsed ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="flex flex-col flex-grow overflow-y-auto">
            {/* Admin profile */}
            {!isCollapsed && (
              <div className="px-4 py-4 border-b border-gray-200">
                <div className="flex items-center">
                  <img
                    src={adminInfo.avatar || "/placeholder.svg"}
                    alt={adminInfo.name}
                    className="h-10 w-10 rounded-full object-cover border-2 border-[#223F80]"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{adminInfo.name}</p>
                    <p className="text-xs text-gray-500">{adminInfo.role}</p>
                  </div>
                </div>
              </div>
            )}

            <nav className="flex-1 px-2 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive(item.href)
                      ? "bg-[#F58432] bg-opacity-10 text-[#F58432]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  } ${isCollapsed ? "justify-center" : ""} transition-colors duration-200`}
                >
                  <span
                    className={`${isCollapsed ? "" : "mr-3"} ${
                      isActive(item.href) ? "text-[#F58432]" : "text-gray-400 group-hover:text-gray-500"
                    }`}
                  >
                    {item.icon}
                  </span>
                  {!isCollapsed && <span className="flex-1">{item.name}</span>}
                  {!isCollapsed && item.badge && (
                    <span className={`${item.badgeColor} text-white text-xs font-medium px-2 py-0.5 rounded-full`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </nav>

            <div className={`px-2 py-4 border-t border-gray-200 ${isCollapsed ? "flex justify-center" : ""}`}>
              <button
                onClick={handleLogout}
                className={`group flex items-center ${isCollapsed ? "justify-center" : "w-full"} px-2 py-2 text-sm font-medium rounded-md text-red-600 hover:bg-red-50 transition-colors duration-200`}
                title="Logout"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${isCollapsed ? "" : "mr-3"} h-5 w-5 text-red-500`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                {!isCollapsed && "Logout"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminSidebar

