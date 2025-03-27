import PageHeader from "../components/common/PageHeader"
import EventSummary from "../components/event/EventSummary"
import OrganizersSection from "../components/event/OrganizersSection"
import ThemesDetailSection from "../components/event/ThemesDetailSection"
import ObjectivesSection from "../components/event/ObjectivesSection"
import EventCta from "../components/event/EventCta"

const EventOverview = () => {
  return (
    <div>
      <PageHeader
        title="Event Overview"
        description="Tourism Project Showcase – Koshi 2025 is a platform for innovation, sustainability, and investment in the tourism sector."
         backgroundImage="https://t3.ftcdn.net/jpg/00/56/41/54/240_F_56415498_h6VQKcn17zV9aGiKEO7Twmp0dbejXg54.jpg"
      />
      <EventSummary />
      <OrganizersSection />
      <ThemesDetailSection />
      <ObjectivesSection />
      <EventCta />
    </div>
  )
}

export default EventOverview

