

import { useState } from "react"
import { Button } from "../../ui/Button"
import { Link } from "react-router-dom"

const PostEventGallery = ({ year }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const galleryImages = {
    2024: [
      { url: "https://imgs.search.brave.com/O3A8Q7rYkgech4ZMnztmyjW_mH7OMRB5vXOKhfmwAD8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZW9w/bGUuY29tL3RobWIv/bXdrcU8wT3ZOMVFi/andoNWNkb2dYLS0x/d2QwPS80MDAweDAv/ZmlsdGVyczpub191/cHNjYWxlKCk6bWF4/X2J5dGVzKDE1MDAw/MCk6c3RyaXBfaWNj/KCk6Zm9jYWwoNDc0/eDA6NDc2eDIpL29w/ZW5pbmctY2VyZW1v/bnktMDMtMDUzNWI0/YzNlMTVhNDMxZGIw/Yjg2NWNiNTE1NDA0/NjYuanBn", alt: "Opening Ceremony" },
      { url: "https://imgs.search.brave.com/tcOLWqCvOuAKk2mkhrxJvEuL2vtN7ojKlsDdid66QRM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/Mjk5MjE0NTMzMzIy/MTBmOWJjNGIwMzQv/Njc3N2RiMjcxZGI4/NjU3ZjdmMzRhNTMz/X3Byb2plY3QtcHJl/c2VudGF0aW9uLTAy/LndlYnA", alt: "Project Presentations" },
      { url: "https://imgs.search.brave.com/1RR7J2FVnznDStNjVNZ5JL61zf240bpzkI2G7ApDUjg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY3NlLmNhbnZh/LmNvbS9ibG9iLzEx/NDg1MjAvZ3ByZXNl/bnRhdGlvbi5wbmc", alt: "Networking Event" },
      { url: "https://imgs.search.brave.com/xFuJQfvvgejPebaihWYgIPsUmGVnBfg1-ZO5FEscF6I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aWxs/YXJhZ3VzYS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MDUvUGxhbm5pbmct/dGhlLVBlcmZlY3Qt/QXdhcmQtQ2VyZW1v/bnktZm9yLUNvcnBv/cmF0aW9ucy5qcGc", alt: "Award Ceremony" },
    ],
    2023: [
      { url: "https://imgs.search.brave.com/eb8CDpY7KcPfF3rtHAbTeUyzGtDGNK44A_3K7UHi9oQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saXZl/LXByb2R1Y3Rpb24u/d2Ntcy5hYmMtY2Ru/Lm5ldC5hdS84ZDM2/NGRiZDYzMTk3ZGIx/NTEzMzhkZjljMzY2/YjUzMj9pbXBvbGlj/eT13Y21zX2Nyb3Bf/cmVzaXplJmNyb3BI/PTEzMTImY3JvcFc9/MTk2NiZ4UG9zPTE3/JnlQb3M9MCZ3aWR0/aD04NjImaGVpZ2h0/PTU3NQ", alt: "Opening Ceremony" },
      { url: "https://imgs.search.brave.com/Hm2VIQaWltkJN7n6yXyJqni2mA0DHpShKhqmxeoQcIU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92cy1z/dGF0aWMudmlydHVh/bHNwZWVjaC5jb20v/aW1nL2Jsb2cvZ3Jv/dXAtcHJlc2VudGF0/aW9uLWJ1c2luZXNz/LmpwZw", alt: "Project Presentations" },
      { url: "https://imgs.search.brave.com/1RR7J2FVnznDStNjVNZ5JL61zf240bpzkI2G7ApDUjg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY3NlLmNhbnZh/LmNvbS9ibG9iLzEx/NDg1MjAvZ3ByZXNl/bnRhdGlvbi5wbmc", alt: "Networking Event" },
      { url: "https://imgs.search.brave.com/xFuJQfvvgejPebaihWYgIPsUmGVnBfg1-ZO5FEscF6I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aWxs/YXJhZ3VzYS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MDUvUGxhbm5pbmct/dGhlLVBlcmZlY3Qt/QXdhcmQtQ2VyZW1v/bnktZm9yLUNvcnBv/cmF0aW9ucy5qcGc", alt: "Award Ceremony" },
    ],
    2022: [
      { url: "https://imgs.search.brave.com/gjNpTkPlgSGaz66w2Ulqcg0PTAp4WDFOLsx9k5zWJC8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/MDI1MzI4Mi9waG90/by90b2t5by1qYXBh/bi1wZW9wbGUtdGFr/ZS1waG90b2dyYXBo/cy1vZi1maXJld29y/a3MtZHVyaW5nLXRo/ZS1vcGVuaW5nLWNl/cmVtb255LW9mLXRo/ZS10b2t5by5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WVdS/VzkwcDVGdW9tbXRW/cTI0UU4zWnlNQjhY/UmphWE5qWF85M0R2/X2dDQT0", alt: "Opening Ceremony" },
      { url: "https://imgs.search.brave.com/Hm2VIQaWltkJN7n6yXyJqni2mA0DHpShKhqmxeoQcIU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92cy1z/dGF0aWMudmlydHVh/bHNwZWVjaC5jb20v/aW1nL2Jsb2cvZ3Jv/dXAtcHJlc2VudGF0/aW9uLWJ1c2luZXNz/LmpwZw", alt: "Project Presentations" },
      { url: "https://imgs.search.brave.com/1RR7J2FVnznDStNjVNZ5JL61zf240bpzkI2G7ApDUjg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY3NlLmNhbnZh/LmNvbS9ibG9iLzEx/NDg1MjAvZ3ByZXNl/bnRhdGlvbi5wbmc", alt: "Networking Event" },
      { url: "https://imgs.search.brave.com/xFuJQfvvgejPebaihWYgIPsUmGVnBfg1-ZO5FEscF6I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aWxs/YXJhZ3VzYS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MDUvUGxhbm5pbmct/dGhlLVBlcmZlY3Qt/QXdhcmQtQ2VyZW1v/bnktZm9yLUNvcnBv/cmF0aW9ucy5qcGc", alt: "Award Ceremony" },
    ],
  }

  return (
    <div className="my-20 animate-slide-up">
      <h3 className="text-2xl font-bold text-center mb-8">Event Gallery</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages[year].map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={image.url || "/placeholder.svg"}
              alt={image.alt}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                hoveredIndex === index ? "scale-110" : "scale-100"
              }`}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-white p-4">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button
          variant="primary"
          as={Link}
          to="/media-gallery"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          }
          iconPosition="right"
        >
          View Full Gallery
        </Button>
      </div>
    </div>
  )
}

export default PostEventGallery

