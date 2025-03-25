import { Card } from "../../ui/Card"

const OrganizerCard = ({ name, description, website }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="w-32 h-16 bg-gray-200 mb-4"></div>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          Visit Website →
        </a>
      </div>
    </Card>
  )
}

export default OrganizerCard

