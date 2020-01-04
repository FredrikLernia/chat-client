export const isSameDay = (d1, d2) => {
  d1 = new Date(d1)
  d2 = new Date(d2)
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
}

export const formatDate = compareDate => {
  let today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const date = today.getDate()
  today = new Date(year, month, date).getTime()

  const yesterday = new Date(year, month, date - 1).getTime()
  const twoDaysAgo = new Date(year, month, date - 2).getTime()

  let compareDay = new Date(compareDate)
  const compYear = compareDay.getFullYear()
  const compMonth = compareDay.getMonth()
  const compDate = compareDay.getDate()
  compareDay = new Date(compYear, compMonth, compDate).getTime()

  if (compareDay === today) {
    return 'idag'
  }
  if (compareDay === yesterday) {
    return 'igår'
  }
  if (compareDay === twoDaysAgo) {
    return 'i förrgår'
  }

  return new Date(compareDate).toLocaleDateString('sv-SE', { weekday: 'short', month: 'short', day: 'numeric' })
}

export const formatTime = date => new Date(date).toLocaleTimeString('sv-SE', { hour: 'numeric', minute: 'numeric' })