// "use client"

// import { useState, useEffect } from "react"
// import { Outlet, useNavigate, useLocation } from "react-router-dom"
// import AdminHeader from "./AdminHeader"
// import AdminSidebar from "./AdminSidebar"
// import { Toaster } from "react-hot-toast"

// const AdminLayout = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [isLoading, setIsLoading] = useState(true)
//   const navigate = useNavigate()
//   const location = useLocation()

//   // Check authentication on mount and route changes
//   useEffect(() => {
//     const checkAuth = () => {
//       const isLoggedIn = localStorage.getItem("adminLoggedIn") === "true"
//       setIsAuthenticated(isLoggedIn)

//       if (!isLoggedIn && location.pathname !== "/admin/login") {
//         navigate("/admin/login", { state: { from: location.pathname } })
//       } else {
//         // Simulate loading admin data
//         setTimeout(() => {
//           setIsLoading(false)
//         }, 800)
//       }
//     }

//     checkAuth()
//   }, [navigate, location.pathname])

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsMobileMenuOpen(false)
//   }, [location.pathname])

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-50">
//         <div className="flex flex-col items-center">
//           <div className="relative w-24 h-24 mb-6">
//             <div className="absolute top-0 left-0 w-full h-full border-8 border-[#223F80] border-opacity-20 rounded-full"></div>
//             <div className="absolute top-0 left-0 w-full h-full border-8 border-transparent border-t-[#F58432] rounded-full animate-spin"></div>
//           </div>
//           <h2 className="text-xl font-semibold text-[#223F80]">Preparing Dashboard</h2>
//           <p className="text-gray-500 mt-2">Loading your personalized experience</p>
//         </div>
//       </div>
//     )
//   }

//   if (!isAuthenticated) {
//     return null // Don't render anything while redirecting
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Toast notifications */}
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           duration: 4000,
//           style: {
//             background: "#FFFFFF",
//             color: "#1F2937",
//             boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
//             borderRadius: "0.5rem",
//             padding: "0.75rem 1rem",
//             border: "1px solid #E5E7EB",
//           },
//           success: {
//             style: {
//               borderLeft: "4px solid #10B981",
//             },
//             iconTheme: {
//               primary: "#10B981",
//               secondary: "#FFFFFF",
//             },
//           },
//           error: {
//             style: {
//               borderLeft: "4px solid #EF4444",
//             },
//             iconTheme: {
//               primary: "#EF4444",
//               secondary: "#FFFFFF",
//             },
//           },
//           info: {
//             style: {
//               borderLeft: "4px solid #3B82F6",
//             },
//             iconTheme: {
//               primary: "#3B82F6",
//               secondary: "#FFFFFF",
//             },
//           },
//         }}
//       />

//       <AdminSidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

//       <div className="lg:pl-64 flex flex-col flex-1 transition-all duration-300 ease-in-out">
//         <AdminHeader setIsMobileMenuOpen={setIsMobileMenuOpen} />

//         <main className="flex-1 p-4 md:p-6 lg:p-8">
//           <div className="max-w-7xl mx-auto">
//             <Outlet />
//           </div>
//         </main>

//         {/* Footer */}
//         <footer className="bg-white border-t border-gray-200 py-4 px-4 md:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
//             <div className="text-sm text-gray-500 mb-2 md:mb-0">
//               &copy; {new Date().getFullYear()} Tourism Project Showcase. All rights reserved.
//             </div>
//             <div className="flex space-x-4">
//               <a href="#" className="text-sm text-gray-500 hover:text-[#223F80] transition-colors">
//                 Privacy Policy
//               </a>
//               <a href="#" className="text-sm text-gray-500 hover:text-[#223F80] transition-colors">
//                 Terms of Service
//               </a>
//               <a href="#" className="text-sm text-gray-500 hover:text-[#223F80] transition-colors">
//                 Help Center
//               </a>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   )
// }

// export default AdminLayout


"use client"

import { useState, useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import AdminHeader from "./AdminHeader"
import AdminSidebar from "./AdminSidebar"
import { Toaster } from "react-hot-toast"

const AdminLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  // Simulate loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 800)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 mb-6">
            <div className="absolute top-0 left-0 w-full h-full border-8 border-[#223F80] border-opacity-20 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-8 border-transparent border-t-[#F58432] rounded-full animate-spin"></div>
          </div>
          <h2 className="text-xl font-semibold text-[#223F80]">Preparing Dashboard</h2>
          <p className="text-gray-500 mt-2">Loading your personalized experience</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#FFFFFF",
            color: "#1F2937",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            borderRadius: "0.5rem",
            padding: "0.75rem 1rem",
            border: "1px solid #E5E7EB",
          },
          success: {
            style: {
              borderLeft: "4px solid #10B981",
            },
            iconTheme: {
              primary: "#10B981",
              secondary: "#FFFFFF",
            },
          },
          error: {
            style: {
              borderLeft: "4px solid #EF4444",
            },
            iconTheme: {
              primary: "#EF4444",
              secondary: "#FFFFFF",
            },
          },
          info: {
            style: {
              borderLeft: "4px solid #3B82F6",
            },
            iconTheme: {
              primary: "#3B82F6",
              secondary: "#FFFFFF",
            },
          },
        }}
      />

      <AdminSidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      <div className="lg:pl-64 flex flex-col flex-1  transition-all duration-300 ease-in-out">
        <AdminHeader setIsMobileMenuOpen={setIsMobileMenuOpen} />

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-4 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} Tourism Project Showcase. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-500 hover:text-[#223F80] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-[#223F80] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-[#223F80] transition-colors">
                Help Center
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default AdminLayout