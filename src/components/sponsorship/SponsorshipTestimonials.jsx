import { Card } from "../../ui/Card"

const SponsorshipTestimonials = () => {
  const sponsorCategories = [
    {
      title: "Promoted By",
      description: "Our primary sponsors who make this event possible",
      sponsors: [
        {
          name: "Visit",
          logo: "https://tops.alison.com.np/uploads/sponsor_logo_1744967144.webp",
          website: "https://bishowchauhan.com.np",
        },
        
      ],
    },
    {
      title: "Event Partner",
      description: "Key partners supporting the event organization",
      sponsors: [
        {
          name: "Kafals",
          logo: "https://tops.alison.com.np/uploads/sponsor_logo_1744967197.webp",
          website: "https://kafals.com.np",
        },
       
      ],
    },
    {
      title: "Hospitality Partner",
      description: "Partners providing exceptional hospitality services",
      sponsors: [
        {
          name: "Hotel G Ramayana",
          logo: "https://tops.alison.com.np/uploads/sponsor_logo_1744968283.webp",
          website: "https://bishowchauhan.com.np",
        },
       
      ],
    },
    {
      title: "Technical Supporter",
      description: "Partners providing technical expertise and solutions",
      sponsors: [
        {
            name: "NEA",
            logo: "https://tops.alison.com.np/uploads/sponsor_logo_1744968337.webp",
            website: "https://member.neanepal.org.np",
          },
          {
            name: "FCAN ",
            logo: "https://tops.alison.com.np/uploads/sponsor_logo_1744969638.webp",
            website: "https://fcan.org.np",
          },
          {
            name: "SCAEF",
            logo: "https://tops.alison.com.np/uploads/sponsor_logo_1744970103.webp",
            website: "https://scaef.org.np",
          },
      ],
    },
    {
      title: "Marketing Partner",
      description: "Partners helping promote and market the event",
      sponsors: [
        {
          name: "Whiteline Media PVT.LTD",
          logo: "https://tops.alison.com.np/uploads/sponsor_logo_1744969514.webp",
          website: "https://sisanbhattarai.com.np",
        },

      ],
    },
  ]

  return (
    <section className="py-20  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our Partners</h2>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            We are proud to collaborate with industry leaders who share our vision and help make this event exceptional
          </p>
        </div>

        {/* Categories Container */}
        <div className="space-y-20">
          {sponsorCategories.map((category, index) => (
            <div key={index} className="mb-8">
              {/* Category Header */}
              <div className="text-center mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-3">{category.title}</h3>
                <div className="h-0.5 w-16 bg-gray-200 mx-auto mb-4 rounded-full"></div>
                <p className="max-w-2xl mx-auto text-gray-600 mb-8">{category.description}</p>
              </div>

              {/* Sponsors Grid */}
              <div className="flex flex-wrap justify-center gap-8">
                {category.sponsors.map((sponsor, idx) => (
                  <a
                    key={idx}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center"
                  >
                    <Card className="w-64 h-40 flex items-center justify-center p-6 transition-all duration-300 group-hover:-translate-y-1">
                      <img
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={`${sponsor.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </Card>
                    <p className="mt-3 text-sm font-medium text-gray-700 text-center transition-colors duration-300 group-hover:text-slate-900">
                      {sponsor.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SponsorshipTestimonials
