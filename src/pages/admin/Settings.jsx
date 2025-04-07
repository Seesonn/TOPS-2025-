"use client"

import { useState } from "react"
import { Card } from "../../ui/Card"

const Settings = () => {
  const [generalSettings, setGeneralSettings] = useState({
    eventName: "Tourism Project Showcase 2024",
    eventDate: "2024-08-15",
    eventLocation: "Kathmandu, Nepal",
    contactEmail: "info@tourismprojectshowcase.com",
    contactPhone: "+977 1234567890",
  })

  const [socialMedia, setSocialMedia] = useState({
    facebook: "https://facebook.com/tourismprojectshowcase",
    twitter: "https://twitter.com/tourismproject",
    instagram: "https://instagram.com/tourismprojectshowcase",
    linkedin: "https://linkedin.com/company/tourism-project-showcase",
  })

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    registrationAlerts: true,
    sponsorshipAlerts: true,
    ticketAlerts: true,
  })

  const handleGeneralSettingsChange = (e) => {
    const { name, value } = e.target
    setGeneralSettings((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target
    setSocialMedia((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target
    setNotifications((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would save to a database
    alert("Settings saved successfully!")
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Settings</h1>

      <form onSubmit={handleSubmit}>
        {/* General Settings */}
        <Card className="mb-6">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">General Settings</h3>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">
                  Event Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="eventName"
                    id="eventName"
                    value={generalSettings.eventName}
                    onChange={handleGeneralSettingsChange}
                    className="shadow-sm focus:ring-[#2783BC] focus:border-[#2783BC] block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">
                  Event Date
                </label>
                <div className="mt-1">
                  <input
                    type="date"
                    name="eventDate"
                    id="eventDate"
                    value={generalSettings.eventDate}
                    onChange={handleGeneralSettingsChange}
                    className="shadow-sm focus:ring-[#2783BC] focus:border-[#2783BC] block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-700">
                  Event Location
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="eventLocation"
                    id="eventLocation"
                    value={generalSettings.eventLocation}
                    onChange={handleGeneralSettingsChange}
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
                    onChange={handleGeneralSettingsChange}
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
                    onChange={handleGeneralSettingsChange}
                    className="shadow-sm focus:ring-[#2783BC] focus:border-[#2783BC] block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Social Media Settings */}
        <Card className="mb-6">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Social Media</h3>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
                  Facebook URL
                </label>
                <div className="mt-1">
                  <input
                    type="url"
                    name="facebook"
                    id="facebook"
                    value={socialMedia.facebook}
                    onChange={handleSocialMediaChange}
                    className="shadow-sm focus:ring-[#2783BC] focus:border-[#2783BC] block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
                  Twitter URL
                </label>
                <div className="mt-1">
                  <input
                    type="url"
                    name="twitter"
                    id="twitter"
                    value={socialMedia.twitter}
                    onChange={handleSocialMediaChange}
                    className="shadow-sm focus:ring-[#2783BC] focus:border-[#2783BC] block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
                  Instagram URL
                </label>
                <div className="mt-1">
                  <input
                    type="url"
                    name="instagram"
                    id="instagram"
                    value={socialMedia.instagram}
                    onChange={handleSocialMediaChange}
                    className="shadow-sm focus:ring-[#2783BC] focus:border-[#2783BC] block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                  LinkedIn URL
                </label>
                <div className="mt-1">
                  <input
                    type="url"
                    name="linkedin"
                    id="linkedin"
                    value={socialMedia.linkedin}
                    onChange={handleSocialMediaChange}
                    className="shadow-sm focus:ring-[#2783BC] focus:border-[#2783BC] block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card className="mb-6">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Notification Settings</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="emailNotifications"
                    name="emailNotifications"
                    type="checkbox"
                    checked={notifications.emailNotifications}
                    onChange={handleNotificationChange}
                    className="focus:ring-[#2783BC] h-4 w-4 text-[#2783BC] border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="emailNotifications" className="font-medium text-gray-700">
                    Email Notifications
                  </label>
                  <p className="text-gray-500">Receive email notifications for important updates.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="registrationAlerts"
                    name="registrationAlerts"
                    type="checkbox"
                    checked={notifications.registrationAlerts}
                    onChange={handleNotificationChange}
                    className="focus:ring-[#2783BC] h-4 w-4 text-[#2783BC] border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="registrationAlerts" className="font-medium text-gray-700">
                    Registration Alerts
                  </label>
                  <p className="text-gray-500">Get notified when new registrations are submitted.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="sponsorshipAlerts"
                    name="sponsorshipAlerts"
                    type="checkbox"
                    checked={notifications.sponsorshipAlerts}
                    onChange={handleNotificationChange}
                    className="focus:ring-[#2783BC] h-4 w-4 text-[#2783BC] border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="sponsorshipAlerts" className="font-medium text-gray-700">
                    Sponsorship Alerts
                  </label>
                  <p className="text-gray-500">Get notified when new sponsorship applications are submitted.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="ticketAlerts"
                    name="ticketAlerts"
                    type="checkbox"
                    checked={notifications.ticketAlerts}
                    onChange={handleNotificationChange}
                    className="focus:ring-[#2783BC] h-4 w-4 text-[#2783BC] border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="ticketAlerts" className="font-medium text-gray-700">
                    Ticket Alerts
                  </label>
                  <p className="text-gray-500">Get notified when tickets are purchased.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#2783BC] hover:bg-[#223F80] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2783BC] transition-colors"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  )
}

export default Settings

