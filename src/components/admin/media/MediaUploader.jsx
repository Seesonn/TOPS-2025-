"use client"

import { useState } from "react"
import { Card } from "../../../ui/Card"
import { Button } from "../../../ui/Button"

const MediaUploader = ({ onSuccess, onCancel }) => {
  const [uploadType, setUploadType] = useState("image")
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "events",
  })
  const [isUploading, setIsUploading] = useState(false)
  const [errors, setErrors] = useState({})

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (!selectedFile) return

    setFile(selectedFile)

    // Create preview for images and videos
    if (selectedFile.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(selectedFile)
    } else if (selectedFile.type.startsWith("video/")) {
      // For videos, we'd normally generate a thumbnail
      // For this demo, we'll just use a placeholder
      setPreview("/placeholder.svg?height=720&width=1280")
    } else {
      // For documents, we'll use a placeholder
      setPreview(null)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!file) newErrors.file = "Please select a file to upload"
    if (!formData.title.trim()) newErrors.title = "Title is required"
    if (!formData.category) newErrors.category = "Category is required"

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsUploading(true)

    // Simulate upload process
    setTimeout(() => {
      // Generate a mock response as if the file was uploaded
      const mockResponse = {
        id: `med-${Math.floor(Math.random() * 1000)}`,
        type: uploadType,
        url: preview || "https://imgs.search.brave.com/5-O_iVZNRqwOnGsoIu6GYw1uXIdfGidX6f8mUBHvprI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uZXBh/bG5ld3MuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzEw/L1Bva2hhcmFfdmFs/bGV5X25lcGFsMTY3/NTU2NzM5OS5qcGc",
        title: formData.title,
        description: formData.description,
        category: formData.category,
        uploadedAt: new Date().toISOString(),
        uploadedBy: "Admin User",
      }

      // Add type-specific properties
      if (uploadType === "video") {
        mockResponse.thumbnail = preview
        mockResponse.duration = "0:30"
      } else if (uploadType === "document") {
        mockResponse.fileType = file.name.split(".").pop().toUpperCase()
        mockResponse.fileSize = `${(file.size / (1024 * 1024)).toFixed(1)} MB`
      }

      setIsUploading(false)
      onSuccess(mockResponse)
    }, 2000)
  }

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Upload New Media</h2>
        <button onClick={onCancel} className="text-gray-400 hover:text-gray-500" aria-label="Cancel">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Media Type</label>
            <div className="grid grid-cols-3 gap-4">
              <button
                type="button"
                className={`p-4 rounded-lg border-2 flex flex-col items-center justify-center transition-colors ${
                  uploadType === "image"
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 hover:border-gray-300 text-gray-700"
                }`}
                onClick={() => setUploadType("image")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm font-medium">Image</span>
              </button>

              <button
                type="button"
                className={`p-4 rounded-lg border-2 flex flex-col items-center justify-center transition-colors ${
                  uploadType === "video"
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 hover:border-gray-300 text-gray-700"
                }`}
                onClick={() => setUploadType("video")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm font-medium">Video</span>
              </button>

              <button
                type="button"
                className={`p-4 rounded-lg border-2 flex flex-col items-center justify-center transition-colors ${
                  uploadType === "document"
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 hover:border-gray-300 text-gray-700"
                }`}
                onClick={() => setUploadType("document")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm font-medium">Document</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload {uploadType.charAt(0).toUpperCase() + uploadType.slice(1)}
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                {preview ? (
                  <div className="mb-4">
                    {uploadType === "image" || uploadType === "video" ? (
                      <img
                        src={preview || "/placeholder.svg"}
                        alt="Preview"
                        className="mx-auto h-32 w-auto object-cover rounded"
                      />
                    ) : (
                      <div className="mx-auto p-4 bg-gray-100 rounded-lg inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}
                    <p className="text-sm text-gray-500 mt-2">{file?.name}</p>
                    <button
                      type="button"
                      className="text-sm text-red-600 hover:text-red-800 mt-1"
                      onClick={() => {
                        setFile(null)
                        setPreview(null)
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <>
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          accept={
                            uploadType === "image"
                              ? "image/*"
                              : uploadType === "video"
                                ? "video/*"
                                : ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip,.rar"
                          }
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      {uploadType === "image"
                        ? "PNG, JPG, GIF up to 10MB"
                        : uploadType === "video"
                          ? "MP4, WebM up to 100MB"
                          : "PDF, DOC, XLSX, PPT, ZIP up to 50MB"}
                    </p>
                  </>
                )}
              </div>
            </div>
            {errors.file && <p className="mt-1 text-sm text-red-600">{errors.file}</p>}
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter a title for this media"
            />
            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter a description for this media"
            ></textarea>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                errors.category ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="events">Events</option>
              <option value="presentations">Presentations</option>
              <option value="workshops">Workshops</option>
              <option value="networking">Networking</option>
              <option value="awards">Awards Ceremony</option>
              <option value="materials">Materials</option>
            </select>
            {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-3">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" disabled={isUploading}>
            {isUploading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                Uploading...
              </>
            ) : (
              "Upload Media"
            )}
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default MediaUploader

