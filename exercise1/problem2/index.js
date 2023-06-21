function intWithinBounds(num, lower, upper) {
  if (!Number.isInteger(num)) {
    return null;
  }

  return num > lower && num < upper;
}

module.exports = intWithinBounds;
