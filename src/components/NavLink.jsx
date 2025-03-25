import { Link } from "react-router-dom"

const NavLink = ({ to, children, active = false }) => (
  <Link
    to={to}
    className={`px-3 py-2 rounded-md font-medium transition-colors ${
      active ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
    }`}
  >
    {children}
  </Link>
)

export default NavLink

