"use client"

import { Link } from "react-router-dom"

const MobileNavLink = ({ to, children, onClick, active = false }) => (
  <Link
    to={to}
    className={`block py-3 px-4 rounded-md font-medium transition-colors ${
      active ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
)

export default MobileNavLink

