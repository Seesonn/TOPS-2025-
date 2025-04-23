import { Card } from "../../ui/Card"

const AwardJudgingCriteria = () => {
  const criteria = [
    {
      name: "Innovation & Creativity",
      weight: "25%",
      description:
        "Originality of the idea, creative approach to solving tourism challenges, and uniqueness compared to existing solutions.",
      points: [
        "Uniqueness of the concept",
        "Creative problem-solving approach",
        "Differentiation from existing solutions",
        "Novel use of resources or technology",
      ],
    },
    {
      name: "Feasibility & Sustainability",
      weight: "20%",
      description: "Practicality of implementation, financial viability, and long-term sustainability of the project.",
      points: [
        "Realistic implementation plan",
        "Financial sustainability",
        "Resource efficiency",
        "Environmental considerations",
      ],
    },
    {
      name: "Market Potential & Scalability",
      weight: "20%",
      description:
        "Market demand for the solution, potential for growth, and ability to scale beyond initial implementation.",
      points: [
        "Identified target market",
        "Growth potential",
        "Scalability to other regions",
        "Market research quality",
      ],
    },
    {
      name: "Social & Economic Impact",
      weight: "20%",
      description:
        "Potential benefits to local communities, job creation, economic development, and cultural preservation.",
      points: ["Community engagement", "Job creation potential", "Economic benefits", "Cultural preservation aspects"],
    },
    {
      name: "Presentation & Communication",
      weight: "15%",
      description:
        "Quality of the presentation, clarity of communication, and ability to answer questions effectively.",
      points: [
        "Clarity of presentation",
        "Visual aids quality",
        "Team's knowledge and expertise",
        "Response to questions",
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <p className="text-gray-700 mb-8">
        Projects will be evaluated by a panel of expert judges from the tourism industry, government, academia, and
        investment sectors. Each project will be scored based on the following criteria:
      </p>

      {criteria.map((criterion, index) => (
        <div key={index} className="animate-slide-right" style={{ animationDelay: `${index * 0.1}s` }}>
          <Card className="p-6">
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <h4 className="text-xl font-semibold">{criterion.name}</h4>
                <div className="inline-block px-3 py-1 bg-blue-100 text-[#2783BC] rounded-full text-sm font-medium mt-2">
                  Weight: {criterion.weight}
                </div>
              </div>

              <div className="md:w-3/4 md:pl-6 border-l-0 md:border-l-2 border-blue-100">
                <p className="text-gray-700 mb-4">{criterion.description}</p>

                <h5 className="font-medium mb-2">Key Evaluation Points:</h5>
                <ul className="space-y-1">
                  {criterion.points.map((point, i) => (
                    <li key={i} className="flex items-start">
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
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      ))}

      <div className="p-6 bg-blue-50 rounded-xl mt-8">
        <h4 className="text-lg font-semibold mb-2">Judging Process</h4>
        <p className="text-gray-700 mb-4">
          Each project will be evaluated by at least three judges. The final score will be an average of all judges'
          scores. The top-scoring projects will advance to the final round, where they will present to the full panel of
          judges.
        </p>
        <p className="text-gray-700">
          Judges will provide written feedback to all participants, regardless of whether they advance to the final
          round.
        </p>
      </div>
    </div>
  )
}

export default AwardJudgingCriteria

