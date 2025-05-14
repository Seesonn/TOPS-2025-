

// import { useState } from "react"
// import { Card } from "../../ui/Card"
// import { Button } from "../../ui/Button"

// const RegistrationForm = ({ onComplete }) => {
//   const [step, setStep] = useState(1)
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const [formData, setFormData] = useState({
//     // Team Information
//     teamName: "",
//     projectTheme: "",
//     projectTitle: "",
//     projectDescription: "",

//     // Team Leader
//     leaderName: "",
//     leaderEmail: "",
//     leaderPhone: "",
//     leaderInstitution: "",

//     // Team Members
//     members: [
//       { name: "", email: "", institution: "" },
//       { name: "", email: "", institution: "" },
//     ],

//     // Additional Information
//     heardFrom: "",
//     specialRequirements: "",
//     agreeTerms: false,
//   })

//   const [errors, setErrors] = useState({})

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }))

//     // Clear error when field is edited
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: null,
//       }))
//     }
//   }

//   const handleMemberChange = (index, field, value) => {
//     const updatedMembers = [...formData.members]
//     updatedMembers[index] = {
//       ...updatedMembers[index],
//       [field]: value,
//     }

//     setFormData((prev) => ({
//       ...prev,
//       members: updatedMembers,
//     }))

//     // Clear error
//     if (errors[`members.${index}.${field}`]) {
//       setErrors((prev) => ({
//         ...prev,
//         [`members.${index}.${field}`]: null,
//       }))
//     }
//   }

//   const addTeamMember = () => {
//     if (formData.members.length < 5) {
//       setFormData((prev) => ({
//         ...prev,
//         members: [...prev.members, { name: "", email: "", institution: "" }],
//       }))
//     }
//   }

//   const removeTeamMember = (index) => {
//     if (formData.members.length > 2) {
//       const updatedMembers = [...formData.members]
//       updatedMembers.splice(index, 1)

//       setFormData((prev) => ({
//         ...prev,
//         members: updatedMembers,
//       }))
//     }
//   }

//   const validateStep1 = () => {
//     const newErrors = {}

//     if (!formData.teamName.trim()) newErrors.teamName = "Team name is required"
//     if (!formData.projectTheme) newErrors.projectTheme = "Please select a project theme"
//     if (!formData.projectTitle.trim()) newErrors.projectTitle = "Project title is required"
//     if (!formData.projectDescription.trim()) newErrors.projectDescription = "Project description is required"
//     else if (formData.projectDescription.trim().length < 50)
//       newErrors.projectDescription = "Description must be at least 50 characters"

//     return newErrors
//   }

//   const validateStep2 = () => {
//     const newErrors = {}

//     if (!formData.leaderName.trim()) newErrors.leaderName = "Team leader name is required"

//     if (!formData.leaderEmail.trim()) {
//       newErrors.leaderEmail = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.leaderEmail)) {
//       newErrors.leaderEmail = "Email is invalid"
//     }

//     if (!formData.leaderPhone.trim()) newErrors.leaderPhone = "Phone number is required"
//     if (!formData.leaderInstitution.trim()) newErrors.leaderInstitution = "Institution/Organization is required"

//     return newErrors
//   }

//   const validateStep3 = () => {
//     const newErrors = {}

//     formData.members.forEach((member, index) => {
//       if (!member.name.trim()) newErrors[`members.${index}.name`] = "Name is required"

//       if (member.email.trim() && !/\S+@\S+\.\S+/.test(member.email)) {
//         newErrors[`members.${index}.email`] = "Email is invalid"
//       }
//     })

//     if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms and conditions"

//     return newErrors
//   }

//   const nextStep = () => {
//     let newErrors = {}

//     if (step === 1) {
//       newErrors = validateStep1()
//     } else if (step === 2) {
//       newErrors = validateStep2()
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       return
//     }

//     setStep((prev) => prev + 1)
//     window.scrollTo(0, 0)
//   }

