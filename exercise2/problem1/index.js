function arrayOfMultiples(n, length) {
  const multiplesArray = [];

  for (let i = 1; i <= length; i++) {
    multiplesArray.push(n * i);
  }

  return multiplesArray;
}

export default arrayOfMultiples;
