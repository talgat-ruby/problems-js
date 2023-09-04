function longestTime(h, m, s) {
  h *= 3600
  m *= 60
  let x = Math.max(h, m, s)
  if (x == h) {
      x = h / 3600
  } else if (x == m) {
      x = m / 60
  }
  return x
}
console.log(longestTime(1, 59, 3598)) // 1
console.log(longestTime(2, 300, 15000)) // 300
console.log(longestTime(12, 955, 59400)) // 59400
module.exports = longestTime;