//   const prevStep = () => {
//     setStep((prev) => prev - 1)
//     window.scrollTo(0, 0)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     const newErrors = validateStep3()
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       return
//     }

//     setIsSubmitting(true)

//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false)
//       onComplete()
//     }, 1500)
//   }

//   const renderStep1 = () => (
//     <>
//       <div className="mb-6">
//         <label htmlFor="teamName" className="block text-sm font-medium text-gray-700 mb-1">
//           Team Name *
//         </label>
//         <input
//           type="text"
//           id="teamName"
//           name="teamName"
//           value={formData.teamName}
//           onChange={handleChange}
//           className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
//             errors.teamName ? "border-red-500" : "border-gray-300"
//           }`}
//         />
//         {errors.teamName && <p className="mt-1 text-sm text-red-600">{errors.teamName}</p>}
//       </div>

//       <div className="mb-6">
//         <label htmlFor="projectTheme" className="block text-sm font-medium text-gray-700 mb-1">
//           Project Theme *
//         </label>
//         <select
//           id="projectTheme"
//           name="projectTheme"
//           value={formData.projectTheme}
//           onChange={handleChange}
//           className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
//             errors.projectTheme ? "border-red-500" : "border-gray-300"
//           }`}
//         >
//           <option value="">Select a theme</option>
//           <option value="adventure">Adventure Tourism</option>
//           <option value="eco">Eco-Tourism</option>
//           <option value="cultural">Cultural Tourism</option>
//           <option value="food">Food Tourism</option>
//           <option value="religious">Religious Tourism</option>
//           <option value="medical">Medical Tourism</option>
//           <option value="smart-city">Smart City</option>
//           <option value="agro">Agro-Tourism</option>
//           <option value="sports">Sports Tourism</option>
//           <option value="educational">Educational Tourism</option>
//           <option value="wildlife">Wildlife Tourism</option>
//         </select>
//         {errors.projectTheme && <p className="mt-1 text-sm text-red-600">{errors.projectTheme}</p>}
//       </div>

//       <div className="mb-6">
//         <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700 mb-1">
//           Project Title *
//         </label>
//         <input
//           type="text"
//           id="projectTitle"
//           name="projectTitle"
//           value={formData.projectTitle}
//           onChange={handleChange}
//           className={`w-full px-4 py-2 border rounded-md focus:ring-[#2783BC] focus:border-[#2783BC] ${
//             errors.projectTitle ? "border-red-500" : "border-gray-300"
//           }`}
//         />
//         {errors.projectTitle && <p className="mt-1 text-sm text-red-600">{errors.projectTitle}</p>}
//       </div>

//       <div className="mb-6">
//         <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1">
//           Project Description * (min. 50 characters)
//         </label>
//         <textarea
//           id="projectDescription"
//           name="projectDescription"
//           rows="4"
//           value={formData.projectDescription}
//           onChange={handleChange}
//           className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
//             errors.projectDescription ? "border-red-500" : "border-gray-300"
//           }`}
//           placeholder="Briefly describe your project idea, objectives, and expected outcomes..."
//         ></textarea>
//         {errors.projectDescription && <p className="mt-1 text-sm text-red-600">{errors.projectDescription}</p>}
//         <p className="mt-1 text-sm text-gray-500">{formData.projectDescription.length}/500 characters</p>
//       </div>
//     </>
//   )

//   const renderStep2 = () => (
//     <>
//       <h4 className="text-lg font-semibold mb-4">Team Leader Information</h4>

//       <div className="grid md:grid-cols-2 gap-6 mb-6">
//         <div>
//           <label htmlFor="leaderName" className="block text-sm font-medium text-gray-700 mb-1">
//             Full Name *
//           </label>
//           <input
//             type="text"
//             id="leaderName"
//             name="leaderName"
//             value={formData.leaderName}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
//               errors.leaderName ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {errors.leaderName && <p className="mt-1 text-sm text-red-600">{errors.leaderName}</p>}
//         </div>

