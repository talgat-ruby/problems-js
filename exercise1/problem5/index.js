function removeABC(str) {
  // Your code
  if (typeof str !== 'string') {
        return null; 
      }
    
      
      const modifiedStr = str.replace(/[abcABC]/g, '');
    
      
      if (modifiedStr === str) {
        return null; 
      }
    
      return modifiedStr;
}

module.exports = removeABC;
