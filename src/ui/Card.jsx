export const Card = ({ children, className = "", hover = false, bordered = false, elevated = true, ...props }) => {
  const hoverClass = hover ? "transition-all duration-300 hover:shadow-lg hover:-translate-y-1" : ""
  const borderClass = bordered ? "border border-gray-200" : ""
  const shadowClass = elevated ? "shadow-md" : ""

  return (
    <div
      className={`bg-white rounded-xl overflow-hidden ${shadowClass} ${hoverClass} ${borderClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

