
import { useState } from "react"
import { Card } from "../../../ui/Card"
import { Button } from "../../../ui/Button"

const SponsorshipDetails = ({ sponsorship, onStatusChange, onClose }) => {
  const [isConfirmingAction, setIsConfirmingAction] = useState(false)
  const [actionType, setActionType] = useState(null)
  const [rejectionReason, setRejectionReason] = useState("")

  const handleApprove = () => {
    setActionType("approve")
    setIsConfirmingAction(true)
  }

  const handleReject = () => {
    setActionType("reject")
    setIsConfirmingAction(true)
  }

  const confirmAction = () => {
    if (actionType === "approve") {
      onStatusChange(sponsorship.id, "approved")
    } else if (actionType === "reject") {
      onStatusChange(sponsorship.id, "rejected")
    }
    setIsConfirmingAction(false)
    setRejectionReason("")
  }

  const cancelAction = () => {
    setIsConfirmingAction(false)
    setRejectionReason("")
  }

  const getSponsorshipLevelName = (level) => {
    const levels = {
      title: "Title Sponsor",
      gold: "Gold Sponsor",
      silver: "Silver Sponsor",
      bronze: "Bronze Sponsor",
    }
    return levels[level] || level
  }

  const getSponsorshipLevelAmount = (level) => {
    const amounts = {
      title: "NPR 500,000",
      gold: "NPR 300,000",
      silver: "NPR 150,000",
      bronze: "NPR 75,000",
    }
    return amounts[level] || "Custom Amount"
  }

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800 border border-green-200"
      case "rejected":
        return "bg-red-100 text-red-800 border border-red-200"
      default:
        return "bg-[#2783BC] bg-opacity-20 text-[#2783BC] border border-[#2783BC] border-opacity-30"
    }
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

  return (
    <Card className="overflow-hidden">
      <div className="bg-[#F58432] px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-medium text-white">Sponsorship Application Details</h2>
        <button onClick={onClose} className="text-white hover:text-gray-100" aria-label="Close">
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
            <h3 className="text-xl font-bold text-[#223F80]">{sponsorship.companyName}</h3>
            <p className="text-sm text-gray-500">ID: {sponsorship.id}</p>
            <p className="text-sm text-gray-500">Submitted: {formatDate(sponsorship.submittedAt)}</p>
          </div>
          <span
            className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${getStatusBadgeClass(
              sponsorship.status,
            )}`}
          >
            {sponsorship.status.charAt(0).toUpperCase() + sponsorship.status.slice(1)}
          </span>
        </div>

        <div className="space-y-6">
          <section>
            <h4 className="text-lg font-medium text-gray-900 mb-3">Sponsorship Information</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Sponsorship Level</p>
                  <p className="text-base font-medium text-[#F58432]">
                    {getSponsorshipLevelName(sponsorship.sponsorshipLevel)}
                  </p>
                  <p className="text-sm text-gray-500">{getSponsorshipLevelAmount(sponsorship.sponsorshipLevel)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Website</p>
                  <p className="text-base">
                    <a
                      href={sponsorship.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {sponsorship.website}
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Message</p>
                <p className="text-base mt-1">{sponsorship.message}</p>
              </div>
            </div>
          </section>

          <section>
            <h4 className="text-lg font-medium text-gray-900 mb-3">Contact Information</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Contact Person</p>
                  <p className="text-base">{sponsorship.contactName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-base">
                    <a href={`mailto:${sponsorship.email}`} className="text-blue-600 hover:underline">
                      {sponsorship.email}
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="text-base">{sponsorship.phone}</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h4 className="text-lg font-medium text-gray-900 mb-3">Sponsorship Benefits</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-medium mb-2">
                Benefits for {getSponsorshipLevelName(sponsorship.sponsorshipLevel)}:
              </h5>
              <ul className="list-disc pl-5 space-y-1">
                {sponsorship.sponsorshipLevel === "title" && (
                  <>
                    <li>Exclusive branding as 'Title Sponsor' in all event materials</li>
                    <li>Prime logo placement on event website, banners, and promotional materials</li>
                    <li>20-minute keynote presentation opportunity</li>
                    <li>VIP access to all event activities and networking sessions</li>
                    <li>Dedicated booth space (premium location)</li>
                    <li>Full-page advertisement in event program</li>
                    <li>Social media promotion (10 dedicated posts)</li>
                    <li>Access to participant database</li>
                    <li>Opportunity to include promotional items in participant welcome kits</li>
                    <li>10 complimentary event passes</li>
                  </>
                )}
                {sponsorship.sponsorshipLevel === "gold" && (
                  <>
                    <li>Prominent logo placement on event website, banners, and promotional materials</li>
                    <li>10-minute presentation opportunity</li>
                    <li>VIP access to all event activities</li>
                    <li>Dedicated booth space</li>
                    <li>Half-page advertisement in event program</li>
                    <li>Social media promotion (5 dedicated posts)</li>
                    <li>Opportunity to include promotional items in participant welcome kits</li>
                    <li>5 complimentary event passes</li>
                  </>
                )}
                {sponsorship.sponsorshipLevel === "silver" && (
                  <>
                    <li>Logo placement on event website and promotional materials</li>
                    <li>Shared booth space</li>
                    <li>Quarter-page advertisement in event program</li>
                    <li>Social media promotion (3 dedicated posts)</li>
                    <li>3 complimentary event passes</li>
                  </>
                )}
                {sponsorship.sponsorshipLevel === "bronze" && (
                  <>
                    <li>Logo placement on event website</li>
                    <li>Listing in event program</li>
                    <li>Social media mention</li>
                    <li>2 complimentary event passes</li>
                  </>
                )}
              </ul>
            </div>
          </section>
        </div>
      </div>

      {!isConfirmingAction ? (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end space-x-3">
          {sponsorship.status === "pending" && (
            <>
              <Button variant="outline" onClick={handleReject} className="border-red-300 text-red-600 hover:bg-red-50">
                Reject
              </Button>
              <Button
                variant="primary"
                onClick={handleApprove}
                className="bg-[#2783BC] hover:bg-[#223F80] border-transparent"
              >
                Approve
              </Button>
            </>
          )}
          {sponsorship.status === "approved" && (
            <Button variant="outline" onClick={handleReject}>
              Change to Rejected
            </Button>
          )}
          {sponsorship.status === "rejected" && (
            <Button variant="primary" onClick={handleApprove}>
              Change to Approved
            </Button>
          )}
        </div>
      ) : (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          {actionType === "reject" && (
            <div className="mb-4">
              <label htmlFor="rejectionReason" className="block text-sm font-medium text-gray-700 mb-1">
                Rejection Reason (Optional)
              </label>
              <textarea
                id="rejectionReason"
                rows="2"
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Provide a reason for rejection..."
              ></textarea>
            </div>
          )}
          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={cancelAction}>
              Cancel
            </Button>
            <Button variant={actionType === "approve" ? "primary" : "danger"} onClick={confirmAction}>
              {actionType === "approve" ? "Confirm Approval" : "Confirm Rejection"}
            </Button>
          </div>
        </div>
      )}
    </Card>
  )
}

export default SponsorshipDetails

