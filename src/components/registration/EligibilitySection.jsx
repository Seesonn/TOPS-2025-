import React from "react";

const EligibilitySection = () => {
  
  const eligibilityRules = [
    {
      title: "Rules and Regulations",
      items: [
        "Projects must be original and innovative",
        "Concept paper (max. 1,000 words) required",
        "Teams of 3-5 members with at least one civil engineering/architecture student",
        "College recommendation letter required",
        "Plagiarism will lead to disqualification",
        "Decisions by organizers and jury are final",
      ],
    },
    {
      title: "Eligibility",
      items: [
        "Open to undergraduate and graduate students",
        "Must be studying civil engineering or architecture",
        "Must be enrolled in a Nepalese university or college",
      ],
    },
   
  ];

  // Checkmark icon component
  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );

  const SectionWithMap = ({ title, data }) => (
    <div className="mb-12">
      <h3 className="text-xl font-bold mb-6">{title}</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {data.map((section, index) => (
          <div key={index}>
            <h4 className="font-semibold mb-3 text-lg">{section.title}</h4>
            <ul className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h2 className="text-2xl font-bold text-center mb-12">
        Competition Requirements
      </h2>
      
      {/* Eligibility & Requirements Section */}
      <SectionWithMap 
         
        data={eligibilityRules} 
      />
    </div>
  );
};

export default EligibilitySection;