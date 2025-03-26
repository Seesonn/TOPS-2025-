
import { Link } from "react-router-dom"
import { Logo } from "../ui/Logo"
import { SocialIcon } from "../ui/SocialIcon"
import FooterLink from "./FooterLink"
import ContactInfo from "./ContactInfo"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <Logo light />
            </Link>
            <p className="text-gray-300">Next-Gen Tourism: From Field to Future</p>
            <div className="flex space-x-4">
              <SocialIcon platform="facebook" />
              <SocialIcon platform="instagram" />
              <SocialIcon platform="twitter" />
              <SocialIcon platform="linkedin" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/event-overview">Event Overview</FooterLink>
              <FooterLink to="/registration">Registration</FooterLink>
              <FooterLink to="/timeline">Timeline</FooterLink>
              <FooterLink to="/jury-mentors">Jury & Mentors</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2">Resources</h3>
            <ul className="space-y-3">
              <FooterLink to="/media-gallery">Media Gallery</FooterLink>
              <FooterLink to="/awards">Awards & Prizes</FooterLink>
              <FooterLink to="/post-event">Post Event</FooterLink>
              <FooterLink to="/sponsorship">Become a Sponsor</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2">Contact Info</h3>
            <ul className="space-y-4 text-gray-300">
              <ContactInfo icon="location" text="G. Ramayana Hotel, Koshi Province, Nepal" />
              <ContactInfo
                icon="phone"
                text={
                  <div className="space-y-1">
                    <p>Alina Magar: +977 9852056497</p>
                    <p>Sesemi Limbu: +977 9865394201</p>
                  </div>
                }
              />
              <ContactInfo icon="email" text="info@topskoshi2025.com" />
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p>© {currentYear} Tourism Project Showcase – Koshi 2025. All rights reserved.</p>
          <p className="mt-2">Organized by Alison Hospitality & Kafals</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer



