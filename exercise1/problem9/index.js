function isDisarium(number) {
  // Your code
  const numberStr = number.toString();
    let sum = 0;
  
    for (let i = 0; i < numberStr.length; i++) {
      const digit = parseInt(numberStr[i]);
     
      sum += Math.pow(digit, i + 1);
    }
  
    
    return sum === number;
  }


module.exports = isDisarium;
