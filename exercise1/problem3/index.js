function pentagonal(n) {
  if (n === 1) {
    return 1;
  }

  return (5 * Math.pow(n, 2) - 5 * n + 2) / 2;
}
console.log(pentagonal(1)) // 1
console.log(pentagonal(2)) // 6
console.log(pentagonal(3)) // 16
console.log(pentagonal(8)) // 141

module.exports = pentagonal;
