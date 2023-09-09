function insertWhitespace(inputString) {
  return inputString.replace(/([a-z])([A-Z])/g, '$1 $2');
}
module.exports = insertWhitespace;
