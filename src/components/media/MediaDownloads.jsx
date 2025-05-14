import { Card } from "../../ui/Card"
import { Button } from "../../ui/Button"

const MediaDownloads = () => {
  const downloadItems = [
    {
      title: "Event Brochure",
      description: "Official brochure with event details, schedule, and information",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      fileType: "PDF",
      fileSize: "2.4 MB",
    },
    {
      title: "Press Kit",
      description: "Media resources including logos, press releases, and high-resolution images",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
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
      ),
      fileType: "ZIP",
      fileSize: "18.7 MB",
    },
    {
      title: "Event Photos",
      description: "High-resolution photos from the event for media and promotional use",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      fileType: "ZIP",
      fileSize: "156 MB",
    },
  ]

  return (
    <div className="my-20 animate-slide-up">
      <h3 className="text-2xl font-bold text-center mb-8">Media Downloads</h3>

      <div className="grid md:grid-cols-3 gap-8">
        {downloadItems.map((item, index) => (
          <div key={index} className="animate-slide-right" style={{ animationDelay: `${index * 0.1}s` }}>
            <Card className="p-6 h-full flex flex-col">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-[#223F80] mb-4">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">Format: {item.fileType}</span>
                <span className="text-sm text-gray-500">Size: {item.fileSize}</span>
              </div>
              <Button
                variant="primary"
                fullWidth
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              >
                Download
              </Button>
            </Card>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-blue-50 rounded-xl text-center">
        <h4 className="text-lg font-semibold mb-2">Need specific media assets?</h4>
        <p className="text-gray-700 mb-4">
          If you need specific photos, videos, or other media assets not available for download, please contact our
          media relations team.
        </p>
        {/* <a href="mailto:media@topskoshi2025.com" className="text-[#223F80] hover:text-blue-800 font-medium">
          media@topskoshi2025.com
        </a> */}
      </div>
    </div>
  )
}

export default MediaDownloads

