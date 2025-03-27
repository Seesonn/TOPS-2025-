import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FloatingTicketButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px from the top
      if (window.scrollY > 300) {
        if (!isVisible) {
          setIsVisible(true);
          setIsCompact(false); // Reset to expanded state when newly visible
          setHasAppeared(true);
        }

        // After button is visible for 2.5 seconds, make it compact
        if (hasAppeared && !isCompact) {
          const timer = setTimeout(() => {
            setIsCompact(true);
          }, 2500);

          return () => clearTimeout(timer);
        }
      } else {
        setIsVisible(false);
        // Don't reset isCompact here to maintain state when scrolling back down
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, isCompact, hasAppeared]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-700 ease-in-out transform ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-12 opacity-0 scale-95"
      }`}
    >
      <Link
        to="/tickets"
        className={`flex items-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out ${
          isCompact ? "p-3 rotate-0" : "px-5 py-3 gap-2"
        } hover:scale-105 active:scale-95`}
        aria-label="Buy Tickets"
        onMouseEnter={() => setIsCompact(false)}
        onMouseLeave={() => setTimeout(() => setIsCompact(true), 1000)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transform transition-all duration-500 ease-in-out ${
            isCompact ? "scale-110" : "scale-100 group-hover:rotate-12"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
            clipRule="evenodd"
          />
          <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
        </svg>
        <span
          className={`font-medium whitespace-nowrap transition-all duration-500 ease-in-out overflow-hidden ${
            isCompact ? "max-w-0 opacity-0 ml-0" : "max-w-24 opacity-100"
          }`}
        >
          Buy Ticket
        </span>
      </Link>
    </div>
  );
};

export default FloatingTicketButton;
