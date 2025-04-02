
import { useState } from "react"
import { Button } from "../../ui/Button"

const CheckoutForm = ({ step = 1, onNext, onBack, onSubmit, isLoading, ticketType }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    paymentMethod: "esewa",
  })
  
  const [errors, setErrors] = useState({})
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }))
  }

  const validateStep1 = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    return newErrors
  }
  
  const handleNextStep = (e) => {
    e.preventDefault()
    const newErrors = validateStep1()
    if (Object.keys(newErrors).length > 0) return setErrors(newErrors)
    onNext()
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  if (step === 1) {
    return (
      <form onSubmit={handleNextStep} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
        
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>
        
        <div className="mb-6">
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
            Organization/Company
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="flex justify-end">
          <Button variant="primary" type="submit">
            Continue to Payment
          </Button>
        </div>
      </form>
    )
  }
  
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-6 text-center">
          Select Payment Method
        </h3>
        
        <div className="space-y-4">
          {/* eSewa Option */}
          <div 
            className={`relative p-4 rounded-xl cursor-pointer transition-all duration-200
              ${formData.paymentMethod === "esewa" 
                ? "bg-gradient-to-r from-green-50 to-green-100 shadow-md border-2 border-green-300" 
                : "bg-white border-2 border-gray-200 hover:border-green-200 hover:shadow-sm"}`}
            onClick={() => setFormData(prev => ({...prev, paymentMethod: "esewa"}))}
          >
            <div className="flex items-center">
              <div className={`absolute inset-0 rounded-xl pointer-events-none transition-all duration-200
                ${formData.paymentMethod === "esewa" 
                  ? "ring-2 ring-green-400 ring-inset" 
                  : ""}`}></div>
              
              <div className={`p-2 rounded-lg mr-4 transition-all duration-200
                ${formData.paymentMethod === "esewa" 
                  ? "bg-green-100" 
                  : "bg-gray-100"}`}>
                <img 
                  src="https://imgs.search.brave.com/2G6DJduntzDpDFoICrF_Vi0WFbEF8kO38ViTBcSKo5A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lc2V3/YW1vbmV5dHJhbnNm/ZXIuY29tL2ltYWdl/cy9sb2dvMjAyMy5w/bmc" 
                  alt="eSewa" 
                  className="h-8 object-contain"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">eSewa</h4>
                <p className="text-sm text-gray-500">Pay with your eSewa wallet</p>
              </div>
            </div>
          </div>
          
          {/* Khalti Option */}
          <div 
            className={`relative p-4 rounded-xl cursor-pointer transition-all duration-200
              ${formData.paymentMethod === "khalti" 
                ? "bg-gradient-to-r from-purple-50 to-purple-100 shadow-md border-2 border-purple-300" 
                : "bg-white border-2 border-gray-200 hover:border-purple-200 hover:shadow-sm"}`}
            onClick={() => setFormData(prev => ({...prev, paymentMethod: "khalti"}))}
          >
            <div className="flex items-center">
              <div className={`absolute inset-0 rounded-xl pointer-events-none transition-all duration-200
                ${formData.paymentMethod === "khalti" 
                  ? "ring-2 ring-purple-400 ring-inset" 
                  : ""}`}></div>
              
              <div className={`p-2 rounded-lg mr-4 transition-all duration-200
                ${formData.paymentMethod === "khalti" 
                  ? "bg-purple-100" 
                  : "bg-gray-100"}`}>
                <img 
                  src="https://imgs.search.brave.com/yboSdnB3O2YB2BJ79DaA0Glsim1zDSkLXkLMsuziNEk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YXJlc291cmNlLnNm/bzIuZGlnaXRhbG9j/ZWFuc3BhY2VzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wNC8yMDEwMDUy/OS9raGFsdGktbG9n/by1GMEIwNDlFNjdF/LXNlZWtsb2dvLmNv/bS5wbmc" 
                  alt="Khalti" 
                  className="h-8 object-contain"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Khalti</h4>
                <p className="text-sm text-gray-500">Pay with your Khalti wallet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <Button variant="outline" type="button" onClick={onBack}>
          Back
        </Button>
        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            `Pay with ${formData.paymentMethod === "esewa" ? "eSewa" : "Khalti"}`
          )}
        </Button>
      </div>
    </form>
  )
}

export default CheckoutForm