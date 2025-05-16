
// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"

// const FloatingTicketButton = () => {
//   const [isVisible, setIsVisible] = useState(false)
//   const [isCompact, setIsCompact] = useState(false)
//   const [hasAppeared, setHasAppeared] = useState(false)
//   const [isHovering, setIsHovering] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       // Show button when user scrolls down 300px from the top
//       if (window.scrollY > 300) {
//         if (!isVisible) {
//           setIsVisible(true)
//           setIsCompact(false) // Reset to expanded state when newly visible
//           setHasAppeared(true)
//         }

//         // After button is visible for 3 seconds, make it compact
//         if (hasAppeared && !isCompact && !isHovering) {
//           const timer = setTimeout(() => {
//             setIsCompact(true)
//           }, 3000)

//           return () => clearTimeout(timer)
//         }
//       } else {
//         setIsVisible(false)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [isVisible, isCompact, hasAppeared, isHovering])

//   // Handle hover state changes
//   const handleMouseEnter = () => {
//     setIsHovering(true)
//     setIsCompact(false)
//   }

//   const handleMouseLeave = () => {
//     setIsHovering(false)
//     // Delay compacting to make it feel more natural
//     setTimeout(() => {
//       if (!isHovering) {
//         setIsCompact(true)
//       }
//     }, 1500)
//   }

//   return (
//     <div
//       className={`fixed bottom-6 right-6 z-50 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform ${
//         isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
//       }`}
//     >
//       <Link
//         to="/tickets"
//         className={`flex items-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
//           isCompact ? "p-3 rotate-0" : "px-5 py-3 gap-3"
//         } hover:scale-105 active:scale-95`}
//         aria-label="Buy Tickets"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onFocus={handleMouseEnter}
//         onBlur={handleMouseLeave}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className={`h-5 w-5 transform transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
//             isCompact ? "scale-110" : "scale-100 animate-pulse-slow"
//           }`}
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
//             clipRule="evenodd"
//           />
//           <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
//         </svg>
//         <span
//           className={`font-medium whitespace-nowrap transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden ${
//             isCompact ? "max-w-0 opacity-0 ml-0" : "max-w-24 opacity-100"
//           }`}
//         >
//           Buy Ticket
//         </span>
//       </Link>
//     </div>
//   )
// }

// export default FloatingTicketButton

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const FloatingBackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isCompact, setIsCompact] = useState(false)
  const [hasAppeared, setHasAppeared] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px from the top
      if (window.scrollY > 300) {
        if (!isVisible) {
          setIsVisible(true)
          setIsCompact(false) // Reset to expanded state when newly visible
          setHasAppeared(true)
        }

        // After button is visible for 3 seconds, make it compact
        if (hasAppeared && !isCompact && !isHovering) {
          const timer = setTimeout(() => {
            setIsCompact(true)
          }, 3000)

          return () => clearTimeout(timer)
        }
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isVisible, isCompact, hasAppeared, isHovering])

  // Handle hover state changes
  const handleMouseEnter = () => {
    setIsHovering(true)
    setIsCompact(false)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    // Delay compacting to make it feel more natural
    setTimeout(() => {
      if (!isHovering) {
        setIsCompact(true)
      }
    }, 1500)
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform ${
        isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
      }`}
    >
      <button
        onClick={scrollToTop}
        className={`flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isCompact ? "p-3 rotate-0" : "px-5 py-3 gap-3"
        } hover:scale-105 active:scale-95`}
        aria-label="Back to top"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transform transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            isCompact ? "scale-110" : "scale-100"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span
          className={`font-medium whitespace-nowrap transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden ${
            isCompact ? "max-w-0 opacity-0 ml-0" : "max-w-24 opacity-100"
          }`}
        >
          Back to Top
        </span>
      </button>
    </div>
  )
}

export default FloatingBackToTopButton