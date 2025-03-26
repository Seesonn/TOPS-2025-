
import { Card } from "../../ui/Card"
import { Button } from "../../ui/Button"

const TicketPricingCard = ({ tier, onBuyTicket }) => {
  return (
    <Card className="h-full flex flex-col overflow-visible relative">
      {/* {tier.recommended && (
        <div className="absolute -top-4 inset-x-0 flex justify-center">
          <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
            RECOMMENDED
          </span>
        </div>
      )} */}

      <div className={`bg-gradient-to-r ${tier.color} text-white p-6 rounded-t-xl`}>
        <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
        <p className="text-3xl font-bold">{tier.price}</p>
        <p className="text-sm text-white/80 mt-1">per person</p>
      </div>

      <div className="p-6 flex-grow">
        <p className="text-gray-600 mb-6">{tier.description}</p>

        <h4 className="font-semibold mb-3">What's included:</h4>
        <ul className="space-y-3 mb-6">
          {tier.features.map((feature, index) => (
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
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        {/* <div className="mb-6">
          <div className="flex items-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-blue-600 mr-1"
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
            <span className="text-sm font-medium">Best for:</span>
          </div>
          <p className="text-sm text-gray-600 ml-5">{tier.bestFor}</p>
        </div> */}

        <div className="mb-6">
          <div className="flex items-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-amber-600 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm font-medium">Availability:</span>
          </div>
          <p className="text-sm text-gray-600 ml-5">{tier.availability}</p>
        </div>
      </div>

      <div className="p-6 pt-0 mt-auto">
        <Button variant={tier.recommended ? "accent" : "primary"} fullWidth onClick={onBuyTicket}>
          Buy {tier.name} Ticket
        </Button>
      </div>
    </Card>
  )
}

export default TicketPricingCard

