"use client"

import { Card } from "../../ui/Card"
import { Button } from "../../ui/Button"
import { MapPin } from "lucide-react"
import { useState } from "react"

const ContactMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false)
  const handleDirectionClick = () => {
    window.location.href =
      "https://www.google.com/maps/place/Hotel+G+Ramayana/@27.7177929,85.3054851,19z/data=!4m9!3m8!1s0x39eb19cd7a431a01:0x3f044f49f3a6b487!5m2!4m1!1i2!8m2!3d27.7176888!4d85.3056839!16s%2Fg%2F11wx1l8v4x?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D"
  }

  return (
    <Card className="overflow-hidden shadow-lg rounded-xl border-0">
      {/* Large, prominent map display */}
      <div className="aspect-[16/9] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.0982091687247!2d85.30548512935661!3d27.717792899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cd7a431a01%3A0x3f044f49f3a6b487!2sHotel%20G%20Ramayana!5e0!3m2!1sen!2sus!4v1711471000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hotel G Ramayana Location"
          className={`absolute inset-0 transition-opacity duration-500 ${mapLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setMapLoaded(true)}
        />

        {/* Simple, elegant loading state */}
        {!mapLoaded && (
          <div className="absolute inset-0 bg-blue-50 flex items-center justify-center">
            <div className="h-16 w-16 relative">
              <div className="absolute inset-0 rounded-full border-4 border-blue-200 opacity-75"></div>
              <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
              <MapPin className="absolute inset-0 m-auto h-8 w-8 text-blue-500" />
            </div>
          </div>
        )}

        {/* Elegant info overlay */}
        <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
          <div className="container mx-auto">
            <h3 className="font-medium text-lg mb-1 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-blue-300" />
              Hotel G Ramayana
            </h3>
            <p className="text-sm text-blue-100">Sayambhu Marg, Kathmandu, Nepal</p>
          </div>
        </div>
      </div>

      {/* Centered button container */}
      <div className="p-4 bg-white flex justify-center">
        <Button variant="primary" onClick={handleDirectionClick} className="px-6 py-2">
          Get Directions
        </Button>
      </div>
    </Card>
  )
}

export default ContactMap

