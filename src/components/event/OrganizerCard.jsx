// import { Card } from "../../ui/Card"

// const OrganizerCard = ({logo,name, description, website }) => {
//   return (
//     <Card>
//       <div className="p-6">
//         <img src={logo}className="w-auto h-20 mb-4" />
//         <p className="text-gray-700 mb-4">{description}</p>
//         <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//           Visit Website →
//         </a>
//       </div>
//     </Card>
//   )
// }

// export default OrganizerCard


import { Card } from "../../ui/Card";

const OrganizerCard = ({ logo, name, description, website }) => {
  return (
    <Card className="bg-white overflow-hidden border border-gray-100">
      <div className="flex flex-col md:flex-row">
        {/* Left side logo Card*/}
        <div className="p-2 bg-white  flex items-center justify-center">
          <div className="w-32 h-32  bg-white rounded-md flex items-center justify-center ">
            <img
              src={logo}
              alt={`${name} logo`}
              className="max-h-f38 max-w-full object-contain p-1"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05))' }}
            />
          </div>
        </div>

        {/* Right side ko Card */}
        <div className="flex-1 p-6">
          {name && (
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{name}</h3>
          )}
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {description}
          </p>
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
          >
            Visit Website
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </Card>
  );
};

export default OrganizerCard;