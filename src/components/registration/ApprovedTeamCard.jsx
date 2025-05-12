// import { Card } from "../../ui/Card"

// const ApprovedTeamCard = ({ team, rank }) => {
  
 
  

//   return (
//     <Card className="relative h-full flex flex-col border border-gray-200">
     

//       <div className="p-5 flex-grow">
//         <h3 className="font-bold text-[#223F80] text-lg mb-1">
//           {team.name}
//         </h3>

//         <h4 className="text-[#2783BC] font-medium text-sm mb-3">{team.projectName}</h4>

//         <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium text-[#F58432] border mb-4`}>
//           {team.theme}
//         </div>

//         <p className="text-gray-600 text-sm mb-5 line-clamp-2">{team.description}</p>

//         <div className="mt-auto">
          // <h5 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Team Members</h5>
          // <ul className="text-sm text-gray-700 space-y-2">
          //   {team.members.map((member, index) => (
          //     <li key={index} className="flex items-center">
          //       <span className="w-6 h-6 rounded-full bg-[#E8F0FA] text-[#223F80] flex items-center justify-center text-xs font-bold mr-2">
          //         {member.charAt(0)}
          //       </span>
          //       {member}
          //     </li>
          //   ))}
          // </ul>
//         </div>
//       </div>

      
//     </Card>
//   )
// }

// export default ApprovedTeamCard
import { Card } from "../../ui/Card"

const ApprovedTeamCard = ({ team }) => {
  return (
    <Card className="relative h-full flex flex-col border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
     
      <div className="bg-gradient-to-r from-[#223F80] to-[#2783BC] p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-white text-xl">{team.name}</h3>
            <p className="text-white/90 text-sm">{team.collegeName}</p>
            <p className="text-white/90 text-xs ">{team.collegeAddress}</p>
          </div>
          {/* <div className="text-right"> */}
            
          {/* </div> */}
        </div>
      </div>

     
      <div className="px-4 pt-2">
        <div className="bg-[#F8FAFE] px-3 py-1 rounded-lg inline-flex items-center">
          <span className="text-[#F58432] text-sm font-medium">Mentor: {team.mentor}</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-4 space-y-3">
        {/* Team Sections */}
        <div className="space-y-2">
          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Team Leader</h4>
            <div className="flex items-center bg-[#F8FAFE] px-2 py-1 rounded-lg">
              <span className="w-7 h-7 rounded-full bg-[#223F80] text-white flex items-center justify-center text-xs font-bold mr-2">
                {team.teamLeader.charAt(0)}
              </span>
              <span className="font-medium text-[#223F80] text-sm">{team.teamLeader}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Team Members</h4>
            <ul className="space-y-1">
              {team.members.map((member, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-[#E8F0FA] text-[#223F80] flex items-center justify-center text-xs font-bold mr-2">
                    {member.charAt(0)}
                  </span>
                  <span className="text-gray-700 text-sm">{member}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project Info */}
        <div className="space-y-2">
          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Project Title</h4>
            <p className="text-gray-800 text-sm font-medium">{team.projectTitle}</p>
          </div>
          
          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Project Area</h4>
            <p className="text-gray-800 text-sm">{team.projectArea}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ApprovedTeamCard