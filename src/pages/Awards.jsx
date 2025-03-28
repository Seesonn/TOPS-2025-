"use client"

import { useState } from "react"
import PageHeader from "../components/common/PageHeader"
import { Button } from "../ui/Button"
import { Link } from "react-router-dom"
import AwardCategory from "../components/awards/AwardCategory"
import AwardJudgingCriteria from "../components/awards/AwardJudgingCriteria"
import AwardPrizes from "../components/awards/AwardPrizes"
import AwardPastWinners from "../components/awards/AwardPastWinners"

const Awards = () => {
  const [activeTab, setActiveTab] = useState("categories")

  const tabs = [
    { id: "categories", label: "Award Categories" },
    { id: "criteria", label: "Judging Criteria" },
    { id: "prizes", label: "Prizes & Benefits" },
    { id: "winners", label: "Past Winners" },
  ]

  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Awards & Prizes"
        description="Recognizing excellence and innovation in tourism projects"
        backgroundImage="https://imgs.search.brave.com/Cfn9Z4fk2zUIbKFae0IKxRVemVafnAjyWCdFBVmaSD4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9saWRheXN0b25l/cGFsLmluL21lZGlh/L2ZpbGVzL0Jsb2dz/L05hdGlvbmFsU3lt/Ym9sc09mTmVwYWwv/bmVwYWwtbmF0aW9u/YWwtZmxvd2VyLnBu/Zw"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16 text-center animate-slide-up">
          <h2 className="section-title">Award Categories</h2>
          <p className="text-lg text-gray-700 mb-8">
            The Tourism Project Showcase – Koshi 2025 will recognize outstanding projects across multiple categories,
            with prizes totaling over NPR 300,000 and additional implementation support.
          </p>

          <div className="flex flex-wrap justify-center border-b border-gray-200 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-3 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "categories" && <AwardCategory />}
        {activeTab === "criteria" && <AwardJudgingCriteria />}
        {activeTab === "prizes" && <AwardPrizes />}
        {activeTab === "winners" && <AwardPastWinners />}

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Compete?</h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Register your team today and showcase your innovative tourism project at ToPS Koshi 2025 for a chance to win
            exciting prizes and implementation support.
          </p>
          <Button
            variant="primary"
            size="large"
            as={Link}
            to="/registration"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            }
          >
            Register Your Team
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Awards

