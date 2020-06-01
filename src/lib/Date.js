export function convertToDays(timestamp) {
  const newTimestamp = Date.now()
  const days = Math.floor(((newTimestamp - timestamp)) / 86400000)

  return days === 0 
    ? "Today" 
    : days === 1 
      ? `${days} day ago`
      : `${days} days ago`
}