import { Card } from "../../ui/Card"

const ApprovedTeamCard = ({ team, rank }) => {
  
 
  

  return (
    <Card className="relative h-full flex flex-col border border-gray-200">
     

      <div className="p-5 flex-grow">
        <h3 className="font-bold text-[#223F80] text-lg mb-1">
          {team.name}
        </h3>

        <h4 className="text-[#2783BC] font-medium text-sm mb-3">{team.projectName}</h4>

        <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium text-[#F58432] border mb-4`}>
          {team.theme}
        </div>

        <p className="text-gray-600 text-sm mb-5 line-clamp-2">{team.description}</p>

        <div className="mt-auto">
          <h5 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Team Members</h5>
          <ul className="text-sm text-gray-700 space-y-2">
            {team.members.map((member, index) => (
              <li key={index} className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FA] text-[#223F80] flex items-center justify-center text-xs font-bold mr-2">
                  {member.charAt(0)}
                </span>
                {member}
              </li>
            ))}
          </ul>
        </div>
      </div>

      
    </Card>
  )
}

export default ApprovedTeamCard