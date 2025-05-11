
const EventSummaryy = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/*Container */}
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-sm overflow-hidden transform perspective-1000">
          {/*Cover/Title */}
          <div className="relative bg-[#282560] py-10 px-8 border-b-8 border-[#F58432]">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#FFFFFF"
                  d="M42.8,-65.2C54.9,-56.3,63.7,-43.2,70.1,-28.7C76.5,-14.2,80.5,1.8,77.2,16.2C73.9,30.6,63.3,43.5,50.3,51.8C37.3,60.2,21.9,64,5.9,69.1C-10.1,74.2,-26.6,80.5,-39.3,75.9C-52,71.3,-60.8,55.8,-67.4,40.2C-74,24.6,-78.3,8.9,-76.7,-6.1C-75.1,-21.1,-67.6,-35.3,-56.6,-44.9C-45.6,-54.5,-31.1,-59.5,-17.3,-67.2C-3.5,-74.9,9.6,-85.3,23.4,-83.1C37.2,-80.9,51.7,-66.1,42.8,-65.2Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            {/*Title */}
            <div className="text-center relative z-10">
              <h2 className="text-3xl font-serif md:text-4xl font-bold text-white mb-2">Tourism Project Showcase</h2>
              <div className="text-[#26A7DF] text-xl md:text-2xl font-medium italic">Koshi 2025</div>
              <div className="mt-4 flex justify-center">
                <div className="w-16 h-1 bg-[#F58432]"></div>
              </div>
              <div className="mt-4 text-gray-300 text-sm">Organized by Alison Hospitality Pvt. Ltd.& Event Managed by Kafals</div>
            </div>
          </div>

          {/*Content */}
          <div className="relative">
           
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200"></div>

            
            <div className="py-10 px-8 md:px-16 bg-white">
             
              <div className="mb-8 text-center">
                <h3 className="text-[#282560] text-xl font-bold inline-block relative">
                  Event Summary
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#F58432]"></div>
                </h3>
              </div>

              {/* First Paragraph with Decorative Initial */}
              <div className="mb-6 text-gray-800 leading-relaxed">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#282560] first-letter:mr-2 first-letter:float-left">
                  <span className="font-semibold text-[#282560]">The "Tourism Project Showcase Koshi 2025"</span> is a
                  dynamic competition organized by
                  <span className="font-semibold"> Alison Hospitality Pvt. Ltd.</span>, aimed at fostering innovation
                  and development in the tourism sector of Nepal's Koshi Province. This event specifically targets
                  <span className="text-[#26A7DF] font-medium">
                    {" "}
                    undergraduate and postgraduate students of Civil Engineering and Architecture
                  </span>
                  , challenging them to conceptualize and design sustainable and innovative tourism projects.
                  Participants are tasked with exploring the region's diverse potential, ranging from cultural heritage
                  preservation to adventure and eco-tourism, and developing comprehensive project models.
                </p>
              </div>

              {/* Decorative Divider */}
              <div className="flex items-center justify-center my-8">
                <div className="w-16 h-0.5 bg-gray-200"></div>
                <div className="mx-4">
                  <svg className="w-6 h-6 text-[#F58432]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                  </svg>
                </div>
                <div className="w-16 h-0.5 bg-gray-200"></div>
              </div>

              {/* Second Paragraph */}
              <div className="text-gray-800 leading-relaxed">
                <p>
                  The competition unfolds in a <span className="font-semibold text-[#26A7DF]">multi-stage process</span>
                  , beginning with application submissions and virtual orientations, followed by concept paper
                  presentations and shortlisting. The top ten teams will then engage in intensive project development,
                  including site visits and the creation of detailed technical and visual presentations. The event
                  culminates in a <span className="font-semibold text-[#F58432]">final showcase</span> where these
                  projects are presented to a panel of experts from architecture, engineering, tourism, and finance,
                  with winners receiving cash prizes, certificates, and potential support for project implementation.
                </p>
              </div>

              {/* Key Points */}
              <div className="mt-10 p-6 bg-gray-50 border border-gray-100 rounded">
                <h4 className="text-center text-[#282560] font-semibold mb-4">Key Highlights</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="text-[#F58432] text-xl mr-2">•</div>
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">Target Participants:</span> Undergraduate and postgraduate students
                      of Civil Engineering and Architecture
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#F58432] text-xl mr-2">•</div>
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">Focus Area:</span> Tourism innovation in Nepal's Koshi Province
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#F58432] text-xl mr-2">•</div>
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">Project Scope:</span> Cultural heritage, adventure tourism,
                      eco-tourism
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#F58432] text-xl mr-2">•</div>
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">Rewards:</span> Cash prizes, certificates, implementation support
                    </div>
                  </div>
                </div>
              </div>

            
            </div>
          </div>

          {/*  Footer */}
          <div className="bg-[#282560] py-4 px-8 text-center">
            <div className="text-white text-sm">Tourism Project Showcase Koshi 2025</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventSummaryy