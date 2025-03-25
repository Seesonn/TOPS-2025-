import { Link } from "react-router-dom"
import { Button } from "../../ui/Button"
import { ThemeIcon } from "../../ui/ThemeIcon"

const ThemesSection = () => {
  const themes = [
    { name: "Adventure Tourism", icon: "mountain" },
    { name: "Eco-Tourism", icon: "leaf" },
    { name: "Cultural Tourism", icon: "landmark" },
    { name: "Food Tourism", icon: "utensils" },
    { name: "Religious Tourism", icon: "pray" },
    { name: "Medical Tourism", icon: "hospital" },
    { name: "Smart City", icon: "city" },
    { name: "Agro-Tourism", icon: "tractor" },
    { name: "Sports Tourism", icon: "running" },
    { name: "Educational Tourism", icon: "graduation-cap" },
    { name: "Wildlife Tourism", icon: "paw" },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Tourism Themes</h2>
          <p className="section-subtitle">Explore innovative solutions across these 11 key tourism sectors</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {themes.map((theme, index) => (
            <ThemeIcon key={index} name={theme.name} icon={theme.icon} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="secondary"
            as={Link}
            to="/event-overview"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            }
            iconPosition="right"
          >
            Learn More About Themes
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ThemesSection

