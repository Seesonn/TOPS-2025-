

import { useState } from "react"
import PageHeader from "../components/common/PageHeader"
import { Button } from "../ui/Button"
import PostEventHighlights from "../components/post-event/PostEventHighlights"
import PostEventStats from "../components/post-event/PostEventStats"
import PostEventWinners from "../components/post-event/PostEventWinners"
// import PostEventTestimonials from "../components/post-event/PostEventTestimonials"
import PostEventGallery from "../components/post-event/PostEventGallery"

const PostEvent = () => {
  const [activeYear, setActiveYear] = useState("2024")
  const years = ["2024", "2023", "2022"]

  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Post Event"
        description="Highlights and outcomes from the Tourism Project Showcase – Koshi"
        backgroundImage="https://imgs.search.brave.com/I3Tsthq3H7asutkaCR7U2_k3DoXlc27UDsavLwCjuvg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5zYXZldGhlcmhp/bm8ub3JnL3Byb2Qv/dXBsb2Fkcy8yMDE4/LzA0L0dyZWF0ZXJf/T25lX0hvcm5lZF9S/aGlub19DcmVkaXRS/ZW5hdWRGdWxjb25p/cy5qcGc"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16 text-center animate-slide-up">
          <h2 className="section-title">Event Highlights</h2>
          <p className="text-lg text-gray-700 mb-8">
            Explore the highlights, winners, and impact of previous Tourism Project Showcase events.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {years.map((year) => (
              <Button
                key={year}
                variant={activeYear === year ? "primary" : "outline"}
                onClick={() => setActiveYear(year)}
                className="min-w-[120px]"
              >
                ToPS {year}
              </Button>
            ))}
          </div>
        </div>

        {/* Event Highlights Section */}
        <PostEventHighlights year={activeYear} />

        {/* Event Statistics Section */}
        <PostEventStats year={activeYear} />

        {/* Award Winners Section */}
        <PostEventWinners year={activeYear} />

        {/* Testimonials Section */}
        {/* <PostEventTestimonials year={activeYear} /> */}

        {/* Gallery Section */}
        <PostEventGallery year={activeYear} />

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-6">Full Event Report</h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Download the comprehensive report of Tourism Project Showcase – Koshi {activeYear} with detailed information
            about projects, participants, and outcomes.
          </p>
          <Button
            variant="primary"
            size="large"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            }
          >
            Download Event Report
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PostEvent

