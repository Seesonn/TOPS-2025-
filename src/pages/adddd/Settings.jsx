"use client"

import { useState } from "react"
import { Card } from "../../ui/Card"
import { Button } from "../../ui/Button"

const Settings = () => {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "Tourism Project Showcase",
    siteDescription: "Showcasing innovative tourism projects in Nepal",
    contactEmail: "info@tourismprojectshowcase.com",
    contactPhone: "+977 1234567890",
  })

  const [emailSettings, setEmailSettings] = useState({
    smtpServer: "smtp.example.com",
    smtpPort: "587",
    smtpUsername: "notifications@tourismprojectshowcase.com",
    smtpPassword: "••••••••••••",
    senderName: "Tourism Project Showcase",
    senderEmail: "no-reply@tourismprojectshowcase.com",
  })

  const [isSaving, setIsSaving] = useState(false)

  const handleGeneralChange = (e) => {
    const { name, value } = e.target
    setGeneralSettings((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleEmailChange = (e) => {
    const { name, value } = e.target
    setEmailSettings((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    setIsSaving(true)

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      alert("Settings saved successfully!")
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#223F80]">Settings</h1>

      <form onSubmit={handleSave}>
        <div className="space-y-6">
          {/* General Settings */}
          <Card className="overflow-hidden">
            <div className="bg-[#223F80] px-4 py-3 sm:px-6">
              <h3 className="text-lg font-medium text-white">General Settings</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">
                    Site Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="siteName"
                      id="siteName"
                      value={generalSettings.siteName}
                      onChange={handleGeneralChange}
                      className="shadow-sm focus:ring-[#2783BC] focus:border-[#2783BC] block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700">
                    Site Description
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="siteDescription"
                      id="siteDescription"
                      value={generalSettings.siteDescription}
                      onChange={handleGeneralChange}
                      className="shadow-sm focus:ring-[#2783BC] focus:border-[#2783BC] block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
                    Contact Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="contactEmail"
                      id="contactEmail"
                      value={generalSettings.contactEmail}
                      onChange={handleGeneralChange}
                      className="shadow-sm focus:ring-[#2783BC] focus:border-[#2783BC] block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700">
                    Contact Phone
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="contactPhone"
                      id="contactPhone"
                      value={generalSettings.contactPhone}
                      onChange={handleGeneralChange}
                      className="shadow-sm focus:ring-[#2783BC] focus:border-[#2783BC] block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Email Settings */}
          <Card className="overflow-hidden">
            <div className="bg-[#2783BC] px-4 py-3 sm:px-6">
              <h3 className="text-lg font-medium text-white">Email Settings</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="smtpServer" className="block text-sm font-medium text-gray-700">
                    SMTP Server
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="smtpServer"
                      id="smtpServer"
                      value={emailSettings.smtpServer}
                      onChange={handleEmailChange}
                      className="shadow-sm focus:ring-[#2783BC] focus:border-[#2783BC] block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="smtpPort" className="block text-sm font-medium text-gray-700">
                    SMTP Port
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="smtpPort"
                      id="smtpPort"
                      value={emailSettings.smtpPort}
                      onChange={handleEmailChange}
                      className="shadow-sm focus:ring-[#2783BC] focus:border-[#2783BC] block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="smtpUsername" className="block text-sm font-medium text-gray-700">
                    SMTP Username
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="smtpUsername"
                      id="smtpUsername"
                      value={emailSettings.smtpUsername}
                      onChange={handleEmailChange}
                      className="shadow-sm focus:ring-[#2783BC] focus:border-[#2783BC] block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="smtpPassword" className="block text-sm font-medium text-gray-700">
                    SMTP Password
                  </label>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="smtpPassword"
                      id="smtpPassword"
                      value={emailSettings.smtpPassword}
                      onChange={handleEmailChange}
                      className="shadow-sm focus:ring-[#2783BC] focus:border-[#2783BC] block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="senderName" className="block text-sm font-medium text-gray-700">
                    Sender Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="senderName"
                      id="senderName"
                      value={emailSettings.senderName}
                      onChange={handleEmailChange}
                      className="shadow-sm focus:ring-[#2783BC] focus:border-[#2783BC] block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="senderEmail" className="block text-sm font-medium text-gray-700">
                    Sender Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="senderEmail"
                      id="senderEmail"
                      value={emailSettings.senderEmail}
                      onChange={handleEmailChange}
                      className="shadow-sm focus:ring-[#2783BC] focus:border-[#2783BC] block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              variant="primary"
              className="bg-[#F58432] hover:bg-[#223F80] border-transparent"
              disabled={isSaving}
            >
              {isSaving ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Saving...
                </>
              ) : (
                "Save Settings"
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Settings

