import { Link } from "react-router-dom";

import { SocialIcon } from "../ui/SocialIcon";
import FooterLink from "./FooterLink";
import ContactInfo from "./ContactInfo";
import mountain from "../assests/mountain.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="w-full flex flex-col items-center  pb-0 -mb-3">
        <img
          src={mountain}
          alt="Mountain Hiking Logo"
          className="h-40 w-auto"
        />
      </div>
      <footer className="w-full bg-gradient-to-b from-[#282560] to-[#26A7DF] text-white -mt-2">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <Link to="/ ">
                <div className="w-40 h-40 rounded-lg overflow-hidden">
                  <img
                    src={
                      "https://tops.alison.com.np/uploads/logo_1742355674.png"
                    }
                    alt="Company Logo"
                    className="w-full h-full object-contain"
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                </div>
              </Link>
              <p className="text-white">
                Next-Gen Tourism: From Field to Future
              </p>
              <div className="flex space-x-4">
                <SocialIcon platform="facebook" />
                <SocialIcon platform="instagram" />
                <SocialIcon platform="twitter" />
                <SocialIcon platform="linkedin" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-white pb-2">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/event-overview">Event Overview</FooterLink>
                <FooterLink to="/registration">Registration</FooterLink>
                <FooterLink to="/timeline">Timeline</FooterLink>
                <FooterLink to="/jury-mentors">Jury & Mentors</FooterLink>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-white pb-2">
                Resources
              </h3>
              <ul className="space-y-3">
                <FooterLink to="/media-gallery">Media Gallery</FooterLink>
                <FooterLink to="/awards">Awards & Prizes</FooterLink>
                <FooterLink to="/post-event">Post Event</FooterLink>
                <FooterLink to="/sponsorship">Become a Sponsor</FooterLink>
                <FooterLink to="/contact">Contact Us</FooterLink>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-white pb-2">
                Contact Info
              </h3>
              <ul className="space-y-4 text-white">
                <ContactInfo
                  icon="location"
                  text="G. Ramayana Hotel, Kathmandu, Nepal"
                />
                <ContactInfo
                  icon="phone"
                  text={
                    <div className="space-y-1">
                      <p>Alina Magar: +977 9852056497</p>
                    </div>
                  }
                />
                <ContactInfo icon="email" text="info@topskoshi2025.com" />
              </ul>
            </div>
          </div>

          <div className="border-t border-white border-gray-800 mt-16 pt-8 text-center text-white">
            <p>
              © {currentYear} Tourism Project Showcase – Koshi 2025. All rights
              reserved.
            </p>
            <p className="mt-2">Organized by Alison Hospitality & Event Managed by Kafals</p>
            <p className="mt-2 font-Roboto  font-medium text-white [text-shadow:_1px_1px_0_#282560,_-1px_-1px_0_#282560">
  This Website is Made With Love By Kafals || Made in Nepal
</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
