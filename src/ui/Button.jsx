import { Link } from "react-router-dom"

const variantStyles = {
  primary: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md",
  secondary: "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-md",
  accent: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md",
  outline: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  white: "bg-white text-blue-600 hover:bg-gray-100 shadow-md",
  ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
  link: "bg-transparent text-blue-600 hover:text-blue-700 hover:underline p-0",
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

