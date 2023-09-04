function intWithinBounds(number, lower, upper) {
  return Number.isInteger(number) && number >= lower && number < upper;
  
}

module.exports = intWithinBounds;
