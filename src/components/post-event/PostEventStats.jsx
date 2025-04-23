

import { useState, useEffect } from "react"

const PostEventStats = ({ year }) => {
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    participants: 0,
    sponsors: 0,
    themes: 0,
  })

  const stats = {
    2024: [
      { value: 42, label: "Projects", icon: "project" },
      { value: 300, label: "Participants", icon: "participants" },
      { value: 18, label: "Sponsors", icon: "sponsors" },
      { value: 11, label: "Themes", icon: "themes" },
    ],
    2023: [
      { value: 36, label: "Projects", icon: "project" },
      { value: 250, label: "Participants", icon: "participants" },
      { value: 15, label: "Sponsors", icon: "sponsors" },
      { value: 9, label: "Themes", icon: "themes" },
    ],
    2022: [
      { value: 28, label: "Projects", icon: "project" },
      { value: 200, label: "Participants", icon: "participants" },
      { value: 12, label: "Sponsors", icon: "sponsors" },
      { value: 8, label: "Themes", icon: "themes" },
    ],
  }

  useEffect(() => {
    // Reset animation when year changes
    setAnimatedStats({
      projects: 0,
      participants: 0,
      sponsors: 0,
      themes: 0,
    })

    // Animate stats counting up
    const interval = setInterval(() => {
      setAnimatedStats((prev) => {
        const currentStats = stats[year]
        const targetProjects = currentStats[0].value
        const targetParticipants = currentStats[1].value
        const targetSponsors = currentStats[2].value
        const targetThemes = currentStats[3].value

        const newProjects = Math.min(prev.projects + Math.ceil(targetProjects / 20), targetProjects)
        const newParticipants = Math.min(prev.participants + Math.ceil(targetParticipants / 20), targetParticipants)
        const newSponsors = Math.min(prev.sponsors + Math.ceil(targetSponsors / 20), targetSponsors)
        const newThemes = Math.min(prev.themes + Math.ceil(targetThemes / 20), targetThemes)

        const isComplete =
          newProjects === targetProjects &&
          newParticipants === targetParticipants &&
          newSponsors === targetSponsors &&
          newThemes === targetThemes

        if (isComplete) {
          clearInterval(interval)
        }

        return {
          projects: newProjects,
          participants: newParticipants,
          sponsors: newSponsors,
          themes: newThemes,
        }
      })
    }, 50)

    return () => clearInterval(interval)
  }, [year])

  const getIcon = (iconName) => {
    switch (iconName) {
      case "project":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        )
      case "participants":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        )
      case "sponsors":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )
      case "themes":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        )
      default:
        return null
    }
  }

  const formatValue = (value, label) => {
    if (label === "Participants" && value >= 100) {
      return `${value}+`
    }
    return value
  }

  return (
    <div className="py-16 bg-gradient-to-r from-[#223F80] to-[#2783BC] text-white rounded-xl mb-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h3 className="text-2xl font-bold text-center mb-12">Event Statistics</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-slide-up">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
              {getIcon("project")}
            </div>
            <div className="text-4xl font-bold mb-2">{formatValue(animatedStats.projects, "Projects")}</div>
            <div className="text-blue-100">Projects</div>
          </div>

          <div className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
              {getIcon("participants")}
            </div>
            <div className="text-4xl font-bold mb-2">{formatValue(animatedStats.participants, "Participants")}</div>
            <div className="text-blue-100">Participants</div>
          </div>

          <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
              {getIcon("sponsors")}
            </div>
            <div className="text-4xl font-bold mb-2">{formatValue(animatedStats.sponsors, "Sponsors")}</div>
            <div className="text-blue-100">Sponsors</div>
          </div>

          <div className="text-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
              {getIcon("themes")}
            </div>
            <div className="text-4xl font-bold mb-2">{formatValue(animatedStats.themes, "Themes")}</div>
            <div className="text-blue-100">Themes</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-blue-100 max-w-2xl mx-auto">
            ToPS Koshi {year} brought together innovators, industry experts, and investors to showcase the future of
            tourism in Nepal.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostEventStats

