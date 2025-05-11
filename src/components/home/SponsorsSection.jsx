// import { Link } from "react-router-dom";
// import { Button } from "../../ui/Button";
// import { useRef, useEffect, useState } from "react";
// import kafals from "../../assests/kafals.png"
// import koshitourism from "../../assests/koshitourism.png"
// import fca from "../../assests/fca.png"
// import scaef from "../../assests/scaef.png"
// import nea from "../../assests/nea.png"
// import gramayana from "../../assests/gramayana.png"
// import marketing from "../../assests/marketing.png"

// const SponsorLogo = ({ logo }) => {
//   return (
//     <div className="flex items-center justify-center w-40 h-40 sm:w-38 sm:h-38 md:w-48 md:h-48 -mt-4">
//       <img
//         src={logo}
//         alt="Sponsor logo"
//         className="object-contain w-full h-full "
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
//     { logo:koshitourism },
//     { logo:kafals },
//     { logo:gramayana },
//     { logo:fca },
//     { logo:scaef },
//     { logo:nea },
//     { logo:marketing },
//   ]
    

//   const containerRef = useRef(null);
//   const animationRef = useRef(null);
//   const [displaySponsors] = useState([...sponsors, ...sponsors]);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
//   const speed = isMobile ? 0.3 : 0.5;

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 640);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     let position = 0;
//     const containerWidth = container.scrollWidth / 2;

//     const animate = () => {
//       position -= speed;

//       if (position <= -containerWidth) {
//         position = 0;
//       }

//       container.style.transform = `translateX(${position}px)`;
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animationRef.current = requestAnimationFrame(animate);

//     return () => {
//       cancelAnimationFrame(animationRef.current);
//     };
//   }, [speed]);

//   return (
//     <section className="py-12 sm:py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-6 sm:mb-12">
//           <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
//             Our Sponsors
//           </h2>
//           <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
//             Organizations supporting innovation in tourism
//           </p>
//         </div>

//         <div className="relative overflow-hidden pt-0 pb-4 sm:pb-8 -mt-2 sm:-mt-4">
//           <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
//           <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

//           <div
//             ref={containerRef}
//             className="flex items-center gap-6 sm:gap-4 w-max"
//           >
//             {displaySponsors.map((sponsor, index) => (
//               <div
//                 key={`sponsor-${index}`}
//                 className="flex-shrink-0 px-4 sm:px-6"
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
//             className="px-8 py-3"
//             icon={
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
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

const SponsorLogo = ({ logo }) => {
  return (
    <div className="flex items-center justify-center w-full h-full p-2 sm:p-4">
      <img
        src={logo}
        alt="Sponsor logo"
        className="object-contain w-full h-full max-h-[80px] sm:max-h-[100px]"
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
    { logo: koshitourism },
    { logo: kafals },
    { logo: gramayana },
    { logo: fca },
    { logo: scaef },
    { logo: nea },
    { logo: marketing },
  ];

  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [displaySponsors] = useState([...sponsors, ...sponsors]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const speed = isMobile ? 0.5 : 0.3;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let position = 0;
    const containerWidth = container.scrollWidth / 2;

    const animate = () => {
      position -= speed;

      if (position <= -containerWidth) {
        position = 0;
      }

      container.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [speed]);

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
            className="flex items-center gap-2 sm:gap-6 w-max"
          >
            {displaySponsors.map((sponsor, index) => (
              <div
                key={`sponsor-${index}`}
                className="flex-shrink-0 w-24 sm:w-40 h-24 sm:h-32"
              >
                <SponsorLogo logo={sponsor.logo} />
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