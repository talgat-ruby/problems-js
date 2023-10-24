function isDisarium(number) {
  const strNumber = String(number);
  let sum = 0;

  for (let i = 0; i < strNumber.length; i++) {
    const digit = parseInt(strNumber[i]);
    sum += Math.pow(digit, i + 1);
  }

  return sum === number;
}

export default isDisarium;
