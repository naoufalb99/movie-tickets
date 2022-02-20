const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const days = ['Sunday', 'Monday', 'Thursday', 'Wednesday', 'Tuesday', 'Friday', 'Saturday']

export function formatMovieDate (timestamp) {
  const dateDay = new Date(timestamp)

  const dayOfMonth = dateDay.getDate()
  const dayName = days[dateDay.getDay()]
  const monthName = months[dateDay.getMonth()]

  return {
    dayOfMonth,
    dayName,
    monthName
  }
}
