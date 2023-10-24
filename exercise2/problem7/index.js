function afterNYears(people, n) {
  const result = {};

  // Iterate through the object and update the ages
  for (const person in people) {
    result[person] = people[person] + Math.abs(n);
  }

  return result;
}

export default afterNYears;
