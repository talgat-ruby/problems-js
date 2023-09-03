function pentagonal(n) {
  if (n === 1) {
    return 1;
  } else {
    return 1 + 5 * (n - 1) * (n - 2) / 2;
  }
}

module.exports = pentagonal;
