import { Card } from "../../ui/Card"
import { VideoPlayer } from "../../ui/VideoPlayer"

const PostEventHighlights = ({ year }) => {
  return (
    <div className="mb-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-slide-right">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">ToPS Koshi {year} Recap</h3>
          <p className="text-gray-700 mb-4">
            The Tourism Project Showcase – Koshi {year} was a resounding success, bringing together over 300
            participants, including students, industry professionals, investors, and government officials.
          </p>
          <p className="text-gray-700 mb-4">
            The three-day event featured 42 innovative tourism projects across 11 different themes, from adventure
            tourism to smart city solutions, showcasing the incredible potential of tourism in Koshi Province.
          </p>
          <p className="text-gray-700 mb-4">
            Keynote speeches from industry leaders, panel discussions on sustainable tourism practices, and networking
            opportunities created a vibrant ecosystem for collaboration and innovation.
          </p>

          <div className="mt-8">
            <h4 className="font-semibold text-lg mb-4">Key Achievements:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>42 innovative tourism projects presented</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>NPR 5 million in investment commitments secured</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>12 partnerships formed between startups and established businesses</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>3 winning projects received implementation support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative animate-slide-left">
          <Card className="overflow-hidden shadow-lg">
            <VideoPlayer
              src="https://example.com/tops-koshi-2024-highlights.mp4"
              poster="/placeholder.svg?height=720&width=1280"
              title={`ToPS Koshi ${year} Highlights`}
            />
          </Card>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-lg -z-10"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg -z-10"></div>
        </div>
      </div>
    </div>
  )
}

export default PostEventHighlights

