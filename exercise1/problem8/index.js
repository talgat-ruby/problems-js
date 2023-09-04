function longestTime(h, m, s) {
  // Your code
  const hs = h * 3600;
  const ms = m * 60;
  
  if (hs>= ms && hs >= s) {
    return h;
   } else if (ms >= hs && ms >= s) {
     return m;
   } else {
     return s;
   }
  
}

module.exports = longestTime;
