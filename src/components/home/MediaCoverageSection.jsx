import { Link } from "react-router-dom"
import { Button } from "../../ui/Button"
import { Card } from "../../ui/Card"

const MediaCoverageSection = () => {
  const mediaArticles = [
    {
      id: 1,
      publication: "Koshi Tourism Journal",
      logo: "https://tops.alison.com.np/uploads/schedule_1744970480.webp",
      title: "Tourism Project Showcase Set to Transform Koshi Province Tourism",
      excerpt:
        "The upcoming Tourism Project Showcase is expected to bring innovative ideas that could revolutionize tourism in Koshi Province.",
      date: "March 15, 2025",
      url: "#",
    },
    {
      id: 2,
      publication: "Nepal Travel Times",
     logo: "https://tops.alison.com.np/uploads/schedule_1744970480.webp",
      title: "Students and Industry Leaders to Collaborate at Tourism Project Showcase",
      excerpt:
        "The event will bring together students, industry experts, and investors to showcase innovative tourism projects.",
      date: "February 28, 2025",
      url: "#",
    },
    {
      id: 3,
      publication: "Himalayan Business Review",
     logo: "https://tops.alison.com.np/uploads/schedule_1744970480.webp",
      title: "Investment Opportunities in Koshi Tourism to be Highlighted at Showcase",
      excerpt:
        "Investors are showing keen interest in the upcoming Tourism Project Showcase that will present new opportunities in Koshi Province.",
      date: "March 5, 2025",
      url: "#",
    },
    {
      id: 4,
      publication: "Eastern Nepal Today",
     logo: "https://tops.alison.com.np/uploads/schedule_1744970480.webp",
      title: "Tourism Project Showcase to Boost Local Economy",
      excerpt: "Local businesses are preparing for increased opportunities as the Tourism Project Showcase approaches.",
      date: "March 10, 2025",
      url: "#",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Coverage</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what the press is saying about Tourism Project Showcase – Koshi 2025
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {mediaArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-8 w-auto text-gray-500 font-medium">{article.publication}</div>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <a
                  href={article.url}
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                >
                  Read Article
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            as={Link}
            to="/media-gallery"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4V5h12v10z"
                  clipRule="evenodd"
                />
                <path d="M4 12h4v4H4v-4zm6-6h6v3h-6V6zm0 5h6v3h-6v-3z" />
              </svg>
            }
          >
            View All Media Coverage
          </Button>
        </div>
      </div>
    </section>
  )
}

export default MediaCoverageSection
