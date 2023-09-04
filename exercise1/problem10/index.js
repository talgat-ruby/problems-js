function move(str) {
  var newString = '';
  for (var i = 0; i < str.length; i++) {
      if (96 < str.charCodeAt(i) && str.charCodeAt(i) < 123) {
          newString += String.fromCharCode(str.charCodeAt(i) + 1);
      }
   }
   return newString;
  }
console.log(move("hello")) // "ifmmp"
console.log(move("bye")) // "czf"
console.log(move("welcome")) // "xfmdpnf"

module.exports = move;
