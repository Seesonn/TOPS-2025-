import PageHeader from "../components/common/PageHeader"

const JuryMentors = () => {
  return (
    <div>
      <PageHeader
        title="Jury & Mentors"
        description="Meet the experts who will evaluate projects and provide guidance"
      />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">Our Distinguished Jury</h2>
        <p className="text-gray-600 mb-8">Information about jury members and mentors will be announced soon.</p>
      </div>
    </div>
  )
}

export default JuryMentors

