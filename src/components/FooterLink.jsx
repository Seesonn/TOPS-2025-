import { Link } from "react-router-dom"

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="text-white hover:text-[#F58432] transition-colors inline-block py-1">
      {children}
    </Link>
  </li>
)

export default FooterLink

