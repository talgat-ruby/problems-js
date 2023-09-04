function move() {
  // Your code
  let result = '';

for (let i = 0; i < input.length; i++) {
  const char = input.charAt(i);
  if (char >= 'a' && char < 'z') {
   
    result += String.fromCharCode(char.charCodeAt(0) + 1);
  } else if (char === 'z') {
   
    result += 'a';
  } else if (char >= 'A' && char < 'Z') {
  
    result += String.fromCharCode(char.charCodeAt(0) + 1);
  } else if (char === 'Z') {

    result += 'A';
  } else {
    
    result += char;
  }

}
return result;

}

module.exports = move;
