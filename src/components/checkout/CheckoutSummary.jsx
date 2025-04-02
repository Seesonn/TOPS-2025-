import { Card } from "../../ui/Card"

const CheckoutSummary = ({ ticketDetails, ticketType }) => {
  // Calculate tax (13% VAT)
//   const tax = ticketDetails.price * 0.13
//   const total = ticketDetails.price + tax

  return (
    <Card className="p-6 shadow-lg sticky top-24">
      <h3 className="text-xl font-bold mb-6 pb-4 border-b border-gray-200">Order Summary</h3>

      <div className="mb-6">
        <div
          className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${ticketDetails.color} text-white text-sm font-medium mb-4`}
        >
          {ticketDetails.name}
        </div>
        <p className="text-gray-600 mb-4">{ticketDetails.description}</p>

        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600">Event Date:</span>
          <span className="font-medium">April 28-30, 2025</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600">Location:</span>
          <span className="font-medium">G. Ramayana Hotel</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Quantity:</span>
          <span className="font-medium">1</span>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600">Ticket Price:</span>
          <span className="font-medium">NPR {ticketDetails.price.toLocaleString()}</span>
        </div>
        {/* <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600">VAT (13%):</span>
          <span className="font-medium">NPR {tax.toLocaleString()}</span>
        </div> */}
        {/* <div className="flex items-center justify-between text-lg font-bold mt-4">
          <span>Total:</span>
          <span>NPR {total.toLocaleString()}</span>
        </div> */}
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-medium text-blue-800 mb-2">What's included:</h4>
        <ul className="space-y-2">
          {ticketType === "standard" && (
            <>
              <li className="flex items-start text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Access to all general sessions</span>
              </li>
              <li className="flex items-start text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Entry to exhibition area</span>
              </li>
              <li className="flex items-start text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Event materials and program</span>
              </li>
            </>
          )}

          {ticketType === "gold" && (
            <>
              <li className="flex items-start text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>All Standard ticket benefits</span>
              </li>
              <li className="flex items-start text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Access to networking lunch</span>
              </li>
              <li className="flex items-start text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Workshop participation</span>
              </li>
            </>
          )}

          {ticketType === "premium" && (
            <>
              <li className="flex items-start text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>All Gold ticket benefits</span>
              </li>
              <li className="flex items-start text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>VIP seating in all sessions</span>
              </li>
              <li className="flex items-start text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Exclusive dinner with speakers</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </Card>
  )
}

export default CheckoutSummary

