function makeTitleCase(str) {
  var array1 = str.split(' ');
  var newarray1 = [];

  for (var x = 0; x < array1.length; x++) {
      newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(makeTitleCase("This is a title")) // "This Is A Title"
console.log(makeTitleCase("capitalize every word")) // "Capitalize Every Word"
console.log(makeTitleCase("I Like Pizza")) // "I Like Pizza"
console.log(makeTitleCase("PIZZA PIZZA PIZZA")) // "PIZZA PIZZA PIZZA"

module.exports = makeTitleCase;