//         <div>
//           <label htmlFor="leaderEmail" className="block text-sm font-medium text-gray-700 mb-1">
//             Email Address *
//           </label>
//           <input
//             type="email"
//             id="leaderEmail"
//             name="leaderEmail"
//             value={formData.leaderEmail}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
//               errors.leaderEmail ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {errors.leaderEmail && <p className="mt-1 text-sm text-red-600">{errors.leaderEmail}</p>}
//         </div>

//         <div>
//           <label htmlFor="leaderPhone" className="block text-sm font-medium text-gray-700 mb-1">
//             Phone Number *
//           </label>
//           <input
//             type="tel"
//             id="leaderPhone"
//             name="leaderPhone"
//             value={formData.leaderPhone}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
//               errors.leaderPhone ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {errors.leaderPhone && <p className="mt-1 text-sm text-red-600">{errors.leaderPhone}</p>}
//         </div>

//         <div>
//           <label htmlFor="leaderInstitution" className="block text-sm font-medium text-gray-700 mb-1">
//             Institution/Organization *
//           </label>
//           <input
//             type="text"
//             id="leaderInstitution"
//             name="leaderInstitution"
//             value={formData.leaderInstitution}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
//               errors.leaderInstitution ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {errors.leaderInstitution && <p className="mt-1 text-sm text-red-600">{errors.leaderInstitution}</p>}
//         </div>
//       </div>
//     </>
//   )

//   const renderStep3 = () => (
//     <>
//       <h4 className="text-lg font-semibold mb-4">Team Members Information</h4>
//       <p className="text-sm text-gray-600 mb-6">Add between 2-5 team members (including yourself)</p>

//       {formData.members.map((member, index) => (
//         <div key={index} className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
//           <div className="flex justify-between items-center mb-4">
//             <h5 className="font-medium">Team Member {index + 1}</h5>
//             {index >= 2 && (
//               <button type="button" onClick={() => removeTeamMember(index)} className="text-red-600 hover:text-red-800">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path
//                     fillRule="evenodd"
//                     d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             )}
//           </div>

//           <div className="grid md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
//               <input
//                 type="text"
//                 value={member.name}
//                 onChange={(e) => handleMemberChange(index, "name", e.target.value)}
//                 className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
//                   errors[`members.${index}.name`] ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors[`members.${index}.name`] && (
//                 <p className="mt-1 text-sm text-red-600">{errors[`members.${index}.name`]}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//               <input
//                 type="email"
//                 value={member.email}
//                 onChange={(e) => handleMemberChange(index, "email", e.target.value)}
//                 className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
//                   errors[`members.${index}.email`] ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors[`members.${index}.email`] && (
//                 <p className="mt-1 text-sm text-red-600">{errors[`members.${index}.email`]}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Institution/Organization</label>
//               <input
//                 type="text"
//                 value={member.institution}
//                 onChange={(e) => handleMemberChange(index, "institution", e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           </div>
//         </div>
//       ))}

//       {formData.members.length < 5 && (
//         <div className="mb-8">
//           <Button
//             type="button"
//             variant="outline"
//             onClick={addTeamMember}
//             icon={
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path
//                   fillRule="evenodd"
//                   d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             }
//           >
//             Add Team Member
//           </Button>
//         </div>
//       )}

//       <div className="mb-6">
//         <label htmlFor="heardFrom" className="block text-sm font-medium text-gray-700 mb-1">
//           How did you hear about this event?
//         </label>
//         <select
//           id="heardFrom"
//           name="heardFrom"
//           value={formData.heardFrom}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//         >
//           <option value="">Select an option</option>
//           <option value="social-media">Social Media</option>
//           <option value="website">Website</option>
//           <option value="email">Email</option>
//           <option value="friend">Friend/Colleague</option>
//           <option value="university">University/College</option>
//           <option value="newspaper">Newspaper/Magazine</option>
//           <option value="other">Other</option>
//         </select>
//       </div>

