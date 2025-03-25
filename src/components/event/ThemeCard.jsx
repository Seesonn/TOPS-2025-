import { Card } from "../../ui/Card"
import { ThemeIcon } from "../../ui/ThemeIcon"

const ThemeCard = ({ name, icon, description }) => {
  return (
    <Card>
      <div className="p-6">
        <ThemeIcon name={name} icon={icon} size="large" />
        <h3 className="text-xl font-bold mt-4 mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Card>
  )
}

export default ThemeCard

