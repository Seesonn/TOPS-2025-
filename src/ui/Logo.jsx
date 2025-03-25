export const Logo = ({ className = "", light = false }) => {
  const textColor = light ? "text-white" : "text-gray-900"

  return (
    <div className={`flex items-center ${className}`}>
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md">
        <span>ToPS</span>
      </div>
      <div className={`ml-2 font-heading font-bold ${textColor}`}>
        <span className="text-gradient">Koshi</span> 2025
      </div>
    </div>
  )
}