//       <div className="mb-6">
//         <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700 mb-1">
//           Special Requirements or Accommodations
//         </label>
//         <textarea
//           id="specialRequirements"
//           name="specialRequirements"
//           rows="3"
//           value={formData.specialRequirements}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//           placeholder="Please let us know if you have any special requirements..."
//         ></textarea>
//       </div>

//       <div className="mb-6">
//         <div className="flex items-start">
//           <div className="flex items-center h-5">
//             <input
//               id="agreeTerms"
//               name="agreeTerms"
//               type="checkbox"
//               checked={formData.agreeTerms}
//               onChange={handleChange}
//               className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
//                 errors.agreeTerms ? "border-red-500" : ""
//               }`}
//             />
//           </div>
//           <div className="ml-3 text-sm">
//             <label htmlFor="agreeTerms" className="font-medium text-gray-700">
//               I agree to the{" "}
//               <a href="#" className="text-blue-600 hover:underline">
//                 Terms and Conditions
//               </a>{" "}
//               and{" "}
//               <a href="#" className="text-blue-600 hover:underline">
//                 Privacy Policy
//               </a>{" "}
//               *
//             </label>
//           </div>
//         </div>
//         {errors.agreeTerms && <p className="mt-1 text-sm text-red-600">{errors.agreeTerms}</p>}
//       </div>
//     </>
//   )

//   return (
//     <Card className="max-w-4xl mx-auto p-8 animate-slide-up">
//       <div className="mb-8">
//         <div className="flex items-center justify-between">
//           {[1, 2, 3].map((item) => (
//             <div key={item} className="flex items-center">
//               <div
//                 className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                   step >= item ? "bg-[#2783BC] text-white" : "bg-gray-200 text-gray-600"
//                 }`}
//               >
//                 {item}
//               </div>
//               <span className="ml-2 font-medium hidden sm:inline">
//                 {item === 1 ? "Project Details" : item === 2 ? "Team Leader" : "Team Members"}
//               </span>
//               {item < 3 && (
//                 <div className={`w-12 sm:w-24 h-1 mx-2 ${step > item ? "bg-[#2783BC]" : "bg-gray-200"}`}></div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <form onSubmit={handleSubmit}>
//         {step === 1 && renderStep1()}
//         {step === 2 && renderStep2()}
//         {step === 3 && renderStep3()}

//         <div className="flex justify-between mt-8">
//           {step > 1 ? (
//             <Button variant="outline" type="button" onClick={prevStep}>
//               Previous
//             </Button>
//           ) : (
//             <div></div>
//           )}

//           {step < 3 ? (
//             <Button variant="primary" type="button" onClick={nextStep}>
//               Next
//             </Button>
//           ) : (
//             <Button variant="primary" type="submit" disabled={isSubmitting}>
//               {isSubmitting ? (
//                 <>
//                   <svg
//                     className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     ></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                     ></path>
//                   </svg>
//                   Submitting...
//                 </>
//               ) : (
//                 "Submit Registration"
//               )}
//             </Button>
//           )}
//         </div>
//       </form>
//     </Card>
//   )
// }

// // export default RegistrationForm

// import { useState, useEffect } from "react"
// import { Card } from "../../ui/Card"
// import { Button } from "../../ui/Button"

// const RegistrationForm = ({ onComplete }) => {
//   const [registrationClosed, setRegistrationClosed] = useState(true)
//   const [typingText, setTypingText] = useState("")
//   const [typingComplete, setTypingComplete] = useState(false)
//   const [flashing, setFlashing] = useState(false)
//   const fullText = "REGISTRATION CLOSED"

//   useEffect(() => {
//     if (!registrationClosed) return

//     // Typing animation
//     let i = 0
//     const typingInterval = setInterval(() => {
//       if (i < fullText.length) {
//         setTypingText(fullText.substring(0, i + 1))
//         i++
//       } else {
//         clearInterval(typingInterval)
//         setTypingComplete(true)
        
//         // Start flashing animation after typing completes
//         const flashInterval = setInterval(() => {
//           setFlashing(prev => !prev)
//         }, 500)
        
