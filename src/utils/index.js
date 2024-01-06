export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

export function randomDate(from, to) {
  return new Date(
    from.getTime() + Math.random() * (to.getTime() - from.getTime())
  )
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
