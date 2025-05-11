
// import { Link } from "react-router-dom";
// import { Button } from "../../ui/Button";
// import { useRef, useEffect, useState } from "react";
// import kafals from "../../assests/kafals.png";
// import koshitourism from "../../assests/koshitourism.png";
// import fca from "../../assests/fca.png";
// import scaef from "../../assests/scaef.png";
// import nea from "../../assests/nea.png";
// import gramayana from "../../assests/gramayana.png";
// import marketing from "../../assests/marketing.png";

// const SponsorLogo = ({ logo }) => {
//   return (
//     <div className="flex items-center justify-center w-full h-full p-2 sm:p-4">
//       <img
//         src={logo}
//         alt="Sponsor logo"
//         className="object-contain w-full h-full max-h-[80px] sm:max-h-[100px]"
//         onError={(e) => {
//           e.target.onerror = null;
//           e.target.src = "/placeholder-logo.svg";
//         }}
//       />
//     </div>
//   );
// };

// const SponsorsSection = () => {
//   const sponsors = [
//     { logo: koshitourism },
//     { logo: kafals },
//     { logo: gramayana },
//     { logo: fca },
//     { logo: scaef },
//     { logo: nea },
//     { logo: marketing },
//   ];

//   const containerRef = useRef(null);
//   const animationRef = useRef(null);
//   const [displaySponsors] = useState([...sponsors, ...sponsors]);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
//   const [isDragging, setIsDragging] = useState(false);
//   const [touchStartX, setTouchStartX] = useState(0);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const speed = isMobile ? 0.5 : 0.3;
//   const autoScrollSpeed = isMobile ? 0.8 : 0.5;

//   // Auto-scroll animation
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     let position = scrollPosition;
//     const containerWidth = container.scrollWidth / 2;
//     let lastTime = performance.now();

//     const animate = (currentTime) => {
//       const deltaTime = currentTime - lastTime;
//       lastTime = currentTime;

//       if (!isDragging) {
//         position -= autoScrollSpeed * (deltaTime / 16); // Normalize speed
//         if (position <= -containerWidth) {
//           position = 0;
//         }
//         container.style.transform = `translateX(${position}px)`;
//         setScrollPosition(position);
//       }

//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animationRef.current = requestAnimationFrame(animate);

//     return () => {
//       cancelAnimationFrame(animationRef.current);
//     };
//   }, [isDragging, scrollPosition, autoScrollSpeed]);

//   // Touch event handlers
//   const handleTouchStart = (e) => {
//     setIsDragging(true);
//     setTouchStartX(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     if (!isDragging) return;
//     const touchX = e.touches[0].clientX;
//     const diff = touchStartX - touchX;
//     const newPosition = scrollPosition - diff * speed;
//     setScrollPosition(newPosition);
//     containerRef.current.style.transform = `translateX(${newPosition}px)`;
//     setTouchStartX(touchX);
//   };

//   const handleTouchEnd = () => {
//     setIsDragging(false);
//   };

//   // Mouse event handlers for desktop
//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setTouchStartX(e.clientX);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     const mouseX = e.clientX;
//     const diff = touchStartX - mouseX;
//     const newPosition = scrollPosition - diff * speed;
//     setScrollPosition(newPosition);
//     containerRef.current.style.transform = `translateX(${newPosition}px)`;
//     setTouchStartX(mouseX);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   // Responsive check
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 640);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section className="py-8 sm:py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-6 sm:mb-10">
//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
//             Our Sponsors
//           </h2>
//           <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
//             Organizations supporting innovation in tourism
//           </p>
//         </div>

//         <div className="relative overflow-hidden py-4">
//           <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
//           <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

