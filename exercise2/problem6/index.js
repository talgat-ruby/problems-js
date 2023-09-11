function mapping(arr) {
  return arr.reduce((result, lowercaseLetter) => {
    result[lowercaseLetter] = lowercaseLetter.toUpperCase();
    return result;
  }, {});
}
console.log(u(["p", "s"])) // { "p": "P", "s": "S" }
console.log(mapping(["a", "b", "c"])) // { "a": "A", "b": "B", "c": "C" }
console.log(mapping(["a", "v", "y", "z"])) // { "a": "A", "v": "V", "y": "Y", "z": "Z" }

module.exports = mapping;
