import { Card } from "../../ui/Card"

const HighlightCard = ({ value, title, description, icon }) => {
  return (
    <Card hover className="p-8 text-center h-full">
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center text-[#223F80]">
        {icon}
      </div>
      <div className="text-[#223F80] text-5xl font-bold mb-3">{value}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  )
}

export default HighlightCard

