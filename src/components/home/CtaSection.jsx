import { Link } from "react-router-dom"
import { Button } from "../../ui/Button"

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#223F80] to-[#2783BC] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Showcase Your Tourism Innovation?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 text-blue-100">
          Join us at the Tourism Project Showcase – Koshi 2025 and be part of shaping the future of tourism in Nepal.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="white"
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
          >
            Register Your Team Now
          </Button>

          <Button
            variant="outline"
            size="large"
            as={Link}
            to="/contact"
            className="border-white text-white hover:bg-white/10"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CtaSection

