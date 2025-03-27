import {
  Mountain,
  Leaf,
  Landmark,
  Utensils,
  HandIcon as PrayingHands,
  Building2,
  Tractor,
  MonitorIcon as Running,
  GraduationCap,
  PawPrint,
  Hospital,
} from "lucide-react"

export const ThemeIcon = ({ name, icon }) => {
  // Map icon names to Lucide React components
  const getIcon = (iconName) => {
    const iconMap = {
      mountain: Mountain,
      leaf: Leaf,
      landmark: Landmark,
      utensils: Utensils,
      pray: PrayingHands,
      hospital: Hospital,
      city: Building2,
      tractor: Tractor,
      running: Running,
      "graduation-cap": GraduationCap,
      paw: PawPrint,
    }

    const IconComponent = iconMap[iconName] || Mountain
    return <IconComponent className="w-10 h-10 mb-3 text-[#223F80]" />
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-200 hover:shadow-md">
      {getIcon(icon)}
      <h3 className="text-sm font-medium text-center">{name}</h3>
    </div>
  )
}

