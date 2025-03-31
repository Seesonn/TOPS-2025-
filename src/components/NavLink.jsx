

import { Link } from "react-router-dom"
import { useState } from "react"

const NavLink = ({ to, children, active = false }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md font-medium transition-colors relative overflow-hidden ${
        active ? "text-[#223F80]" : "text-gray-700 hover:text-[#223F80]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#223F80] to-[#2783BC] transition-all duration-300 ${
          isHovered || active ? "w-full" : "w-0"
        }`}
      />
    </Link>
  )
}

export default NavLink

