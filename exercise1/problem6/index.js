function insertWhitespace(string) {
  string = string.replace(/([a-z])([A-Z])/g, '$1 $2');
  string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
  return string;
}
console.log(insertWhitespace("SheWalksToTheBeach")) // "She Walks To The Beach"
console.log(insertWhitespace("MarvinTalksTooMuch")) // "Marvin Talks Too Much"
console.log(insertWhitespace("TheGreatestUpsetInHistory")) // "The Greatest Upset In History"

module.exports = insertWhitespace;
