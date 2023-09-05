function removeABC(str) {
  if (/[abcABC]/.test(str)) { 
    return str.replace(/[abcABC]/g, ''); 
  } else {
    return null; 
  }
}
console.log(removeABC("This might be a bit hard")) // "This might e  it hrd"
console.log(removeABC("hello world!")) // null
console.log(removeABC("")) // null

module.exports = removeABC;
