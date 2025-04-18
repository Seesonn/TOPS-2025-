

import { Link } from "react-router-dom"

const MobileNavLink = ({ to, children, onClick, active = false }) => {
  return (
    <Link
      to={to}
      className={`block py-3 px-4 rounded-md font-medium transition-colors relative overflow-hidden ${
        active ? "text-[#223F80]" : "text-gray-700 hover:text-[#223F80]"
      }`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-[#223F80] to-[#2783BC] transition-all duration-300 ${
          active ? "w-full" : "w-0"
        }`}
      />
    </Link>
  )
}

export default MobileNavLink

