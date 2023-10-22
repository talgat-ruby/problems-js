function longestTime(h, m, s) {
  const Seconds1 = h * 3600;
  const Seconds2 = m * 60;
  if (Seconds1 > Seconds2 && Seconds1 > s) {
    return h;
  } else if (Seconds2 > Seconds1 && Seconds2 > s) {
    return m;
  } else if (s > Seconds1 && s > Seconds2) {
    return s;
  } else {
    return s;
  }
}

module.exports = longestTime;