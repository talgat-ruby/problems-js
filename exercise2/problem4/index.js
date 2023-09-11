function numInStr(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    // Use a regular expression to check if the string contains any numbers
    if (/\d/.test(str)) {
      result.push(str);
    }
  }

  return result;
}

module.exports = numInStr;
