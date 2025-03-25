

import { useState, useEffect } from "react"

export const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timeComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    timeComponents.push(
      <div key={interval} className="flex flex-col items-center">
        <div className="text-3xl md:text-4xl font-bold">{timeLeft[interval]}</div>
        <div className="text-sm uppercase">{interval}</div>
      </div>,
    )
  })

  return (
    <div className="glass-effect rounded-xl p-6 border border-white/20">
      <h3 className="text-center text-lg font-semibold mb-4 text-white">Event Starts In</h3>
      <div className="grid grid-cols-4 gap-6 text-center text-white">
        {timeComponents.length ? timeComponents : <div className="col-span-4 text-xl">Event has started!</div>}
      </div>
    </div>
  )
}

