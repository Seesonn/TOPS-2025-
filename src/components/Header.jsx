

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo className="h-20" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" active={location.pathname === "/"}>
              Home
            </NavLink>
            <NavLink to="/event-overview" active={location.pathname === "/event-overview"}>
              Event
            </NavLink>
            <NavLink to="/registration" active={location.pathname === "/registration"}>
              Registration
            </NavLink>
            <NavLink to="/timeline" active={location.pathname === "/timeline"}>
              Timeline
            </NavLink>
            <NavLink to="/jury-mentors" active={location.pathname === "/jury-mentors"}>
              Jury & Mentors
            </NavLink>
            <NavLink to="/sponsorship" active={location.pathname === "/sponsorship"}>
              Sponsorship
            </NavLink>
            <NavLink to="/contact" active={location.pathname === "/contact"}>
              Contact
            </NavLink>

            <Button
              variant="primary"
              size="medium"
              as={Link}
              to="/registration"
              className="ml-4"
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
              Register Now
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          <nav className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
            <MobileNavLink to="/" active={location.pathname === "/"}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/event-overview" active={location.pathname === "/event-overview"}>
              Event
            </MobileNavLink>
            <MobileNavLink to="/registration" active={location.pathname === "/registration"}>
              Registration
            </MobileNavLink>
            <MobileNavLink to="/timeline" active={location.pathname === "/timeline"}>
              Timeline
            </MobileNavLink>
            <MobileNavLink to="/jury-mentors" active={location.pathname === "/jury-mentors"}>
              Jury & Mentors
            </MobileNavLink>
            <MobileNavLink to="/sponsorship" active={location.pathname === "/sponsorship"}>
              Sponsorship
            </MobileNavLink>
            <MobileNavLink to="/contact" active={location.pathname === "/contact"}>
              Contact
            </MobileNavLink>
            <Button variant="primary" as={Link} to="/registration" className="w-full mt-4" fullWidth>
              Register Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

