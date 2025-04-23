import { Card } from "../../ui/Card"

const AwardCategory = () => {
  const categories = [
    {
      name: "Overall Excellence",
      description:
        "Awarded to the project that demonstrates the highest level of innovation, feasibility, and potential impact on tourism in Koshi Province.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
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
      ),
      prize: "NPR 100,000",
      criteria: ["Innovation", "Feasibility", "Impact", "Presentation"],
    },
    {
      name: "Most Innovative Solution",
      description:
        "Recognizes the project that presents the most creative and original approach to addressing tourism challenges or opportunities.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      prize: "NPR 25,000",
      criteria: ["Originality", "Creativity", "Problem-solving", "Uniqueness"],
    },
    {
      name: "Sustainability Champion",
      description:
        "Awarded to the project that best incorporates sustainable practices and contributes to environmental conservation in tourism.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      prize: "NPR 25,000",
      criteria: ["Environmental Impact", "Resource Efficiency", "Long-term Sustainability", "Conservation"],
    },
    {
      name: "Community Impact",
      description:
        "Recognizes the project with the greatest potential to benefit local communities through job creation, cultural preservation, or economic development.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      prize: "NPR 25,000",
      criteria: ["Local Benefit", "Job Creation", "Cultural Preservation", "Economic Development"],
    },
    {
      name: "Digital Innovation",
      description:
        "Awarded to the project that best leverages technology to enhance the tourism experience or solve industry challenges.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      prize: "NPR 25,000",
      criteria: ["Technology Integration", "User Experience", "Digital Solution", "Innovation"],
    },
    {
      name: "Market Readiness",
      description:
        "Recognizes the project that demonstrates the highest level of business planning, market research, and implementation readiness.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      prize: "NPR 25,000",
      criteria: ["Business Plan", "Market Research", "Implementation Strategy", "Financial Viability"],
    },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {categories.map((category, index) => (
        <div key={index} className="animate-slide-right" style={{ animationDelay: `${index * 0.1}s` }}>
          <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex items-start">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-[#223F80] mr-4 flex-shrink-0">
                {category.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">{category.name}</h4>
                <p className="text-gray-600 mb-3">{category.description}</p>

                <div className="flex items-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-amber-500 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium text-amber-600">{category.prize}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {category.criteria.map((criterion, i) => (
                    <span
                      key={i}
                      className="inline-block px-2 py-1 bg-blue-50 text-[#2783BC] rounded-md text-xs font-medium"
                    >
                      {criterion}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default AwardCategory

