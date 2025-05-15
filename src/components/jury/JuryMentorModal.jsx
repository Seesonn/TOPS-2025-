
import { useEffect } from "react"
import { Card } from "../../ui/Card"

const JuryMentorModal = ({ expert, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors z-10"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="aspect-square">
                <img
                  src={expert.image || "/placeholder.svg?height=400&width=400"}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 border-t border-blue-100">
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <div className="space-y-3">
                  <a
                    href={expert.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#223F80] "
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn Profile
                  </a>

                  <a
                    href={`mailto:${expert.email}`}
                    className="flex items-center text-[#223F80]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {expert.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 md:w-2/3">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-bold">{expert.name}</h2>
                <div className="ml-auto">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-[#F58432] rounded-full text-sm font-medium">
                    {expert.title}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 font-medium mb-6">{expert.organization}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#223F80]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Biography
                </h3>
                <div className="text-gray-700 leading-relaxed">{expert.bio}</div>
              </div>

              {/* <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#223F80]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {expert.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 bg-blue-50 text-[#2783BC] rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#223F80]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  Key Achievements
                </h3>
                <ul className="space-y-2">
                  {expert.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
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
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div> */}

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm italic">
                  {expert.name} will be {expert.title === "Advisor" || expert.title === "Professor" ? "an" : "a"}{" "}
                  {expert.title.toLowerCase()} at the Tourism Project Showcase – Koshi 2025, providing valuable insights
                  and guidance to participants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default JuryMentorModal

