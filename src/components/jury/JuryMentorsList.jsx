
import JuryMentorCard from "./JuryMentorCard"

const JuryMentorsList = ({ experts, onSelectExpert }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {experts.map((expert, index) => (
        <div key={expert.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
          <JuryMentorCard expert={expert} onClick={() => onSelectExpert(expert)} />
        </div>
      ))}
    </div>
  )
}

export default JuryMentorsList