//           <div
//             ref={containerRef}
//             className="flex items-center gap-2 sm:gap-6 w-max select-none touch-none"
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseUp}
//           >
//             {displaySponsors.map((sponsor, index) => (
//               <div
//                 key={`sponsor-${index}`}
//                 className="flex-shrink-0 w-24 sm:w-40 h-24 sm:h-32"
//               >
//                 <SponsorLogo logo={sponsor.logo} />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="text-center mt-6 sm:mt-8">
//           <Button
//             variant="primary"
//             as={Link}
//             to="/sponsorship"
//             className="px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base"
//             icon={
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4 sm:h-5 sm:w-5"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             }
//           >
//             Become a Sponsor
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SponsorsSection;
import { Link } from "react-router-dom";
import { Button } from "../../ui/Button";
import { useRef, useEffect, useState } from "react";
import kafals from "../../assests/kafals.png";
import koshitourism from "../../assests/koshitourism.png";
import fca from "../../assests/fca.png";
import scaef from "../../assests/scaef.png";
import nea from "../../assests/nea.png";
import gramayana from "../../assests/gramayana.png";
import marketing from "../../assests/marketing.png";

const SponsorLogo = ({ logo, website }) => {
  const handleClick = () => {
    if (website) {
      window.open(website, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div 
      className="flex items-center justify-center w-full h-full p-2 sm:p-4 cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={logo}
        alt="Sponsor logo"
        className="object-contain w-full h-full max-h-[80px] sm:max-h-[100px] hover:scale-105 transition-transform duration-200"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/placeholder-logo.svg";
        }}
      />
    </div>
  );
};

const SponsorsSection = () => {
  const sponsors = [
    { logo: koshitourism, website: "https://www.koshitourism.gov.np" },
    { logo: kafals, website: "https://kafals.com.np"},
    { logo: gramayana, website: "https://www.gramayana.com" },
    { logo: fca, website: "https://fcan.org.np" },
    { logo: scaef, website: "https://scaef.org.np" },
    { logo: nea, website: "https://member.neanepal.org.np" },
    { logo: marketing, website: "https://www.marketingcompany.com" },
  ];

  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [displaySponsors] = useState([...sponsors, ...sponsors]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [isDragging, setIsDragging] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const speed = isMobile ? 0.5 : 0.3;
  const autoScrollSpeed = isMobile ? 0.8 : 0.5;

  // Track if click was part of a drag gesture
  const [isClick, setIsClick] = useState(true);

  // Auto-scroll animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let position = scrollPosition;
    const containerWidth = container.scrollWidth / 2;
    let lastTime = performance.now();

    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (!isDragging) {
        position -= autoScrollSpeed * (deltaTime / 16); // Normalize speed
        if (position <= -containerWidth) {
          position = 0;
        }
        container.style.transform = `translateX(${position}px)`;
        setScrollPosition(position);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [isDragging, scrollPosition, autoScrollSpeed]);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setIsClick(true);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touchX = e.touches[0].clientX;
    const diff = Math.abs(touchStartX - touchX);
  
    if (diff > 5) {
      setIsClick(false);
    }
    
    const newPosition = scrollPosition - (touchStartX - touchX) * speed;
    setScrollPosition(newPosition);
    containerRef.current.style.transform = `translateX(${newPosition}px)`;
    setTouchStartX(touchX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

 
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsClick(true);
    setTouchStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const mouseX = e.clientX;
    const diff = Math.abs(touchStartX - mouseX);
    
    // If moved more than 5px, consider it a drag not a click
    if (diff > 5) {
      setIsClick(false);
    }
    
    const newPosition = scrollPosition - (touchStartX - mouseX) * speed;
    setScrollPosition(newPosition);
    containerRef.current.style.transform = `translateX(${newPosition}px)`;
    setTouchStartX(mouseX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-8 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Our Sponsors
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Organizations supporting innovation in tourism
          </p>
        </div>

        <div className="relative overflow-hidden py-4">
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          <div
            ref={containerRef}
            className="flex items-center gap-2 sm:gap-6 w-max select-none touch-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {displaySponsors.map((sponsor, index) => (
              <div
                key={`sponsor-${index}`}
                className="flex-shrink-0 w-24 sm:w-40 h-24 sm:h-32"
              >
                <SponsorLogo logo={sponsor.logo} website={sponsor.website} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <Button
            variant="primary"
            as={Link}
            to="/sponsorship"
            className="px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            }
          >
            Become a Sponsor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;