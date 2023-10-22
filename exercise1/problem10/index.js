function move(str) {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const code = char.charCodeAt(0) + 1;
    const nextChar = String.fromCharCode(code > (char >= 'a' ? 122 : 90) ? (char >= 'a' ? 97 : 65) : code);
    return nextChar;
  });
}

module.exports = move;