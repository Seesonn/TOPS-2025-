

import { useState } from "react"
import PageHeader from "../components/common/PageHeader"
import RegistrationForm from "../components/registration/RegistrationForm"
import RegistrationSteps from "../components/registration/RegistrationSteps"
import RegistrationFAQ from "../components/registration/RegistrationFAQ"
import RegistrationTimeline from "../components/registration/RegistrationTimeline"
import { Card } from "../ui/Card"
import EligibilitySection from "../components/registration/EligibilitySection"
import ProjectDevelopmentPhase from "../components/registration/ProjectDevelopmentPhase"

const Registration = () => {
  const [registrationComplete, setRegistrationComplete] = useState(false)

  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Registration"
        description="Register your team for the Tourism Project Showcase – Koshi 2025"
        backgroundImage="https://imgs.search.brave.com/aDjry78MtXB6gAJm4Oo1cYyV-BchROmR_FS2Xg1PXAM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmF0dXJlaW5mb2N1/cy5pbi9tZWRpYS8x/OTIwLXNoYXlhbi1i/b3NlLTIwMTkxMjA3/MTQ1MjQ4LTEtMTYz/NDAxNjY5Ny5qcGc"
      />

      <div className="container mx-auto px-4 py-16">
        {registrationComplete ? (
          <Card className="max-w-2xl mx-auto my-16 p-8 text-center animate-fade-in">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Registration Successful!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for registering for ToPS Koshi 2025. We've sent a confirmation email with further details to
              your team leader's email address.
            </p>
            <p className="text-gray-600 mb-6">
              Your team ID is:{" "}
              <span className="font-semibold text-blue-600">TOPS2025-{Math.floor(1000 + Math.random() * 9000)}</span>
            </p>
            <p className="text-gray-600">
              Please save this ID for future reference. If you have any questions, please contact us at{" "}
              <a href="mailto:info@topskoshi2025.com" className="text-blue-600 hover:underline">
              topskoshi2025@gmail.com
              </a>
            </p>
          </Card>
        ) : (
          <>
            <div className="max-w-4xl mx-auto mb-16 text-center animate-slide-up">
              <h2 className="section-title">Join ToPS Koshi 2025</h2>
              <p className="text-lg text-gray-700 mb-8">
                Register your team to participate in the Tourism Project Showcase and get a chance to win exciting
                prizes, gain valuable feedback from industry experts, and network with potential investors and partners.
              </p>
            </div>

            <RegistrationSteps />
            <EligibilitySection/>
            <ProjectDevelopmentPhase/>
            
            

            <div className="my-16">
              <h3 className="text-2xl font-bold text-center mb-8">Registration Form</h3>
              <RegistrationForm onComplete={() => setRegistrationComplete(true)} />
            </div>

            <RegistrationTimeline />
            <RegistrationFAQ />
          </>
        )}
      </div>
    </div>
  )
}

export default Registration

