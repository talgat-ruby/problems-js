function isDisarium(n) {
  var x = 0
  var arr = Array.from(" " + n)
  for (i = 1; i < arr.length; i++) {
      x += Math.pow(arr[i], i)
  }
  if (x >= n) {
      return true
  } else {
      return false
  }
}
console.log(isDisarium(75)) // false
console.log(isDisarium(135)) // true
console.log(isDisarium(544)) // false
console.log(isDisarium(518)) // true
console.log(isDisarium(8)) // true
console.log(isDisarium(466)) // false

module.exports = isDisarium;
