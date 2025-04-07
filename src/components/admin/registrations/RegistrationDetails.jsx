
import { useState } from "react"
import { Card } from "../../../ui/Card"
import { Button } from "../../../ui/Button"

const RegistrationDetails = ({ registration, onStatusChange, onClose }) => {
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
      onStatusChange(registration.id, "approved")
    } else if (actionType === "reject") {
      onStatusChange(registration.id, "rejected")
    }
    setIsConfirmingAction(false)
    setRejectionReason("")
  }

  const cancelAction = () => {
    setIsConfirmingAction(false)
    setRejectionReason("")
  }

  const getThemeName = (themeCode) => {
    const themes = {
      adventure: "Adventure Tourism",
      eco: "Eco-Tourism",
      cultural: "Cultural Tourism",
      food: "Food Tourism",
      religious: "Religious Tourism",
      medical: "Medical Tourism",
      "smart-city": "Smart City",
      agro: "Agro-Tourism",
      sports: "Sports Tourism",
      educational: "Educational Tourism",
      wildlife: "Wildlife Tourism",
    }
    return themes[themeCode] || themeCode
  }

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800 border border-green-200"
      case "rejected":
        return "bg-red-100 text-red-800 border border-red-200"
      default:
        return "bg-[#F58432] bg-opacity-20 text-[#F58432] border border-[#F58432] border-opacity-30"
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
      <div className="bg-[#223F80] px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-medium text-white">Registration Details</h2>
        <button onClick={onClose} className="text-gray-200 hover:text-white" aria-label="Close">
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
            <h3 className="text-xl font-bold text-gray-900">{registration.teamName}</h3>
            <p className="text-sm text-gray-500">ID: {registration.id}</p>
            <p className="text-sm text-gray-500">Submitted: {formatDate(registration.submittedAt)}</p>
          </div>
          <span
            className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${getStatusBadgeClass(
              registration.status,
            )}`}
          >
            {registration.status.charAt(0).toUpperCase() + registration.status.slice(1)}
          </span>
        </div>

        <div className="space-y-6">
          <section>
            <h4 className="text-lg font-medium text-gray-900 mb-3">Project Information</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Project Title</p>
                  <p className="text-lg font-bold text-[#223F80]">{registration.projectTitle}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Project Theme</p>
                  <p className="text-base">{getThemeName(registration.projectTheme)}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Project Description</p>
                <p className="text-base mt-1">{registration.projectDescription}</p>
              </div>
            </div>
          </section>

          <section>
            <h4 className="text-lg font-medium text-gray-900 mb-3">Team Leader</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Name</p>
                  <p className="text-base">{registration.leaderName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-base">{registration.leaderEmail}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="text-base">{registration.leaderPhone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Institution/Organization</p>
                  <p className="text-base">{registration.leaderInstitution}</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h4 className="text-lg font-medium text-gray-900 mb-3">Team Members</h4>
            <div className="bg-gray-50 rounded-lg divide-y divide-gray-200">
              {registration.members.map((member, index) => (
                <div key={index} className="p-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Name</p>
                      <p className="text-base">{member.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p className="text-base">{member.email || "—"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Institution</p>
                      <p className="text-base">{member.institution || "—"}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h4 className="text-lg font-medium text-gray-900 mb-3">Additional Information</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">How did they hear about the event?</p>
                  <p className="text-base capitalize">{registration.heardFrom?.replace("-", " ") || "Not specified"}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Special Requirements</p>
                <p className="text-base mt-1">{registration.specialRequirements || "None"}</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {!isConfirmingAction ? (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end space-x-3">
          {registration.status === "pending" && (
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
          {registration.status === "approved" && (
            <Button variant="outline" onClick={handleReject}>
              Change to Rejected
            </Button>
          )}
          {registration.status === "rejected" && (
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

export default RegistrationDetails

