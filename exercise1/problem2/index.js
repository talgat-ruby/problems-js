function intWithinBounds(n, lower, upper) {
  if (!Number.isInteger(n)) {
    return false;
  }

  if (lower <= n && n <= upper) {
    return true;
  } else {
    return false;
  }
}
module.exports = intWithinBounds;
