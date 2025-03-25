import { Link } from "react-router-dom"
import { Button } from "../../ui/Button"
import { Countdown } from "../../ui/Countdown"

const HeroSection = ({ eventDate }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://annapurnaexpress.prixacdn.net/media/albums/Pokhara_BhyKJ31l4s.jpg"
          alt="Tourism in Nepal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#223F80]/70 to-[#2783BC]/60"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-1/4 -right-24 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 md:py-36 z-10">
        <div className="max-w-3xl animate-slide-up">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
            April 28–30, 2025 • G. Ramayana Hotel, Koshi Province
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Tourism Project <span className="text-gradient bg-gradient-to-r from-blue-300 to-indigo-300">Showcase</span>{" "}
            – Koshi 2025
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-100 font-light">Next-Gen Tourism: From Field to Future</p>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="accent"
              size="large"
              as={Link}
              to="/registration"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              className="animate-slide-right"
              style={{ animationDelay: "0.2s" }}
            >
              Register Your Team
            </Button>
            <Button
              variant="outline"
              size="large"
              as={Link}
              to="/sponsorship"
              className="border-white text-white hover:bg-white/10 animate-slide-right"
              style={{ animationDelay: "0.3s" }}
            >
              Become a Sponsor
            </Button>
            <Button
              variant="white"
              size="large"
              as={Link}
              to="/timeline"
              className="animate-slide-right"
              style={{ animationDelay: "0.4s" }}
            >
              View Event Schedule
            </Button>
          </div>

          <div className="mt-12 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <Countdown targetDate={eventDate} />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#f9fafb"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection

