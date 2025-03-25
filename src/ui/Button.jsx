import { Link } from "react-router-dom"

const variantStyles = {
 
  accent: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md",
  outline: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50",

  primary: "bg-gradient-to-r from-[#223F80] to-[#2783BC] hover:from-[#1A3366] hover:to-[#1F6BA5] text-white shadow-md",
  secondary: "bg-gradient-to-r from-[#2783BC] to-[#2BA5E0] hover:from-[#1F6BA5] hover:to-[#2389C4] text-white shadow-md",
  // accent: "bg-gradient-to-r from-[#F58432] to-[#FF9A4D] hover:from-[#E07328] hover:to-[#F58432] text-white shadow-md",
  
  white: "bg-white text-[#223F80] hover:bg-gray-100 shadow-md",
  ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
  link: "bg-transparent text-[#2783BC] hover:text-[#1F6BA5] hover:underline p-0"
}

const sizeStyles = {
  small: "py-1 px-3 text-sm",
  medium: "py-2 px-5 text-base",
  large: "py-3 px-8 text-lg",
}

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  as: Component = "button",
  fullWidth = false,
  icon = null,
  iconPosition = "left",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
  const widthClass = fullWidth ? "w-full" : ""
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthClass} ${className}`

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </>
  )

  if (Component === Link) {
    return (
      <Link className={styles} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <button className={styles} {...props}>
      {content}
    </button>
  )
}

