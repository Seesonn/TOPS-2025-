import logo from "../assests/mainlogo.svg"
export const Logo = ({ className = "", light = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="w-40 h-40 rounded-lg overflow-hidden">
        <img 
        src={logo}
          alt="Company Logo"
          className="w-full h-full object-contain"
          width={80}
          height={80}
          loading="lazy"
        />
      </div>
    </div>
  )
}