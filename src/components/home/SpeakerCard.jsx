import { Card } from "../../ui/Card"

const SpeakerCard = ({ name, organization, role, image }) => {
  return (
    <Card hover className="h-full">
      <div className="p-6 text-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 mx-auto mb-6 overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = "/placeholder.svg?height=300&width=300"
            }}
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-blue-600 font-medium">{role}</p>
        <p className="text-gray-600 text-sm mt-1">{organization}</p>
      </div>
    </Card>
  )
}

export default SpeakerCard

