import HeroSection from "../components/home/HeroSection"
import HighlightsSection from "../components/home/HighlightsSection"
import ThemesSection from "../components/home/ThemesSection"
import SpeakersSection from "../components/home/SpeakersSection"
import SponsorsSection from "../components/home/SponsorsSection"
import CtaSection from "../components/home/CtaSection"

const HomePage = () => {
  // Event date: April 28, 2025
  const eventDate = new Date("2025-04-28T00:00:00")

  return (
    <div>
      <HeroSection eventDate={eventDate} />
      <HighlightsSection />
      <ThemesSection />
      <SpeakersSection />
      <SponsorsSection />
      <CtaSection />
    </div>
  )
}

export default HomePage

