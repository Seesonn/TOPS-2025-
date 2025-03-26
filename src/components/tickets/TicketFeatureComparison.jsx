import { Card } from "../../ui/Card"

const TicketFeatureComparison = ({ ticketTiers }) => {
  // Combine all unique features from all tiers
  const allFeatures = Array.from(new Set(ticketTiers.flatMap((tier) => tier.features)))

  // Check if a tier includes a specific feature
  const hasFeature = (tier, feature) => {
    return tier.features.includes(feature)
  }

  return (
    <div className="my-20 animate-slide-up">
      <h3 className="text-2xl font-bold text-center mb-8">Ticket Comparison</h3>

      <Card className="overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-gray-700 font-semibold">Features</th>
                {ticketTiers.map((tier) => (
                  <th key={tier.id} className={`px-6 py-4 text-center ${tier.recommended ? "bg-amber-50" : ""}`}>
                    <div className="font-bold text-lg">{tier.name}</div>
                    <div className="text-blue-600">{tier.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 text-gray-700">{feature}</td>
                  {ticketTiers.map((tier) => (
                    <td key={tier.id} className={`px-6 py-4 text-center ${tier.recommended ? "bg-amber-50/50" : ""}`}>
                      {hasFeature(tier, feature) ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500 mx-auto"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-300 mx-auto"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

export default TicketFeatureComparison

