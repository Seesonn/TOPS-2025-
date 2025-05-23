import HeroSection from "../components/home/HeroSection"
import HighlightsSection from "../components/home/HighlightsSection"
import ThemesSection from "../components/home/ThemesSection"
import SpeakersSection from "../components/home/SpeakersSection"
import SponsorsSection from "../components/home/SponsorsSection"
import CtaSection from "../components/home/CtaSection"
// import FloatingTicketButton from "../components/FloatingTicketButton"
// import MediaCoverageSection from "../components/home/MediaCoverageSection"
import FloatingBackToTopButton from "../components/FloatingTicketButton"
import EventSummaryy from "../components/home/EventSummary"
import NewsUpdate from "../components/home/NewsUpdate"

const HomePage = () => {
  // Event date: April 28, 2025
  const eventDate = new Date("2025-05-23T01:00:00")

  return (
    <div>
      <HeroSection eventDate={eventDate} />
      <HighlightsSection />
      <EventSummaryy/>
      <ThemesSection />
      <NewsUpdate/>
      {/* <SpeakersSection /> */}
      {/* <MediaCoverageSection/> */}
      
      <SponsorsSection />
      <CtaSection />
      {/* <FloatingTicketButton /> */}
      <FloatingBackToTopButton/>
    </div>
  )
}

export default HomePage

