

import { Card } from "../../ui/Card"
import { Button } from "../../ui/Button"

const SponsorshipTier = ({ tier, onSelect }) => {
  return (
    <Card className="h-full flex flex-col overflow-visible relative">
      {tier.remaining < tier.available && (
        <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          Only {tier.remaining} left!
        </div>
      )}

      <div className={`bg-gradient-to-r ${tier.color} text-white p-6 rounded-t-xl`}>
        <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
        <p className="text-2xl font-bold">{tier.price}</p>
      </div>

      <div className="p-6 flex-grow">
        <ul className="space-y-3 mb-6">
          {tier.benefits.map((benefit, index) => (
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
              <span className="text-sm text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 pt-0 mt-auto">
        <Button variant="primary" fullWidth onClick={onSelect}>
          Select Package
        </Button>
      </div>
    </Card>
  )
}

export default SponsorshipTier

