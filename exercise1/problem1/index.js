function numOfDigits(int) {
  if (int === 0) {
    return 1;
  }

  int = Math.abs(int); // Для отризательных

  let count = 0;
  while (int !== 0) {
    int = Math.floor(int / 10);
    count++;
  }

  return count;
}

export default numOfDigits;
