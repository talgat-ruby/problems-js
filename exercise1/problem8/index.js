function longestTime(h, m, s) {
  const seconds = h * 3600 + m * 60 + s;

  if (seconds >= m * 60 + s && seconds >= h * 3600) {
    return s;
  } else if (m * 60 + s >= h * 3600) {
    return m * 60 + s;
  } else {
    return h * 3600;
  }
}

module.exports = longestTime;
