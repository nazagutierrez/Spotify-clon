import React from 'react'

const Greeting = () => {
  const todayHour = new Date("2023-11-1 20:00").getHours()
  let message: string;

  if (todayHour <= 12 && todayHour > 5) {
    message = "Good morning"
  } else if (todayHour < 20 && todayHour > 12) {
    message = "Good evening"
  } else {
    message = "Good night"
  }

  return (
    <div>{message}</div>
  )
}

export default Greeting