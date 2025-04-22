import React from "react";
import { Card } from "../../ui/Card";

const ProjectDevelopmentPhase = () => {
  const requirements = [
    {
      title: "Mandatory Components",
      
      items: [
        "Technical drawings (AutoCAD/SketchUp)",
        "3D models with renderings",
        "PowerPoint presentation (15-20 slides)"
      ]
    },
    {
      title: "Additional Deliverables",
     
      items: [
        "Physical/Digital dummy project",
        "Site visit reports",
        "Mentorship session documentation"
      ]
    }
  ];

  return (
    // <div className="  px-6 py-4 rounded-t-lg">
    <div className="my-16">
        <h2 className="text-2xl font-bold text-center mb-12">Project Development Phase</h2>
        {/* <p className="text-gray-600 text-center max-w-2xl mx-auto text-lg">Requirements for Top 10 Finalist Teams</p> */}
      
    <Card className="max-w-4xl mx-auto p-8 animate-slide-up">
      {/* Header */}
      
      
      {/* Content */}
      <div className="p-6">
        <div className="mb-6 flex items-start bg-blue-50 p-4 rounded-lg">
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Development Process</h3>
            <p className="text-gray-600 mt-1">
              Selected teams will receive expert mentorship and must conduct mandatory site visits to develop comprehensive projects.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {requirements.map((section, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="p-1 bg-green-500 rounded-md mr-3">
                 
                </div>
                <h4 className=" font-semibold text-gray-800">{section.title}</h4>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    {/* <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg> */}
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-6 bg-[#F58432]/10 border-l-4 border-[#F58432] p-4 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-[#F58432]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-[#F58432]">
                <span className="font-medium">Important:</span> All deliverables must be submitted by the specified deadline. Late submissions may result in point deductions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
    </div>
  );
};

export default ProjectDevelopmentPhase;