import PageHeader from "../components/common/PageHeader"
import EventSummary from "../components/event/EventSummary"
import OrganizersSection from "../components/event/OrganizersSection"
// import ThemesDetailSection from "../components/event/ThemesDetailSection"
import ObjectivesSection from "../components/event/ObjectivesSection"
import EventCta from "../components/event/EventCta"
import EventTeam from "../components/event/EventTeam"

const EventOverview = () => {
  return (
    <div>
      <PageHeader
        title="Event Overview"
        description="Tourism Project Showcase – Koshi 2025 is a platform for innovation, sustainability, and investment in the tourism sector."
         backgroundImage="https://t3.ftcdn.net/jpg/06/23/83/44/240_F_623834413_D7OL3FKZaMrvO8VHmlWF4t2ZIG6MXWcj.jpg"
      />
      <EventSummary />
      <OrganizersSection />
      <EventTeam/>
      {/* <ThemesDetailSection /> */}
      <ObjectivesSection />
      <EventCta />
    </div>
  )
}

export default EventOverview

