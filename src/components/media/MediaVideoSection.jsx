"use client"

import { useState } from "react"
import { Card } from "../../ui/Card"
import { VideoPlayer } from "../../ui/VideoPlayer"

const MediaVideoSection = ({ videos }) => {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <div className="my-20 animate-slide-up">
      <h3 className="text-2xl font-bold text-center mb-8">Event Videos</h3>

      <div className="grid md:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div key={video.id} className="animate-slide-right" style={{ animationDelay: `${index * 0.1}s` }}>
            <Card className="overflow-hidden h-full hover:shadow-lg transition-all">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                 
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button
                    onClick={() => setActiveVideo(video)}
                    className="w-16 h-16 rounded-full bg-blue-600 bg-opacity-90 flex items-center justify-center hover:bg-opacity-100 transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-1">{video.title}</h4>
                <p className="text-sm text-gray-600">{video.description}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <VideoPlayer src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" poster={activeVideo.thumbnail} title={activeVideo.title} />

            <div className="mt-4 text-white">
              <h3 className="text-xl font-semibold mb-1">{activeVideo.title}</h3>
              <p className="text-gray-300">{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mt-8">
        <a
          href="https://www.youtube.com/channel/example"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <span>Visit our YouTube channel for more videos</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default MediaVideoSection

