function pentagonal(n) {
  if (n === 1) {
    return 1;
  }

  return (5 * Math.pow(n, 2) - 5 * n + 2) / 2;
}

export default pentagonal;
