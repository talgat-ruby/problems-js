function insertWhitespace(word) {
  // Your code
  return word.replace(/([A-Z])/g, ' $1')
}

module.exports = insertWhitespace;
