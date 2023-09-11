function mapping(arr) {
  return arr.reduce((result, lowercaseLetter) => {
    result[lowercaseLetter] = lowercaseLetter.toUpperCase();
    return result;
  }, {});
}

module.exports = mapping;
