import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "../ui/Button"
import { Logo } from "../ui/Logo"
import NavLink from "./NavLink"
import MobileNavLink from "./MobileNavLink"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      // Add a slight delay to make the scroll effect smoother
      requestAnimationFrame(() => {
        if (window.scrollY > 10) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      })
    }

    // Use passive scroll listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setMobileResourcesOpen(false)
  }, [location])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
            <Logo className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" active={location.pathname === "/"}>
              Home
            </NavLink>
            <NavLink to="/event-overview" active={location.pathname === "/event-overview"}>
            About
            </NavLink>
            
            <NavLink to="/timeline" active={location.pathname === "/timeline"}>
             Schedule
            </NavLink>
            <NavLink to="/jury-mentors" active={location.pathname === "/jury-mentors"}>
            Teams
            </NavLink>
            <NavLink to="/sponsorship" active={location.pathname === "/sponsorship"}>
              Sponsorship
            </NavLink>
            {/* <NavLink to="/attendance" active={location.pathname === "/attendance"}>
               Attendees
            </NavLink> */}
            <NavLink to="/admin/login" active={location.pathname === "/admin/login"}>
              Admin 
            </NavLink>


            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                className={`px-3 py-2 rounded-md font-medium transition-all duration-300 flex items-center space-x-1 ${
                  location.pathname === "/media-gallery" ||
                  location.pathname === "/awards" ||
                  location.pathname === "/post-event"
                    ? "text-[#223F80]"
                    : "text-gray-700 hover:text-[#223F80]"
                }`}
              > 
                <span>Resources</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0 border border-gray-100">
                <div className="py-2">
                  <Link
                    to="/media-gallery"
                    className={`block px-4 py-2 text-sm transition-colors duration-200 ease-out ${
                      location.pathname === "/media-gallery"
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    Media Gallery
                  </Link>
                  <Link
                    to="/awards"
                    className={`block px-4 py-2 text-sm transition-colors duration-200 ease-out ${
                      location.pathname === "/awards"
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                       Prize & Recognization
                  </Link>
                  <Link
                    to="/post-event"
                    className={`block px-4 py-2 text-sm transition-colors duration-200 ease-out ${
                      location.pathname === "/post-event"
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    Pre-Activies
                  </Link>
                </div>
              </div>
            </div>

            <NavLink to="/contact" active={location.pathname === "/contact"}>
              Contact
            </NavLink>

            <Button
              variant="primary"
              size="medium"
              as={Link}
              to="/registration"
              className="ml-4 transition-transform duration-300 hover:scale-105"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            >
              Register 
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <MobileNavLink to="/" active={location.pathname === "/"}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/event-overview" active={location.pathname === "/event-overview"}>
            About
            </MobileNavLink>
            
            <MobileNavLink to="/timeline" active={location.pathname === "/timeline"}>
             Schedule
            </MobileNavLink>
            <MobileNavLink to="/jury-mentors" active={location.pathname === "/jury-mentors"}>
              Teams
            </MobileNavLink>
            <MobileNavLink to="/sponsorship" active={location.pathname === "/sponsorship"}>
              Sponsorship
            </MobileNavLink>
            {/* <MobileNavLink to="/attendance" active={location.pathname === "/attendace"}>
             Attendees
            </MobileNavLink> */}
            <MobileNavLink to="/admin/login" active={location.pathname === "/admin/login"}>
             Admin Login
            </MobileNavLink>

            {/* Mobile Resources Dropdown */}
            <div className="relative">
              <button
                className={`flex justify-between items-center w-full py-3 px-4 rounded-md font-medium transition-all duration-200 ${
                  location.pathname === "/media-gallery" ||
                  location.pathname === "/awards" ||
                  location.pathname === "/post-event"
                    ? "text-[#223F80]"
                    : "text-gray-700 hover:text-[#223F80]"
                }`}
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              >
                <span>Resources</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform duration-300 ${mobileResourcesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileResourcesOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 space-y-1 border-l-2 border-blue-200 ml-4 py-2">
                  <MobileNavLink to="/media-gallery" active={location.pathname === "/media-gallery"}>
                    Media Gallery
                  </MobileNavLink>
                  <MobileNavLink to="/awards" active={location.pathname === "/awards"}>
                       Prize & Recognization
                  </MobileNavLink>
                  <MobileNavLink to="/post-event" active={location.pathname === "/post-event"}>
                    Pre-Activies
                  </MobileNavLink>
                </div>
              </div>
            </div>

            <MobileNavLink to="/contact" active={location.pathname === "/contact"}>
              Contact
            </MobileNavLink>
            <Button 
              variant="primary" 
              as={Link} 
              to="/registration" 
              className="w-full mt-4 transition-transform duration-300 hover:scale-[1.02]" 
              fullWidth
            >
              Register 
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header