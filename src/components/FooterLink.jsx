import { Link } from "react-router-dom"

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="text-gray-300 hover:text-blue-400 transition-colors inline-block py-1">
      {children}
    </Link>
  </li>
)

export default FooterLink

