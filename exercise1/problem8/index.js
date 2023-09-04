function longestTime(h, m, s) {
  const totalSeconds1 = h * 3600 + m * 60 + s;
  const totalSeconds2 = m * 60 + s;
  if (totalSeconds1 >= totalSeconds2 && totalSeconds1 >= s) {
    return h;
  } else if (totalSeconds2 >= totalSeconds1 && totalSeconds2 >= s) {
    return m;
  } else {
    return s;
  }
}

module.exports = longestTime;