//         return () => clearInterval(flashInterval)
//       }
//     }, 100)

//     return () => clearInterval(typingInterval)
//   }, [registrationClosed])

//   if (registrationClosed) {
//     return (
//       <Card className="max-w-4xl mx-auto p-4 md:p-8 animate-slide-up">
//         <div className="flex flex-col items-center justify-center py-8 md:py-12">
//           <div className="relative mb-6 md:mb-10 w-full">
//             <h2 
//               className={`text-3xl sm:text-4xl md:text-5xl font-bold md:font-extrabold tracking-tight text-center ${
//                 flashing ? 'text-red-500 md:text-red-600' : 'text-gray-800 md:text-gray-900'
//               }`}
//               style={{ 
//                 fontFamily: "'Courier New', monospace",
//                 borderRight: typingComplete ? 'none' : '2px solid',
//                 textShadow: '0 2px 4px rgba(0,0,0,0.1)',
//                 letterSpacing: '1px',
//                 lineHeight: '1.2'
//               }}
//             >
//               {typingText}
//               {!typingComplete && <span className="opacity-0">|</span>}
//             </h2>
//             {typingComplete && (
//               <div className="absolute -bottom-2 md:-bottom-4 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r from-transparent via-red-500 md:via-red-600 to-transparent animate-pulse opacity-80"></div>
//             )}
//           </div>
          
//           <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 text-center max-w-xs sm:max-w-md px-2">
//             We're sorry, but registration for this event has now closed. 
//             Thank you for your interest!
//           </p>
          
//           <div className="animate-bounce">
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               className="h-10 w-10 md:h-12 md:w-12 text-red-500" 
//               fill="none" 
//               viewBox="0 0 24 24" 
//               stroke="currentColor"
//             >
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth={2} 
//                 d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
//               />
//             </svg>
//           </div>
//         </div>
//       </Card>
//     )
//   }

//   // ... rest of your original form code ...
// }

// export default RegistrationForm

import { useState, useEffect, useRef } from "react";
import { Card } from "../../ui/Card";
import { Button } from "../../ui/Button";

const RegistrationForm = ({ onComplete }) => {
  const [registrationClosed, setRegistrationClosed] = useState(true);
  const [typingText, setTypingText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const [flashing, setFlashing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);
  const fullText = "REGISTRATION CLOSED";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || !registrationClosed) return;

    // Typing animation
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);

        const flashInterval = setInterval(() => {
          setFlashing((prev) => !prev);
        }, 500);
        
        return () => clearInterval(flashInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [isVisible, registrationClosed]);

  if (registrationClosed) {
    return (
      <div ref={componentRef}>
        <Card className="max-w-4xl mx-auto p-4 md:p-8 animate-slide-up">
          <div className="flex flex-col items-center justify-center py-8 md:py-12">
            <div className="relative mb-6 md:mb-10 w-full">
              <h2
                className={`text-3xl sm:text-4xl md:text-5xl font-bold md:font-extrabold tracking-tight text-center ${
                  flashing ? "text-red-500 md:text-red-600" : "text-gray-800 md:text-gray-900"
                }`}
                style={{
                  fontFamily: "'Courier New', monospace",
                  borderRight: typingComplete ? "none" : "2px solid",
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  letterSpacing: "1px",
                  lineHeight: "1.2",
                  minHeight: "1.2em" 
                }}
              >
                {typingText || " "}
                {!typingComplete && isVisible && typingText && (
                  <span className="opacity-0">|</span>
                )}
              </h2>
              {typingComplete && (
                <div className="absolute -bottom-2 md:-bottom-4 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r from-transparent via-red-500 md:via-red-600 to-transparent animate-pulse opacity-80"></div>
              )}
            </div>

            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 text-center max-w-xs sm:max-w-md px-2">
              We're sorry, but registration for this event has now closed.
              Thank you for your interest!
            </p>

            <div className="animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 md:h-12 md:w-12 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  //paxi from lie yaha rakna 
};

export default RegistrationForm;