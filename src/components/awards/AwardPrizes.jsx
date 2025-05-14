import { Card } from "../../ui/Card"

const AwardPrizes = () => {
  const prizes = [
    {
      place: "First Prize",
      cash: "NPR 100,000",
      color: "from-amber-500 to-amber-600",
      benefits: [
        "Cash prize of NPR 100,000",
        "Certificate",
        "Gift Hamper",
        
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-amber-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      place: "Second Prize",
      cash: "NPR 50,000",
      color: "from-gray-300 to-gray-400",
      benefits: [
        "Cash prize of NPR 50,000",
       "Certificate",
        "Gift Hamper",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      place: "Third Prize",
      cash: "NPR 25,000",
      color: "from-amber-700 to-amber-800",
      benefits: [
        "Cash prize of NPR 25,000",
        "Certificate",
        "Gift Hamper",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-amber-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
  ]

  // const specialAwards = [
  //   {
  //     name: "Sustainability Award",
  //     prize: "NPR 25,000",
  //     description:
  //       "Awarded to the project that best incorporates sustainable practices and environmental conservation.",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         className="h-8 w-8 text-green-600"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         stroke="currentColor"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth={2}
  //           d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "Community Impact Award",
  //     prize: "NPR 25,000",
  //     description: "Awarded to the project with the greatest potential to benefit local communities.",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         className="h-8 w-8 text-[#223F80]"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         stroke="currentColor"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth={2}
  //           d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "Digital Innovation Award",
  //     prize: "NPR 25,000",
  //     description: "Awarded to the project that best leverages technology to enhance the tourism experience.",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         className="h-8 w-8 text-purple-600"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         stroke="currentColor"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth={2}
  //           d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "People's Choice Award",
  //     prize: "NPR 25,000",
  //     description: "Voted by event attendees and online audience for their favorite project.",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         className="h-8 w-8 text-red-600"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         stroke="currentColor"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth={2}
  //           d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  //         />
  //       </svg>
  //     ),
  //   },
  // ]

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {prizes.map((prize, index) => (
          <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <Card className="h-full flex flex-col overflow-visible relative">
              <div className={`bg-gradient-to-r ${prize.color} text-white p-6 rounded-t-xl relative`}>
                <div className="absolute -top-6 -right-6 bg-white rounded-full p-2 shadow-lg">{prize.icon}</div>
                <h3 className="text-xl font-bold mb-1">{prize.place}</h3>
                <p className="text-2xl font-bold">{prize.cash}</p>
              </div>

              <div className="p-6 flex-grow">
                <h4 className="font-semibold mb-4">Benefits Include:</h4>
                <ul className="space-y-3">
                  {prize.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
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
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* <h3 className="text-2xl font-bold mb-6">Special Category Awards</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {specialAwards.map((award, index) => (
          <div key={index} className="animate-slide-right" style={{ animationDelay: `${index * 0.1}s` }}>
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  {award.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold">{award.name}</h4>
                  <p className="text-[#223F80] font-medium">{award.prize}</p>
                </div>
              </div>
              <p className="text-gray-700">{award.description}</p>
            </Card>
          </div>
        ))}
      </div> */}

      <div className="bg-blue-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Additional Benefits for All Finalists</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Networking Opportunities</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
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
                <span>Access to exclusive networking events with industry leaders</span>
              </li>
              <li className="flex items-start">
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
                <span>Introduction to potential investors and partners</span>
              </li>
              <li className="flex items-start">
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
                <span>Participation in post-event industry meetups</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Visibility & Recognition</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
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
                <span>Feature in the official event publication</span>
              </li>
              <li className="flex items-start">
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
                <span>Promotion through event social media channels</span>
              </li>
              <li className="flex items-start">
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
                <span>Certificate of recognition</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AwardPrizes

