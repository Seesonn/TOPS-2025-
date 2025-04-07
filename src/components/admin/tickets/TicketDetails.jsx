
import { useState } from "react"
import { Card } from "../../../ui/Card"
import { Button } from "../../../ui/Button"
import { QRCodeSVG } from "qrcode.react"

const TicketDetails = ({ ticket, onClose }) => {
  const [showQRCode, setShowQRCode] = useState(false)

  const getTicketTypeColor = (type) => {
    switch (type) {
      case "standard":
        return "from-blue-500 to-blue-600"
      case "gold":
        return "from-amber-500 to-amber-600"
      case "premium":
        return "from-indigo-600 to-purple-600"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  const getPaymentMethodName = (method) => {
    const methods = {
      creditCard: "Credit Card",
      bankTransfer: "Bank Transfer",
      esewa: "eSewa",
      khalti: "Khalti",
    }
    return methods[method] || method
  }

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  // Generate QR code data
  const qrCodeData = JSON.stringify({
    ticketId: ticket.id,
    orderNumber: ticket.orderNumber,
    ticketType: ticket.ticketType,
    ticketName: ticket.ticketName,
    price: ticket.price,
    orderDate: ticket.orderDate,
    name: `${ticket.firstName} ${ticket.lastName}`,
    email: ticket.email,
  })

  return (
    <Card className="overflow-hidden">
      <div className="bg-gradient-to-r from-[#223F80] to-[#2783BC] px-6 py-4 text-white flex justify-between items-center">
        <h2 className="text-lg font-medium">Ticket Details</h2>
        <button onClick={onClose} className="text-white hover:text-gray-200" aria-label="Close">
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
      </div>

      <div className="p-6 max-h-[calc(100vh-250px)] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-bold text-[#223F80]">{ticket.ticketName}</h3>
            <p className="text-sm text-gray-500">Order #: {ticket.orderNumber}</p>
            <p className="text-sm text-gray-500">Purchased: {formatDate(ticket.orderDate)}</p>
          </div>
          <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-[#F58432] bg-opacity-20 text-[#F58432] border border-[#F58432] border-opacity-30">
            {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
          </span>
        </div>

        <div className="space-y-6">
          <section>
            <h4 className="text-lg font-medium text-gray-900 mb-3">Ticket Information</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Ticket Type</p>
                  <p className="text-base">{ticket.ticketName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Price</p>
                  <p className="text-base">NPR {formatPrice(ticket.price)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Payment Method</p>
                  <p className="text-base">{getPaymentMethodName(ticket.paymentMethod)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <p className="text-base capitalize">{ticket.status}</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h4 className="text-lg font-medium text-gray-900 mb-3">Attendee Information</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">First Name</p>
                  <p className="text-base">{ticket.firstName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Last Name</p>
                  <p className="text-base">{ticket.lastName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-base">
                    <a href={`mailto:${ticket.email}`} className="text-blue-600 hover:underline">
                      {ticket.email}
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="text-base">{ticket.phone}</p>
                </div>
                {ticket.organization && (
                  <div className="md:col-span-2">
                    <p className="text-sm font-medium text-gray-500">Organization</p>
                    <p className="text-base">{ticket.organization}</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {showQRCode && (
            <section>
              <h4 className="text-lg font-medium text-gray-900 mb-3">Ticket QR Code</h4>
              <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                <div className="p-4 bg-white rounded-lg shadow-md mb-2">
                  <QRCodeSVG value={qrCodeData} size={200} level="H" includeMargin={true} />
                </div>
                <p className="text-sm text-gray-500">
                  This QR code contains the ticket information and can be scanned at the event entrance.
                </p>
              </div>
            </section>
          )}

          <section>
            <h4 className="text-lg font-medium text-gray-900 mb-3">Ticket Benefits</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-medium mb-2">Benefits for {ticket.ticketName}:</h5>
              <ul className="list-disc pl-5 space-y-1">
                {ticket.ticketType === "standard" && (
                  <>
                    <li>Access to all general sessions</li>
                    <li>Entry to exhibition area</li>
                    <li>Event materials and program</li>
                    <li>Refreshments during breaks</li>
                    <li>Certificate of participation</li>
                  </>
                )}
                {ticket.ticketType === "gold" && (
                  <>
                    <li>All Standard ticket benefits</li>
                    <li>Access to networking lunch</li>
                    <li>Entry to panel discussions</li>
                    <li>Workshop participation</li>
                    <li>Digital copy of all presentations</li>
                    <li>Event merchandise pack</li>
                  </>
                )}
                {ticket.ticketType === "premium" && (
                  <>
                    <li>All Gold ticket benefits</li>
                    <li>VIP seating in all sessions</li>
                    <li>Exclusive dinner with speakers</li>
                    <li>One-on-one mentoring session</li>
                    <li>Access to VIP lounge</li>
                    <li>Professional headshot session</li>
                    <li>Full media coverage package</li>
                  </>
                )}
              </ul>
            </div>
          </section>
        </div>
      </div>

      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
        <Button
          variant="outline"
          onClick={() => setShowQRCode(!showQRCode)}
          className="border-[#2783BC] text-[#2783BC] hover:bg-blue-50"
        >
          {showQRCode ? "Hide QR Code" : "Show QR Code"}
        </Button>

        <Button
          variant="primary"
          className="bg-[#F58432] hover:bg-[#223F80] border-transparent"
          onClick={() => {
            // In a real app, this would generate and download a PDF ticket
            alert("Ticket download functionality would be implemented here")
          }}
        >
          Download Ticket
        </Button>
      </div>
    </Card>
  )
}

export default TicketDetails

