
// import { Link } from "react-router-dom";
// import { Button } from "../../ui/Button";
// import { useRef, useEffect, useState } from "react";

// const SponsorLogo = ({ name, tier, logo }) => {
//   const tierBorders = {
//     title: "border-4 border-yellow-500",  // Thick gold border for title
//     gold: "border-2 border-yellow-400",    // Gold border
//     silver: "border-2 border-gray-300",    // Silver border
//     bronze: "border border-amber-700"      // Bronze border
//   };

//   return (
//     <div className="flex flex-col items-center justify-center w-48 h-48 p-4">
//       <div className={`relative rounded-lg overflow-hidden ${tierBorders[tier]} w-full h-full flex items-center justify-center bg-white`}>
//         <img 
//           src={logo} 
//           alt={name} 
//           className="object-contain w-4/5 h-4/5 p-2"
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = '/placeholder-logo.svg';
//           }}
//         />
//       </div>
//       <div className="mt-4 text-center">
//         <h3 className="font-bold text-gray-900">{name}</h3>
//         <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
//           {tier} sponsor
//         </span>
//       </div>
//     </div>
//   );
// };

// const SponsorsSection = () => {
//   const sponsors = [
//     { 
//       name: "Kafals", 
//       tier: "title", 
//       logo: "https://tops.alison.com.np/uploads/sponsor_logo_1742835802.png" 
//     },
//     { 
//       name: "Koshi Province", 
//       tier: "gold", 
//       logo: "https://tops.alison.com.np/uploads/sponsor_logo_1742835802.png" 
//     },
//     { 
//       name: "Himalayan Airlines", 
//       tier: "silver", 
//       logo: "https://tops.alison.com.np/uploads/sponsor_logo_1742835802.png" 
//     },
//     { 
//       name: "Airlines", 
//       tier: "silver", 
//       logo: "https://tops.alison.com.np/uploads/sponsor_logo_1742835802.png" 
//     },
//     { 
//       name: "Himalayan ", 
//       tier: "bronze", 
//       logo: "https://tops.alison.com.np/uploads/sponsor_logo_1742835802.png" 
//     },
//   ];

//   const containerRef = useRef(null);
//   const animationRef = useRef(null);
//   const [displaySponsors] = useState([...sponsors, ...sponsors]);
//   const speed = 0.5;

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
//   }, []);

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Sponsors</h2>
//           <p className="text-lg text-gray-600">Organizations supporting innovation in tourism</p>
//         </div>

//         <div className="relative overflow-hidden py-8">
//           <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
//           <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
//           <div 
//             ref={containerRef}
//             className="flex items-center gap-8 w-max"
//           >
//             {displaySponsors.map((sponsor, index) => (
//               <div key={`${sponsor.name}-${index}`} className="flex-shrink-0 px-4">
//                 <SponsorLogo 
//                   name={sponsor.name}
//                   tier={sponsor.tier}
//                   logo={sponsor.logo}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="text-center mt-16">
//           <Button
//             variant="primary"
//             as={Link}
//             to="/sponsorship"
//             className="px-8 py-3"
//             icon={
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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

const SponsorLogo = ({ name, tier, logo }) => {
  const tierBorders = {
    title: "border-4 border-yellow-500",  // Thick gold border for title
    gold: "border-2 border-yellow-400",    // Gold border
    silver: "border-2 border-gray-300",    // Silver border
    bronze: "border border-amber-700"      // Bronze border
  };

  return (
    <div className="flex flex-col items-center justify-center w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 p-2 sm:p-4">
      <div className={`relative rounded-lg overflow-hidden ${tierBorders[tier]} w-full h-full flex items-center justify-center bg-white`}>
        <img 
          src={logo} 
          alt={name} 
          className="object-contain w-4/5 h-4/5 p-1 sm:p-2"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/placeholder-logo.svg';
          }}
        />
      </div>
      <div className="mt-2 sm:mt-4 text-center">
        <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-900">{name}</h3>
        <span className="text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">
          {tier} sponsor
        </span>
      </div>
    </div>
  );
};

const SponsorsSection = () => {
  const sponsors = [
    { 
      name: "Kafals", 
      tier: "title", 
      logo: "https://tops.alison.com.np/uploads/sponsor_logo_1742835802.png" 
    },
    { 
      name: "Koshi Province", 
      tier: "gold", 
      logo: "https://tops.alison.com.np/uploads/sponsor_logo_1742835802.png" 
    },
    { 
      name: "Himalayan Airlines", 
      tier: "silver", 
      logo: "https://tops.alison.com.np/uploads/sponsor_logo_1742835802.png" 
    },
    { 
      name: "Airlines", 
      tier: "silver", 
      logo: "https://tops.alison.com.np/uploads/sponsor_logo_1742835802.png" 
    },
    { 
      name: "Himalayan", 
      tier: "bronze", 
      logo: "https://tops.alison.com.np/uploads/sponsor_logo_1742835802.png" 
    },
  ];

  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [displaySponsors] = useState([...sponsors, ...sponsors]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const speed = isMobile ? 0.3 : 0.5;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    <section className="py-12 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Our Sponsors</h2>
          <p className="text-base sm:text-lg text-gray-600">Organizations supporting innovation in tourism</p>
        </div>

        <div className="relative overflow-hidden py-4 sm:py-8">
          <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div 
            ref={containerRef}
            className="flex items-center gap-4 sm:gap-8 w-max"
          >
            {displaySponsors.map((sponsor, index) => (
              <div key={`${sponsor.name}-${index}`} className="flex-shrink-0 px-2 sm:px-4">
                <SponsorLogo 
                  name={sponsor.name}
                  tier={sponsor.tier}
                  logo={sponsor.logo}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-16">
          <Button
            variant="primary"
            as={Link}
            to="/sponsorship"
            className="px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
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